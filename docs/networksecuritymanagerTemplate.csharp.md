# `networksecuritymanagerTemplate` Submodule <a name="`networksecuritymanagerTemplate` Submodule" id="@cdktn/provider-awscc.networksecuritymanagerTemplate"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NetworksecuritymanagerTemplate <a name="NetworksecuritymanagerTemplate" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplate"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/networksecuritymanager_template awscc_networksecuritymanager_template}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplate.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new NetworksecuritymanagerTemplate(Construct Scope, string Id, NetworksecuritymanagerTemplateConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplate.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplate.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplate.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateConfig">NetworksecuritymanagerTemplateConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplate.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplate.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplate.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateConfig">NetworksecuritymanagerTemplateConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplate.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplate.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplate.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplate.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplate.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplate.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplate.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplate.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplate.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplate.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplate.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplate.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplate.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplate.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplate.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplate.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplate.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplate.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplate.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplate.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplate.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplate.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplate.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplate.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplate.putAssociatedRuleList">PutAssociatedRuleList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplate.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplate.resetAssociatedRuleList">ResetAssociatedRuleList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplate.resetFirewallType">ResetFirewallType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplate.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplate.resetTemplateDescription">ResetTemplateDescription</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplate.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplate.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplate.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplate.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplate.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplate.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplate.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplate.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplate.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplate.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplate.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplate.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplate.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplate.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplate.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplate.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplate.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplate.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplate.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplate.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplate.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplate.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplate.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplate.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplate.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplate.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplate.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplate.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplate.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplate.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplate.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplate.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplate.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplate.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplate.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplate.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplate.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplate.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplate.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplate.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplate.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplate.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplate.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplate.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplate.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAssociatedRuleList` <a name="PutAssociatedRuleList" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplate.putAssociatedRuleList"></a>

