# `rtbfabricLink` Submodule <a name="`rtbfabricLink` Submodule" id="@cdktn/provider-awscc.rtbfabricLink"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### RtbfabricLink <a name="RtbfabricLink" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLink"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rtbfabric_link awscc_rtbfabric_link}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLink.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new RtbfabricLink(Construct Scope, string Id, RtbfabricLinkConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLink.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLink.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLink.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkConfig">RtbfabricLinkConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLink.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLink.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLink.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkConfig">RtbfabricLinkConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLink.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLink.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLink.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLink.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLink.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLink.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLink.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLink.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLink.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLink.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLink.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLink.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLink.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLink.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLink.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLink.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLink.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLink.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLink.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLink.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLink.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLink.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLink.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLink.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLink.putLinkAttributes">PutLinkAttributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLink.putLinkLogSettings">PutLinkLogSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLink.putModuleConfigurationList">PutModuleConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLink.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLink.resetHttpResponderAllowed">ResetHttpResponderAllowed</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLink.resetLinkAttributes">ResetLinkAttributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLink.resetModuleConfigurationList">ResetModuleConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLink.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLink.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLink.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLink.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLink.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLink.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLink.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLink.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLink.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLink.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLink.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLink.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLink.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLink.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLink.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLink.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLink.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLink.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLink.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLink.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLink.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLink.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLink.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLink.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLink.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLink.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLink.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLink.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLink.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLink.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLink.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLink.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLink.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLink.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLink.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLink.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLink.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLink.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLink.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLink.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLink.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLink.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLink.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLink.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLink.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLink.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutLinkAttributes` <a name="PutLinkAttributes" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLink.putLinkAttributes"></a>

