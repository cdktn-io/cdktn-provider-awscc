# `personalizeCampaign` Submodule <a name="`personalizeCampaign` Submodule" id="@cdktn/provider-awscc.personalizeCampaign"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PersonalizeCampaign <a name="PersonalizeCampaign" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/personalize_campaign awscc_personalize_campaign}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new PersonalizeCampaign(Construct Scope, string Id, PersonalizeCampaignConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignConfig">PersonalizeCampaignConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignConfig">PersonalizeCampaignConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.putCampaignConfig">PutCampaignConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.resetCampaignConfig">ResetCampaignConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.resetMinProvisionedTps">ResetMinProvisionedTps</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutCampaignConfig` <a name="PutCampaignConfig" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.putCampaignConfig"></a>

```csharp
private void PutCampaignConfig(PersonalizeCampaignCampaignConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.putCampaignConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignCampaignConfig">PersonalizeCampaignCampaignConfig</a>

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.putTags"></a>

```csharp
private void PutTags(IResolvable|PersonalizeCampaignTags[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.putTags.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignTags">PersonalizeCampaignTags</a>[]

---

##### `ResetCampaignConfig` <a name="ResetCampaignConfig" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.resetCampaignConfig"></a>

```csharp
private void ResetCampaignConfig()
```

##### `ResetMinProvisionedTps` <a name="ResetMinProvisionedTps" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.resetMinProvisionedTps"></a>

```csharp
private void ResetMinProvisionedTps()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.resetTags"></a>

```csharp
private void ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a PersonalizeCampaign resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

PersonalizeCampaign.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

PersonalizeCampaign.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

PersonalizeCampaign.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

PersonalizeCampaign.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a PersonalizeCampaign resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the PersonalizeCampaign to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing PersonalizeCampaign that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/personalize_campaign#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the PersonalizeCampaign to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.property.campaignArn">CampaignArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.property.campaignConfig">CampaignConfig</a></code> | <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignCampaignConfigOutputReference">PersonalizeCampaignCampaignConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.property.creationDateTime">CreationDateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.property.lastUpdatedDateTime">LastUpdatedDateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignTagsList">PersonalizeCampaignTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.property.campaignConfigInput">CampaignConfigInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignCampaignConfig">PersonalizeCampaignCampaignConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.property.minProvisionedTpsInput">MinProvisionedTpsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.property.solutionVersionArnInput">SolutionVersionArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.property.tagsInput">TagsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignTags">PersonalizeCampaignTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.property.minProvisionedTps">MinProvisionedTps</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.property.solutionVersionArn">SolutionVersionArn</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `CampaignArn`<sup>Required</sup> <a name="CampaignArn" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.property.campaignArn"></a>

```csharp
public string CampaignArn { get; }
```

- *Type:* string

---

##### `CampaignConfig`<sup>Required</sup> <a name="CampaignConfig" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.property.campaignConfig"></a>

```csharp
public PersonalizeCampaignCampaignConfigOutputReference CampaignConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignCampaignConfigOutputReference">PersonalizeCampaignCampaignConfigOutputReference</a>

---

##### `CreationDateTime`<sup>Required</sup> <a name="CreationDateTime" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.property.creationDateTime"></a>

```csharp
public string CreationDateTime { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `LastUpdatedDateTime`<sup>Required</sup> <a name="LastUpdatedDateTime" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.property.lastUpdatedDateTime"></a>

```csharp
public string LastUpdatedDateTime { get; }
```

- *Type:* string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.property.tags"></a>

```csharp
public PersonalizeCampaignTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignTagsList">PersonalizeCampaignTagsList</a>

---

##### `CampaignConfigInput`<sup>Optional</sup> <a name="CampaignConfigInput" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.property.campaignConfigInput"></a>

```csharp
public IResolvable|PersonalizeCampaignCampaignConfig CampaignConfigInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignCampaignConfig">PersonalizeCampaignCampaignConfig</a>

---

##### `MinProvisionedTpsInput`<sup>Optional</sup> <a name="MinProvisionedTpsInput" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.property.minProvisionedTpsInput"></a>

```csharp
public double MinProvisionedTpsInput { get; }
```

- *Type:* double

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `SolutionVersionArnInput`<sup>Optional</sup> <a name="SolutionVersionArnInput" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.property.solutionVersionArnInput"></a>

```csharp
public string SolutionVersionArnInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.property.tagsInput"></a>

```csharp
public IResolvable|PersonalizeCampaignTags[] TagsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignTags">PersonalizeCampaignTags</a>[]

---

##### `MinProvisionedTps`<sup>Required</sup> <a name="MinProvisionedTps" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.property.minProvisionedTps"></a>

```csharp
public double MinProvisionedTps { get; }
```

- *Type:* double

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `SolutionVersionArn`<sup>Required</sup> <a name="SolutionVersionArn" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.property.solutionVersionArn"></a>

```csharp
public string SolutionVersionArn { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### PersonalizeCampaignCampaignConfig <a name="PersonalizeCampaignCampaignConfig" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignCampaignConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignCampaignConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new PersonalizeCampaignCampaignConfig {
    bool|IResolvable EnableMetadataWithRecommendations = null,
    System.Collections.Generic.IDictionary<string, string> ItemExplorationConfig = null,
    System.Collections.Generic.IDictionary<string, double> RankingInfluence = null,
    bool|IResolvable SyncWithLatestSolutionVersion = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignCampaignConfig.property.enableMetadataWithRecommendations">EnableMetadataWithRecommendations</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Whether metadata with recommendations is enabled for the campaign. |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignCampaignConfig.property.itemExplorationConfig">ItemExplorationConfig</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Specifies the exploration configuration hyperparameters. |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignCampaignConfig.property.rankingInfluence">RankingInfluence</a></code> | <code>System.Collections.Generic.IDictionary<string, double></code> | A map of ranking influence values for POPULARITY and FRESHNESS. |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignCampaignConfig.property.syncWithLatestSolutionVersion">SyncWithLatestSolutionVersion</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Whether the campaign automatically updates to use the latest solution version. |

---

##### `EnableMetadataWithRecommendations`<sup>Optional</sup> <a name="EnableMetadataWithRecommendations" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignCampaignConfig.property.enableMetadataWithRecommendations"></a>

```csharp
public bool|IResolvable EnableMetadataWithRecommendations { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Whether metadata with recommendations is enabled for the campaign.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/personalize_campaign#enable_metadata_with_recommendations PersonalizeCampaign#enable_metadata_with_recommendations}

---

##### `ItemExplorationConfig`<sup>Optional</sup> <a name="ItemExplorationConfig" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignCampaignConfig.property.itemExplorationConfig"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> ItemExplorationConfig { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Specifies the exploration configuration hyperparameters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/personalize_campaign#item_exploration_config PersonalizeCampaign#item_exploration_config}

---

##### `RankingInfluence`<sup>Optional</sup> <a name="RankingInfluence" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignCampaignConfig.property.rankingInfluence"></a>

```csharp
public System.Collections.Generic.IDictionary<string, double> RankingInfluence { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, double>

A map of ranking influence values for POPULARITY and FRESHNESS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/personalize_campaign#ranking_influence PersonalizeCampaign#ranking_influence}

---

##### `SyncWithLatestSolutionVersion`<sup>Optional</sup> <a name="SyncWithLatestSolutionVersion" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignCampaignConfig.property.syncWithLatestSolutionVersion"></a>

```csharp
public bool|IResolvable SyncWithLatestSolutionVersion { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Whether the campaign automatically updates to use the latest solution version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/personalize_campaign#sync_with_latest_solution_version PersonalizeCampaign#sync_with_latest_solution_version}

---

### PersonalizeCampaignConfig <a name="PersonalizeCampaignConfig" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new PersonalizeCampaignConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Name,
    string SolutionVersionArn,
    PersonalizeCampaignCampaignConfig CampaignConfig = null,
    double MinProvisionedTps = null,
    IResolvable|PersonalizeCampaignTags[] Tags = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignConfig.property.name">Name</a></code> | <code>string</code> | The name of the campaign. |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignConfig.property.solutionVersionArn">SolutionVersionArn</a></code> | <code>string</code> | The ARN of the solution version to deploy. |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignConfig.property.campaignConfig">CampaignConfig</a></code> | <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignCampaignConfig">PersonalizeCampaignCampaignConfig</a></code> | The configuration details of a campaign. |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignConfig.property.minProvisionedTps">MinProvisionedTps</a></code> | <code>double</code> | Specifies the requested minimum provisioned transactions per second. |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignConfig.property.tags">Tags</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignTags">PersonalizeCampaignTags</a>[]</code> | Tags to associate with the campaign. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The name of the campaign.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/personalize_campaign#name PersonalizeCampaign#name}

---

##### `SolutionVersionArn`<sup>Required</sup> <a name="SolutionVersionArn" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignConfig.property.solutionVersionArn"></a>

```csharp
public string SolutionVersionArn { get; set; }
```

- *Type:* string

The ARN of the solution version to deploy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/personalize_campaign#solution_version_arn PersonalizeCampaign#solution_version_arn}

---

##### `CampaignConfig`<sup>Optional</sup> <a name="CampaignConfig" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignConfig.property.campaignConfig"></a>

```csharp
public PersonalizeCampaignCampaignConfig CampaignConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignCampaignConfig">PersonalizeCampaignCampaignConfig</a>

The configuration details of a campaign.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/personalize_campaign#campaign_config PersonalizeCampaign#campaign_config}

---

##### `MinProvisionedTps`<sup>Optional</sup> <a name="MinProvisionedTps" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignConfig.property.minProvisionedTps"></a>

```csharp
public double MinProvisionedTps { get; set; }
```

- *Type:* double

Specifies the requested minimum provisioned transactions per second.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/personalize_campaign#min_provisioned_tps PersonalizeCampaign#min_provisioned_tps}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignConfig.property.tags"></a>

```csharp
public IResolvable|PersonalizeCampaignTags[] Tags { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignTags">PersonalizeCampaignTags</a>[]

Tags to associate with the campaign.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/personalize_campaign#tags PersonalizeCampaign#tags}

---

### PersonalizeCampaignTags <a name="PersonalizeCampaignTags" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new PersonalizeCampaignTags {
    string Key = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignTags.property.key">Key</a></code> | <code>string</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignTags.property.value">Value</a></code> | <code>string</code> | The value for the tag. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignTags.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

The key name of the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/personalize_campaign#key PersonalizeCampaign#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignTags.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

The value for the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/personalize_campaign#value PersonalizeCampaign#value}

---

## Classes <a name="Classes" id="Classes"></a>

### PersonalizeCampaignCampaignConfigOutputReference <a name="PersonalizeCampaignCampaignConfigOutputReference" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignCampaignConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignCampaignConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new PersonalizeCampaignCampaignConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignCampaignConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignCampaignConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignCampaignConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignCampaignConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignCampaignConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignCampaignConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignCampaignConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignCampaignConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignCampaignConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignCampaignConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignCampaignConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignCampaignConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignCampaignConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignCampaignConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignCampaignConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignCampaignConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignCampaignConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignCampaignConfigOutputReference.resetEnableMetadataWithRecommendations">ResetEnableMetadataWithRecommendations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignCampaignConfigOutputReference.resetItemExplorationConfig">ResetItemExplorationConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignCampaignConfigOutputReference.resetRankingInfluence">ResetRankingInfluence</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignCampaignConfigOutputReference.resetSyncWithLatestSolutionVersion">ResetSyncWithLatestSolutionVersion</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignCampaignConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignCampaignConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignCampaignConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignCampaignConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignCampaignConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignCampaignConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignCampaignConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignCampaignConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignCampaignConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignCampaignConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignCampaignConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignCampaignConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignCampaignConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignCampaignConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignCampaignConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignCampaignConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignCampaignConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignCampaignConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignCampaignConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignCampaignConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignCampaignConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignCampaignConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignCampaignConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignCampaignConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEnableMetadataWithRecommendations` <a name="ResetEnableMetadataWithRecommendations" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignCampaignConfigOutputReference.resetEnableMetadataWithRecommendations"></a>

```csharp
private void ResetEnableMetadataWithRecommendations()
```

##### `ResetItemExplorationConfig` <a name="ResetItemExplorationConfig" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignCampaignConfigOutputReference.resetItemExplorationConfig"></a>

```csharp
private void ResetItemExplorationConfig()
```

##### `ResetRankingInfluence` <a name="ResetRankingInfluence" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignCampaignConfigOutputReference.resetRankingInfluence"></a>

```csharp
private void ResetRankingInfluence()
```

##### `ResetSyncWithLatestSolutionVersion` <a name="ResetSyncWithLatestSolutionVersion" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignCampaignConfigOutputReference.resetSyncWithLatestSolutionVersion"></a>

```csharp
private void ResetSyncWithLatestSolutionVersion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignCampaignConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignCampaignConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignCampaignConfigOutputReference.property.enableMetadataWithRecommendationsInput">EnableMetadataWithRecommendationsInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignCampaignConfigOutputReference.property.itemExplorationConfigInput">ItemExplorationConfigInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignCampaignConfigOutputReference.property.rankingInfluenceInput">RankingInfluenceInput</a></code> | <code>System.Collections.Generic.IDictionary<string, double></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignCampaignConfigOutputReference.property.syncWithLatestSolutionVersionInput">SyncWithLatestSolutionVersionInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignCampaignConfigOutputReference.property.enableMetadataWithRecommendations">EnableMetadataWithRecommendations</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignCampaignConfigOutputReference.property.itemExplorationConfig">ItemExplorationConfig</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignCampaignConfigOutputReference.property.rankingInfluence">RankingInfluence</a></code> | <code>System.Collections.Generic.IDictionary<string, double></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignCampaignConfigOutputReference.property.syncWithLatestSolutionVersion">SyncWithLatestSolutionVersion</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignCampaignConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignCampaignConfig">PersonalizeCampaignCampaignConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignCampaignConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignCampaignConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EnableMetadataWithRecommendationsInput`<sup>Optional</sup> <a name="EnableMetadataWithRecommendationsInput" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignCampaignConfigOutputReference.property.enableMetadataWithRecommendationsInput"></a>

```csharp
public bool|IResolvable EnableMetadataWithRecommendationsInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `ItemExplorationConfigInput`<sup>Optional</sup> <a name="ItemExplorationConfigInput" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignCampaignConfigOutputReference.property.itemExplorationConfigInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> ItemExplorationConfigInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `RankingInfluenceInput`<sup>Optional</sup> <a name="RankingInfluenceInput" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignCampaignConfigOutputReference.property.rankingInfluenceInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, double> RankingInfluenceInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, double>

---

##### `SyncWithLatestSolutionVersionInput`<sup>Optional</sup> <a name="SyncWithLatestSolutionVersionInput" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignCampaignConfigOutputReference.property.syncWithLatestSolutionVersionInput"></a>

```csharp
public bool|IResolvable SyncWithLatestSolutionVersionInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `EnableMetadataWithRecommendations`<sup>Required</sup> <a name="EnableMetadataWithRecommendations" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignCampaignConfigOutputReference.property.enableMetadataWithRecommendations"></a>

```csharp
public bool|IResolvable EnableMetadataWithRecommendations { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `ItemExplorationConfig`<sup>Required</sup> <a name="ItemExplorationConfig" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignCampaignConfigOutputReference.property.itemExplorationConfig"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> ItemExplorationConfig { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `RankingInfluence`<sup>Required</sup> <a name="RankingInfluence" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignCampaignConfigOutputReference.property.rankingInfluence"></a>

```csharp
public System.Collections.Generic.IDictionary<string, double> RankingInfluence { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, double>

---

##### `SyncWithLatestSolutionVersion`<sup>Required</sup> <a name="SyncWithLatestSolutionVersion" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignCampaignConfigOutputReference.property.syncWithLatestSolutionVersion"></a>

```csharp
public bool|IResolvable SyncWithLatestSolutionVersion { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignCampaignConfigOutputReference.property.internalValue"></a>

```csharp
public IResolvable|PersonalizeCampaignCampaignConfig InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignCampaignConfig">PersonalizeCampaignCampaignConfig</a>

---


### PersonalizeCampaignTagsList <a name="PersonalizeCampaignTagsList" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new PersonalizeCampaignTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignTagsList.get"></a>

```csharp
private PersonalizeCampaignTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignTagsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignTags">PersonalizeCampaignTags</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignTagsList.property.internalValue"></a>

```csharp
public IResolvable|PersonalizeCampaignTags[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignTags">PersonalizeCampaignTags</a>[]

---


### PersonalizeCampaignTagsOutputReference <a name="PersonalizeCampaignTagsOutputReference" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new PersonalizeCampaignTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignTagsOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignTagsOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignTags">PersonalizeCampaignTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignTagsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignTagsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignTagsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|PersonalizeCampaignTags InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignTags">PersonalizeCampaignTags</a>

---



