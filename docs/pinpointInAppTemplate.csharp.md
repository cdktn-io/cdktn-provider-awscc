# `pinpointInAppTemplate` Submodule <a name="`pinpointInAppTemplate` Submodule" id="@cdktn/provider-awscc.pinpointInAppTemplate"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PinpointInAppTemplate <a name="PinpointInAppTemplate" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pinpoint_in_app_template awscc_pinpoint_in_app_template}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new PinpointInAppTemplate(Construct Scope, string Id, PinpointInAppTemplateConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateConfig">PinpointInAppTemplateConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateConfig">PinpointInAppTemplateConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.putContent">PutContent</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.resetContent">ResetContent</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.resetCustomConfig">ResetCustomConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.resetLayout">ResetLayout</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.resetTemplateDescription">ResetTemplateDescription</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutContent` <a name="PutContent" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.putContent"></a>

```csharp
private void PutContent(IResolvable|PinpointInAppTemplateContent[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.putContent.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContent">PinpointInAppTemplateContent</a>[]

---

##### `ResetContent` <a name="ResetContent" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.resetContent"></a>

```csharp
private void ResetContent()
```

##### `ResetCustomConfig` <a name="ResetCustomConfig" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.resetCustomConfig"></a>

```csharp
private void ResetCustomConfig()
```

##### `ResetLayout` <a name="ResetLayout" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.resetLayout"></a>

```csharp
private void ResetLayout()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTemplateDescription` <a name="ResetTemplateDescription" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.resetTemplateDescription"></a>

```csharp
private void ResetTemplateDescription()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a PinpointInAppTemplate resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

PinpointInAppTemplate.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

PinpointInAppTemplate.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

PinpointInAppTemplate.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

PinpointInAppTemplate.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a PinpointInAppTemplate resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the PinpointInAppTemplate to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing PinpointInAppTemplate that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pinpoint_in_app_template#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the PinpointInAppTemplate to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.property.content">Content</a></code> | <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentList">PinpointInAppTemplateContentList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.property.contentInput">ContentInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContent">PinpointInAppTemplateContent</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.property.customConfigInput">CustomConfigInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.property.layoutInput">LayoutInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.property.tagsInput">TagsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.property.templateDescriptionInput">TemplateDescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.property.templateNameInput">TemplateNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.property.customConfig">CustomConfig</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.property.layout">Layout</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.property.tags">Tags</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.property.templateDescription">TemplateDescription</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.property.templateName">TemplateName</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `Content`<sup>Required</sup> <a name="Content" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.property.content"></a>

```csharp
public PinpointInAppTemplateContentList Content { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentList">PinpointInAppTemplateContentList</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `ContentInput`<sup>Optional</sup> <a name="ContentInput" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.property.contentInput"></a>

```csharp
public IResolvable|PinpointInAppTemplateContent[] ContentInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContent">PinpointInAppTemplateContent</a>[]

---

##### `CustomConfigInput`<sup>Optional</sup> <a name="CustomConfigInput" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.property.customConfigInput"></a>

```csharp
public string CustomConfigInput { get; }
```

- *Type:* string

---

##### `LayoutInput`<sup>Optional</sup> <a name="LayoutInput" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.property.layoutInput"></a>