```csharp
private void PutAssociatedRuleList(IResolvable|NetworksecuritymanagerTemplateAssociatedRuleListStruct[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplate.putAssociatedRuleList.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateAssociatedRuleListStruct">NetworksecuritymanagerTemplateAssociatedRuleListStruct</a>[]

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplate.putTags"></a>

```csharp
private void PutTags(IResolvable|NetworksecuritymanagerTemplateTags[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplate.putTags.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateTags">NetworksecuritymanagerTemplateTags</a>[]

---

##### `ResetAssociatedRuleList` <a name="ResetAssociatedRuleList" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplate.resetAssociatedRuleList"></a>

```csharp
private void ResetAssociatedRuleList()
```

##### `ResetFirewallType` <a name="ResetFirewallType" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplate.resetFirewallType"></a>

```csharp
private void ResetFirewallType()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplate.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTemplateDescription` <a name="ResetTemplateDescription" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplate.resetTemplateDescription"></a>

```csharp
private void ResetTemplateDescription()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplate.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplate.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplate.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplate.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a NetworksecuritymanagerTemplate resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplate.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

NetworksecuritymanagerTemplate.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplate.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplate.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

NetworksecuritymanagerTemplate.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplate.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplate.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

NetworksecuritymanagerTemplate.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplate.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplate.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

NetworksecuritymanagerTemplate.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a NetworksecuritymanagerTemplate resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplate.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplate.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the NetworksecuritymanagerTemplate to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplate.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing NetworksecuritymanagerTemplate that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/networksecuritymanager_template#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplate.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the NetworksecuritymanagerTemplate to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplate.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplate.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplate.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplate.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplate.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplate.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplate.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplate.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplate.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplate.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplate.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplate.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplate.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplate.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplate.property.associatedRuleList">AssociatedRuleList</a></code> | <code><a href="#@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateAssociatedRuleListStructList">NetworksecuritymanagerTemplateAssociatedRuleListStructList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplate.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplate.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplate.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateTagsList">NetworksecuritymanagerTemplateTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplate.property.templateArn">TemplateArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplate.property.templateId">TemplateId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplate.property.updatedAt">UpdatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplate.property.version">Version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplate.property.associatedRuleListInput">AssociatedRuleListInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateAssociatedRuleListStruct">NetworksecuritymanagerTemplateAssociatedRuleListStruct</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplate.property.firewallTypeInput">FirewallTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplate.property.tagsInput">TagsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateTags">NetworksecuritymanagerTemplateTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplate.property.templateDescriptionInput">TemplateDescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplate.property.templateNameInput">TemplateNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplate.property.firewallType">FirewallType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplate.property.templateDescription">TemplateDescription</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplate.property.templateName">TemplateName</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplate.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplate.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplate.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplate.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplate.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplate.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplate.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplate.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplate.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplate.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplate.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplate.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplate.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplate.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `AssociatedRuleList`<sup>Required</sup> <a name="AssociatedRuleList" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplate.property.associatedRuleList"></a>

```csharp
public NetworksecuritymanagerTemplateAssociatedRuleListStructList AssociatedRuleList { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateAssociatedRuleListStructList">NetworksecuritymanagerTemplateAssociatedRuleListStructList</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplate.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplate.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplate.property.tags"></a>

```csharp
public NetworksecuritymanagerTemplateTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateTagsList">NetworksecuritymanagerTemplateTagsList</a>

---

##### `TemplateArn`<sup>Required</sup> <a name="TemplateArn" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplate.property.templateArn"></a>

```csharp
public string TemplateArn { get; }
```

- *Type:* string

---

##### `TemplateId`<sup>Required</sup> <a name="TemplateId" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplate.property.templateId"></a>

```csharp
public string TemplateId { get; }
```

- *Type:* string

---

##### `UpdatedAt`<sup>Required</sup> <a name="UpdatedAt" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplate.property.updatedAt"></a>

```csharp
public string UpdatedAt { get; }
```

- *Type:* string

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplate.property.version"></a>

```csharp
public string Version { get; }
```

- *Type:* string

---

##### `AssociatedRuleListInput`<sup>Optional</sup> <a name="AssociatedRuleListInput" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplate.property.associatedRuleListInput"></a>

```csharp
public IResolvable|NetworksecuritymanagerTemplateAssociatedRuleListStruct[] AssociatedRuleListInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateAssociatedRuleListStruct">NetworksecuritymanagerTemplateAssociatedRuleListStruct</a>[]

---

##### `FirewallTypeInput`<sup>Optional</sup> <a name="FirewallTypeInput" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplate.property.firewallTypeInput"></a>

```csharp
public string FirewallTypeInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplate.property.tagsInput"></a>

```csharp
public IResolvable|NetworksecuritymanagerTemplateTags[] TagsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateTags">NetworksecuritymanagerTemplateTags</a>[]

---

##### `TemplateDescriptionInput`<sup>Optional</sup> <a name="TemplateDescriptionInput" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplate.property.templateDescriptionInput"></a>

```csharp
public string TemplateDescriptionInput { get; }
```

- *Type:* string

---

##### `TemplateNameInput`<sup>Optional</sup> <a name="TemplateNameInput" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplate.property.templateNameInput"></a>

```csharp
public string TemplateNameInput { get; }
```

- *Type:* string

---

##### `FirewallType`<sup>Required</sup> <a name="FirewallType" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplate.property.firewallType"></a>

```csharp
public string FirewallType { get; }
```

- *Type:* string

---

##### `TemplateDescription`<sup>Required</sup> <a name="TemplateDescription" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplate.property.templateDescription"></a>

```csharp
public string TemplateDescription { get; }
```

- *Type:* string

---

##### `TemplateName`<sup>Required</sup> <a name="TemplateName" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplate.property.templateName"></a>

```csharp
public string TemplateName { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplate.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplate.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### NetworksecuritymanagerTemplateAssociatedRuleListStruct <a name="NetworksecuritymanagerTemplateAssociatedRuleListStruct" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateAssociatedRuleListStruct"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateAssociatedRuleListStruct.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new NetworksecuritymanagerTemplateAssociatedRuleListStruct {
    string RuleArn = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateAssociatedRuleListStruct.property.ruleArn">RuleArn</a></code> | <code>string</code> | ARN of the associated rule. |

---

##### `RuleArn`<sup>Optional</sup> <a name="RuleArn" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateAssociatedRuleListStruct.property.ruleArn"></a>

```csharp
public string RuleArn { get; set; }
```

- *Type:* string

ARN of the associated rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/networksecuritymanager_template#rule_arn NetworksecuritymanagerTemplate#rule_arn}

---

### NetworksecuritymanagerTemplateConfig <a name="NetworksecuritymanagerTemplateConfig" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new NetworksecuritymanagerTemplateConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string TemplateName,
    IResolvable|NetworksecuritymanagerTemplateAssociatedRuleListStruct[] AssociatedRuleList = null,
    string FirewallType = null,
    IResolvable|NetworksecuritymanagerTemplateTags[] Tags = null,
    string TemplateDescription = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateConfig.property.templateName">TemplateName</a></code> | <code>string</code> | The name of the template. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateConfig.property.associatedRuleList">AssociatedRuleList</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateAssociatedRuleListStruct">NetworksecuritymanagerTemplateAssociatedRuleListStruct</a>[]</code> | List of rules associated with this template. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateConfig.property.firewallType">FirewallType</a></code> | <code>string</code> | The type of firewall. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateConfig.property.tags">Tags</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateTags">NetworksecuritymanagerTemplateTags</a>[]</code> | The tags associated with the template. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateConfig.property.templateDescription">TemplateDescription</a></code> | <code>string</code> | A description of the template. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `TemplateName`<sup>Required</sup> <a name="TemplateName" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateConfig.property.templateName"></a>

```csharp
public string TemplateName { get; set; }
```

- *Type:* string

The name of the template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/networksecuritymanager_template#template_name NetworksecuritymanagerTemplate#template_name}

---

##### `AssociatedRuleList`<sup>Optional</sup> <a name="AssociatedRuleList" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateConfig.property.associatedRuleList"></a>

```csharp
public IResolvable|NetworksecuritymanagerTemplateAssociatedRuleListStruct[] AssociatedRuleList { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateAssociatedRuleListStruct">NetworksecuritymanagerTemplateAssociatedRuleListStruct</a>[]

List of rules associated with this template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/networksecuritymanager_template#associated_rule_list NetworksecuritymanagerTemplate#associated_rule_list}

---

##### `FirewallType`<sup>Optional</sup> <a name="FirewallType" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateConfig.property.firewallType"></a>

```csharp
public string FirewallType { get; set; }
```

- *Type:* string

The type of firewall.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/networksecuritymanager_template#firewall_type NetworksecuritymanagerTemplate#firewall_type}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateConfig.property.tags"></a>

```csharp
public IResolvable|NetworksecuritymanagerTemplateTags[] Tags { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateTags">NetworksecuritymanagerTemplateTags</a>[]

The tags associated with the template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/networksecuritymanager_template#tags NetworksecuritymanagerTemplate#tags}

---

##### `TemplateDescription`<sup>Optional</sup> <a name="TemplateDescription" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateConfig.property.templateDescription"></a>

```csharp
public string TemplateDescription { get; set; }
```

- *Type:* string

A description of the template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/networksecuritymanager_template#template_description NetworksecuritymanagerTemplate#template_description}

---

### NetworksecuritymanagerTemplateTags <a name="NetworksecuritymanagerTemplateTags" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new NetworksecuritymanagerTemplateTags {
    string Key = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateTags.property.key">Key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/networksecuritymanager_template#key NetworksecuritymanagerTemplate#key}. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateTags.property.value">Value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/networksecuritymanager_template#value NetworksecuritymanagerTemplate#value}. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateTags.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/networksecuritymanager_template#key NetworksecuritymanagerTemplate#key}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateTags.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/networksecuritymanager_template#value NetworksecuritymanagerTemplate#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### NetworksecuritymanagerTemplateAssociatedRuleListStructList <a name="NetworksecuritymanagerTemplateAssociatedRuleListStructList" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateAssociatedRuleListStructList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateAssociatedRuleListStructList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new NetworksecuritymanagerTemplateAssociatedRuleListStructList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateAssociatedRuleListStructList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateAssociatedRuleListStructList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateAssociatedRuleListStructList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateAssociatedRuleListStructList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateAssociatedRuleListStructList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateAssociatedRuleListStructList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateAssociatedRuleListStructList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateAssociatedRuleListStructList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateAssociatedRuleListStructList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateAssociatedRuleListStructList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateAssociatedRuleListStructList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateAssociatedRuleListStructList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateAssociatedRuleListStructList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateAssociatedRuleListStructList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateAssociatedRuleListStructList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateAssociatedRuleListStructList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateAssociatedRuleListStructList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateAssociatedRuleListStructList.get"></a>

```csharp
private NetworksecuritymanagerTemplateAssociatedRuleListStructOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateAssociatedRuleListStructList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateAssociatedRuleListStructList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateAssociatedRuleListStructList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateAssociatedRuleListStructList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateAssociatedRuleListStruct">NetworksecuritymanagerTemplateAssociatedRuleListStruct</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateAssociatedRuleListStructList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateAssociatedRuleListStructList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateAssociatedRuleListStructList.property.internalValue"></a>

```csharp
public IResolvable|NetworksecuritymanagerTemplateAssociatedRuleListStruct[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateAssociatedRuleListStruct">NetworksecuritymanagerTemplateAssociatedRuleListStruct</a>[]

---


### NetworksecuritymanagerTemplateAssociatedRuleListStructOutputReference <a name="NetworksecuritymanagerTemplateAssociatedRuleListStructOutputReference" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateAssociatedRuleListStructOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateAssociatedRuleListStructOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new NetworksecuritymanagerTemplateAssociatedRuleListStructOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateAssociatedRuleListStructOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateAssociatedRuleListStructOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateAssociatedRuleListStructOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateAssociatedRuleListStructOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateAssociatedRuleListStructOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateAssociatedRuleListStructOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateAssociatedRuleListStructOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateAssociatedRuleListStructOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateAssociatedRuleListStructOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateAssociatedRuleListStructOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateAssociatedRuleListStructOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateAssociatedRuleListStructOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateAssociatedRuleListStructOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateAssociatedRuleListStructOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateAssociatedRuleListStructOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateAssociatedRuleListStructOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateAssociatedRuleListStructOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateAssociatedRuleListStructOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateAssociatedRuleListStructOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateAssociatedRuleListStructOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateAssociatedRuleListStructOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateAssociatedRuleListStructOutputReference.resetRuleArn">ResetRuleArn</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateAssociatedRuleListStructOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateAssociatedRuleListStructOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateAssociatedRuleListStructOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateAssociatedRuleListStructOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateAssociatedRuleListStructOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateAssociatedRuleListStructOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateAssociatedRuleListStructOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateAssociatedRuleListStructOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateAssociatedRuleListStructOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateAssociatedRuleListStructOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateAssociatedRuleListStructOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateAssociatedRuleListStructOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateAssociatedRuleListStructOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateAssociatedRuleListStructOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateAssociatedRuleListStructOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateAssociatedRuleListStructOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateAssociatedRuleListStructOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateAssociatedRuleListStructOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateAssociatedRuleListStructOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateAssociatedRuleListStructOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateAssociatedRuleListStructOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateAssociatedRuleListStructOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateAssociatedRuleListStructOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateAssociatedRuleListStructOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRuleArn` <a name="ResetRuleArn" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateAssociatedRuleListStructOutputReference.resetRuleArn"></a>

```csharp
private void ResetRuleArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateAssociatedRuleListStructOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateAssociatedRuleListStructOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateAssociatedRuleListStructOutputReference.property.ruleArnInput">RuleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateAssociatedRuleListStructOutputReference.property.ruleArn">RuleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateAssociatedRuleListStructOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateAssociatedRuleListStruct">NetworksecuritymanagerTemplateAssociatedRuleListStruct</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateAssociatedRuleListStructOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateAssociatedRuleListStructOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `RuleArnInput`<sup>Optional</sup> <a name="RuleArnInput" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateAssociatedRuleListStructOutputReference.property.ruleArnInput"></a>

```csharp
public string RuleArnInput { get; }
```

- *Type:* string

---

##### `RuleArn`<sup>Required</sup> <a name="RuleArn" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateAssociatedRuleListStructOutputReference.property.ruleArn"></a>

```csharp
public string RuleArn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateAssociatedRuleListStructOutputReference.property.internalValue"></a>

```csharp
public IResolvable|NetworksecuritymanagerTemplateAssociatedRuleListStruct InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateAssociatedRuleListStruct">NetworksecuritymanagerTemplateAssociatedRuleListStruct</a>

---


### NetworksecuritymanagerTemplateTagsList <a name="NetworksecuritymanagerTemplateTagsList" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new NetworksecuritymanagerTemplateTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateTagsList.get"></a>

```csharp
private NetworksecuritymanagerTemplateTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateTagsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateTags">NetworksecuritymanagerTemplateTags</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateTagsList.property.internalValue"></a>

```csharp
public IResolvable|NetworksecuritymanagerTemplateTags[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateTags">NetworksecuritymanagerTemplateTags</a>[]

---


### NetworksecuritymanagerTemplateTagsOutputReference <a name="NetworksecuritymanagerTemplateTagsOutputReference" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new NetworksecuritymanagerTemplateTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateTagsOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateTagsOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateTags">NetworksecuritymanagerTemplateTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateTagsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateTagsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateTagsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|NetworksecuritymanagerTemplateTags InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateTags">NetworksecuritymanagerTemplateTags</a>

---



