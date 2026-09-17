# `fmsApplicationsList` Submodule <a name="`fmsApplicationsList` Submodule" id="@cdktn/provider-awscc.fmsApplicationsList"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### FmsApplicationsList <a name="FmsApplicationsList" id="@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsList"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/fms_applications_list awscc_fms_applications_list}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new FmsApplicationsList(Construct Scope, string Id, FmsApplicationsListConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsList.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsList.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsList.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsListConfig">FmsApplicationsListConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsList.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsList.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsList.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsListConfig">FmsApplicationsListConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsList.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsList.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsList.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsList.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsList.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsList.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsList.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsList.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsList.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsList.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsList.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsList.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsList.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsList.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsList.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsList.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsList.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsList.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsList.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsList.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsList.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsList.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsList.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsList.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsList.putAppsList">PutAppsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsList.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsList.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsList.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsList.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsList.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsList.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsList.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsList.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsList.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsList.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsList.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsList.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsList.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsList.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsList.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsList.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsList.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsList.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsList.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsList.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsList.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsList.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsList.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsList.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsList.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsList.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsList.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsList.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsList.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsList.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsList.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsList.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsList.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsList.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsList.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsList.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsList.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsList.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsList.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsList.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsList.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsList.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsList.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsList.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsList.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsList.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsList.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAppsList` <a name="PutAppsList" id="@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsList.putAppsList"></a>