```csharp
public string LayoutInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.property.tagsInput"></a>

```csharp
public string TagsInput { get; }
```

- *Type:* string

---

##### `TemplateDescriptionInput`<sup>Optional</sup> <a name="TemplateDescriptionInput" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.property.templateDescriptionInput"></a>

```csharp
public string TemplateDescriptionInput { get; }
```

- *Type:* string

---

##### `TemplateNameInput`<sup>Optional</sup> <a name="TemplateNameInput" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.property.templateNameInput"></a>

```csharp
public string TemplateNameInput { get; }
```

- *Type:* string

---

##### `CustomConfig`<sup>Required</sup> <a name="CustomConfig" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.property.customConfig"></a>

```csharp
public string CustomConfig { get; }
```

- *Type:* string

---

##### `Layout`<sup>Required</sup> <a name="Layout" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.property.layout"></a>

```csharp
public string Layout { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.property.tags"></a>

```csharp
public string Tags { get; }
```

- *Type:* string

---

##### `TemplateDescription`<sup>Required</sup> <a name="TemplateDescription" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.property.templateDescription"></a>

```csharp
public string TemplateDescription { get; }
```

- *Type:* string

---

##### `TemplateName`<sup>Required</sup> <a name="TemplateName" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.property.templateName"></a>

```csharp
public string TemplateName { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### PinpointInAppTemplateConfig <a name="PinpointInAppTemplateConfig" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new PinpointInAppTemplateConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string TemplateName,
    IResolvable|PinpointInAppTemplateContent[] Content = null,
    string CustomConfig = null,
    string Layout = null,
    string Tags = null,
    string TemplateDescription = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateConfig.property.templateName">TemplateName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pinpoint_in_app_template#template_name PinpointInAppTemplate#template_name}. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateConfig.property.content">Content</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContent">PinpointInAppTemplateContent</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pinpoint_in_app_template#content PinpointInAppTemplate#content}. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateConfig.property.customConfig">CustomConfig</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pinpoint_in_app_template#custom_config PinpointInAppTemplate#custom_config}. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateConfig.property.layout">Layout</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pinpoint_in_app_template#layout PinpointInAppTemplate#layout}. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateConfig.property.tags">Tags</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pinpoint_in_app_template#tags PinpointInAppTemplate#tags}. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateConfig.property.templateDescription">TemplateDescription</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pinpoint_in_app_template#template_description PinpointInAppTemplate#template_description}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `TemplateName`<sup>Required</sup> <a name="TemplateName" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateConfig.property.templateName"></a>

```csharp
public string TemplateName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pinpoint_in_app_template#template_name PinpointInAppTemplate#template_name}.

---

##### `Content`<sup>Optional</sup> <a name="Content" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateConfig.property.content"></a>

```csharp
public IResolvable|PinpointInAppTemplateContent[] Content { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContent">PinpointInAppTemplateContent</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pinpoint_in_app_template#content PinpointInAppTemplate#content}.

---

##### `CustomConfig`<sup>Optional</sup> <a name="CustomConfig" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateConfig.property.customConfig"></a>

```csharp
public string CustomConfig { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pinpoint_in_app_template#custom_config PinpointInAppTemplate#custom_config}.

---

##### `Layout`<sup>Optional</sup> <a name="Layout" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateConfig.property.layout"></a>

```csharp
public string Layout { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pinpoint_in_app_template#layout PinpointInAppTemplate#layout}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateConfig.property.tags"></a>

```csharp
public string Tags { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pinpoint_in_app_template#tags PinpointInAppTemplate#tags}.

---

##### `TemplateDescription`<sup>Optional</sup> <a name="TemplateDescription" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateConfig.property.templateDescription"></a>

```csharp
public string TemplateDescription { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pinpoint_in_app_template#template_description PinpointInAppTemplate#template_description}.

---

### PinpointInAppTemplateContent <a name="PinpointInAppTemplateContent" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContent"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContent.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new PinpointInAppTemplateContent {
    string BackgroundColor = null,
    PinpointInAppTemplateContentBodyConfig BodyConfig = null,
    PinpointInAppTemplateContentHeaderConfig HeaderConfig = null,
    string ImageUrl = null,
    PinpointInAppTemplateContentPrimaryBtn PrimaryBtn = null,
    PinpointInAppTemplateContentSecondaryBtn SecondaryBtn = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContent.property.backgroundColor">BackgroundColor</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pinpoint_in_app_template#background_color PinpointInAppTemplate#background_color}. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContent.property.bodyConfig">BodyConfig</a></code> | <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentBodyConfig">PinpointInAppTemplateContentBodyConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pinpoint_in_app_template#body_config PinpointInAppTemplate#body_config}. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContent.property.headerConfig">HeaderConfig</a></code> | <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentHeaderConfig">PinpointInAppTemplateContentHeaderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pinpoint_in_app_template#header_config PinpointInAppTemplate#header_config}. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContent.property.imageUrl">ImageUrl</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pinpoint_in_app_template#image_url PinpointInAppTemplate#image_url}. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContent.property.primaryBtn">PrimaryBtn</a></code> | <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtn">PinpointInAppTemplateContentPrimaryBtn</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pinpoint_in_app_template#primary_btn PinpointInAppTemplate#primary_btn}. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContent.property.secondaryBtn">SecondaryBtn</a></code> | <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtn">PinpointInAppTemplateContentSecondaryBtn</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pinpoint_in_app_template#secondary_btn PinpointInAppTemplate#secondary_btn}. |

---

##### `BackgroundColor`<sup>Optional</sup> <a name="BackgroundColor" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContent.property.backgroundColor"></a>

```csharp
public string BackgroundColor { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pinpoint_in_app_template#background_color PinpointInAppTemplate#background_color}.

---

##### `BodyConfig`<sup>Optional</sup> <a name="BodyConfig" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContent.property.bodyConfig"></a>

```csharp
public PinpointInAppTemplateContentBodyConfig BodyConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentBodyConfig">PinpointInAppTemplateContentBodyConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pinpoint_in_app_template#body_config PinpointInAppTemplate#body_config}.

---

##### `HeaderConfig`<sup>Optional</sup> <a name="HeaderConfig" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContent.property.headerConfig"></a>

```csharp
public PinpointInAppTemplateContentHeaderConfig HeaderConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentHeaderConfig">PinpointInAppTemplateContentHeaderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pinpoint_in_app_template#header_config PinpointInAppTemplate#header_config}.

---

##### `ImageUrl`<sup>Optional</sup> <a name="ImageUrl" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContent.property.imageUrl"></a>

```csharp
public string ImageUrl { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pinpoint_in_app_template#image_url PinpointInAppTemplate#image_url}.

---

##### `PrimaryBtn`<sup>Optional</sup> <a name="PrimaryBtn" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContent.property.primaryBtn"></a>

```csharp
public PinpointInAppTemplateContentPrimaryBtn PrimaryBtn { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtn">PinpointInAppTemplateContentPrimaryBtn</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pinpoint_in_app_template#primary_btn PinpointInAppTemplate#primary_btn}.

---

##### `SecondaryBtn`<sup>Optional</sup> <a name="SecondaryBtn" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContent.property.secondaryBtn"></a>

```csharp
public PinpointInAppTemplateContentSecondaryBtn SecondaryBtn { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtn">PinpointInAppTemplateContentSecondaryBtn</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pinpoint_in_app_template#secondary_btn PinpointInAppTemplate#secondary_btn}.

---

### PinpointInAppTemplateContentBodyConfig <a name="PinpointInAppTemplateContentBodyConfig" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentBodyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentBodyConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new PinpointInAppTemplateContentBodyConfig {
    string Alignment = null,
    string Body = null,
    string TextColor = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentBodyConfig.property.alignment">Alignment</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pinpoint_in_app_template#alignment PinpointInAppTemplate#alignment}. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentBodyConfig.property.body">Body</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pinpoint_in_app_template#body PinpointInAppTemplate#body}. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentBodyConfig.property.textColor">TextColor</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pinpoint_in_app_template#text_color PinpointInAppTemplate#text_color}. |

---

##### `Alignment`<sup>Optional</sup> <a name="Alignment" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentBodyConfig.property.alignment"></a>

```csharp
public string Alignment { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pinpoint_in_app_template#alignment PinpointInAppTemplate#alignment}.

---

##### `Body`<sup>Optional</sup> <a name="Body" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentBodyConfig.property.body"></a>

```csharp
public string Body { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pinpoint_in_app_template#body PinpointInAppTemplate#body}.

---

##### `TextColor`<sup>Optional</sup> <a name="TextColor" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentBodyConfig.property.textColor"></a>

```csharp
public string TextColor { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pinpoint_in_app_template#text_color PinpointInAppTemplate#text_color}.

---

### PinpointInAppTemplateContentHeaderConfig <a name="PinpointInAppTemplateContentHeaderConfig" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentHeaderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentHeaderConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new PinpointInAppTemplateContentHeaderConfig {
    string Alignment = null,
    string Header = null,
    string TextColor = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentHeaderConfig.property.alignment">Alignment</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pinpoint_in_app_template#alignment PinpointInAppTemplate#alignment}. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentHeaderConfig.property.header">Header</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pinpoint_in_app_template#header PinpointInAppTemplate#header}. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentHeaderConfig.property.textColor">TextColor</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pinpoint_in_app_template#text_color PinpointInAppTemplate#text_color}. |

---

##### `Alignment`<sup>Optional</sup> <a name="Alignment" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentHeaderConfig.property.alignment"></a>

```csharp
public string Alignment { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pinpoint_in_app_template#alignment PinpointInAppTemplate#alignment}.

---

##### `Header`<sup>Optional</sup> <a name="Header" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentHeaderConfig.property.header"></a>

```csharp
public string Header { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pinpoint_in_app_template#header PinpointInAppTemplate#header}.

---

##### `TextColor`<sup>Optional</sup> <a name="TextColor" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentHeaderConfig.property.textColor"></a>

```csharp
public string TextColor { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pinpoint_in_app_template#text_color PinpointInAppTemplate#text_color}.

---

### PinpointInAppTemplateContentPrimaryBtn <a name="PinpointInAppTemplateContentPrimaryBtn" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtn"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtn.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new PinpointInAppTemplateContentPrimaryBtn {
    PinpointInAppTemplateContentPrimaryBtnAndroid Android = null,
    PinpointInAppTemplateContentPrimaryBtnDefaultConfig DefaultConfig = null,
    PinpointInAppTemplateContentPrimaryBtnIos Ios = null,
    PinpointInAppTemplateContentPrimaryBtnWeb Web = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtn.property.android">Android</a></code> | <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnAndroid">PinpointInAppTemplateContentPrimaryBtnAndroid</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pinpoint_in_app_template#android PinpointInAppTemplate#android}. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtn.property.defaultConfig">DefaultConfig</a></code> | <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfig">PinpointInAppTemplateContentPrimaryBtnDefaultConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pinpoint_in_app_template#default_config PinpointInAppTemplate#default_config}. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtn.property.ios">Ios</a></code> | <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnIos">PinpointInAppTemplateContentPrimaryBtnIos</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pinpoint_in_app_template#ios PinpointInAppTemplate#ios}. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtn.property.web">Web</a></code> | <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnWeb">PinpointInAppTemplateContentPrimaryBtnWeb</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pinpoint_in_app_template#web PinpointInAppTemplate#web}. |

---

##### `Android`<sup>Optional</sup> <a name="Android" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtn.property.android"></a>

```csharp
public PinpointInAppTemplateContentPrimaryBtnAndroid Android { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnAndroid">PinpointInAppTemplateContentPrimaryBtnAndroid</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pinpoint_in_app_template#android PinpointInAppTemplate#android}.

---

##### `DefaultConfig`<sup>Optional</sup> <a name="DefaultConfig" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtn.property.defaultConfig"></a>

```csharp
public PinpointInAppTemplateContentPrimaryBtnDefaultConfig DefaultConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfig">PinpointInAppTemplateContentPrimaryBtnDefaultConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pinpoint_in_app_template#default_config PinpointInAppTemplate#default_config}.

---

##### `Ios`<sup>Optional</sup> <a name="Ios" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtn.property.ios"></a>

```csharp
public PinpointInAppTemplateContentPrimaryBtnIos Ios { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnIos">PinpointInAppTemplateContentPrimaryBtnIos</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pinpoint_in_app_template#ios PinpointInAppTemplate#ios}.

---

##### `Web`<sup>Optional</sup> <a name="Web" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtn.property.web"></a>

```csharp
public PinpointInAppTemplateContentPrimaryBtnWeb Web { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnWeb">PinpointInAppTemplateContentPrimaryBtnWeb</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pinpoint_in_app_template#web PinpointInAppTemplate#web}.

---

### PinpointInAppTemplateContentPrimaryBtnAndroid <a name="PinpointInAppTemplateContentPrimaryBtnAndroid" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnAndroid"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnAndroid.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new PinpointInAppTemplateContentPrimaryBtnAndroid {
    string ButtonAction = null,
    string Link = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnAndroid.property.buttonAction">ButtonAction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pinpoint_in_app_template#button_action PinpointInAppTemplate#button_action}. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnAndroid.property.link">Link</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pinpoint_in_app_template#link PinpointInAppTemplate#link}. |

---

##### `ButtonAction`<sup>Optional</sup> <a name="ButtonAction" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnAndroid.property.buttonAction"></a>

```csharp
public string ButtonAction { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pinpoint_in_app_template#button_action PinpointInAppTemplate#button_action}.

---

##### `Link`<sup>Optional</sup> <a name="Link" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnAndroid.property.link"></a>

```csharp
public string Link { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pinpoint_in_app_template#link PinpointInAppTemplate#link}.

---

### PinpointInAppTemplateContentPrimaryBtnDefaultConfig <a name="PinpointInAppTemplateContentPrimaryBtnDefaultConfig" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new PinpointInAppTemplateContentPrimaryBtnDefaultConfig {
    string BackgroundColor = null,
    double BorderRadius = null,
    string ButtonAction = null,
    string Link = null,
    string Text = null,
    string TextColor = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfig.property.backgroundColor">BackgroundColor</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pinpoint_in_app_template#background_color PinpointInAppTemplate#background_color}. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfig.property.borderRadius">BorderRadius</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pinpoint_in_app_template#border_radius PinpointInAppTemplate#border_radius}. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfig.property.buttonAction">ButtonAction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pinpoint_in_app_template#button_action PinpointInAppTemplate#button_action}. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfig.property.link">Link</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pinpoint_in_app_template#link PinpointInAppTemplate#link}. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfig.property.text">Text</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pinpoint_in_app_template#text PinpointInAppTemplate#text}. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfig.property.textColor">TextColor</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pinpoint_in_app_template#text_color PinpointInAppTemplate#text_color}. |

---

##### `BackgroundColor`<sup>Optional</sup> <a name="BackgroundColor" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfig.property.backgroundColor"></a>

```csharp
public string BackgroundColor { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pinpoint_in_app_template#background_color PinpointInAppTemplate#background_color}.

---

##### `BorderRadius`<sup>Optional</sup> <a name="BorderRadius" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfig.property.borderRadius"></a>

```csharp
public double BorderRadius { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pinpoint_in_app_template#border_radius PinpointInAppTemplate#border_radius}.

---

##### `ButtonAction`<sup>Optional</sup> <a name="ButtonAction" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfig.property.buttonAction"></a>

```csharp
public string ButtonAction { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pinpoint_in_app_template#button_action PinpointInAppTemplate#button_action}.

---

##### `Link`<sup>Optional</sup> <a name="Link" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfig.property.link"></a>

```csharp
public string Link { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pinpoint_in_app_template#link PinpointInAppTemplate#link}.

---

##### `Text`<sup>Optional</sup> <a name="Text" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfig.property.text"></a>

```csharp
public string Text { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pinpoint_in_app_template#text PinpointInAppTemplate#text}.

---

##### `TextColor`<sup>Optional</sup> <a name="TextColor" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfig.property.textColor"></a>

```csharp
public string TextColor { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pinpoint_in_app_template#text_color PinpointInAppTemplate#text_color}.

---

### PinpointInAppTemplateContentPrimaryBtnIos <a name="PinpointInAppTemplateContentPrimaryBtnIos" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnIos"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnIos.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new PinpointInAppTemplateContentPrimaryBtnIos {
    string ButtonAction = null,
    string Link = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnIos.property.buttonAction">ButtonAction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pinpoint_in_app_template#button_action PinpointInAppTemplate#button_action}. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnIos.property.link">Link</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pinpoint_in_app_template#link PinpointInAppTemplate#link}. |

---

##### `ButtonAction`<sup>Optional</sup> <a name="ButtonAction" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnIos.property.buttonAction"></a>

```csharp
public string ButtonAction { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pinpoint_in_app_template#button_action PinpointInAppTemplate#button_action}.

---

##### `Link`<sup>Optional</sup> <a name="Link" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnIos.property.link"></a>

```csharp
public string Link { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pinpoint_in_app_template#link PinpointInAppTemplate#link}.

---

### PinpointInAppTemplateContentPrimaryBtnWeb <a name="PinpointInAppTemplateContentPrimaryBtnWeb" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnWeb"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnWeb.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new PinpointInAppTemplateContentPrimaryBtnWeb {
    string ButtonAction = null,
    string Link = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnWeb.property.buttonAction">ButtonAction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pinpoint_in_app_template#button_action PinpointInAppTemplate#button_action}. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnWeb.property.link">Link</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pinpoint_in_app_template#link PinpointInAppTemplate#link}. |

---

##### `ButtonAction`<sup>Optional</sup> <a name="ButtonAction" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnWeb.property.buttonAction"></a>

```csharp
public string ButtonAction { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pinpoint_in_app_template#button_action PinpointInAppTemplate#button_action}.

---

##### `Link`<sup>Optional</sup> <a name="Link" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnWeb.property.link"></a>

```csharp
public string Link { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pinpoint_in_app_template#link PinpointInAppTemplate#link}.

---

### PinpointInAppTemplateContentSecondaryBtn <a name="PinpointInAppTemplateContentSecondaryBtn" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtn"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtn.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new PinpointInAppTemplateContentSecondaryBtn {
    PinpointInAppTemplateContentSecondaryBtnAndroid Android = null,
    PinpointInAppTemplateContentSecondaryBtnDefaultConfig DefaultConfig = null,
    PinpointInAppTemplateContentSecondaryBtnIos Ios = null,
    PinpointInAppTemplateContentSecondaryBtnWeb Web = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtn.property.android">Android</a></code> | <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnAndroid">PinpointInAppTemplateContentSecondaryBtnAndroid</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pinpoint_in_app_template#android PinpointInAppTemplate#android}. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtn.property.defaultConfig">DefaultConfig</a></code> | <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfig">PinpointInAppTemplateContentSecondaryBtnDefaultConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pinpoint_in_app_template#default_config PinpointInAppTemplate#default_config}. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtn.property.ios">Ios</a></code> | <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnIos">PinpointInAppTemplateContentSecondaryBtnIos</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pinpoint_in_app_template#ios PinpointInAppTemplate#ios}. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtn.property.web">Web</a></code> | <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnWeb">PinpointInAppTemplateContentSecondaryBtnWeb</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pinpoint_in_app_template#web PinpointInAppTemplate#web}. |

---

##### `Android`<sup>Optional</sup> <a name="Android" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtn.property.android"></a>

```csharp
public PinpointInAppTemplateContentSecondaryBtnAndroid Android { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnAndroid">PinpointInAppTemplateContentSecondaryBtnAndroid</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pinpoint_in_app_template#android PinpointInAppTemplate#android}.

---

##### `DefaultConfig`<sup>Optional</sup> <a name="DefaultConfig" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtn.property.defaultConfig"></a>

```csharp
public PinpointInAppTemplateContentSecondaryBtnDefaultConfig DefaultConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfig">PinpointInAppTemplateContentSecondaryBtnDefaultConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pinpoint_in_app_template#default_config PinpointInAppTemplate#default_config}.

---

##### `Ios`<sup>Optional</sup> <a name="Ios" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtn.property.ios"></a>

```csharp
public PinpointInAppTemplateContentSecondaryBtnIos Ios { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnIos">PinpointInAppTemplateContentSecondaryBtnIos</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pinpoint_in_app_template#ios PinpointInAppTemplate#ios}.

---

##### `Web`<sup>Optional</sup> <a name="Web" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtn.property.web"></a>

```csharp
public PinpointInAppTemplateContentSecondaryBtnWeb Web { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnWeb">PinpointInAppTemplateContentSecondaryBtnWeb</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pinpoint_in_app_template#web PinpointInAppTemplate#web}.

---

### PinpointInAppTemplateContentSecondaryBtnAndroid <a name="PinpointInAppTemplateContentSecondaryBtnAndroid" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnAndroid"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnAndroid.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new PinpointInAppTemplateContentSecondaryBtnAndroid {
    string ButtonAction = null,
    string Link = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnAndroid.property.buttonAction">ButtonAction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pinpoint_in_app_template#button_action PinpointInAppTemplate#button_action}. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnAndroid.property.link">Link</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pinpoint_in_app_template#link PinpointInAppTemplate#link}. |

---

##### `ButtonAction`<sup>Optional</sup> <a name="ButtonAction" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnAndroid.property.buttonAction"></a>

```csharp
public string ButtonAction { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pinpoint_in_app_template#button_action PinpointInAppTemplate#button_action}.

---

##### `Link`<sup>Optional</sup> <a name="Link" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnAndroid.property.link"></a>

```csharp
public string Link { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pinpoint_in_app_template#link PinpointInAppTemplate#link}.

---

### PinpointInAppTemplateContentSecondaryBtnDefaultConfig <a name="PinpointInAppTemplateContentSecondaryBtnDefaultConfig" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new PinpointInAppTemplateContentSecondaryBtnDefaultConfig {
    string BackgroundColor = null,
    double BorderRadius = null,
    string ButtonAction = null,
    string Link = null,
    string Text = null,
    string TextColor = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfig.property.backgroundColor">BackgroundColor</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pinpoint_in_app_template#background_color PinpointInAppTemplate#background_color}. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfig.property.borderRadius">BorderRadius</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pinpoint_in_app_template#border_radius PinpointInAppTemplate#border_radius}. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfig.property.buttonAction">ButtonAction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pinpoint_in_app_template#button_action PinpointInAppTemplate#button_action}. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfig.property.link">Link</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pinpoint_in_app_template#link PinpointInAppTemplate#link}. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfig.property.text">Text</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pinpoint_in_app_template#text PinpointInAppTemplate#text}. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfig.property.textColor">TextColor</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pinpoint_in_app_template#text_color PinpointInAppTemplate#text_color}. |

---

##### `BackgroundColor`<sup>Optional</sup> <a name="BackgroundColor" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfig.property.backgroundColor"></a>

```csharp
public string BackgroundColor { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pinpoint_in_app_template#background_color PinpointInAppTemplate#background_color}.

---

##### `BorderRadius`<sup>Optional</sup> <a name="BorderRadius" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfig.property.borderRadius"></a>

```csharp
public double BorderRadius { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pinpoint_in_app_template#border_radius PinpointInAppTemplate#border_radius}.

---

##### `ButtonAction`<sup>Optional</sup> <a name="ButtonAction" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfig.property.buttonAction"></a>

```csharp
public string ButtonAction { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pinpoint_in_app_template#button_action PinpointInAppTemplate#button_action}.

---

##### `Link`<sup>Optional</sup> <a name="Link" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfig.property.link"></a>

```csharp
public string Link { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pinpoint_in_app_template#link PinpointInAppTemplate#link}.

---

##### `Text`<sup>Optional</sup> <a name="Text" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfig.property.text"></a>

```csharp
public string Text { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pinpoint_in_app_template#text PinpointInAppTemplate#text}.

---

##### `TextColor`<sup>Optional</sup> <a name="TextColor" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfig.property.textColor"></a>

```csharp
public string TextColor { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pinpoint_in_app_template#text_color PinpointInAppTemplate#text_color}.

---

### PinpointInAppTemplateContentSecondaryBtnIos <a name="PinpointInAppTemplateContentSecondaryBtnIos" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnIos"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnIos.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new PinpointInAppTemplateContentSecondaryBtnIos {
    string ButtonAction = null,
    string Link = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnIos.property.buttonAction">ButtonAction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pinpoint_in_app_template#button_action PinpointInAppTemplate#button_action}. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnIos.property.link">Link</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pinpoint_in_app_template#link PinpointInAppTemplate#link}. |

---

##### `ButtonAction`<sup>Optional</sup> <a name="ButtonAction" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnIos.property.buttonAction"></a>

```csharp
public string ButtonAction { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pinpoint_in_app_template#button_action PinpointInAppTemplate#button_action}.

---

##### `Link`<sup>Optional</sup> <a name="Link" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnIos.property.link"></a>

```csharp
public string Link { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pinpoint_in_app_template#link PinpointInAppTemplate#link}.

---

### PinpointInAppTemplateContentSecondaryBtnWeb <a name="PinpointInAppTemplateContentSecondaryBtnWeb" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnWeb"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnWeb.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new PinpointInAppTemplateContentSecondaryBtnWeb {
    string ButtonAction = null,
    string Link = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnWeb.property.buttonAction">ButtonAction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pinpoint_in_app_template#button_action PinpointInAppTemplate#button_action}. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnWeb.property.link">Link</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pinpoint_in_app_template#link PinpointInAppTemplate#link}. |

---

##### `ButtonAction`<sup>Optional</sup> <a name="ButtonAction" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnWeb.property.buttonAction"></a>

```csharp
public string ButtonAction { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pinpoint_in_app_template#button_action PinpointInAppTemplate#button_action}.

---

##### `Link`<sup>Optional</sup> <a name="Link" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnWeb.property.link"></a>

```csharp
public string Link { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pinpoint_in_app_template#link PinpointInAppTemplate#link}.

---

## Classes <a name="Classes" id="Classes"></a>

### PinpointInAppTemplateContentBodyConfigOutputReference <a name="PinpointInAppTemplateContentBodyConfigOutputReference" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentBodyConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentBodyConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new PinpointInAppTemplateContentBodyConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentBodyConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentBodyConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentBodyConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentBodyConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentBodyConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentBodyConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentBodyConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentBodyConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentBodyConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentBodyConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentBodyConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentBodyConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentBodyConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentBodyConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentBodyConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentBodyConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentBodyConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentBodyConfigOutputReference.resetAlignment">ResetAlignment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentBodyConfigOutputReference.resetBody">ResetBody</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentBodyConfigOutputReference.resetTextColor">ResetTextColor</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentBodyConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentBodyConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentBodyConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentBodyConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentBodyConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentBodyConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentBodyConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentBodyConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentBodyConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentBodyConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentBodyConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentBodyConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentBodyConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentBodyConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentBodyConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentBodyConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentBodyConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentBodyConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentBodyConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentBodyConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentBodyConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentBodyConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentBodyConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentBodyConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAlignment` <a name="ResetAlignment" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentBodyConfigOutputReference.resetAlignment"></a>

```csharp
private void ResetAlignment()
```

##### `ResetBody` <a name="ResetBody" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentBodyConfigOutputReference.resetBody"></a>

```csharp
private void ResetBody()
```

##### `ResetTextColor` <a name="ResetTextColor" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentBodyConfigOutputReference.resetTextColor"></a>

```csharp
private void ResetTextColor()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentBodyConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentBodyConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentBodyConfigOutputReference.property.alignmentInput">AlignmentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentBodyConfigOutputReference.property.bodyInput">BodyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentBodyConfigOutputReference.property.textColorInput">TextColorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentBodyConfigOutputReference.property.alignment">Alignment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentBodyConfigOutputReference.property.body">Body</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentBodyConfigOutputReference.property.textColor">TextColor</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentBodyConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentBodyConfig">PinpointInAppTemplateContentBodyConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentBodyConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentBodyConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AlignmentInput`<sup>Optional</sup> <a name="AlignmentInput" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentBodyConfigOutputReference.property.alignmentInput"></a>

```csharp
public string AlignmentInput { get; }
```

- *Type:* string

---

##### `BodyInput`<sup>Optional</sup> <a name="BodyInput" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentBodyConfigOutputReference.property.bodyInput"></a>

```csharp
public string BodyInput { get; }
```

- *Type:* string

---

##### `TextColorInput`<sup>Optional</sup> <a name="TextColorInput" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentBodyConfigOutputReference.property.textColorInput"></a>

```csharp
public string TextColorInput { get; }
```

- *Type:* string

---

##### `Alignment`<sup>Required</sup> <a name="Alignment" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentBodyConfigOutputReference.property.alignment"></a>

```csharp
public string Alignment { get; }
```

- *Type:* string

---

##### `Body`<sup>Required</sup> <a name="Body" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentBodyConfigOutputReference.property.body"></a>

```csharp
public string Body { get; }
```

- *Type:* string

---

##### `TextColor`<sup>Required</sup> <a name="TextColor" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentBodyConfigOutputReference.property.textColor"></a>

```csharp
public string TextColor { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentBodyConfigOutputReference.property.internalValue"></a>

```csharp
public IResolvable|PinpointInAppTemplateContentBodyConfig InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentBodyConfig">PinpointInAppTemplateContentBodyConfig</a>

---


### PinpointInAppTemplateContentHeaderConfigOutputReference <a name="PinpointInAppTemplateContentHeaderConfigOutputReference" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentHeaderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentHeaderConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new PinpointInAppTemplateContentHeaderConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentHeaderConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentHeaderConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentHeaderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentHeaderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentHeaderConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentHeaderConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentHeaderConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentHeaderConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentHeaderConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentHeaderConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentHeaderConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentHeaderConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentHeaderConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentHeaderConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentHeaderConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentHeaderConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentHeaderConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentHeaderConfigOutputReference.resetAlignment">ResetAlignment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentHeaderConfigOutputReference.resetHeader">ResetHeader</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentHeaderConfigOutputReference.resetTextColor">ResetTextColor</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentHeaderConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentHeaderConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentHeaderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentHeaderConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentHeaderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentHeaderConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentHeaderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentHeaderConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentHeaderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentHeaderConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentHeaderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentHeaderConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentHeaderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentHeaderConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentHeaderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentHeaderConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentHeaderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentHeaderConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentHeaderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentHeaderConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentHeaderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentHeaderConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentHeaderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentHeaderConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAlignment` <a name="ResetAlignment" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentHeaderConfigOutputReference.resetAlignment"></a>

```csharp
private void ResetAlignment()
```

##### `ResetHeader` <a name="ResetHeader" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentHeaderConfigOutputReference.resetHeader"></a>

```csharp
private void ResetHeader()
```

##### `ResetTextColor` <a name="ResetTextColor" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentHeaderConfigOutputReference.resetTextColor"></a>

```csharp
private void ResetTextColor()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentHeaderConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentHeaderConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentHeaderConfigOutputReference.property.alignmentInput">AlignmentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentHeaderConfigOutputReference.property.headerInput">HeaderInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentHeaderConfigOutputReference.property.textColorInput">TextColorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentHeaderConfigOutputReference.property.alignment">Alignment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentHeaderConfigOutputReference.property.header">Header</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentHeaderConfigOutputReference.property.textColor">TextColor</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentHeaderConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentHeaderConfig">PinpointInAppTemplateContentHeaderConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentHeaderConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentHeaderConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AlignmentInput`<sup>Optional</sup> <a name="AlignmentInput" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentHeaderConfigOutputReference.property.alignmentInput"></a>

```csharp
public string AlignmentInput { get; }
```

- *Type:* string

---

##### `HeaderInput`<sup>Optional</sup> <a name="HeaderInput" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentHeaderConfigOutputReference.property.headerInput"></a>

```csharp
public string HeaderInput { get; }
```

- *Type:* string

---

##### `TextColorInput`<sup>Optional</sup> <a name="TextColorInput" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentHeaderConfigOutputReference.property.textColorInput"></a>

```csharp
public string TextColorInput { get; }
```

- *Type:* string

---

##### `Alignment`<sup>Required</sup> <a name="Alignment" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentHeaderConfigOutputReference.property.alignment"></a>

```csharp
public string Alignment { get; }
```

- *Type:* string

---

##### `Header`<sup>Required</sup> <a name="Header" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentHeaderConfigOutputReference.property.header"></a>

```csharp
public string Header { get; }
```

- *Type:* string

---

##### `TextColor`<sup>Required</sup> <a name="TextColor" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentHeaderConfigOutputReference.property.textColor"></a>

```csharp
public string TextColor { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentHeaderConfigOutputReference.property.internalValue"></a>

```csharp
public IResolvable|PinpointInAppTemplateContentHeaderConfig InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentHeaderConfig">PinpointInAppTemplateContentHeaderConfig</a>

---


### PinpointInAppTemplateContentList <a name="PinpointInAppTemplateContentList" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new PinpointInAppTemplateContentList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentList.get"></a>

```csharp
private PinpointInAppTemplateContentOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContent">PinpointInAppTemplateContent</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentList.property.internalValue"></a>

```csharp
public IResolvable|PinpointInAppTemplateContent[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContent">PinpointInAppTemplateContent</a>[]

---


### PinpointInAppTemplateContentOutputReference <a name="PinpointInAppTemplateContentOutputReference" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new PinpointInAppTemplateContentOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentOutputReference.putBodyConfig">PutBodyConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentOutputReference.putHeaderConfig">PutHeaderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentOutputReference.putPrimaryBtn">PutPrimaryBtn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentOutputReference.putSecondaryBtn">PutSecondaryBtn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentOutputReference.resetBackgroundColor">ResetBackgroundColor</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentOutputReference.resetBodyConfig">ResetBodyConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentOutputReference.resetHeaderConfig">ResetHeaderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentOutputReference.resetImageUrl">ResetImageUrl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentOutputReference.resetPrimaryBtn">ResetPrimaryBtn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentOutputReference.resetSecondaryBtn">ResetSecondaryBtn</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutBodyConfig` <a name="PutBodyConfig" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentOutputReference.putBodyConfig"></a>

```csharp
private void PutBodyConfig(PinpointInAppTemplateContentBodyConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentOutputReference.putBodyConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentBodyConfig">PinpointInAppTemplateContentBodyConfig</a>

---

##### `PutHeaderConfig` <a name="PutHeaderConfig" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentOutputReference.putHeaderConfig"></a>

```csharp
private void PutHeaderConfig(PinpointInAppTemplateContentHeaderConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentOutputReference.putHeaderConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentHeaderConfig">PinpointInAppTemplateContentHeaderConfig</a>

---

##### `PutPrimaryBtn` <a name="PutPrimaryBtn" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentOutputReference.putPrimaryBtn"></a>

```csharp
private void PutPrimaryBtn(PinpointInAppTemplateContentPrimaryBtn Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentOutputReference.putPrimaryBtn.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtn">PinpointInAppTemplateContentPrimaryBtn</a>

---

##### `PutSecondaryBtn` <a name="PutSecondaryBtn" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentOutputReference.putSecondaryBtn"></a>

```csharp
private void PutSecondaryBtn(PinpointInAppTemplateContentSecondaryBtn Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentOutputReference.putSecondaryBtn.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtn">PinpointInAppTemplateContentSecondaryBtn</a>

---

##### `ResetBackgroundColor` <a name="ResetBackgroundColor" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentOutputReference.resetBackgroundColor"></a>

```csharp
private void ResetBackgroundColor()
```

##### `ResetBodyConfig` <a name="ResetBodyConfig" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentOutputReference.resetBodyConfig"></a>

```csharp
private void ResetBodyConfig()
```

##### `ResetHeaderConfig` <a name="ResetHeaderConfig" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentOutputReference.resetHeaderConfig"></a>

```csharp
private void ResetHeaderConfig()
```

##### `ResetImageUrl` <a name="ResetImageUrl" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentOutputReference.resetImageUrl"></a>

```csharp
private void ResetImageUrl()
```

##### `ResetPrimaryBtn` <a name="ResetPrimaryBtn" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentOutputReference.resetPrimaryBtn"></a>

```csharp
private void ResetPrimaryBtn()
```

##### `ResetSecondaryBtn` <a name="ResetSecondaryBtn" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentOutputReference.resetSecondaryBtn"></a>

```csharp
private void ResetSecondaryBtn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentOutputReference.property.bodyConfig">BodyConfig</a></code> | <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentBodyConfigOutputReference">PinpointInAppTemplateContentBodyConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentOutputReference.property.headerConfig">HeaderConfig</a></code> | <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentHeaderConfigOutputReference">PinpointInAppTemplateContentHeaderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentOutputReference.property.primaryBtn">PrimaryBtn</a></code> | <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnOutputReference">PinpointInAppTemplateContentPrimaryBtnOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentOutputReference.property.secondaryBtn">SecondaryBtn</a></code> | <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnOutputReference">PinpointInAppTemplateContentSecondaryBtnOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentOutputReference.property.backgroundColorInput">BackgroundColorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentOutputReference.property.bodyConfigInput">BodyConfigInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentBodyConfig">PinpointInAppTemplateContentBodyConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentOutputReference.property.headerConfigInput">HeaderConfigInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentHeaderConfig">PinpointInAppTemplateContentHeaderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentOutputReference.property.imageUrlInput">ImageUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentOutputReference.property.primaryBtnInput">PrimaryBtnInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtn">PinpointInAppTemplateContentPrimaryBtn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentOutputReference.property.secondaryBtnInput">SecondaryBtnInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtn">PinpointInAppTemplateContentSecondaryBtn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentOutputReference.property.backgroundColor">BackgroundColor</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentOutputReference.property.imageUrl">ImageUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContent">PinpointInAppTemplateContent</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BodyConfig`<sup>Required</sup> <a name="BodyConfig" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentOutputReference.property.bodyConfig"></a>

```csharp
public PinpointInAppTemplateContentBodyConfigOutputReference BodyConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentBodyConfigOutputReference">PinpointInAppTemplateContentBodyConfigOutputReference</a>

---

##### `HeaderConfig`<sup>Required</sup> <a name="HeaderConfig" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentOutputReference.property.headerConfig"></a>

```csharp
public PinpointInAppTemplateContentHeaderConfigOutputReference HeaderConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentHeaderConfigOutputReference">PinpointInAppTemplateContentHeaderConfigOutputReference</a>

---

##### `PrimaryBtn`<sup>Required</sup> <a name="PrimaryBtn" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentOutputReference.property.primaryBtn"></a>

```csharp
public PinpointInAppTemplateContentPrimaryBtnOutputReference PrimaryBtn { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnOutputReference">PinpointInAppTemplateContentPrimaryBtnOutputReference</a>

---

##### `SecondaryBtn`<sup>Required</sup> <a name="SecondaryBtn" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentOutputReference.property.secondaryBtn"></a>

```csharp
public PinpointInAppTemplateContentSecondaryBtnOutputReference SecondaryBtn { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnOutputReference">PinpointInAppTemplateContentSecondaryBtnOutputReference</a>

---

##### `BackgroundColorInput`<sup>Optional</sup> <a name="BackgroundColorInput" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentOutputReference.property.backgroundColorInput"></a>

```csharp
public string BackgroundColorInput { get; }
```

- *Type:* string

---

##### `BodyConfigInput`<sup>Optional</sup> <a name="BodyConfigInput" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentOutputReference.property.bodyConfigInput"></a>

```csharp
public IResolvable|PinpointInAppTemplateContentBodyConfig BodyConfigInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentBodyConfig">PinpointInAppTemplateContentBodyConfig</a>

---

##### `HeaderConfigInput`<sup>Optional</sup> <a name="HeaderConfigInput" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentOutputReference.property.headerConfigInput"></a>

```csharp
public IResolvable|PinpointInAppTemplateContentHeaderConfig HeaderConfigInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentHeaderConfig">PinpointInAppTemplateContentHeaderConfig</a>

---

##### `ImageUrlInput`<sup>Optional</sup> <a name="ImageUrlInput" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentOutputReference.property.imageUrlInput"></a>

```csharp
public string ImageUrlInput { get; }
```

- *Type:* string

---

##### `PrimaryBtnInput`<sup>Optional</sup> <a name="PrimaryBtnInput" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentOutputReference.property.primaryBtnInput"></a>

```csharp
public IResolvable|PinpointInAppTemplateContentPrimaryBtn PrimaryBtnInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtn">PinpointInAppTemplateContentPrimaryBtn</a>

---

##### `SecondaryBtnInput`<sup>Optional</sup> <a name="SecondaryBtnInput" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentOutputReference.property.secondaryBtnInput"></a>

```csharp
public IResolvable|PinpointInAppTemplateContentSecondaryBtn SecondaryBtnInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtn">PinpointInAppTemplateContentSecondaryBtn</a>

---

##### `BackgroundColor`<sup>Required</sup> <a name="BackgroundColor" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentOutputReference.property.backgroundColor"></a>

```csharp
public string BackgroundColor { get; }
```

- *Type:* string

---

##### `ImageUrl`<sup>Required</sup> <a name="ImageUrl" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentOutputReference.property.imageUrl"></a>

```csharp
public string ImageUrl { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentOutputReference.property.internalValue"></a>

```csharp
public IResolvable|PinpointInAppTemplateContent InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContent">PinpointInAppTemplateContent</a>

---


### PinpointInAppTemplateContentPrimaryBtnAndroidOutputReference <a name="PinpointInAppTemplateContentPrimaryBtnAndroidOutputReference" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnAndroidOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnAndroidOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new PinpointInAppTemplateContentPrimaryBtnAndroidOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnAndroidOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnAndroidOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnAndroidOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnAndroidOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnAndroidOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnAndroidOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnAndroidOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnAndroidOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnAndroidOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnAndroidOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnAndroidOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnAndroidOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnAndroidOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnAndroidOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnAndroidOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnAndroidOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnAndroidOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnAndroidOutputReference.resetButtonAction">ResetButtonAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnAndroidOutputReference.resetLink">ResetLink</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnAndroidOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnAndroidOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnAndroidOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnAndroidOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnAndroidOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnAndroidOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnAndroidOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnAndroidOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnAndroidOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnAndroidOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnAndroidOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnAndroidOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnAndroidOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnAndroidOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnAndroidOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnAndroidOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnAndroidOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnAndroidOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnAndroidOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnAndroidOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnAndroidOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnAndroidOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnAndroidOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnAndroidOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetButtonAction` <a name="ResetButtonAction" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnAndroidOutputReference.resetButtonAction"></a>

```csharp
private void ResetButtonAction()
```

##### `ResetLink` <a name="ResetLink" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnAndroidOutputReference.resetLink"></a>

```csharp
private void ResetLink()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnAndroidOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnAndroidOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnAndroidOutputReference.property.buttonActionInput">ButtonActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnAndroidOutputReference.property.linkInput">LinkInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnAndroidOutputReference.property.buttonAction">ButtonAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnAndroidOutputReference.property.link">Link</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnAndroidOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnAndroid">PinpointInAppTemplateContentPrimaryBtnAndroid</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnAndroidOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnAndroidOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ButtonActionInput`<sup>Optional</sup> <a name="ButtonActionInput" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnAndroidOutputReference.property.buttonActionInput"></a>

```csharp
public string ButtonActionInput { get; }
```

- *Type:* string

---

##### `LinkInput`<sup>Optional</sup> <a name="LinkInput" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnAndroidOutputReference.property.linkInput"></a>

```csharp
public string LinkInput { get; }
```

- *Type:* string

---

##### `ButtonAction`<sup>Required</sup> <a name="ButtonAction" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnAndroidOutputReference.property.buttonAction"></a>

```csharp
public string ButtonAction { get; }
```

- *Type:* string

---

##### `Link`<sup>Required</sup> <a name="Link" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnAndroidOutputReference.property.link"></a>

```csharp
public string Link { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnAndroidOutputReference.property.internalValue"></a>

```csharp
public IResolvable|PinpointInAppTemplateContentPrimaryBtnAndroid InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnAndroid">PinpointInAppTemplateContentPrimaryBtnAndroid</a>

---


### PinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference <a name="PinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new PinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.resetBackgroundColor">ResetBackgroundColor</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.resetBorderRadius">ResetBorderRadius</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.resetButtonAction">ResetButtonAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.resetLink">ResetLink</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.resetText">ResetText</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.resetTextColor">ResetTextColor</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBackgroundColor` <a name="ResetBackgroundColor" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.resetBackgroundColor"></a>

```csharp
private void ResetBackgroundColor()
```

##### `ResetBorderRadius` <a name="ResetBorderRadius" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.resetBorderRadius"></a>

```csharp
private void ResetBorderRadius()
```

##### `ResetButtonAction` <a name="ResetButtonAction" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.resetButtonAction"></a>

```csharp
private void ResetButtonAction()
```

##### `ResetLink` <a name="ResetLink" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.resetLink"></a>

```csharp
private void ResetLink()
```

##### `ResetText` <a name="ResetText" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.resetText"></a>

```csharp
private void ResetText()
```

##### `ResetTextColor` <a name="ResetTextColor" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.resetTextColor"></a>

```csharp
private void ResetTextColor()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.property.backgroundColorInput">BackgroundColorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.property.borderRadiusInput">BorderRadiusInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.property.buttonActionInput">ButtonActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.property.linkInput">LinkInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.property.textColorInput">TextColorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.property.textInput">TextInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.property.backgroundColor">BackgroundColor</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.property.borderRadius">BorderRadius</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.property.buttonAction">ButtonAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.property.link">Link</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.property.text">Text</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.property.textColor">TextColor</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfig">PinpointInAppTemplateContentPrimaryBtnDefaultConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BackgroundColorInput`<sup>Optional</sup> <a name="BackgroundColorInput" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.property.backgroundColorInput"></a>

```csharp
public string BackgroundColorInput { get; }
```

- *Type:* string

---

##### `BorderRadiusInput`<sup>Optional</sup> <a name="BorderRadiusInput" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.property.borderRadiusInput"></a>

```csharp
public double BorderRadiusInput { get; }
```

- *Type:* double

---

##### `ButtonActionInput`<sup>Optional</sup> <a name="ButtonActionInput" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.property.buttonActionInput"></a>

```csharp
public string ButtonActionInput { get; }
```

- *Type:* string

---

##### `LinkInput`<sup>Optional</sup> <a name="LinkInput" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.property.linkInput"></a>

```csharp
public string LinkInput { get; }
```

- *Type:* string

---

##### `TextColorInput`<sup>Optional</sup> <a name="TextColorInput" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.property.textColorInput"></a>

```csharp
public string TextColorInput { get; }
```

- *Type:* string

---

##### `TextInput`<sup>Optional</sup> <a name="TextInput" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.property.textInput"></a>

```csharp
public string TextInput { get; }
```

- *Type:* string

---

##### `BackgroundColor`<sup>Required</sup> <a name="BackgroundColor" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.property.backgroundColor"></a>

```csharp
public string BackgroundColor { get; }
```

- *Type:* string

---

##### `BorderRadius`<sup>Required</sup> <a name="BorderRadius" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.property.borderRadius"></a>

```csharp
public double BorderRadius { get; }
```

- *Type:* double

---

##### `ButtonAction`<sup>Required</sup> <a name="ButtonAction" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.property.buttonAction"></a>

```csharp
public string ButtonAction { get; }
```

- *Type:* string

---

##### `Link`<sup>Required</sup> <a name="Link" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.property.link"></a>

```csharp
public string Link { get; }
```

- *Type:* string

---

##### `Text`<sup>Required</sup> <a name="Text" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.property.text"></a>

```csharp
public string Text { get; }
```

- *Type:* string

---

##### `TextColor`<sup>Required</sup> <a name="TextColor" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.property.textColor"></a>

```csharp
public string TextColor { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.property.internalValue"></a>

```csharp
public IResolvable|PinpointInAppTemplateContentPrimaryBtnDefaultConfig InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfig">PinpointInAppTemplateContentPrimaryBtnDefaultConfig</a>

---


### PinpointInAppTemplateContentPrimaryBtnIosOutputReference <a name="PinpointInAppTemplateContentPrimaryBtnIosOutputReference" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnIosOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnIosOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new PinpointInAppTemplateContentPrimaryBtnIosOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnIosOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnIosOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnIosOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnIosOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnIosOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnIosOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnIosOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnIosOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnIosOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnIosOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnIosOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnIosOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnIosOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnIosOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnIosOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnIosOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnIosOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnIosOutputReference.resetButtonAction">ResetButtonAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnIosOutputReference.resetLink">ResetLink</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnIosOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnIosOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnIosOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnIosOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnIosOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnIosOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnIosOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnIosOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnIosOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnIosOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnIosOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnIosOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnIosOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnIosOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnIosOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnIosOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnIosOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnIosOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnIosOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnIosOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnIosOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnIosOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnIosOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnIosOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetButtonAction` <a name="ResetButtonAction" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnIosOutputReference.resetButtonAction"></a>

```csharp
private void ResetButtonAction()
```

##### `ResetLink` <a name="ResetLink" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnIosOutputReference.resetLink"></a>

```csharp
private void ResetLink()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnIosOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnIosOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnIosOutputReference.property.buttonActionInput">ButtonActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnIosOutputReference.property.linkInput">LinkInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnIosOutputReference.property.buttonAction">ButtonAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnIosOutputReference.property.link">Link</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnIosOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnIos">PinpointInAppTemplateContentPrimaryBtnIos</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnIosOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnIosOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ButtonActionInput`<sup>Optional</sup> <a name="ButtonActionInput" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnIosOutputReference.property.buttonActionInput"></a>

```csharp
public string ButtonActionInput { get; }
```

- *Type:* string

---

##### `LinkInput`<sup>Optional</sup> <a name="LinkInput" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnIosOutputReference.property.linkInput"></a>

```csharp
public string LinkInput { get; }
```

- *Type:* string

---

##### `ButtonAction`<sup>Required</sup> <a name="ButtonAction" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnIosOutputReference.property.buttonAction"></a>

```csharp
public string ButtonAction { get; }
```

- *Type:* string

---

##### `Link`<sup>Required</sup> <a name="Link" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnIosOutputReference.property.link"></a>

```csharp
public string Link { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnIosOutputReference.property.internalValue"></a>

```csharp
public IResolvable|PinpointInAppTemplateContentPrimaryBtnIos InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnIos">PinpointInAppTemplateContentPrimaryBtnIos</a>

---


### PinpointInAppTemplateContentPrimaryBtnOutputReference <a name="PinpointInAppTemplateContentPrimaryBtnOutputReference" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new PinpointInAppTemplateContentPrimaryBtnOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnOutputReference.putAndroid">PutAndroid</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnOutputReference.putDefaultConfig">PutDefaultConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnOutputReference.putIos">PutIos</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnOutputReference.putWeb">PutWeb</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnOutputReference.resetAndroid">ResetAndroid</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnOutputReference.resetDefaultConfig">ResetDefaultConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnOutputReference.resetIos">ResetIos</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnOutputReference.resetWeb">ResetWeb</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAndroid` <a name="PutAndroid" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnOutputReference.putAndroid"></a>

```csharp
private void PutAndroid(PinpointInAppTemplateContentPrimaryBtnAndroid Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnOutputReference.putAndroid.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnAndroid">PinpointInAppTemplateContentPrimaryBtnAndroid</a>

---

##### `PutDefaultConfig` <a name="PutDefaultConfig" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnOutputReference.putDefaultConfig"></a>

```csharp
private void PutDefaultConfig(PinpointInAppTemplateContentPrimaryBtnDefaultConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnOutputReference.putDefaultConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfig">PinpointInAppTemplateContentPrimaryBtnDefaultConfig</a>

---

##### `PutIos` <a name="PutIos" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnOutputReference.putIos"></a>

```csharp
private void PutIos(PinpointInAppTemplateContentPrimaryBtnIos Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnOutputReference.putIos.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnIos">PinpointInAppTemplateContentPrimaryBtnIos</a>

---

##### `PutWeb` <a name="PutWeb" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnOutputReference.putWeb"></a>

```csharp
private void PutWeb(PinpointInAppTemplateContentPrimaryBtnWeb Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnOutputReference.putWeb.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnWeb">PinpointInAppTemplateContentPrimaryBtnWeb</a>

---

##### `ResetAndroid` <a name="ResetAndroid" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnOutputReference.resetAndroid"></a>

```csharp
private void ResetAndroid()
```

##### `ResetDefaultConfig` <a name="ResetDefaultConfig" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnOutputReference.resetDefaultConfig"></a>

```csharp
private void ResetDefaultConfig()
```

##### `ResetIos` <a name="ResetIos" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnOutputReference.resetIos"></a>

```csharp
private void ResetIos()
```

##### `ResetWeb` <a name="ResetWeb" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnOutputReference.resetWeb"></a>

```csharp
private void ResetWeb()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnOutputReference.property.android">Android</a></code> | <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnAndroidOutputReference">PinpointInAppTemplateContentPrimaryBtnAndroidOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnOutputReference.property.defaultConfig">DefaultConfig</a></code> | <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference">PinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnOutputReference.property.ios">Ios</a></code> | <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnIosOutputReference">PinpointInAppTemplateContentPrimaryBtnIosOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnOutputReference.property.web">Web</a></code> | <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnWebOutputReference">PinpointInAppTemplateContentPrimaryBtnWebOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnOutputReference.property.androidInput">AndroidInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnAndroid">PinpointInAppTemplateContentPrimaryBtnAndroid</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnOutputReference.property.defaultConfigInput">DefaultConfigInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfig">PinpointInAppTemplateContentPrimaryBtnDefaultConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnOutputReference.property.iosInput">IosInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnIos">PinpointInAppTemplateContentPrimaryBtnIos</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnOutputReference.property.webInput">WebInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnWeb">PinpointInAppTemplateContentPrimaryBtnWeb</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtn">PinpointInAppTemplateContentPrimaryBtn</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Android`<sup>Required</sup> <a name="Android" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnOutputReference.property.android"></a>

```csharp
public PinpointInAppTemplateContentPrimaryBtnAndroidOutputReference Android { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnAndroidOutputReference">PinpointInAppTemplateContentPrimaryBtnAndroidOutputReference</a>

---

##### `DefaultConfig`<sup>Required</sup> <a name="DefaultConfig" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnOutputReference.property.defaultConfig"></a>

```csharp
public PinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference DefaultConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference">PinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference</a>

---

##### `Ios`<sup>Required</sup> <a name="Ios" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnOutputReference.property.ios"></a>

```csharp
public PinpointInAppTemplateContentPrimaryBtnIosOutputReference Ios { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnIosOutputReference">PinpointInAppTemplateContentPrimaryBtnIosOutputReference</a>

---

##### `Web`<sup>Required</sup> <a name="Web" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnOutputReference.property.web"></a>

```csharp
public PinpointInAppTemplateContentPrimaryBtnWebOutputReference Web { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnWebOutputReference">PinpointInAppTemplateContentPrimaryBtnWebOutputReference</a>

---

##### `AndroidInput`<sup>Optional</sup> <a name="AndroidInput" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnOutputReference.property.androidInput"></a>

```csharp
public IResolvable|PinpointInAppTemplateContentPrimaryBtnAndroid AndroidInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnAndroid">PinpointInAppTemplateContentPrimaryBtnAndroid</a>

---

##### `DefaultConfigInput`<sup>Optional</sup> <a name="DefaultConfigInput" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnOutputReference.property.defaultConfigInput"></a>

```csharp
public IResolvable|PinpointInAppTemplateContentPrimaryBtnDefaultConfig DefaultConfigInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfig">PinpointInAppTemplateContentPrimaryBtnDefaultConfig</a>

---

##### `IosInput`<sup>Optional</sup> <a name="IosInput" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnOutputReference.property.iosInput"></a>

```csharp
public IResolvable|PinpointInAppTemplateContentPrimaryBtnIos IosInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnIos">PinpointInAppTemplateContentPrimaryBtnIos</a>

---

##### `WebInput`<sup>Optional</sup> <a name="WebInput" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnOutputReference.property.webInput"></a>

```csharp
public IResolvable|PinpointInAppTemplateContentPrimaryBtnWeb WebInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnWeb">PinpointInAppTemplateContentPrimaryBtnWeb</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnOutputReference.property.internalValue"></a>

```csharp
public IResolvable|PinpointInAppTemplateContentPrimaryBtn InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtn">PinpointInAppTemplateContentPrimaryBtn</a>

---


### PinpointInAppTemplateContentPrimaryBtnWebOutputReference <a name="PinpointInAppTemplateContentPrimaryBtnWebOutputReference" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnWebOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnWebOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new PinpointInAppTemplateContentPrimaryBtnWebOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnWebOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnWebOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnWebOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnWebOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnWebOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnWebOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnWebOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnWebOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnWebOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnWebOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnWebOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnWebOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnWebOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnWebOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnWebOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnWebOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnWebOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnWebOutputReference.resetButtonAction">ResetButtonAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnWebOutputReference.resetLink">ResetLink</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnWebOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnWebOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnWebOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnWebOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnWebOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnWebOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnWebOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnWebOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnWebOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnWebOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnWebOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnWebOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnWebOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnWebOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnWebOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnWebOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnWebOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnWebOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnWebOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnWebOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnWebOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnWebOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnWebOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnWebOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetButtonAction` <a name="ResetButtonAction" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnWebOutputReference.resetButtonAction"></a>

```csharp
private void ResetButtonAction()
```

##### `ResetLink` <a name="ResetLink" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnWebOutputReference.resetLink"></a>

```csharp
private void ResetLink()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnWebOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnWebOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnWebOutputReference.property.buttonActionInput">ButtonActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnWebOutputReference.property.linkInput">LinkInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnWebOutputReference.property.buttonAction">ButtonAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnWebOutputReference.property.link">Link</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnWebOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnWeb">PinpointInAppTemplateContentPrimaryBtnWeb</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnWebOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnWebOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ButtonActionInput`<sup>Optional</sup> <a name="ButtonActionInput" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnWebOutputReference.property.buttonActionInput"></a>

```csharp
public string ButtonActionInput { get; }
```

- *Type:* string

---

##### `LinkInput`<sup>Optional</sup> <a name="LinkInput" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnWebOutputReference.property.linkInput"></a>

```csharp
public string LinkInput { get; }
```

- *Type:* string

---

##### `ButtonAction`<sup>Required</sup> <a name="ButtonAction" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnWebOutputReference.property.buttonAction"></a>

```csharp
public string ButtonAction { get; }
```

- *Type:* string

---

##### `Link`<sup>Required</sup> <a name="Link" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnWebOutputReference.property.link"></a>

```csharp
public string Link { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnWebOutputReference.property.internalValue"></a>

```csharp
public IResolvable|PinpointInAppTemplateContentPrimaryBtnWeb InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnWeb">PinpointInAppTemplateContentPrimaryBtnWeb</a>

---


### PinpointInAppTemplateContentSecondaryBtnAndroidOutputReference <a name="PinpointInAppTemplateContentSecondaryBtnAndroidOutputReference" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnAndroidOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnAndroidOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new PinpointInAppTemplateContentSecondaryBtnAndroidOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnAndroidOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnAndroidOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnAndroidOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnAndroidOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnAndroidOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnAndroidOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnAndroidOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnAndroidOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnAndroidOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnAndroidOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnAndroidOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnAndroidOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnAndroidOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnAndroidOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnAndroidOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnAndroidOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnAndroidOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnAndroidOutputReference.resetButtonAction">ResetButtonAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnAndroidOutputReference.resetLink">ResetLink</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnAndroidOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnAndroidOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnAndroidOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnAndroidOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnAndroidOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnAndroidOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnAndroidOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnAndroidOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnAndroidOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnAndroidOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnAndroidOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnAndroidOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnAndroidOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnAndroidOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnAndroidOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnAndroidOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnAndroidOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnAndroidOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnAndroidOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnAndroidOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnAndroidOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnAndroidOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnAndroidOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnAndroidOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetButtonAction` <a name="ResetButtonAction" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnAndroidOutputReference.resetButtonAction"></a>

```csharp
private void ResetButtonAction()
```

##### `ResetLink` <a name="ResetLink" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnAndroidOutputReference.resetLink"></a>

```csharp
private void ResetLink()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnAndroidOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnAndroidOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnAndroidOutputReference.property.buttonActionInput">ButtonActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnAndroidOutputReference.property.linkInput">LinkInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnAndroidOutputReference.property.buttonAction">ButtonAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnAndroidOutputReference.property.link">Link</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnAndroidOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnAndroid">PinpointInAppTemplateContentSecondaryBtnAndroid</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnAndroidOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnAndroidOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ButtonActionInput`<sup>Optional</sup> <a name="ButtonActionInput" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnAndroidOutputReference.property.buttonActionInput"></a>

```csharp
public string ButtonActionInput { get; }
```

- *Type:* string

---

##### `LinkInput`<sup>Optional</sup> <a name="LinkInput" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnAndroidOutputReference.property.linkInput"></a>

```csharp
public string LinkInput { get; }
```

- *Type:* string

---

##### `ButtonAction`<sup>Required</sup> <a name="ButtonAction" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnAndroidOutputReference.property.buttonAction"></a>

```csharp
public string ButtonAction { get; }
```

- *Type:* string

---

##### `Link`<sup>Required</sup> <a name="Link" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnAndroidOutputReference.property.link"></a>

```csharp
public string Link { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnAndroidOutputReference.property.internalValue"></a>

```csharp
public IResolvable|PinpointInAppTemplateContentSecondaryBtnAndroid InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnAndroid">PinpointInAppTemplateContentSecondaryBtnAndroid</a>

---


### PinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference <a name="PinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new PinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.resetBackgroundColor">ResetBackgroundColor</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.resetBorderRadius">ResetBorderRadius</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.resetButtonAction">ResetButtonAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.resetLink">ResetLink</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.resetText">ResetText</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.resetTextColor">ResetTextColor</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBackgroundColor` <a name="ResetBackgroundColor" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.resetBackgroundColor"></a>

```csharp
private void ResetBackgroundColor()
```

##### `ResetBorderRadius` <a name="ResetBorderRadius" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.resetBorderRadius"></a>

```csharp
private void ResetBorderRadius()
```

##### `ResetButtonAction` <a name="ResetButtonAction" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.resetButtonAction"></a>

```csharp
private void ResetButtonAction()
```

##### `ResetLink` <a name="ResetLink" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.resetLink"></a>

```csharp
private void ResetLink()
```

##### `ResetText` <a name="ResetText" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.resetText"></a>

```csharp
private void ResetText()
```

##### `ResetTextColor` <a name="ResetTextColor" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.resetTextColor"></a>

```csharp
private void ResetTextColor()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.property.backgroundColorInput">BackgroundColorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.property.borderRadiusInput">BorderRadiusInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.property.buttonActionInput">ButtonActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.property.linkInput">LinkInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.property.textColorInput">TextColorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.property.textInput">TextInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.property.backgroundColor">BackgroundColor</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.property.borderRadius">BorderRadius</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.property.buttonAction">ButtonAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.property.link">Link</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.property.text">Text</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.property.textColor">TextColor</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfig">PinpointInAppTemplateContentSecondaryBtnDefaultConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BackgroundColorInput`<sup>Optional</sup> <a name="BackgroundColorInput" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.property.backgroundColorInput"></a>

```csharp
public string BackgroundColorInput { get; }
```

- *Type:* string

---

##### `BorderRadiusInput`<sup>Optional</sup> <a name="BorderRadiusInput" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.property.borderRadiusInput"></a>

```csharp
public double BorderRadiusInput { get; }
```

- *Type:* double

---

##### `ButtonActionInput`<sup>Optional</sup> <a name="ButtonActionInput" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.property.buttonActionInput"></a>

```csharp
public string ButtonActionInput { get; }
```

- *Type:* string

---

##### `LinkInput`<sup>Optional</sup> <a name="LinkInput" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.property.linkInput"></a>

```csharp
public string LinkInput { get; }
```

- *Type:* string

---

##### `TextColorInput`<sup>Optional</sup> <a name="TextColorInput" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.property.textColorInput"></a>

```csharp
public string TextColorInput { get; }
```

- *Type:* string

---

##### `TextInput`<sup>Optional</sup> <a name="TextInput" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.property.textInput"></a>

```csharp
public string TextInput { get; }
```

- *Type:* string

---

##### `BackgroundColor`<sup>Required</sup> <a name="BackgroundColor" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.property.backgroundColor"></a>

```csharp
public string BackgroundColor { get; }
```

- *Type:* string

---

##### `BorderRadius`<sup>Required</sup> <a name="BorderRadius" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.property.borderRadius"></a>

```csharp
public double BorderRadius { get; }
```

- *Type:* double

---

##### `ButtonAction`<sup>Required</sup> <a name="ButtonAction" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.property.buttonAction"></a>

```csharp
public string ButtonAction { get; }
```

- *Type:* string

---

##### `Link`<sup>Required</sup> <a name="Link" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.property.link"></a>

```csharp
public string Link { get; }
```

- *Type:* string

---

##### `Text`<sup>Required</sup> <a name="Text" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.property.text"></a>

```csharp
public string Text { get; }
```

- *Type:* string

---

##### `TextColor`<sup>Required</sup> <a name="TextColor" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.property.textColor"></a>

```csharp
public string TextColor { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.property.internalValue"></a>

```csharp
public IResolvable|PinpointInAppTemplateContentSecondaryBtnDefaultConfig InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfig">PinpointInAppTemplateContentSecondaryBtnDefaultConfig</a>

---


### PinpointInAppTemplateContentSecondaryBtnIosOutputReference <a name="PinpointInAppTemplateContentSecondaryBtnIosOutputReference" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnIosOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnIosOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new PinpointInAppTemplateContentSecondaryBtnIosOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnIosOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnIosOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnIosOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnIosOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnIosOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnIosOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnIosOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnIosOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnIosOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnIosOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnIosOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnIosOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnIosOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnIosOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnIosOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnIosOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnIosOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnIosOutputReference.resetButtonAction">ResetButtonAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnIosOutputReference.resetLink">ResetLink</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnIosOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnIosOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnIosOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnIosOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnIosOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnIosOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnIosOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnIosOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnIosOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnIosOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnIosOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnIosOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnIosOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnIosOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnIosOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnIosOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnIosOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnIosOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnIosOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnIosOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnIosOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnIosOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnIosOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnIosOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetButtonAction` <a name="ResetButtonAction" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnIosOutputReference.resetButtonAction"></a>

```csharp
private void ResetButtonAction()
```

##### `ResetLink` <a name="ResetLink" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnIosOutputReference.resetLink"></a>

```csharp
private void ResetLink()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnIosOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnIosOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnIosOutputReference.property.buttonActionInput">ButtonActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnIosOutputReference.property.linkInput">LinkInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnIosOutputReference.property.buttonAction">ButtonAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnIosOutputReference.property.link">Link</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnIosOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnIos">PinpointInAppTemplateContentSecondaryBtnIos</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnIosOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnIosOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ButtonActionInput`<sup>Optional</sup> <a name="ButtonActionInput" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnIosOutputReference.property.buttonActionInput"></a>

```csharp
public string ButtonActionInput { get; }
```

- *Type:* string

---

##### `LinkInput`<sup>Optional</sup> <a name="LinkInput" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnIosOutputReference.property.linkInput"></a>

```csharp
public string LinkInput { get; }
```

- *Type:* string

---

##### `ButtonAction`<sup>Required</sup> <a name="ButtonAction" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnIosOutputReference.property.buttonAction"></a>

```csharp
public string ButtonAction { get; }
```

- *Type:* string

---

##### `Link`<sup>Required</sup> <a name="Link" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnIosOutputReference.property.link"></a>

```csharp
public string Link { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnIosOutputReference.property.internalValue"></a>

```csharp
public IResolvable|PinpointInAppTemplateContentSecondaryBtnIos InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnIos">PinpointInAppTemplateContentSecondaryBtnIos</a>

---


### PinpointInAppTemplateContentSecondaryBtnOutputReference <a name="PinpointInAppTemplateContentSecondaryBtnOutputReference" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new PinpointInAppTemplateContentSecondaryBtnOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnOutputReference.putAndroid">PutAndroid</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnOutputReference.putDefaultConfig">PutDefaultConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnOutputReference.putIos">PutIos</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnOutputReference.putWeb">PutWeb</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnOutputReference.resetAndroid">ResetAndroid</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnOutputReference.resetDefaultConfig">ResetDefaultConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnOutputReference.resetIos">ResetIos</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnOutputReference.resetWeb">ResetWeb</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAndroid` <a name="PutAndroid" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnOutputReference.putAndroid"></a>

```csharp
private void PutAndroid(PinpointInAppTemplateContentSecondaryBtnAndroid Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnOutputReference.putAndroid.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnAndroid">PinpointInAppTemplateContentSecondaryBtnAndroid</a>

---

##### `PutDefaultConfig` <a name="PutDefaultConfig" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnOutputReference.putDefaultConfig"></a>

```csharp
private void PutDefaultConfig(PinpointInAppTemplateContentSecondaryBtnDefaultConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnOutputReference.putDefaultConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfig">PinpointInAppTemplateContentSecondaryBtnDefaultConfig</a>

---

##### `PutIos` <a name="PutIos" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnOutputReference.putIos"></a>

```csharp
private void PutIos(PinpointInAppTemplateContentSecondaryBtnIos Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnOutputReference.putIos.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnIos">PinpointInAppTemplateContentSecondaryBtnIos</a>

---

##### `PutWeb` <a name="PutWeb" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnOutputReference.putWeb"></a>

```csharp
private void PutWeb(PinpointInAppTemplateContentSecondaryBtnWeb Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnOutputReference.putWeb.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnWeb">PinpointInAppTemplateContentSecondaryBtnWeb</a>

---

##### `ResetAndroid` <a name="ResetAndroid" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnOutputReference.resetAndroid"></a>

```csharp
private void ResetAndroid()
```

##### `ResetDefaultConfig` <a name="ResetDefaultConfig" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnOutputReference.resetDefaultConfig"></a>

```csharp
private void ResetDefaultConfig()
```

##### `ResetIos` <a name="ResetIos" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnOutputReference.resetIos"></a>

```csharp
private void ResetIos()
```

##### `ResetWeb` <a name="ResetWeb" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnOutputReference.resetWeb"></a>

```csharp
private void ResetWeb()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnOutputReference.property.android">Android</a></code> | <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnAndroidOutputReference">PinpointInAppTemplateContentSecondaryBtnAndroidOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnOutputReference.property.defaultConfig">DefaultConfig</a></code> | <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference">PinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnOutputReference.property.ios">Ios</a></code> | <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnIosOutputReference">PinpointInAppTemplateContentSecondaryBtnIosOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnOutputReference.property.web">Web</a></code> | <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnWebOutputReference">PinpointInAppTemplateContentSecondaryBtnWebOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnOutputReference.property.androidInput">AndroidInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnAndroid">PinpointInAppTemplateContentSecondaryBtnAndroid</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnOutputReference.property.defaultConfigInput">DefaultConfigInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfig">PinpointInAppTemplateContentSecondaryBtnDefaultConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnOutputReference.property.iosInput">IosInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnIos">PinpointInAppTemplateContentSecondaryBtnIos</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnOutputReference.property.webInput">WebInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnWeb">PinpointInAppTemplateContentSecondaryBtnWeb</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtn">PinpointInAppTemplateContentSecondaryBtn</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Android`<sup>Required</sup> <a name="Android" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnOutputReference.property.android"></a>

```csharp
public PinpointInAppTemplateContentSecondaryBtnAndroidOutputReference Android { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnAndroidOutputReference">PinpointInAppTemplateContentSecondaryBtnAndroidOutputReference</a>

---

##### `DefaultConfig`<sup>Required</sup> <a name="DefaultConfig" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnOutputReference.property.defaultConfig"></a>

```csharp
public PinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference DefaultConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference">PinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference</a>

---

##### `Ios`<sup>Required</sup> <a name="Ios" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnOutputReference.property.ios"></a>

```csharp
public PinpointInAppTemplateContentSecondaryBtnIosOutputReference Ios { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnIosOutputReference">PinpointInAppTemplateContentSecondaryBtnIosOutputReference</a>

---

##### `Web`<sup>Required</sup> <a name="Web" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnOutputReference.property.web"></a>

```csharp
public PinpointInAppTemplateContentSecondaryBtnWebOutputReference Web { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnWebOutputReference">PinpointInAppTemplateContentSecondaryBtnWebOutputReference</a>

---

##### `AndroidInput`<sup>Optional</sup> <a name="AndroidInput" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnOutputReference.property.androidInput"></a>

```csharp
public IResolvable|PinpointInAppTemplateContentSecondaryBtnAndroid AndroidInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnAndroid">PinpointInAppTemplateContentSecondaryBtnAndroid</a>

---

##### `DefaultConfigInput`<sup>Optional</sup> <a name="DefaultConfigInput" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnOutputReference.property.defaultConfigInput"></a>

```csharp
public IResolvable|PinpointInAppTemplateContentSecondaryBtnDefaultConfig DefaultConfigInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfig">PinpointInAppTemplateContentSecondaryBtnDefaultConfig</a>

---

##### `IosInput`<sup>Optional</sup> <a name="IosInput" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnOutputReference.property.iosInput"></a>

```csharp
public IResolvable|PinpointInAppTemplateContentSecondaryBtnIos IosInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnIos">PinpointInAppTemplateContentSecondaryBtnIos</a>

---

##### `WebInput`<sup>Optional</sup> <a name="WebInput" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnOutputReference.property.webInput"></a>

```csharp
public IResolvable|PinpointInAppTemplateContentSecondaryBtnWeb WebInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnWeb">PinpointInAppTemplateContentSecondaryBtnWeb</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnOutputReference.property.internalValue"></a>

```csharp
public IResolvable|PinpointInAppTemplateContentSecondaryBtn InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtn">PinpointInAppTemplateContentSecondaryBtn</a>

---


### PinpointInAppTemplateContentSecondaryBtnWebOutputReference <a name="PinpointInAppTemplateContentSecondaryBtnWebOutputReference" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnWebOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnWebOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new PinpointInAppTemplateContentSecondaryBtnWebOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnWebOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnWebOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnWebOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnWebOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnWebOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnWebOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnWebOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnWebOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnWebOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnWebOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnWebOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnWebOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnWebOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnWebOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnWebOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnWebOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnWebOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnWebOutputReference.resetButtonAction">ResetButtonAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnWebOutputReference.resetLink">ResetLink</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnWebOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnWebOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnWebOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnWebOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnWebOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnWebOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnWebOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnWebOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnWebOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnWebOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnWebOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnWebOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnWebOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnWebOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnWebOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnWebOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnWebOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnWebOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnWebOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnWebOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnWebOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnWebOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnWebOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnWebOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetButtonAction` <a name="ResetButtonAction" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnWebOutputReference.resetButtonAction"></a>

```csharp
private void ResetButtonAction()
```

##### `ResetLink` <a name="ResetLink" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnWebOutputReference.resetLink"></a>

```csharp
private void ResetLink()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnWebOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnWebOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnWebOutputReference.property.buttonActionInput">ButtonActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnWebOutputReference.property.linkInput">LinkInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnWebOutputReference.property.buttonAction">ButtonAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnWebOutputReference.property.link">Link</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnWebOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnWeb">PinpointInAppTemplateContentSecondaryBtnWeb</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnWebOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnWebOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ButtonActionInput`<sup>Optional</sup> <a name="ButtonActionInput" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnWebOutputReference.property.buttonActionInput"></a>

```csharp
public string ButtonActionInput { get; }
```

- *Type:* string

---

##### `LinkInput`<sup>Optional</sup> <a name="LinkInput" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnWebOutputReference.property.linkInput"></a>

```csharp
public string LinkInput { get; }
```

- *Type:* string

---

##### `ButtonAction`<sup>Required</sup> <a name="ButtonAction" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnWebOutputReference.property.buttonAction"></a>

```csharp
public string ButtonAction { get; }
```

- *Type:* string

---

##### `Link`<sup>Required</sup> <a name="Link" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnWebOutputReference.property.link"></a>

```csharp
public string Link { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnWebOutputReference.property.internalValue"></a>

```csharp
public IResolvable|PinpointInAppTemplateContentSecondaryBtnWeb InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnWeb">PinpointInAppTemplateContentSecondaryBtnWeb</a>

---