```csharp
private void PutLinkAttributes(RtbfabricLinkLinkAttributes Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLink.putLinkAttributes.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkAttributes">RtbfabricLinkLinkAttributes</a>

---

##### `PutLinkLogSettings` <a name="PutLinkLogSettings" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLink.putLinkLogSettings"></a>

```csharp
private void PutLinkLogSettings(RtbfabricLinkLinkLogSettings Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLink.putLinkLogSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkLogSettings">RtbfabricLinkLinkLogSettings</a>

---

##### `PutModuleConfigurationList` <a name="PutModuleConfigurationList" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLink.putModuleConfigurationList"></a>

```csharp
private void PutModuleConfigurationList(IResolvable|RtbfabricLinkModuleConfigurationListStruct[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLink.putModuleConfigurationList.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListStruct">RtbfabricLinkModuleConfigurationListStruct</a>[]

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLink.putTags"></a>

```csharp
private void PutTags(IResolvable|RtbfabricLinkTags[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLink.putTags.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkTags">RtbfabricLinkTags</a>[]

---

##### `ResetHttpResponderAllowed` <a name="ResetHttpResponderAllowed" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLink.resetHttpResponderAllowed"></a>

```csharp
private void ResetHttpResponderAllowed()
```

##### `ResetLinkAttributes` <a name="ResetLinkAttributes" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLink.resetLinkAttributes"></a>

```csharp
private void ResetLinkAttributes()
```

##### `ResetModuleConfigurationList` <a name="ResetModuleConfigurationList" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLink.resetModuleConfigurationList"></a>

```csharp
private void ResetModuleConfigurationList()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLink.resetTags"></a>

```csharp
private void ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLink.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLink.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLink.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLink.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a RtbfabricLink resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLink.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

RtbfabricLink.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLink.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLink.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

RtbfabricLink.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLink.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLink.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

RtbfabricLink.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLink.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLink.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

RtbfabricLink.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a RtbfabricLink resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLink.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLink.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the RtbfabricLink to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLink.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing RtbfabricLink that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rtbfabric_link#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLink.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the RtbfabricLink to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLink.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLink.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLink.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLink.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLink.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLink.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLink.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLink.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLink.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLink.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLink.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLink.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLink.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLink.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLink.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLink.property.createdTimestamp">CreatedTimestamp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLink.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLink.property.linkAttributes">LinkAttributes</a></code> | <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkAttributesOutputReference">RtbfabricLinkLinkAttributesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLink.property.linkDirection">LinkDirection</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLink.property.linkId">LinkId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLink.property.linkLogSettings">LinkLogSettings</a></code> | <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkLogSettingsOutputReference">RtbfabricLinkLinkLogSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLink.property.linkStatus">LinkStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLink.property.moduleConfigurationList">ModuleConfigurationList</a></code> | <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListStructList">RtbfabricLinkModuleConfigurationListStructList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLink.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkTagsList">RtbfabricLinkTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLink.property.updatedTimestamp">UpdatedTimestamp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLink.property.gatewayIdInput">GatewayIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLink.property.httpResponderAllowedInput">HttpResponderAllowedInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLink.property.linkAttributesInput">LinkAttributesInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkAttributes">RtbfabricLinkLinkAttributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLink.property.linkLogSettingsInput">LinkLogSettingsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkLogSettings">RtbfabricLinkLinkLogSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLink.property.moduleConfigurationListInput">ModuleConfigurationListInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListStruct">RtbfabricLinkModuleConfigurationListStruct</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLink.property.peerGatewayIdInput">PeerGatewayIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLink.property.tagsInput">TagsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkTags">RtbfabricLinkTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLink.property.gatewayId">GatewayId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLink.property.httpResponderAllowed">HttpResponderAllowed</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLink.property.peerGatewayId">PeerGatewayId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLink.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLink.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLink.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLink.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLink.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLink.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLink.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLink.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLink.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLink.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLink.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLink.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLink.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLink.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLink.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `CreatedTimestamp`<sup>Required</sup> <a name="CreatedTimestamp" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLink.property.createdTimestamp"></a>

```csharp
public string CreatedTimestamp { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLink.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `LinkAttributes`<sup>Required</sup> <a name="LinkAttributes" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLink.property.linkAttributes"></a>

```csharp
public RtbfabricLinkLinkAttributesOutputReference LinkAttributes { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkAttributesOutputReference">RtbfabricLinkLinkAttributesOutputReference</a>

---

##### `LinkDirection`<sup>Required</sup> <a name="LinkDirection" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLink.property.linkDirection"></a>

```csharp
public string LinkDirection { get; }
```

- *Type:* string

---

##### `LinkId`<sup>Required</sup> <a name="LinkId" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLink.property.linkId"></a>

```csharp
public string LinkId { get; }
```

- *Type:* string

---

##### `LinkLogSettings`<sup>Required</sup> <a name="LinkLogSettings" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLink.property.linkLogSettings"></a>

```csharp
public RtbfabricLinkLinkLogSettingsOutputReference LinkLogSettings { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkLogSettingsOutputReference">RtbfabricLinkLinkLogSettingsOutputReference</a>

---

##### `LinkStatus`<sup>Required</sup> <a name="LinkStatus" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLink.property.linkStatus"></a>

```csharp
public string LinkStatus { get; }
```

- *Type:* string

---

##### `ModuleConfigurationList`<sup>Required</sup> <a name="ModuleConfigurationList" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLink.property.moduleConfigurationList"></a>

```csharp
public RtbfabricLinkModuleConfigurationListStructList ModuleConfigurationList { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListStructList">RtbfabricLinkModuleConfigurationListStructList</a>

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLink.property.tags"></a>

```csharp
public RtbfabricLinkTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkTagsList">RtbfabricLinkTagsList</a>

---

##### `UpdatedTimestamp`<sup>Required</sup> <a name="UpdatedTimestamp" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLink.property.updatedTimestamp"></a>

```csharp
public string UpdatedTimestamp { get; }
```

- *Type:* string

---

##### `GatewayIdInput`<sup>Optional</sup> <a name="GatewayIdInput" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLink.property.gatewayIdInput"></a>

```csharp
public string GatewayIdInput { get; }
```

- *Type:* string

---

##### `HttpResponderAllowedInput`<sup>Optional</sup> <a name="HttpResponderAllowedInput" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLink.property.httpResponderAllowedInput"></a>

```csharp
public bool|IResolvable HttpResponderAllowedInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `LinkAttributesInput`<sup>Optional</sup> <a name="LinkAttributesInput" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLink.property.linkAttributesInput"></a>

```csharp
public IResolvable|RtbfabricLinkLinkAttributes LinkAttributesInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkAttributes">RtbfabricLinkLinkAttributes</a>

---

##### `LinkLogSettingsInput`<sup>Optional</sup> <a name="LinkLogSettingsInput" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLink.property.linkLogSettingsInput"></a>

```csharp
public IResolvable|RtbfabricLinkLinkLogSettings LinkLogSettingsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkLogSettings">RtbfabricLinkLinkLogSettings</a>

---

##### `ModuleConfigurationListInput`<sup>Optional</sup> <a name="ModuleConfigurationListInput" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLink.property.moduleConfigurationListInput"></a>

```csharp
public IResolvable|RtbfabricLinkModuleConfigurationListStruct[] ModuleConfigurationListInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListStruct">RtbfabricLinkModuleConfigurationListStruct</a>[]

---

##### `PeerGatewayIdInput`<sup>Optional</sup> <a name="PeerGatewayIdInput" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLink.property.peerGatewayIdInput"></a>

```csharp
public string PeerGatewayIdInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLink.property.tagsInput"></a>

```csharp
public IResolvable|RtbfabricLinkTags[] TagsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkTags">RtbfabricLinkTags</a>[]

---

##### `GatewayId`<sup>Required</sup> <a name="GatewayId" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLink.property.gatewayId"></a>

```csharp
public string GatewayId { get; }
```

- *Type:* string

---

##### `HttpResponderAllowed`<sup>Required</sup> <a name="HttpResponderAllowed" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLink.property.httpResponderAllowed"></a>

```csharp
public bool|IResolvable HttpResponderAllowed { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `PeerGatewayId`<sup>Required</sup> <a name="PeerGatewayId" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLink.property.peerGatewayId"></a>

```csharp
public string PeerGatewayId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLink.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLink.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### RtbfabricLinkConfig <a name="RtbfabricLinkConfig" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new RtbfabricLinkConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string GatewayId,
    RtbfabricLinkLinkLogSettings LinkLogSettings,
    string PeerGatewayId,
    bool|IResolvable HttpResponderAllowed = null,
    RtbfabricLinkLinkAttributes LinkAttributes = null,
    IResolvable|RtbfabricLinkModuleConfigurationListStruct[] ModuleConfigurationList = null,
    IResolvable|RtbfabricLinkTags[] Tags = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkConfig.property.gatewayId">GatewayId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rtbfabric_link#gateway_id RtbfabricLink#gateway_id}. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkConfig.property.linkLogSettings">LinkLogSettings</a></code> | <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkLogSettings">RtbfabricLinkLinkLogSettings</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rtbfabric_link#link_log_settings RtbfabricLink#link_log_settings}. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkConfig.property.peerGatewayId">PeerGatewayId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rtbfabric_link#peer_gateway_id RtbfabricLink#peer_gateway_id}. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkConfig.property.httpResponderAllowed">HttpResponderAllowed</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rtbfabric_link#http_responder_allowed RtbfabricLink#http_responder_allowed}. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkConfig.property.linkAttributes">LinkAttributes</a></code> | <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkAttributes">RtbfabricLinkLinkAttributes</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rtbfabric_link#link_attributes RtbfabricLink#link_attributes}. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkConfig.property.moduleConfigurationList">ModuleConfigurationList</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListStruct">RtbfabricLinkModuleConfigurationListStruct</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rtbfabric_link#module_configuration_list RtbfabricLink#module_configuration_list}. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkConfig.property.tags">Tags</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkTags">RtbfabricLinkTags</a>[]</code> | Tags to assign to the Link. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `GatewayId`<sup>Required</sup> <a name="GatewayId" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkConfig.property.gatewayId"></a>

```csharp
public string GatewayId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rtbfabric_link#gateway_id RtbfabricLink#gateway_id}.

---

##### `LinkLogSettings`<sup>Required</sup> <a name="LinkLogSettings" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkConfig.property.linkLogSettings"></a>

```csharp
public RtbfabricLinkLinkLogSettings LinkLogSettings { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkLogSettings">RtbfabricLinkLinkLogSettings</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rtbfabric_link#link_log_settings RtbfabricLink#link_log_settings}.

---

##### `PeerGatewayId`<sup>Required</sup> <a name="PeerGatewayId" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkConfig.property.peerGatewayId"></a>

```csharp
public string PeerGatewayId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rtbfabric_link#peer_gateway_id RtbfabricLink#peer_gateway_id}.

---

##### `HttpResponderAllowed`<sup>Optional</sup> <a name="HttpResponderAllowed" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkConfig.property.httpResponderAllowed"></a>

```csharp
public bool|IResolvable HttpResponderAllowed { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rtbfabric_link#http_responder_allowed RtbfabricLink#http_responder_allowed}.

---

##### `LinkAttributes`<sup>Optional</sup> <a name="LinkAttributes" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkConfig.property.linkAttributes"></a>

```csharp
public RtbfabricLinkLinkAttributes LinkAttributes { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkAttributes">RtbfabricLinkLinkAttributes</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rtbfabric_link#link_attributes RtbfabricLink#link_attributes}.

---

##### `ModuleConfigurationList`<sup>Optional</sup> <a name="ModuleConfigurationList" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkConfig.property.moduleConfigurationList"></a>

```csharp
public IResolvable|RtbfabricLinkModuleConfigurationListStruct[] ModuleConfigurationList { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListStruct">RtbfabricLinkModuleConfigurationListStruct</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rtbfabric_link#module_configuration_list RtbfabricLink#module_configuration_list}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkConfig.property.tags"></a>

```csharp
public IResolvable|RtbfabricLinkTags[] Tags { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkTags">RtbfabricLinkTags</a>[]

Tags to assign to the Link.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rtbfabric_link#tags RtbfabricLink#tags}

---

### RtbfabricLinkLinkAttributes <a name="RtbfabricLinkLinkAttributes" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkAttributes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkAttributes.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new RtbfabricLinkLinkAttributes {
    string CustomerProvidedId = null,
    IResolvable|RtbfabricLinkLinkAttributesResponderErrorMasking[] ResponderErrorMasking = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkAttributes.property.customerProvidedId">CustomerProvidedId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rtbfabric_link#customer_provided_id RtbfabricLink#customer_provided_id}. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkAttributes.property.responderErrorMasking">ResponderErrorMasking</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkAttributesResponderErrorMasking">RtbfabricLinkLinkAttributesResponderErrorMasking</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rtbfabric_link#responder_error_masking RtbfabricLink#responder_error_masking}. |

---

##### `CustomerProvidedId`<sup>Optional</sup> <a name="CustomerProvidedId" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkAttributes.property.customerProvidedId"></a>

```csharp
public string CustomerProvidedId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rtbfabric_link#customer_provided_id RtbfabricLink#customer_provided_id}.

---

##### `ResponderErrorMasking`<sup>Optional</sup> <a name="ResponderErrorMasking" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkAttributes.property.responderErrorMasking"></a>

```csharp
public IResolvable|RtbfabricLinkLinkAttributesResponderErrorMasking[] ResponderErrorMasking { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkAttributesResponderErrorMasking">RtbfabricLinkLinkAttributesResponderErrorMasking</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rtbfabric_link#responder_error_masking RtbfabricLink#responder_error_masking}.

---

### RtbfabricLinkLinkAttributesResponderErrorMasking <a name="RtbfabricLinkLinkAttributesResponderErrorMasking" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkAttributesResponderErrorMasking"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkAttributesResponderErrorMasking.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new RtbfabricLinkLinkAttributesResponderErrorMasking {
    string Action = null,
    string HttpCode = null,
    string[] LoggingTypes = null,
    double ResponseLoggingPercentage = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkAttributesResponderErrorMasking.property.action">Action</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rtbfabric_link#action RtbfabricLink#action}. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkAttributesResponderErrorMasking.property.httpCode">HttpCode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rtbfabric_link#http_code RtbfabricLink#http_code}. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkAttributesResponderErrorMasking.property.loggingTypes">LoggingTypes</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rtbfabric_link#logging_types RtbfabricLink#logging_types}. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkAttributesResponderErrorMasking.property.responseLoggingPercentage">ResponseLoggingPercentage</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rtbfabric_link#response_logging_percentage RtbfabricLink#response_logging_percentage}. |

---

##### `Action`<sup>Optional</sup> <a name="Action" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkAttributesResponderErrorMasking.property.action"></a>

```csharp
public string Action { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rtbfabric_link#action RtbfabricLink#action}.

---

##### `HttpCode`<sup>Optional</sup> <a name="HttpCode" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkAttributesResponderErrorMasking.property.httpCode"></a>

```csharp
public string HttpCode { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rtbfabric_link#http_code RtbfabricLink#http_code}.

---

##### `LoggingTypes`<sup>Optional</sup> <a name="LoggingTypes" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkAttributesResponderErrorMasking.property.loggingTypes"></a>

```csharp
public string[] LoggingTypes { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rtbfabric_link#logging_types RtbfabricLink#logging_types}.

---

##### `ResponseLoggingPercentage`<sup>Optional</sup> <a name="ResponseLoggingPercentage" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkAttributesResponderErrorMasking.property.responseLoggingPercentage"></a>

```csharp
public double ResponseLoggingPercentage { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rtbfabric_link#response_logging_percentage RtbfabricLink#response_logging_percentage}.

---

### RtbfabricLinkLinkLogSettings <a name="RtbfabricLinkLinkLogSettings" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkLogSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkLogSettings.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new RtbfabricLinkLinkLogSettings {
    RtbfabricLinkLinkLogSettingsApplicationLogs ApplicationLogs
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkLogSettings.property.applicationLogs">ApplicationLogs</a></code> | <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkLogSettingsApplicationLogs">RtbfabricLinkLinkLogSettingsApplicationLogs</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rtbfabric_link#application_logs RtbfabricLink#application_logs}. |

---

##### `ApplicationLogs`<sup>Required</sup> <a name="ApplicationLogs" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkLogSettings.property.applicationLogs"></a>

```csharp
public RtbfabricLinkLinkLogSettingsApplicationLogs ApplicationLogs { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkLogSettingsApplicationLogs">RtbfabricLinkLinkLogSettingsApplicationLogs</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rtbfabric_link#application_logs RtbfabricLink#application_logs}.

---

### RtbfabricLinkLinkLogSettingsApplicationLogs <a name="RtbfabricLinkLinkLogSettingsApplicationLogs" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkLogSettingsApplicationLogs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkLogSettingsApplicationLogs.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new RtbfabricLinkLinkLogSettingsApplicationLogs {
    RtbfabricLinkLinkLogSettingsApplicationLogsLinkApplicationLogSampling LinkApplicationLogSampling
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkLogSettingsApplicationLogs.property.linkApplicationLogSampling">LinkApplicationLogSampling</a></code> | <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkLogSettingsApplicationLogsLinkApplicationLogSampling">RtbfabricLinkLinkLogSettingsApplicationLogsLinkApplicationLogSampling</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rtbfabric_link#link_application_log_sampling RtbfabricLink#link_application_log_sampling}. |

---

##### `LinkApplicationLogSampling`<sup>Required</sup> <a name="LinkApplicationLogSampling" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkLogSettingsApplicationLogs.property.linkApplicationLogSampling"></a>

```csharp
public RtbfabricLinkLinkLogSettingsApplicationLogsLinkApplicationLogSampling LinkApplicationLogSampling { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkLogSettingsApplicationLogsLinkApplicationLogSampling">RtbfabricLinkLinkLogSettingsApplicationLogsLinkApplicationLogSampling</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rtbfabric_link#link_application_log_sampling RtbfabricLink#link_application_log_sampling}.

---

### RtbfabricLinkLinkLogSettingsApplicationLogsLinkApplicationLogSampling <a name="RtbfabricLinkLinkLogSettingsApplicationLogsLinkApplicationLogSampling" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkLogSettingsApplicationLogsLinkApplicationLogSampling"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkLogSettingsApplicationLogsLinkApplicationLogSampling.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new RtbfabricLinkLinkLogSettingsApplicationLogsLinkApplicationLogSampling {
    double ErrorLog,
    double FilterLog
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkLogSettingsApplicationLogsLinkApplicationLogSampling.property.errorLog">ErrorLog</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rtbfabric_link#error_log RtbfabricLink#error_log}. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkLogSettingsApplicationLogsLinkApplicationLogSampling.property.filterLog">FilterLog</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rtbfabric_link#filter_log RtbfabricLink#filter_log}. |

---

##### `ErrorLog`<sup>Required</sup> <a name="ErrorLog" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkLogSettingsApplicationLogsLinkApplicationLogSampling.property.errorLog"></a>

```csharp
public double ErrorLog { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rtbfabric_link#error_log RtbfabricLink#error_log}.

---

##### `FilterLog`<sup>Required</sup> <a name="FilterLog" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkLogSettingsApplicationLogsLinkApplicationLogSampling.property.filterLog"></a>

```csharp
public double FilterLog { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rtbfabric_link#filter_log RtbfabricLink#filter_log}.

---

### RtbfabricLinkModuleConfigurationListModuleParameters <a name="RtbfabricLinkModuleConfigurationListModuleParameters" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParameters.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new RtbfabricLinkModuleConfigurationListModuleParameters {
    RtbfabricLinkModuleConfigurationListModuleParametersNoBid NoBid = null,
    RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttribute OpenRtbAttribute = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParameters.property.noBid">NoBid</a></code> | <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersNoBid">RtbfabricLinkModuleConfigurationListModuleParametersNoBid</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rtbfabric_link#no_bid RtbfabricLink#no_bid}. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParameters.property.openRtbAttribute">OpenRtbAttribute</a></code> | <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttribute">RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttribute</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rtbfabric_link#open_rtb_attribute RtbfabricLink#open_rtb_attribute}. |

---

##### `NoBid`<sup>Optional</sup> <a name="NoBid" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParameters.property.noBid"></a>

```csharp
public RtbfabricLinkModuleConfigurationListModuleParametersNoBid NoBid { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersNoBid">RtbfabricLinkModuleConfigurationListModuleParametersNoBid</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rtbfabric_link#no_bid RtbfabricLink#no_bid}.

---

##### `OpenRtbAttribute`<sup>Optional</sup> <a name="OpenRtbAttribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParameters.property.openRtbAttribute"></a>

```csharp
public RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttribute OpenRtbAttribute { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttribute">RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttribute</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rtbfabric_link#open_rtb_attribute RtbfabricLink#open_rtb_attribute}.

---

### RtbfabricLinkModuleConfigurationListModuleParametersNoBid <a name="RtbfabricLinkModuleConfigurationListModuleParametersNoBid" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersNoBid"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersNoBid.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new RtbfabricLinkModuleConfigurationListModuleParametersNoBid {
    double PassThroughPercentage = null,
    string Reason = null,
    double ReasonCode = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersNoBid.property.passThroughPercentage">PassThroughPercentage</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rtbfabric_link#pass_through_percentage RtbfabricLink#pass_through_percentage}. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersNoBid.property.reason">Reason</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rtbfabric_link#reason RtbfabricLink#reason}. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersNoBid.property.reasonCode">ReasonCode</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rtbfabric_link#reason_code RtbfabricLink#reason_code}. |

---

##### `PassThroughPercentage`<sup>Optional</sup> <a name="PassThroughPercentage" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersNoBid.property.passThroughPercentage"></a>

```csharp
public double PassThroughPercentage { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rtbfabric_link#pass_through_percentage RtbfabricLink#pass_through_percentage}.

---

##### `Reason`<sup>Optional</sup> <a name="Reason" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersNoBid.property.reason"></a>

```csharp
public string Reason { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rtbfabric_link#reason RtbfabricLink#reason}.

---

##### `ReasonCode`<sup>Optional</sup> <a name="ReasonCode" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersNoBid.property.reasonCode"></a>

```csharp
public double ReasonCode { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rtbfabric_link#reason_code RtbfabricLink#reason_code}.

---

### RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttribute <a name="RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttribute"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttribute.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttribute {
    RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeAction Action = null,
    IResolvable|RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfiguration[] FilterConfiguration = null,
    string FilterType = null,
    double HoldbackPercentage = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttribute.property.action">Action</a></code> | <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeAction">RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeAction</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rtbfabric_link#action RtbfabricLink#action}. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttribute.property.filterConfiguration">FilterConfiguration</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfiguration">RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfiguration</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rtbfabric_link#filter_configuration RtbfabricLink#filter_configuration}. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttribute.property.filterType">FilterType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rtbfabric_link#filter_type RtbfabricLink#filter_type}. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttribute.property.holdbackPercentage">HoldbackPercentage</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rtbfabric_link#holdback_percentage RtbfabricLink#holdback_percentage}. |

---

##### `Action`<sup>Optional</sup> <a name="Action" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttribute.property.action"></a>

```csharp
public RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeAction Action { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeAction">RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeAction</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rtbfabric_link#action RtbfabricLink#action}.

---

##### `FilterConfiguration`<sup>Optional</sup> <a name="FilterConfiguration" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttribute.property.filterConfiguration"></a>

```csharp
public IResolvable|RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfiguration[] FilterConfiguration { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfiguration">RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfiguration</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rtbfabric_link#filter_configuration RtbfabricLink#filter_configuration}.

---

##### `FilterType`<sup>Optional</sup> <a name="FilterType" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttribute.property.filterType"></a>

```csharp
public string FilterType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rtbfabric_link#filter_type RtbfabricLink#filter_type}.

---

##### `HoldbackPercentage`<sup>Optional</sup> <a name="HoldbackPercentage" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttribute.property.holdbackPercentage"></a>

```csharp
public double HoldbackPercentage { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rtbfabric_link#holdback_percentage RtbfabricLink#holdback_percentage}.

---

### RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeAction <a name="RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeAction" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeAction"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeAction.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeAction {
    RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionHeaderTag HeaderTag = null,
    RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionNoBid NoBid = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeAction.property.headerTag">HeaderTag</a></code> | <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionHeaderTag">RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionHeaderTag</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rtbfabric_link#header_tag RtbfabricLink#header_tag}. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeAction.property.noBid">NoBid</a></code> | <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionNoBid">RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionNoBid</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rtbfabric_link#no_bid RtbfabricLink#no_bid}. |

---

##### `HeaderTag`<sup>Optional</sup> <a name="HeaderTag" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeAction.property.headerTag"></a>

```csharp
public RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionHeaderTag HeaderTag { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionHeaderTag">RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionHeaderTag</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rtbfabric_link#header_tag RtbfabricLink#header_tag}.

---

##### `NoBid`<sup>Optional</sup> <a name="NoBid" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeAction.property.noBid"></a>

```csharp
public RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionNoBid NoBid { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionNoBid">RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionNoBid</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rtbfabric_link#no_bid RtbfabricLink#no_bid}.

---

### RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionHeaderTag <a name="RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionHeaderTag" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionHeaderTag"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionHeaderTag.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionHeaderTag {
    string Name = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionHeaderTag.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rtbfabric_link#name RtbfabricLink#name}. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionHeaderTag.property.value">Value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rtbfabric_link#value RtbfabricLink#value}. |

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionHeaderTag.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rtbfabric_link#name RtbfabricLink#name}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionHeaderTag.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rtbfabric_link#value RtbfabricLink#value}.

---

### RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionNoBid <a name="RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionNoBid" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionNoBid"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionNoBid.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionNoBid {
    double NoBidReasonCode = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionNoBid.property.noBidReasonCode">NoBidReasonCode</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rtbfabric_link#no_bid_reason_code RtbfabricLink#no_bid_reason_code}. |

---

##### `NoBidReasonCode`<sup>Optional</sup> <a name="NoBidReasonCode" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionNoBid.property.noBidReasonCode"></a>

```csharp
public double NoBidReasonCode { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rtbfabric_link#no_bid_reason_code RtbfabricLink#no_bid_reason_code}.

---

### RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfiguration <a name="RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfiguration" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfiguration {
    IResolvable|RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationCriteria[] Criteria = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfiguration.property.criteria">Criteria</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationCriteria">RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationCriteria</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rtbfabric_link#criteria RtbfabricLink#criteria}. |

---

##### `Criteria`<sup>Optional</sup> <a name="Criteria" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfiguration.property.criteria"></a>

```csharp
public IResolvable|RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationCriteria[] Criteria { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationCriteria">RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationCriteria</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rtbfabric_link#criteria RtbfabricLink#criteria}.

---

### RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationCriteria <a name="RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationCriteria" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationCriteria"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationCriteria.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationCriteria {
    string Path = null,
    string[] Values = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationCriteria.property.path">Path</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rtbfabric_link#path RtbfabricLink#path}. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationCriteria.property.values">Values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rtbfabric_link#values RtbfabricLink#values}. |

---

##### `Path`<sup>Optional</sup> <a name="Path" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationCriteria.property.path"></a>

```csharp
public string Path { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rtbfabric_link#path RtbfabricLink#path}.

---

##### `Values`<sup>Optional</sup> <a name="Values" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationCriteria.property.values"></a>

```csharp
public string[] Values { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rtbfabric_link#values RtbfabricLink#values}.

---

### RtbfabricLinkModuleConfigurationListStruct <a name="RtbfabricLinkModuleConfigurationListStruct" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListStruct"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListStruct.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new RtbfabricLinkModuleConfigurationListStruct {
    string[] DependsOn = null,
    RtbfabricLinkModuleConfigurationListModuleParameters ModuleParameters = null,
    string Name = null,
    string Version = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListStruct.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rtbfabric_link#depends_on RtbfabricLink#depends_on}. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListStruct.property.moduleParameters">ModuleParameters</a></code> | <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParameters">RtbfabricLinkModuleConfigurationListModuleParameters</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rtbfabric_link#module_parameters RtbfabricLink#module_parameters}. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListStruct.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rtbfabric_link#name RtbfabricLink#name}. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListStruct.property.version">Version</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rtbfabric_link#version RtbfabricLink#version}. |

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListStruct.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rtbfabric_link#depends_on RtbfabricLink#depends_on}.

---

##### `ModuleParameters`<sup>Optional</sup> <a name="ModuleParameters" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListStruct.property.moduleParameters"></a>

```csharp
public RtbfabricLinkModuleConfigurationListModuleParameters ModuleParameters { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParameters">RtbfabricLinkModuleConfigurationListModuleParameters</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rtbfabric_link#module_parameters RtbfabricLink#module_parameters}.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListStruct.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rtbfabric_link#name RtbfabricLink#name}.

---

##### `Version`<sup>Optional</sup> <a name="Version" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListStruct.property.version"></a>

```csharp
public string Version { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rtbfabric_link#version RtbfabricLink#version}.

---

### RtbfabricLinkTags <a name="RtbfabricLinkTags" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new RtbfabricLinkTags {
    string Key = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkTags.property.key">Key</a></code> | <code>string</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkTags.property.value">Value</a></code> | <code>string</code> | The value for the tag. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkTags.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

The key name of the tag.

You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rtbfabric_link#key RtbfabricLink#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkTags.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

The value for the tag.

You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rtbfabric_link#value RtbfabricLink#value}

---

## Classes <a name="Classes" id="Classes"></a>

### RtbfabricLinkLinkAttributesOutputReference <a name="RtbfabricLinkLinkAttributesOutputReference" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkAttributesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new RtbfabricLinkLinkAttributesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkAttributesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkAttributesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkAttributesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkAttributesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkAttributesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkAttributesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkAttributesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkAttributesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkAttributesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkAttributesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkAttributesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkAttributesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkAttributesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkAttributesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkAttributesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkAttributesOutputReference.putResponderErrorMasking">PutResponderErrorMasking</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkAttributesOutputReference.resetCustomerProvidedId">ResetCustomerProvidedId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkAttributesOutputReference.resetResponderErrorMasking">ResetResponderErrorMasking</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkAttributesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkAttributesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkAttributesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkAttributesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkAttributesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkAttributesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkAttributesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkAttributesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkAttributesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkAttributesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkAttributesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkAttributesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkAttributesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutResponderErrorMasking` <a name="PutResponderErrorMasking" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkAttributesOutputReference.putResponderErrorMasking"></a>

```csharp
private void PutResponderErrorMasking(IResolvable|RtbfabricLinkLinkAttributesResponderErrorMasking[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkAttributesOutputReference.putResponderErrorMasking.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkAttributesResponderErrorMasking">RtbfabricLinkLinkAttributesResponderErrorMasking</a>[]

---

##### `ResetCustomerProvidedId` <a name="ResetCustomerProvidedId" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkAttributesOutputReference.resetCustomerProvidedId"></a>

```csharp
private void ResetCustomerProvidedId()
```

##### `ResetResponderErrorMasking` <a name="ResetResponderErrorMasking" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkAttributesOutputReference.resetResponderErrorMasking"></a>

```csharp
private void ResetResponderErrorMasking()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkAttributesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkAttributesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkAttributesOutputReference.property.responderErrorMasking">ResponderErrorMasking</a></code> | <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkAttributesResponderErrorMaskingList">RtbfabricLinkLinkAttributesResponderErrorMaskingList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkAttributesOutputReference.property.customerProvidedIdInput">CustomerProvidedIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkAttributesOutputReference.property.responderErrorMaskingInput">ResponderErrorMaskingInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkAttributesResponderErrorMasking">RtbfabricLinkLinkAttributesResponderErrorMasking</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkAttributesOutputReference.property.customerProvidedId">CustomerProvidedId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkAttributesOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkAttributes">RtbfabricLinkLinkAttributes</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkAttributesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkAttributesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ResponderErrorMasking`<sup>Required</sup> <a name="ResponderErrorMasking" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkAttributesOutputReference.property.responderErrorMasking"></a>

```csharp
public RtbfabricLinkLinkAttributesResponderErrorMaskingList ResponderErrorMasking { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkAttributesResponderErrorMaskingList">RtbfabricLinkLinkAttributesResponderErrorMaskingList</a>

---

##### `CustomerProvidedIdInput`<sup>Optional</sup> <a name="CustomerProvidedIdInput" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkAttributesOutputReference.property.customerProvidedIdInput"></a>

```csharp
public string CustomerProvidedIdInput { get; }
```

- *Type:* string

---

##### `ResponderErrorMaskingInput`<sup>Optional</sup> <a name="ResponderErrorMaskingInput" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkAttributesOutputReference.property.responderErrorMaskingInput"></a>

```csharp
public IResolvable|RtbfabricLinkLinkAttributesResponderErrorMasking[] ResponderErrorMaskingInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkAttributesResponderErrorMasking">RtbfabricLinkLinkAttributesResponderErrorMasking</a>[]

---

##### `CustomerProvidedId`<sup>Required</sup> <a name="CustomerProvidedId" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkAttributesOutputReference.property.customerProvidedId"></a>

```csharp
public string CustomerProvidedId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkAttributesOutputReference.property.internalValue"></a>

```csharp
public IResolvable|RtbfabricLinkLinkAttributes InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkAttributes">RtbfabricLinkLinkAttributes</a>

---


### RtbfabricLinkLinkAttributesResponderErrorMaskingList <a name="RtbfabricLinkLinkAttributesResponderErrorMaskingList" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkAttributesResponderErrorMaskingList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkAttributesResponderErrorMaskingList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new RtbfabricLinkLinkAttributesResponderErrorMaskingList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkAttributesResponderErrorMaskingList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkAttributesResponderErrorMaskingList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkAttributesResponderErrorMaskingList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkAttributesResponderErrorMaskingList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkAttributesResponderErrorMaskingList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkAttributesResponderErrorMaskingList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkAttributesResponderErrorMaskingList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkAttributesResponderErrorMaskingList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkAttributesResponderErrorMaskingList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkAttributesResponderErrorMaskingList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkAttributesResponderErrorMaskingList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkAttributesResponderErrorMaskingList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkAttributesResponderErrorMaskingList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkAttributesResponderErrorMaskingList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkAttributesResponderErrorMaskingList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkAttributesResponderErrorMaskingList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkAttributesResponderErrorMaskingList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkAttributesResponderErrorMaskingList.get"></a>

```csharp
private RtbfabricLinkLinkAttributesResponderErrorMaskingOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkAttributesResponderErrorMaskingList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkAttributesResponderErrorMaskingList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkAttributesResponderErrorMaskingList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkAttributesResponderErrorMaskingList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkAttributesResponderErrorMasking">RtbfabricLinkLinkAttributesResponderErrorMasking</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkAttributesResponderErrorMaskingList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkAttributesResponderErrorMaskingList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkAttributesResponderErrorMaskingList.property.internalValue"></a>

```csharp
public IResolvable|RtbfabricLinkLinkAttributesResponderErrorMasking[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkAttributesResponderErrorMasking">RtbfabricLinkLinkAttributesResponderErrorMasking</a>[]

---


### RtbfabricLinkLinkAttributesResponderErrorMaskingOutputReference <a name="RtbfabricLinkLinkAttributesResponderErrorMaskingOutputReference" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkAttributesResponderErrorMaskingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkAttributesResponderErrorMaskingOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new RtbfabricLinkLinkAttributesResponderErrorMaskingOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkAttributesResponderErrorMaskingOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkAttributesResponderErrorMaskingOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkAttributesResponderErrorMaskingOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkAttributesResponderErrorMaskingOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkAttributesResponderErrorMaskingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkAttributesResponderErrorMaskingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkAttributesResponderErrorMaskingOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkAttributesResponderErrorMaskingOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkAttributesResponderErrorMaskingOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkAttributesResponderErrorMaskingOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkAttributesResponderErrorMaskingOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkAttributesResponderErrorMaskingOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkAttributesResponderErrorMaskingOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkAttributesResponderErrorMaskingOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkAttributesResponderErrorMaskingOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkAttributesResponderErrorMaskingOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkAttributesResponderErrorMaskingOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkAttributesResponderErrorMaskingOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkAttributesResponderErrorMaskingOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkAttributesResponderErrorMaskingOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkAttributesResponderErrorMaskingOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkAttributesResponderErrorMaskingOutputReference.resetAction">ResetAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkAttributesResponderErrorMaskingOutputReference.resetHttpCode">ResetHttpCode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkAttributesResponderErrorMaskingOutputReference.resetLoggingTypes">ResetLoggingTypes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkAttributesResponderErrorMaskingOutputReference.resetResponseLoggingPercentage">ResetResponseLoggingPercentage</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkAttributesResponderErrorMaskingOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkAttributesResponderErrorMaskingOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkAttributesResponderErrorMaskingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkAttributesResponderErrorMaskingOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkAttributesResponderErrorMaskingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkAttributesResponderErrorMaskingOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkAttributesResponderErrorMaskingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkAttributesResponderErrorMaskingOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkAttributesResponderErrorMaskingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkAttributesResponderErrorMaskingOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkAttributesResponderErrorMaskingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkAttributesResponderErrorMaskingOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkAttributesResponderErrorMaskingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkAttributesResponderErrorMaskingOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkAttributesResponderErrorMaskingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkAttributesResponderErrorMaskingOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkAttributesResponderErrorMaskingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkAttributesResponderErrorMaskingOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkAttributesResponderErrorMaskingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkAttributesResponderErrorMaskingOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkAttributesResponderErrorMaskingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkAttributesResponderErrorMaskingOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkAttributesResponderErrorMaskingOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkAttributesResponderErrorMaskingOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAction` <a name="ResetAction" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkAttributesResponderErrorMaskingOutputReference.resetAction"></a>

```csharp
private void ResetAction()
```

##### `ResetHttpCode` <a name="ResetHttpCode" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkAttributesResponderErrorMaskingOutputReference.resetHttpCode"></a>

```csharp
private void ResetHttpCode()
```

##### `ResetLoggingTypes` <a name="ResetLoggingTypes" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkAttributesResponderErrorMaskingOutputReference.resetLoggingTypes"></a>

```csharp
private void ResetLoggingTypes()
```

##### `ResetResponseLoggingPercentage` <a name="ResetResponseLoggingPercentage" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkAttributesResponderErrorMaskingOutputReference.resetResponseLoggingPercentage"></a>

```csharp
private void ResetResponseLoggingPercentage()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkAttributesResponderErrorMaskingOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkAttributesResponderErrorMaskingOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkAttributesResponderErrorMaskingOutputReference.property.actionInput">ActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkAttributesResponderErrorMaskingOutputReference.property.httpCodeInput">HttpCodeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkAttributesResponderErrorMaskingOutputReference.property.loggingTypesInput">LoggingTypesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkAttributesResponderErrorMaskingOutputReference.property.responseLoggingPercentageInput">ResponseLoggingPercentageInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkAttributesResponderErrorMaskingOutputReference.property.action">Action</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkAttributesResponderErrorMaskingOutputReference.property.httpCode">HttpCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkAttributesResponderErrorMaskingOutputReference.property.loggingTypes">LoggingTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkAttributesResponderErrorMaskingOutputReference.property.responseLoggingPercentage">ResponseLoggingPercentage</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkAttributesResponderErrorMaskingOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkAttributesResponderErrorMasking">RtbfabricLinkLinkAttributesResponderErrorMasking</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkAttributesResponderErrorMaskingOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkAttributesResponderErrorMaskingOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ActionInput`<sup>Optional</sup> <a name="ActionInput" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkAttributesResponderErrorMaskingOutputReference.property.actionInput"></a>

```csharp
public string ActionInput { get; }
```

- *Type:* string

---

##### `HttpCodeInput`<sup>Optional</sup> <a name="HttpCodeInput" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkAttributesResponderErrorMaskingOutputReference.property.httpCodeInput"></a>

```csharp
public string HttpCodeInput { get; }
```

- *Type:* string

---

##### `LoggingTypesInput`<sup>Optional</sup> <a name="LoggingTypesInput" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkAttributesResponderErrorMaskingOutputReference.property.loggingTypesInput"></a>

```csharp
public string[] LoggingTypesInput { get; }
```

- *Type:* string[]

---

##### `ResponseLoggingPercentageInput`<sup>Optional</sup> <a name="ResponseLoggingPercentageInput" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkAttributesResponderErrorMaskingOutputReference.property.responseLoggingPercentageInput"></a>

```csharp
public double ResponseLoggingPercentageInput { get; }
```

- *Type:* double

---

##### `Action`<sup>Required</sup> <a name="Action" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkAttributesResponderErrorMaskingOutputReference.property.action"></a>

```csharp
public string Action { get; }
```

- *Type:* string

---

##### `HttpCode`<sup>Required</sup> <a name="HttpCode" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkAttributesResponderErrorMaskingOutputReference.property.httpCode"></a>

```csharp
public string HttpCode { get; }
```

- *Type:* string

---

##### `LoggingTypes`<sup>Required</sup> <a name="LoggingTypes" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkAttributesResponderErrorMaskingOutputReference.property.loggingTypes"></a>

```csharp
public string[] LoggingTypes { get; }
```

- *Type:* string[]

---

##### `ResponseLoggingPercentage`<sup>Required</sup> <a name="ResponseLoggingPercentage" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkAttributesResponderErrorMaskingOutputReference.property.responseLoggingPercentage"></a>

```csharp
public double ResponseLoggingPercentage { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkAttributesResponderErrorMaskingOutputReference.property.internalValue"></a>

```csharp
public IResolvable|RtbfabricLinkLinkAttributesResponderErrorMasking InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkAttributesResponderErrorMasking">RtbfabricLinkLinkAttributesResponderErrorMasking</a>

---


### RtbfabricLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference <a name="RtbfabricLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new RtbfabricLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.property.errorLogInput">ErrorLogInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.property.filterLogInput">FilterLogInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.property.errorLog">ErrorLog</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.property.filterLog">FilterLog</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkLogSettingsApplicationLogsLinkApplicationLogSampling">RtbfabricLinkLinkLogSettingsApplicationLogsLinkApplicationLogSampling</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ErrorLogInput`<sup>Optional</sup> <a name="ErrorLogInput" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.property.errorLogInput"></a>

```csharp
public double ErrorLogInput { get; }
```

- *Type:* double

---

##### `FilterLogInput`<sup>Optional</sup> <a name="FilterLogInput" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.property.filterLogInput"></a>

```csharp
public double FilterLogInput { get; }
```

- *Type:* double

---

##### `ErrorLog`<sup>Required</sup> <a name="ErrorLog" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.property.errorLog"></a>

```csharp
public double ErrorLog { get; }
```

- *Type:* double

---

##### `FilterLog`<sup>Required</sup> <a name="FilterLog" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.property.filterLog"></a>

```csharp
public double FilterLog { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.property.internalValue"></a>

```csharp
public IResolvable|RtbfabricLinkLinkLogSettingsApplicationLogsLinkApplicationLogSampling InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkLogSettingsApplicationLogsLinkApplicationLogSampling">RtbfabricLinkLinkLogSettingsApplicationLogsLinkApplicationLogSampling</a>

---


### RtbfabricLinkLinkLogSettingsApplicationLogsOutputReference <a name="RtbfabricLinkLinkLogSettingsApplicationLogsOutputReference" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkLogSettingsApplicationLogsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkLogSettingsApplicationLogsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new RtbfabricLinkLinkLogSettingsApplicationLogsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkLogSettingsApplicationLogsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkLogSettingsApplicationLogsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkLogSettingsApplicationLogsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkLogSettingsApplicationLogsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkLogSettingsApplicationLogsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkLogSettingsApplicationLogsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkLogSettingsApplicationLogsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkLogSettingsApplicationLogsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkLogSettingsApplicationLogsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkLogSettingsApplicationLogsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkLogSettingsApplicationLogsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkLogSettingsApplicationLogsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkLogSettingsApplicationLogsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkLogSettingsApplicationLogsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkLogSettingsApplicationLogsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkLogSettingsApplicationLogsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkLogSettingsApplicationLogsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkLogSettingsApplicationLogsOutputReference.putLinkApplicationLogSampling">PutLinkApplicationLogSampling</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkLogSettingsApplicationLogsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkLogSettingsApplicationLogsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkLogSettingsApplicationLogsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkLogSettingsApplicationLogsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkLogSettingsApplicationLogsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkLogSettingsApplicationLogsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkLogSettingsApplicationLogsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkLogSettingsApplicationLogsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkLogSettingsApplicationLogsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkLogSettingsApplicationLogsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkLogSettingsApplicationLogsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkLogSettingsApplicationLogsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkLogSettingsApplicationLogsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkLogSettingsApplicationLogsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkLogSettingsApplicationLogsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkLogSettingsApplicationLogsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkLogSettingsApplicationLogsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkLogSettingsApplicationLogsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkLogSettingsApplicationLogsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkLogSettingsApplicationLogsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkLogSettingsApplicationLogsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkLogSettingsApplicationLogsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkLogSettingsApplicationLogsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkLogSettingsApplicationLogsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutLinkApplicationLogSampling` <a name="PutLinkApplicationLogSampling" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkLogSettingsApplicationLogsOutputReference.putLinkApplicationLogSampling"></a>

```csharp
private void PutLinkApplicationLogSampling(RtbfabricLinkLinkLogSettingsApplicationLogsLinkApplicationLogSampling Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkLogSettingsApplicationLogsOutputReference.putLinkApplicationLogSampling.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkLogSettingsApplicationLogsLinkApplicationLogSampling">RtbfabricLinkLinkLogSettingsApplicationLogsLinkApplicationLogSampling</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkLogSettingsApplicationLogsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkLogSettingsApplicationLogsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkLogSettingsApplicationLogsOutputReference.property.linkApplicationLogSampling">LinkApplicationLogSampling</a></code> | <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference">RtbfabricLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkLogSettingsApplicationLogsOutputReference.property.linkApplicationLogSamplingInput">LinkApplicationLogSamplingInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkLogSettingsApplicationLogsLinkApplicationLogSampling">RtbfabricLinkLinkLogSettingsApplicationLogsLinkApplicationLogSampling</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkLogSettingsApplicationLogsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkLogSettingsApplicationLogs">RtbfabricLinkLinkLogSettingsApplicationLogs</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkLogSettingsApplicationLogsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkLogSettingsApplicationLogsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `LinkApplicationLogSampling`<sup>Required</sup> <a name="LinkApplicationLogSampling" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkLogSettingsApplicationLogsOutputReference.property.linkApplicationLogSampling"></a>

```csharp
public RtbfabricLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference LinkApplicationLogSampling { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference">RtbfabricLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference</a>

---

##### `LinkApplicationLogSamplingInput`<sup>Optional</sup> <a name="LinkApplicationLogSamplingInput" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkLogSettingsApplicationLogsOutputReference.property.linkApplicationLogSamplingInput"></a>

```csharp
public IResolvable|RtbfabricLinkLinkLogSettingsApplicationLogsLinkApplicationLogSampling LinkApplicationLogSamplingInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkLogSettingsApplicationLogsLinkApplicationLogSampling">RtbfabricLinkLinkLogSettingsApplicationLogsLinkApplicationLogSampling</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkLogSettingsApplicationLogsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|RtbfabricLinkLinkLogSettingsApplicationLogs InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkLogSettingsApplicationLogs">RtbfabricLinkLinkLogSettingsApplicationLogs</a>

---


### RtbfabricLinkLinkLogSettingsOutputReference <a name="RtbfabricLinkLinkLogSettingsOutputReference" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkLogSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkLogSettingsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new RtbfabricLinkLinkLogSettingsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkLogSettingsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkLogSettingsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkLogSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkLogSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkLogSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkLogSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkLogSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkLogSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkLogSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkLogSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkLogSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkLogSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkLogSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkLogSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkLogSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkLogSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkLogSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkLogSettingsOutputReference.putApplicationLogs">PutApplicationLogs</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkLogSettingsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkLogSettingsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkLogSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkLogSettingsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkLogSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkLogSettingsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkLogSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkLogSettingsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkLogSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkLogSettingsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkLogSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkLogSettingsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkLogSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkLogSettingsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkLogSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkLogSettingsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkLogSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkLogSettingsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkLogSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkLogSettingsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkLogSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkLogSettingsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkLogSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkLogSettingsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutApplicationLogs` <a name="PutApplicationLogs" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkLogSettingsOutputReference.putApplicationLogs"></a>

```csharp
private void PutApplicationLogs(RtbfabricLinkLinkLogSettingsApplicationLogs Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkLogSettingsOutputReference.putApplicationLogs.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkLogSettingsApplicationLogs">RtbfabricLinkLinkLogSettingsApplicationLogs</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkLogSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkLogSettingsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkLogSettingsOutputReference.property.applicationLogs">ApplicationLogs</a></code> | <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkLogSettingsApplicationLogsOutputReference">RtbfabricLinkLinkLogSettingsApplicationLogsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkLogSettingsOutputReference.property.applicationLogsInput">ApplicationLogsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkLogSettingsApplicationLogs">RtbfabricLinkLinkLogSettingsApplicationLogs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkLogSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkLogSettings">RtbfabricLinkLinkLogSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkLogSettingsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkLogSettingsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ApplicationLogs`<sup>Required</sup> <a name="ApplicationLogs" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkLogSettingsOutputReference.property.applicationLogs"></a>

```csharp
public RtbfabricLinkLinkLogSettingsApplicationLogsOutputReference ApplicationLogs { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkLogSettingsApplicationLogsOutputReference">RtbfabricLinkLinkLogSettingsApplicationLogsOutputReference</a>

---

##### `ApplicationLogsInput`<sup>Optional</sup> <a name="ApplicationLogsInput" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkLogSettingsOutputReference.property.applicationLogsInput"></a>

```csharp
public IResolvable|RtbfabricLinkLinkLogSettingsApplicationLogs ApplicationLogsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkLogSettingsApplicationLogs">RtbfabricLinkLinkLogSettingsApplicationLogs</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkLogSettingsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|RtbfabricLinkLinkLogSettings InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkLinkLogSettings">RtbfabricLinkLinkLogSettings</a>

---


### RtbfabricLinkModuleConfigurationListModuleParametersNoBidOutputReference <a name="RtbfabricLinkModuleConfigurationListModuleParametersNoBidOutputReference" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersNoBidOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersNoBidOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new RtbfabricLinkModuleConfigurationListModuleParametersNoBidOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersNoBidOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersNoBidOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersNoBidOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersNoBidOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersNoBidOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersNoBidOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersNoBidOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersNoBidOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersNoBidOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersNoBidOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersNoBidOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersNoBidOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersNoBidOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersNoBidOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersNoBidOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersNoBidOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersNoBidOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersNoBidOutputReference.resetPassThroughPercentage">ResetPassThroughPercentage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersNoBidOutputReference.resetReason">ResetReason</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersNoBidOutputReference.resetReasonCode">ResetReasonCode</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersNoBidOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersNoBidOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersNoBidOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersNoBidOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersNoBidOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersNoBidOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersNoBidOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersNoBidOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersNoBidOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersNoBidOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersNoBidOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersNoBidOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersNoBidOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersNoBidOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersNoBidOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersNoBidOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersNoBidOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersNoBidOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersNoBidOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersNoBidOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersNoBidOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersNoBidOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersNoBidOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersNoBidOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPassThroughPercentage` <a name="ResetPassThroughPercentage" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersNoBidOutputReference.resetPassThroughPercentage"></a>

```csharp
private void ResetPassThroughPercentage()
```

##### `ResetReason` <a name="ResetReason" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersNoBidOutputReference.resetReason"></a>

```csharp
private void ResetReason()
```

##### `ResetReasonCode` <a name="ResetReasonCode" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersNoBidOutputReference.resetReasonCode"></a>

```csharp
private void ResetReasonCode()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersNoBidOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersNoBidOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersNoBidOutputReference.property.passThroughPercentageInput">PassThroughPercentageInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersNoBidOutputReference.property.reasonCodeInput">ReasonCodeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersNoBidOutputReference.property.reasonInput">ReasonInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersNoBidOutputReference.property.passThroughPercentage">PassThroughPercentage</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersNoBidOutputReference.property.reason">Reason</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersNoBidOutputReference.property.reasonCode">ReasonCode</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersNoBidOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersNoBid">RtbfabricLinkModuleConfigurationListModuleParametersNoBid</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersNoBidOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersNoBidOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PassThroughPercentageInput`<sup>Optional</sup> <a name="PassThroughPercentageInput" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersNoBidOutputReference.property.passThroughPercentageInput"></a>

```csharp
public double PassThroughPercentageInput { get; }
```

- *Type:* double

---

##### `ReasonCodeInput`<sup>Optional</sup> <a name="ReasonCodeInput" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersNoBidOutputReference.property.reasonCodeInput"></a>

```csharp
public double ReasonCodeInput { get; }
```

- *Type:* double

---

##### `ReasonInput`<sup>Optional</sup> <a name="ReasonInput" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersNoBidOutputReference.property.reasonInput"></a>

```csharp
public string ReasonInput { get; }
```

- *Type:* string

---

##### `PassThroughPercentage`<sup>Required</sup> <a name="PassThroughPercentage" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersNoBidOutputReference.property.passThroughPercentage"></a>

```csharp
public double PassThroughPercentage { get; }
```

- *Type:* double

---

##### `Reason`<sup>Required</sup> <a name="Reason" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersNoBidOutputReference.property.reason"></a>

```csharp
public string Reason { get; }
```

- *Type:* string

---

##### `ReasonCode`<sup>Required</sup> <a name="ReasonCode" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersNoBidOutputReference.property.reasonCode"></a>

```csharp
public double ReasonCode { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersNoBidOutputReference.property.internalValue"></a>

```csharp
public IResolvable|RtbfabricLinkModuleConfigurationListModuleParametersNoBid InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersNoBid">RtbfabricLinkModuleConfigurationListModuleParametersNoBid</a>

---


### RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionHeaderTagOutputReference <a name="RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionHeaderTagOutputReference" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionHeaderTagOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionHeaderTagOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionHeaderTagOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionHeaderTagOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionHeaderTagOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionHeaderTagOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionHeaderTagOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionHeaderTagOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionHeaderTagOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionHeaderTagOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionHeaderTagOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionHeaderTagOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionHeaderTagOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionHeaderTagOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionHeaderTagOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionHeaderTagOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionHeaderTagOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionHeaderTagOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionHeaderTagOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionHeaderTagOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionHeaderTagOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionHeaderTagOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionHeaderTagOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionHeaderTagOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionHeaderTagOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionHeaderTagOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionHeaderTagOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionHeaderTagOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionHeaderTagOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionHeaderTagOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionHeaderTagOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionHeaderTagOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionHeaderTagOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionHeaderTagOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionHeaderTagOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionHeaderTagOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionHeaderTagOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionHeaderTagOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionHeaderTagOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionHeaderTagOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionHeaderTagOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionHeaderTagOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionHeaderTagOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionHeaderTagOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionHeaderTagOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionHeaderTagOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetName` <a name="ResetName" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionHeaderTagOutputReference.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionHeaderTagOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionHeaderTagOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionHeaderTagOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionHeaderTagOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionHeaderTagOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionHeaderTagOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionHeaderTagOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionHeaderTagOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionHeaderTag">RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionHeaderTag</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionHeaderTagOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionHeaderTagOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionHeaderTagOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionHeaderTagOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionHeaderTagOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionHeaderTagOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionHeaderTagOutputReference.property.internalValue"></a>

```csharp
public IResolvable|RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionHeaderTag InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionHeaderTag">RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionHeaderTag</a>

---


### RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionNoBidOutputReference <a name="RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionNoBidOutputReference" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionNoBidOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionNoBidOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionNoBidOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionNoBidOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionNoBidOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionNoBidOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionNoBidOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionNoBidOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionNoBidOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionNoBidOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionNoBidOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionNoBidOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionNoBidOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionNoBidOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionNoBidOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionNoBidOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionNoBidOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionNoBidOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionNoBidOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionNoBidOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionNoBidOutputReference.resetNoBidReasonCode">ResetNoBidReasonCode</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionNoBidOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionNoBidOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionNoBidOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionNoBidOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionNoBidOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionNoBidOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionNoBidOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionNoBidOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionNoBidOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionNoBidOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionNoBidOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionNoBidOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionNoBidOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionNoBidOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionNoBidOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionNoBidOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionNoBidOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionNoBidOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionNoBidOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionNoBidOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionNoBidOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionNoBidOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionNoBidOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionNoBidOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetNoBidReasonCode` <a name="ResetNoBidReasonCode" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionNoBidOutputReference.resetNoBidReasonCode"></a>

```csharp
private void ResetNoBidReasonCode()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionNoBidOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionNoBidOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionNoBidOutputReference.property.noBidReasonCodeInput">NoBidReasonCodeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionNoBidOutputReference.property.noBidReasonCode">NoBidReasonCode</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionNoBidOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionNoBid">RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionNoBid</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionNoBidOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionNoBidOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NoBidReasonCodeInput`<sup>Optional</sup> <a name="NoBidReasonCodeInput" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionNoBidOutputReference.property.noBidReasonCodeInput"></a>

```csharp
public double NoBidReasonCodeInput { get; }
```

- *Type:* double

---

##### `NoBidReasonCode`<sup>Required</sup> <a name="NoBidReasonCode" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionNoBidOutputReference.property.noBidReasonCode"></a>

```csharp
public double NoBidReasonCode { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionNoBidOutputReference.property.internalValue"></a>

```csharp
public IResolvable|RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionNoBid InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionNoBid">RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionNoBid</a>

---


### RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionOutputReference <a name="RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionOutputReference" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionOutputReference.putHeaderTag">PutHeaderTag</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionOutputReference.putNoBid">PutNoBid</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionOutputReference.resetHeaderTag">ResetHeaderTag</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionOutputReference.resetNoBid">ResetNoBid</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutHeaderTag` <a name="PutHeaderTag" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionOutputReference.putHeaderTag"></a>

```csharp
private void PutHeaderTag(RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionHeaderTag Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionOutputReference.putHeaderTag.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionHeaderTag">RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionHeaderTag</a>

---

##### `PutNoBid` <a name="PutNoBid" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionOutputReference.putNoBid"></a>

```csharp
private void PutNoBid(RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionNoBid Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionOutputReference.putNoBid.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionNoBid">RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionNoBid</a>

---

##### `ResetHeaderTag` <a name="ResetHeaderTag" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionOutputReference.resetHeaderTag"></a>

```csharp
private void ResetHeaderTag()
```

##### `ResetNoBid` <a name="ResetNoBid" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionOutputReference.resetNoBid"></a>

```csharp
private void ResetNoBid()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionOutputReference.property.headerTag">HeaderTag</a></code> | <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionHeaderTagOutputReference">RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionHeaderTagOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionOutputReference.property.noBid">NoBid</a></code> | <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionNoBidOutputReference">RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionNoBidOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionOutputReference.property.headerTagInput">HeaderTagInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionHeaderTag">RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionHeaderTag</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionOutputReference.property.noBidInput">NoBidInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionNoBid">RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionNoBid</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeAction">RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeAction</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `HeaderTag`<sup>Required</sup> <a name="HeaderTag" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionOutputReference.property.headerTag"></a>

```csharp
public RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionHeaderTagOutputReference HeaderTag { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionHeaderTagOutputReference">RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionHeaderTagOutputReference</a>

---

##### `NoBid`<sup>Required</sup> <a name="NoBid" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionOutputReference.property.noBid"></a>

```csharp
public RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionNoBidOutputReference NoBid { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionNoBidOutputReference">RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionNoBidOutputReference</a>

---

##### `HeaderTagInput`<sup>Optional</sup> <a name="HeaderTagInput" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionOutputReference.property.headerTagInput"></a>

```csharp
public IResolvable|RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionHeaderTag HeaderTagInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionHeaderTag">RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionHeaderTag</a>

---

##### `NoBidInput`<sup>Optional</sup> <a name="NoBidInput" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionOutputReference.property.noBidInput"></a>

```csharp
public IResolvable|RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionNoBid NoBidInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionNoBid">RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionNoBid</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionOutputReference.property.internalValue"></a>

```csharp
public IResolvable|RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeAction InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeAction">RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeAction</a>

---


### RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationCriteriaList <a name="RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationCriteriaList" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationCriteriaList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationCriteriaList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationCriteriaList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationCriteriaList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationCriteriaList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationCriteriaList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationCriteriaList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationCriteriaList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationCriteriaList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationCriteriaList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationCriteriaList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationCriteriaList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationCriteriaList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationCriteriaList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationCriteriaList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationCriteriaList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationCriteriaList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationCriteriaList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationCriteriaList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationCriteriaList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationCriteriaList.get"></a>

```csharp
private RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationCriteriaOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationCriteriaList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationCriteriaList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationCriteriaList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationCriteriaList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationCriteria">RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationCriteria</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationCriteriaList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationCriteriaList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationCriteriaList.property.internalValue"></a>

```csharp
public IResolvable|RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationCriteria[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationCriteria">RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationCriteria</a>[]

---


### RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationCriteriaOutputReference <a name="RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationCriteriaOutputReference" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationCriteriaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationCriteriaOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationCriteriaOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationCriteriaOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationCriteriaOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationCriteriaOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationCriteriaOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationCriteriaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationCriteriaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationCriteriaOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationCriteriaOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationCriteriaOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationCriteriaOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationCriteriaOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationCriteriaOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationCriteriaOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationCriteriaOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationCriteriaOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationCriteriaOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationCriteriaOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationCriteriaOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationCriteriaOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationCriteriaOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationCriteriaOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationCriteriaOutputReference.resetPath">ResetPath</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationCriteriaOutputReference.resetValues">ResetValues</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationCriteriaOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationCriteriaOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationCriteriaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationCriteriaOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationCriteriaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationCriteriaOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationCriteriaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationCriteriaOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationCriteriaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationCriteriaOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationCriteriaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationCriteriaOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationCriteriaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationCriteriaOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationCriteriaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationCriteriaOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationCriteriaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationCriteriaOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationCriteriaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationCriteriaOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationCriteriaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationCriteriaOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationCriteriaOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationCriteriaOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPath` <a name="ResetPath" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationCriteriaOutputReference.resetPath"></a>

```csharp
private void ResetPath()
```

##### `ResetValues` <a name="ResetValues" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationCriteriaOutputReference.resetValues"></a>

```csharp
private void ResetValues()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationCriteriaOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationCriteriaOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationCriteriaOutputReference.property.pathInput">PathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationCriteriaOutputReference.property.valuesInput">ValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationCriteriaOutputReference.property.path">Path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationCriteriaOutputReference.property.values">Values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationCriteriaOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationCriteria">RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationCriteria</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationCriteriaOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationCriteriaOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PathInput`<sup>Optional</sup> <a name="PathInput" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationCriteriaOutputReference.property.pathInput"></a>

```csharp
public string PathInput { get; }
```

- *Type:* string

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationCriteriaOutputReference.property.valuesInput"></a>

```csharp
public string[] ValuesInput { get; }
```

- *Type:* string[]

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationCriteriaOutputReference.property.path"></a>

```csharp
public string Path { get; }
```

- *Type:* string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationCriteriaOutputReference.property.values"></a>

```csharp
public string[] Values { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationCriteriaOutputReference.property.internalValue"></a>

```csharp
public IResolvable|RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationCriteria InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationCriteria">RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationCriteria</a>

---


### RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationList <a name="RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationList" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationList.get"></a>

```csharp
private RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfiguration">RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfiguration</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationList.property.internalValue"></a>

```csharp
public IResolvable|RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfiguration[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfiguration">RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfiguration</a>[]

---


### RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationOutputReference <a name="RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationOutputReference" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationOutputReference.putCriteria">PutCriteria</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationOutputReference.resetCriteria">ResetCriteria</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCriteria` <a name="PutCriteria" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationOutputReference.putCriteria"></a>

```csharp
private void PutCriteria(IResolvable|RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationCriteria[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationOutputReference.putCriteria.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationCriteria">RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationCriteria</a>[]

---

##### `ResetCriteria` <a name="ResetCriteria" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationOutputReference.resetCriteria"></a>

```csharp
private void ResetCriteria()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationOutputReference.property.criteria">Criteria</a></code> | <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationCriteriaList">RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationCriteriaList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationOutputReference.property.criteriaInput">CriteriaInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationCriteria">RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationCriteria</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfiguration">RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Criteria`<sup>Required</sup> <a name="Criteria" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationOutputReference.property.criteria"></a>

```csharp
public RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationCriteriaList Criteria { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationCriteriaList">RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationCriteriaList</a>

---

##### `CriteriaInput`<sup>Optional</sup> <a name="CriteriaInput" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationOutputReference.property.criteriaInput"></a>

```csharp
public IResolvable|RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationCriteria[] CriteriaInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationCriteria">RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationCriteria</a>[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationOutputReference.property.internalValue"></a>

```csharp
public IResolvable|RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfiguration InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfiguration">RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfiguration</a>

---


### RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeOutputReference <a name="RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeOutputReference" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeOutputReference.putAction">PutAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeOutputReference.putFilterConfiguration">PutFilterConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeOutputReference.resetAction">ResetAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeOutputReference.resetFilterConfiguration">ResetFilterConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeOutputReference.resetFilterType">ResetFilterType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeOutputReference.resetHoldbackPercentage">ResetHoldbackPercentage</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAction` <a name="PutAction" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeOutputReference.putAction"></a>

```csharp
private void PutAction(RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeAction Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeOutputReference.putAction.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeAction">RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeAction</a>

---

##### `PutFilterConfiguration` <a name="PutFilterConfiguration" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeOutputReference.putFilterConfiguration"></a>

```csharp
private void PutFilterConfiguration(IResolvable|RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfiguration[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeOutputReference.putFilterConfiguration.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfiguration">RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfiguration</a>[]

---

##### `ResetAction` <a name="ResetAction" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeOutputReference.resetAction"></a>

```csharp
private void ResetAction()
```

##### `ResetFilterConfiguration` <a name="ResetFilterConfiguration" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeOutputReference.resetFilterConfiguration"></a>

```csharp
private void ResetFilterConfiguration()
```

##### `ResetFilterType` <a name="ResetFilterType" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeOutputReference.resetFilterType"></a>

```csharp
private void ResetFilterType()
```

##### `ResetHoldbackPercentage` <a name="ResetHoldbackPercentage" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeOutputReference.resetHoldbackPercentage"></a>

```csharp
private void ResetHoldbackPercentage()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeOutputReference.property.action">Action</a></code> | <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionOutputReference">RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeOutputReference.property.filterConfiguration">FilterConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationList">RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeOutputReference.property.actionInput">ActionInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeAction">RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeOutputReference.property.filterConfigurationInput">FilterConfigurationInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfiguration">RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfiguration</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeOutputReference.property.filterTypeInput">FilterTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeOutputReference.property.holdbackPercentageInput">HoldbackPercentageInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeOutputReference.property.filterType">FilterType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeOutputReference.property.holdbackPercentage">HoldbackPercentage</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttribute">RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttribute</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Action`<sup>Required</sup> <a name="Action" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeOutputReference.property.action"></a>

```csharp
public RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionOutputReference Action { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionOutputReference">RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionOutputReference</a>

---

##### `FilterConfiguration`<sup>Required</sup> <a name="FilterConfiguration" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeOutputReference.property.filterConfiguration"></a>

```csharp
public RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationList FilterConfiguration { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationList">RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationList</a>

---

##### `ActionInput`<sup>Optional</sup> <a name="ActionInput" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeOutputReference.property.actionInput"></a>

```csharp
public IResolvable|RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeAction ActionInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeAction">RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeAction</a>

---

##### `FilterConfigurationInput`<sup>Optional</sup> <a name="FilterConfigurationInput" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeOutputReference.property.filterConfigurationInput"></a>

```csharp
public IResolvable|RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfiguration[] FilterConfigurationInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfiguration">RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfiguration</a>[]

---

##### `FilterTypeInput`<sup>Optional</sup> <a name="FilterTypeInput" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeOutputReference.property.filterTypeInput"></a>

```csharp
public string FilterTypeInput { get; }
```

- *Type:* string

---

##### `HoldbackPercentageInput`<sup>Optional</sup> <a name="HoldbackPercentageInput" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeOutputReference.property.holdbackPercentageInput"></a>

```csharp
public double HoldbackPercentageInput { get; }
```

- *Type:* double

---

##### `FilterType`<sup>Required</sup> <a name="FilterType" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeOutputReference.property.filterType"></a>

```csharp
public string FilterType { get; }
```

- *Type:* string

---

##### `HoldbackPercentage`<sup>Required</sup> <a name="HoldbackPercentage" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeOutputReference.property.holdbackPercentage"></a>

```csharp
public double HoldbackPercentage { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeOutputReference.property.internalValue"></a>

```csharp
public IResolvable|RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttribute InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttribute">RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttribute</a>

---


### RtbfabricLinkModuleConfigurationListModuleParametersOutputReference <a name="RtbfabricLinkModuleConfigurationListModuleParametersOutputReference" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new RtbfabricLinkModuleConfigurationListModuleParametersOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOutputReference.putNoBid">PutNoBid</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOutputReference.putOpenRtbAttribute">PutOpenRtbAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOutputReference.resetNoBid">ResetNoBid</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOutputReference.resetOpenRtbAttribute">ResetOpenRtbAttribute</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutNoBid` <a name="PutNoBid" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOutputReference.putNoBid"></a>

```csharp
private void PutNoBid(RtbfabricLinkModuleConfigurationListModuleParametersNoBid Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOutputReference.putNoBid.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersNoBid">RtbfabricLinkModuleConfigurationListModuleParametersNoBid</a>

---

##### `PutOpenRtbAttribute` <a name="PutOpenRtbAttribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOutputReference.putOpenRtbAttribute"></a>

```csharp
private void PutOpenRtbAttribute(RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttribute Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOutputReference.putOpenRtbAttribute.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttribute">RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttribute</a>

---

##### `ResetNoBid` <a name="ResetNoBid" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOutputReference.resetNoBid"></a>

```csharp
private void ResetNoBid()
```

##### `ResetOpenRtbAttribute` <a name="ResetOpenRtbAttribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOutputReference.resetOpenRtbAttribute"></a>

```csharp
private void ResetOpenRtbAttribute()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOutputReference.property.noBid">NoBid</a></code> | <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersNoBidOutputReference">RtbfabricLinkModuleConfigurationListModuleParametersNoBidOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOutputReference.property.openRtbAttribute">OpenRtbAttribute</a></code> | <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeOutputReference">RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOutputReference.property.noBidInput">NoBidInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersNoBid">RtbfabricLinkModuleConfigurationListModuleParametersNoBid</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOutputReference.property.openRtbAttributeInput">OpenRtbAttributeInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttribute">RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParameters">RtbfabricLinkModuleConfigurationListModuleParameters</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NoBid`<sup>Required</sup> <a name="NoBid" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOutputReference.property.noBid"></a>

```csharp
public RtbfabricLinkModuleConfigurationListModuleParametersNoBidOutputReference NoBid { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersNoBidOutputReference">RtbfabricLinkModuleConfigurationListModuleParametersNoBidOutputReference</a>

---

##### `OpenRtbAttribute`<sup>Required</sup> <a name="OpenRtbAttribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOutputReference.property.openRtbAttribute"></a>

```csharp
public RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeOutputReference OpenRtbAttribute { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeOutputReference">RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeOutputReference</a>

---

##### `NoBidInput`<sup>Optional</sup> <a name="NoBidInput" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOutputReference.property.noBidInput"></a>

```csharp
public IResolvable|RtbfabricLinkModuleConfigurationListModuleParametersNoBid NoBidInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersNoBid">RtbfabricLinkModuleConfigurationListModuleParametersNoBid</a>

---

##### `OpenRtbAttributeInput`<sup>Optional</sup> <a name="OpenRtbAttributeInput" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOutputReference.property.openRtbAttributeInput"></a>

```csharp
public IResolvable|RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttribute OpenRtbAttributeInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttribute">RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttribute</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOutputReference.property.internalValue"></a>

```csharp
public IResolvable|RtbfabricLinkModuleConfigurationListModuleParameters InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParameters">RtbfabricLinkModuleConfigurationListModuleParameters</a>

---


### RtbfabricLinkModuleConfigurationListStructList <a name="RtbfabricLinkModuleConfigurationListStructList" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListStructList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListStructList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new RtbfabricLinkModuleConfigurationListStructList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListStructList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListStructList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListStructList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListStructList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListStructList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListStructList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListStructList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListStructList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListStructList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListStructList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListStructList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListStructList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListStructList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListStructList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListStructList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListStructList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListStructList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListStructList.get"></a>

```csharp
private RtbfabricLinkModuleConfigurationListStructOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListStructList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListStructList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListStructList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListStructList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListStruct">RtbfabricLinkModuleConfigurationListStruct</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListStructList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListStructList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListStructList.property.internalValue"></a>

```csharp
public IResolvable|RtbfabricLinkModuleConfigurationListStruct[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListStruct">RtbfabricLinkModuleConfigurationListStruct</a>[]

---


### RtbfabricLinkModuleConfigurationListStructOutputReference <a name="RtbfabricLinkModuleConfigurationListStructOutputReference" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListStructOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListStructOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new RtbfabricLinkModuleConfigurationListStructOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListStructOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListStructOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListStructOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListStructOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListStructOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListStructOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListStructOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListStructOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListStructOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListStructOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListStructOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListStructOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListStructOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListStructOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListStructOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListStructOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListStructOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListStructOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListStructOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListStructOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListStructOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListStructOutputReference.putModuleParameters">PutModuleParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListStructOutputReference.resetDependsOn">ResetDependsOn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListStructOutputReference.resetModuleParameters">ResetModuleParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListStructOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListStructOutputReference.resetVersion">ResetVersion</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListStructOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListStructOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListStructOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListStructOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListStructOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListStructOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListStructOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListStructOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListStructOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListStructOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListStructOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListStructOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListStructOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListStructOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListStructOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListStructOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListStructOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListStructOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListStructOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListStructOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListStructOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListStructOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListStructOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListStructOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutModuleParameters` <a name="PutModuleParameters" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListStructOutputReference.putModuleParameters"></a>

```csharp
private void PutModuleParameters(RtbfabricLinkModuleConfigurationListModuleParameters Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListStructOutputReference.putModuleParameters.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParameters">RtbfabricLinkModuleConfigurationListModuleParameters</a>

---

##### `ResetDependsOn` <a name="ResetDependsOn" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListStructOutputReference.resetDependsOn"></a>

```csharp
private void ResetDependsOn()
```

##### `ResetModuleParameters` <a name="ResetModuleParameters" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListStructOutputReference.resetModuleParameters"></a>

```csharp
private void ResetModuleParameters()
```

##### `ResetName` <a name="ResetName" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListStructOutputReference.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetVersion` <a name="ResetVersion" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListStructOutputReference.resetVersion"></a>

```csharp
private void ResetVersion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListStructOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListStructOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListStructOutputReference.property.moduleParameters">ModuleParameters</a></code> | <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOutputReference">RtbfabricLinkModuleConfigurationListModuleParametersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListStructOutputReference.property.dependsOnInput">DependsOnInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListStructOutputReference.property.moduleParametersInput">ModuleParametersInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParameters">RtbfabricLinkModuleConfigurationListModuleParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListStructOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListStructOutputReference.property.versionInput">VersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListStructOutputReference.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListStructOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListStructOutputReference.property.version">Version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListStructOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListStruct">RtbfabricLinkModuleConfigurationListStruct</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListStructOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListStructOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ModuleParameters`<sup>Required</sup> <a name="ModuleParameters" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListStructOutputReference.property.moduleParameters"></a>

```csharp
public RtbfabricLinkModuleConfigurationListModuleParametersOutputReference ModuleParameters { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParametersOutputReference">RtbfabricLinkModuleConfigurationListModuleParametersOutputReference</a>

---

##### `DependsOnInput`<sup>Optional</sup> <a name="DependsOnInput" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListStructOutputReference.property.dependsOnInput"></a>

```csharp
public string[] DependsOnInput { get; }
```

- *Type:* string[]

---

##### `ModuleParametersInput`<sup>Optional</sup> <a name="ModuleParametersInput" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListStructOutputReference.property.moduleParametersInput"></a>

```csharp
public IResolvable|RtbfabricLinkModuleConfigurationListModuleParameters ModuleParametersInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListModuleParameters">RtbfabricLinkModuleConfigurationListModuleParameters</a>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListStructOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `VersionInput`<sup>Optional</sup> <a name="VersionInput" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListStructOutputReference.property.versionInput"></a>

```csharp
public string VersionInput { get; }
```

- *Type:* string

---

##### `DependsOn`<sup>Required</sup> <a name="DependsOn" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListStructOutputReference.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListStructOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListStructOutputReference.property.version"></a>

```csharp
public string Version { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListStructOutputReference.property.internalValue"></a>

```csharp
public IResolvable|RtbfabricLinkModuleConfigurationListStruct InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkModuleConfigurationListStruct">RtbfabricLinkModuleConfigurationListStruct</a>

---


### RtbfabricLinkTagsList <a name="RtbfabricLinkTagsList" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new RtbfabricLinkTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkTagsList.get"></a>

```csharp
private RtbfabricLinkTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkTagsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkTags">RtbfabricLinkTags</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkTagsList.property.internalValue"></a>

```csharp
public IResolvable|RtbfabricLinkTags[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkTags">RtbfabricLinkTags</a>[]

---


### RtbfabricLinkTagsOutputReference <a name="RtbfabricLinkTagsOutputReference" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new RtbfabricLinkTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkTagsOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkTagsOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkTags">RtbfabricLinkTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkTagsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkTagsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkTagsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|RtbfabricLinkTags InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.rtbfabricLink.RtbfabricLinkTags">RtbfabricLinkTags</a>

---