```csharp
private void PutAppsList(IResolvable|FmsApplicationsListAppsListStruct[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsList.putAppsList.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsListAppsListStruct">FmsApplicationsListAppsListStruct</a>[]

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsList.putTags"></a>

```csharp
private void PutTags(IResolvable|FmsApplicationsListTags[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsList.putTags.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsListTags">FmsApplicationsListTags</a>[]

---

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsList.resetTags"></a>

```csharp
private void ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsList.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsList.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsList.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsList.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a FmsApplicationsList resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsList.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

FmsApplicationsList.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsList.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsList.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

FmsApplicationsList.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsList.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsList.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

FmsApplicationsList.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsList.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsList.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

FmsApplicationsList.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a FmsApplicationsList resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsList.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsList.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the FmsApplicationsList to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsList.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing FmsApplicationsList that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/fms_applications_list#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsList.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the FmsApplicationsList to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsList.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsList.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsList.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsList.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsList.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsList.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsList.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsList.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsList.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsList.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsList.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsList.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsList.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsList.property.appsList">AppsList</a></code> | <code><a href="#@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsListAppsListStructList">FmsApplicationsListAppsListStructList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsList.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsList.property.createTime">CreateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsList.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsList.property.lastUpdateTime">LastUpdateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsList.property.listId">ListId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsList.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsListTagsList">FmsApplicationsListTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsList.property.appsListInput">AppsListInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsListAppsListStruct">FmsApplicationsListAppsListStruct</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsList.property.listNameInput">ListNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsList.property.tagsInput">TagsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsListTags">FmsApplicationsListTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsList.property.listName">ListName</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsList.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsList.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsList.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsList.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsList.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsList.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsList.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsList.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsList.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsList.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsList.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsList.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsList.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `AppsList`<sup>Required</sup> <a name="AppsList" id="@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsList.property.appsList"></a>

```csharp
public FmsApplicationsListAppsListStructList AppsList { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsListAppsListStructList">FmsApplicationsListAppsListStructList</a>

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsList.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsList.property.createTime"></a>

```csharp
public string CreateTime { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsList.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `LastUpdateTime`<sup>Required</sup> <a name="LastUpdateTime" id="@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsList.property.lastUpdateTime"></a>

```csharp
public string LastUpdateTime { get; }
```

- *Type:* string

---

##### `ListId`<sup>Required</sup> <a name="ListId" id="@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsList.property.listId"></a>

```csharp
public string ListId { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsList.property.tags"></a>

```csharp
public FmsApplicationsListTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsListTagsList">FmsApplicationsListTagsList</a>

---

##### `AppsListInput`<sup>Optional</sup> <a name="AppsListInput" id="@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsList.property.appsListInput"></a>

```csharp
public IResolvable|FmsApplicationsListAppsListStruct[] AppsListInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsListAppsListStruct">FmsApplicationsListAppsListStruct</a>[]

---

##### `ListNameInput`<sup>Optional</sup> <a name="ListNameInput" id="@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsList.property.listNameInput"></a>

```csharp
public string ListNameInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsList.property.tagsInput"></a>

```csharp
public IResolvable|FmsApplicationsListTags[] TagsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsListTags">FmsApplicationsListTags</a>[]

---

##### `ListName`<sup>Required</sup> <a name="ListName" id="@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsList.property.listName"></a>

```csharp
public string ListName { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsList.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsList.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### FmsApplicationsListAppsListStruct <a name="FmsApplicationsListAppsListStruct" id="@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsListAppsListStruct"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsListAppsListStruct.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new FmsApplicationsListAppsListStruct {
    string AppName,
    double Port,
    string Protocol
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsListAppsListStruct.property.appName">AppName</a></code> | <code>string</code> | The application's name. |
| <code><a href="#@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsListAppsListStruct.property.port">Port</a></code> | <code>double</code> | The application's port number, for example 80. |
| <code><a href="#@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsListAppsListStruct.property.protocol">Protocol</a></code> | <code>string</code> | The IP protocol name or number. |

---

##### `AppName`<sup>Required</sup> <a name="AppName" id="@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsListAppsListStruct.property.appName"></a>

```csharp
public string AppName { get; set; }
```

- *Type:* string

The application's name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/fms_applications_list#app_name FmsApplicationsList#app_name}

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsListAppsListStruct.property.port"></a>

```csharp
public double Port { get; set; }
```

- *Type:* double

The application's port number, for example 80.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/fms_applications_list#port FmsApplicationsList#port}

---

##### `Protocol`<sup>Required</sup> <a name="Protocol" id="@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsListAppsListStruct.property.protocol"></a>

```csharp
public string Protocol { get; set; }
```

- *Type:* string

The IP protocol name or number.

The name can be one of tcp, udp, or icmp. For information on possible numbers, see Protocol Numbers (https://www.iana.org/assignments/protocol-numbers/protocol-numbers.xhtml).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/fms_applications_list#protocol FmsApplicationsList#protocol}

---

### FmsApplicationsListConfig <a name="FmsApplicationsListConfig" id="@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsListConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsListConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new FmsApplicationsListConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    IResolvable|FmsApplicationsListAppsListStruct[] AppsList,
    string ListName,
    IResolvable|FmsApplicationsListTags[] Tags = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsListConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsListConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsListConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsListConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsListConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsListConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsListConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsListConfig.property.appsList">AppsList</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsListAppsListStruct">FmsApplicationsListAppsListStruct</a>[]</code> | An array of applications in the Firewall Manager applications list. |
| <code><a href="#@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsListConfig.property.listName">ListName</a></code> | <code>string</code> | The name of the Firewall Manager applications list. |
| <code><a href="#@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsListConfig.property.tags">Tags</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsListTags">FmsApplicationsListTags</a>[]</code> | An array of key-value pairs to apply to the applications list. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsListConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsListConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsListConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsListConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsListConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsListConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsListConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `AppsList`<sup>Required</sup> <a name="AppsList" id="@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsListConfig.property.appsList"></a>

```csharp
public IResolvable|FmsApplicationsListAppsListStruct[] AppsList { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsListAppsListStruct">FmsApplicationsListAppsListStruct</a>[]

An array of applications in the Firewall Manager applications list.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/fms_applications_list#apps_list FmsApplicationsList#apps_list}

---

##### `ListName`<sup>Required</sup> <a name="ListName" id="@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsListConfig.property.listName"></a>

```csharp
public string ListName { get; set; }
```

- *Type:* string

The name of the Firewall Manager applications list.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/fms_applications_list#list_name FmsApplicationsList#list_name}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsListConfig.property.tags"></a>

```csharp
public IResolvable|FmsApplicationsListTags[] Tags { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsListTags">FmsApplicationsListTags</a>[]

An array of key-value pairs to apply to the applications list.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/fms_applications_list#tags FmsApplicationsList#tags}

---

### FmsApplicationsListTags <a name="FmsApplicationsListTags" id="@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsListTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsListTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new FmsApplicationsListTags {
    string Key = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsListTags.property.key">Key</a></code> | <code>string</code> | The tag key. |
| <code><a href="#@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsListTags.property.value">Value</a></code> | <code>string</code> | The tag value. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsListTags.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

The tag key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/fms_applications_list#key FmsApplicationsList#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsListTags.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

The tag value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/fms_applications_list#value FmsApplicationsList#value}

---

## Classes <a name="Classes" id="Classes"></a>

### FmsApplicationsListAppsListStructList <a name="FmsApplicationsListAppsListStructList" id="@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsListAppsListStructList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsListAppsListStructList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new FmsApplicationsListAppsListStructList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsListAppsListStructList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsListAppsListStructList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsListAppsListStructList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsListAppsListStructList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsListAppsListStructList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsListAppsListStructList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsListAppsListStructList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsListAppsListStructList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsListAppsListStructList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsListAppsListStructList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsListAppsListStructList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsListAppsListStructList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsListAppsListStructList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsListAppsListStructList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsListAppsListStructList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsListAppsListStructList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsListAppsListStructList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsListAppsListStructList.get"></a>

```csharp
private FmsApplicationsListAppsListStructOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsListAppsListStructList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsListAppsListStructList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsListAppsListStructList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsListAppsListStructList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsListAppsListStruct">FmsApplicationsListAppsListStruct</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsListAppsListStructList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsListAppsListStructList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsListAppsListStructList.property.internalValue"></a>

```csharp
public IResolvable|FmsApplicationsListAppsListStruct[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsListAppsListStruct">FmsApplicationsListAppsListStruct</a>[]

---


### FmsApplicationsListAppsListStructOutputReference <a name="FmsApplicationsListAppsListStructOutputReference" id="@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsListAppsListStructOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsListAppsListStructOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new FmsApplicationsListAppsListStructOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsListAppsListStructOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsListAppsListStructOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsListAppsListStructOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsListAppsListStructOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsListAppsListStructOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsListAppsListStructOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsListAppsListStructOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsListAppsListStructOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsListAppsListStructOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsListAppsListStructOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsListAppsListStructOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsListAppsListStructOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsListAppsListStructOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsListAppsListStructOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsListAppsListStructOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsListAppsListStructOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsListAppsListStructOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsListAppsListStructOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsListAppsListStructOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsListAppsListStructOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsListAppsListStructOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsListAppsListStructOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsListAppsListStructOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsListAppsListStructOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsListAppsListStructOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsListAppsListStructOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsListAppsListStructOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsListAppsListStructOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsListAppsListStructOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsListAppsListStructOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsListAppsListStructOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsListAppsListStructOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsListAppsListStructOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsListAppsListStructOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsListAppsListStructOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsListAppsListStructOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsListAppsListStructOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsListAppsListStructOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsListAppsListStructOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsListAppsListStructOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsListAppsListStructOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsListAppsListStructOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsListAppsListStructOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsListAppsListStructOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsListAppsListStructOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsListAppsListStructOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsListAppsListStructOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsListAppsListStructOutputReference.property.appNameInput">AppNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsListAppsListStructOutputReference.property.portInput">PortInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsListAppsListStructOutputReference.property.protocolInput">ProtocolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsListAppsListStructOutputReference.property.appName">AppName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsListAppsListStructOutputReference.property.port">Port</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsListAppsListStructOutputReference.property.protocol">Protocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsListAppsListStructOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsListAppsListStruct">FmsApplicationsListAppsListStruct</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsListAppsListStructOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsListAppsListStructOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AppNameInput`<sup>Optional</sup> <a name="AppNameInput" id="@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsListAppsListStructOutputReference.property.appNameInput"></a>

```csharp
public string AppNameInput { get; }
```

- *Type:* string

---

##### `PortInput`<sup>Optional</sup> <a name="PortInput" id="@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsListAppsListStructOutputReference.property.portInput"></a>

```csharp
public double PortInput { get; }
```

- *Type:* double

---

##### `ProtocolInput`<sup>Optional</sup> <a name="ProtocolInput" id="@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsListAppsListStructOutputReference.property.protocolInput"></a>

```csharp
public string ProtocolInput { get; }
```

- *Type:* string

---

##### `AppName`<sup>Required</sup> <a name="AppName" id="@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsListAppsListStructOutputReference.property.appName"></a>

```csharp
public string AppName { get; }
```

- *Type:* string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsListAppsListStructOutputReference.property.port"></a>

```csharp
public double Port { get; }
```

- *Type:* double

---

##### `Protocol`<sup>Required</sup> <a name="Protocol" id="@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsListAppsListStructOutputReference.property.protocol"></a>

```csharp
public string Protocol { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsListAppsListStructOutputReference.property.internalValue"></a>

```csharp
public IResolvable|FmsApplicationsListAppsListStruct InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsListAppsListStruct">FmsApplicationsListAppsListStruct</a>

---


### FmsApplicationsListTagsList <a name="FmsApplicationsListTagsList" id="@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsListTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsListTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new FmsApplicationsListTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsListTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsListTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsListTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsListTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsListTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsListTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsListTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsListTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsListTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsListTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsListTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsListTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsListTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsListTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsListTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsListTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsListTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsListTagsList.get"></a>

```csharp
private FmsApplicationsListTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsListTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsListTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsListTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsListTagsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsListTags">FmsApplicationsListTags</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsListTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsListTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsListTagsList.property.internalValue"></a>

```csharp
public IResolvable|FmsApplicationsListTags[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsListTags">FmsApplicationsListTags</a>[]

---


### FmsApplicationsListTagsOutputReference <a name="FmsApplicationsListTagsOutputReference" id="@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsListTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsListTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new FmsApplicationsListTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsListTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsListTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsListTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsListTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsListTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsListTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsListTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsListTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsListTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsListTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsListTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsListTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsListTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsListTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsListTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsListTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsListTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsListTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsListTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsListTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsListTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsListTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsListTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsListTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsListTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsListTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsListTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsListTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsListTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsListTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsListTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsListTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsListTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsListTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsListTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsListTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsListTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsListTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsListTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsListTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsListTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsListTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsListTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsListTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsListTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsListTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsListTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsListTagsOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsListTagsOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsListTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsListTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsListTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsListTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsListTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsListTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsListTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsListTags">FmsApplicationsListTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsListTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsListTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsListTagsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsListTagsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsListTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsListTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsListTagsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|FmsApplicationsListTags InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.fmsApplicationsList.FmsApplicationsListTags">FmsApplicationsListTags</a>

---



