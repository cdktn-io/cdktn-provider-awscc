# `connectPhoneNumber` Submodule <a name="`connectPhoneNumber` Submodule" id="@cdktn/provider-awscc.connectPhoneNumber"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ConnectPhoneNumber <a name="ConnectPhoneNumber" id="@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumber"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/connect_phone_number awscc_connect_phone_number}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumber.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ConnectPhoneNumber(Construct Scope, string Id, ConnectPhoneNumberConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumber.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumber.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumber.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumberConfig">ConnectPhoneNumberConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumber.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumber.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumber.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumberConfig">ConnectPhoneNumberConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumber.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumber.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumber.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumber.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumber.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumber.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumber.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumber.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumber.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumber.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumber.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumber.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumber.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumber.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumber.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumber.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumber.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumber.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumber.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumber.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumber.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumber.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumber.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumber.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumber.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumber.resetCountryCode">ResetCountryCode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumber.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumber.resetPrefix">ResetPrefix</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumber.resetSourcePhoneNumberArn">ResetSourcePhoneNumberArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumber.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumber.resetType">ResetType</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumber.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumber.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumber.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumber.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumber.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumber.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumber.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumber.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumber.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumber.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumber.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumber.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumber.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumber.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumber.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumber.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumber.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumber.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumber.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumber.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumber.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumber.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumber.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumber.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumber.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumber.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumber.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumber.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumber.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumber.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumber.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumber.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumber.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumber.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumber.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumber.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumber.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumber.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumber.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumber.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumber.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumber.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumber.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumber.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumber.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumber.putTags"></a>

```csharp
private void PutTags(IResolvable|ConnectPhoneNumberTags[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumber.putTags.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumberTags">ConnectPhoneNumberTags</a>[]

---

##### `ResetCountryCode` <a name="ResetCountryCode" id="@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumber.resetCountryCode"></a>

```csharp
private void ResetCountryCode()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumber.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetPrefix` <a name="ResetPrefix" id="@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumber.resetPrefix"></a>

```csharp
private void ResetPrefix()
```

##### `ResetSourcePhoneNumberArn` <a name="ResetSourcePhoneNumberArn" id="@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumber.resetSourcePhoneNumberArn"></a>

```csharp
private void ResetSourcePhoneNumberArn()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumber.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetType` <a name="ResetType" id="@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumber.resetType"></a>

```csharp
private void ResetType()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumber.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumber.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumber.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumber.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a ConnectPhoneNumber resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumber.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

ConnectPhoneNumber.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumber.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumber.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

ConnectPhoneNumber.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumber.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumber.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

ConnectPhoneNumber.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumber.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumber.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

ConnectPhoneNumber.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a ConnectPhoneNumber resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumber.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumber.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ConnectPhoneNumber to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumber.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ConnectPhoneNumber that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/connect_phone_number#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumber.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the ConnectPhoneNumber to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumber.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumber.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumber.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumber.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumber.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumber.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumber.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumber.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumber.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumber.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumber.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumber.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumber.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumber.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumber.property.address">Address</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumber.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumber.property.phoneNumberArn">PhoneNumberArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumber.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumberTagsList">ConnectPhoneNumberTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumber.property.countryCodeInput">CountryCodeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumber.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumber.property.prefixInput">PrefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumber.property.sourcePhoneNumberArnInput">SourcePhoneNumberArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumber.property.tagsInput">TagsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumberTags">ConnectPhoneNumberTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumber.property.targetArnInput">TargetArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumber.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumber.property.countryCode">CountryCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumber.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumber.property.prefix">Prefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumber.property.sourcePhoneNumberArn">SourcePhoneNumberArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumber.property.targetArn">TargetArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumber.property.type">Type</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumber.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumber.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumber.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumber.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumber.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumber.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumber.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumber.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumber.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumber.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumber.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumber.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumber.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumber.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Address`<sup>Required</sup> <a name="Address" id="@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumber.property.address"></a>

```csharp
public string Address { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumber.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `PhoneNumberArn`<sup>Required</sup> <a name="PhoneNumberArn" id="@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumber.property.phoneNumberArn"></a>

```csharp
public string PhoneNumberArn { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumber.property.tags"></a>

```csharp
public ConnectPhoneNumberTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumberTagsList">ConnectPhoneNumberTagsList</a>

---

##### `CountryCodeInput`<sup>Optional</sup> <a name="CountryCodeInput" id="@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumber.property.countryCodeInput"></a>

```csharp
public string CountryCodeInput { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumber.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `PrefixInput`<sup>Optional</sup> <a name="PrefixInput" id="@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumber.property.prefixInput"></a>

```csharp
public string PrefixInput { get; }
```

- *Type:* string

---

##### `SourcePhoneNumberArnInput`<sup>Optional</sup> <a name="SourcePhoneNumberArnInput" id="@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumber.property.sourcePhoneNumberArnInput"></a>

```csharp
public string SourcePhoneNumberArnInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumber.property.tagsInput"></a>

```csharp
public IResolvable|ConnectPhoneNumberTags[] TagsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumberTags">ConnectPhoneNumberTags</a>[]

---

##### `TargetArnInput`<sup>Optional</sup> <a name="TargetArnInput" id="@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumber.property.targetArnInput"></a>

```csharp
public string TargetArnInput { get; }
```

- *Type:* string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumber.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `CountryCode`<sup>Required</sup> <a name="CountryCode" id="@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumber.property.countryCode"></a>

```csharp
public string CountryCode { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumber.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Prefix`<sup>Required</sup> <a name="Prefix" id="@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumber.property.prefix"></a>

```csharp
public string Prefix { get; }
```

- *Type:* string

---

##### `SourcePhoneNumberArn`<sup>Required</sup> <a name="SourcePhoneNumberArn" id="@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumber.property.sourcePhoneNumberArn"></a>

```csharp
public string SourcePhoneNumberArn { get; }
```

- *Type:* string

---

##### `TargetArn`<sup>Required</sup> <a name="TargetArn" id="@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumber.property.targetArn"></a>

```csharp
public string TargetArn { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumber.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumber.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumber.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ConnectPhoneNumberConfig <a name="ConnectPhoneNumberConfig" id="@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumberConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumberConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ConnectPhoneNumberConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string TargetArn,
    string CountryCode = null,
    string Description = null,
    string Prefix = null,
    string SourcePhoneNumberArn = null,
    IResolvable|ConnectPhoneNumberTags[] Tags = null,
    string Type = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumberConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumberConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumberConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumberConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumberConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumberConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumberConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumberConfig.property.targetArn">TargetArn</a></code> | <code>string</code> | The ARN of the target the phone number is claimed to. |
| <code><a href="#@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumberConfig.property.countryCode">CountryCode</a></code> | <code>string</code> | The phone number country code. |
| <code><a href="#@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumberConfig.property.description">Description</a></code> | <code>string</code> | The description of the phone number. |
| <code><a href="#@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumberConfig.property.prefix">Prefix</a></code> | <code>string</code> | The phone number prefix. |
| <code><a href="#@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumberConfig.property.sourcePhoneNumberArn">SourcePhoneNumberArn</a></code> | <code>string</code> | The source phone number arn. |
| <code><a href="#@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumberConfig.property.tags">Tags</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumberTags">ConnectPhoneNumberTags</a>[]</code> | One or more tags. |
| <code><a href="#@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumberConfig.property.type">Type</a></code> | <code>string</code> | The phone number type. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumberConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumberConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumberConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumberConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumberConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumberConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumberConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `TargetArn`<sup>Required</sup> <a name="TargetArn" id="@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumberConfig.property.targetArn"></a>

```csharp
public string TargetArn { get; set; }
```

- *Type:* string

The ARN of the target the phone number is claimed to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/connect_phone_number#target_arn ConnectPhoneNumber#target_arn}

---

##### `CountryCode`<sup>Optional</sup> <a name="CountryCode" id="@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumberConfig.property.countryCode"></a>

```csharp
public string CountryCode { get; set; }
```

- *Type:* string

The phone number country code.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/connect_phone_number#country_code ConnectPhoneNumber#country_code}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumberConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

The description of the phone number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/connect_phone_number#description ConnectPhoneNumber#description}

---

##### `Prefix`<sup>Optional</sup> <a name="Prefix" id="@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumberConfig.property.prefix"></a>

```csharp
public string Prefix { get; set; }
```

- *Type:* string

The phone number prefix.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/connect_phone_number#prefix ConnectPhoneNumber#prefix}

---

##### `SourcePhoneNumberArn`<sup>Optional</sup> <a name="SourcePhoneNumberArn" id="@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumberConfig.property.sourcePhoneNumberArn"></a>

```csharp
public string SourcePhoneNumberArn { get; set; }
```

- *Type:* string

The source phone number arn.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/connect_phone_number#source_phone_number_arn ConnectPhoneNumber#source_phone_number_arn}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumberConfig.property.tags"></a>

```csharp
public IResolvable|ConnectPhoneNumberTags[] Tags { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumberTags">ConnectPhoneNumberTags</a>[]

One or more tags.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/connect_phone_number#tags ConnectPhoneNumber#tags}

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumberConfig.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

The phone number type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/connect_phone_number#type ConnectPhoneNumber#type}

---

### ConnectPhoneNumberTags <a name="ConnectPhoneNumberTags" id="@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumberTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumberTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ConnectPhoneNumberTags {
    string Key = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumberTags.property.key">Key</a></code> | <code>string</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumberTags.property.value">Value</a></code> | <code>string</code> | The value for the tag. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumberTags.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

The key name of the tag.

You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/connect_phone_number#key ConnectPhoneNumber#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumberTags.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

The value for the tag.

You can specify a value that is 1 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/connect_phone_number#value ConnectPhoneNumber#value}

---

## Classes <a name="Classes" id="Classes"></a>

### ConnectPhoneNumberTagsList <a name="ConnectPhoneNumberTagsList" id="@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumberTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumberTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ConnectPhoneNumberTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumberTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumberTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumberTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumberTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumberTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumberTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumberTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumberTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumberTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumberTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumberTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumberTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumberTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumberTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumberTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumberTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumberTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumberTagsList.get"></a>

```csharp
private ConnectPhoneNumberTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumberTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumberTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumberTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumberTagsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumberTags">ConnectPhoneNumberTags</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumberTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumberTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumberTagsList.property.internalValue"></a>

```csharp
public IResolvable|ConnectPhoneNumberTags[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumberTags">ConnectPhoneNumberTags</a>[]

---


### ConnectPhoneNumberTagsOutputReference <a name="ConnectPhoneNumberTagsOutputReference" id="@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumberTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumberTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ConnectPhoneNumberTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumberTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumberTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumberTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumberTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumberTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumberTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumberTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumberTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumberTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumberTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumberTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumberTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumberTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumberTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumberTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumberTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumberTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumberTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumberTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumberTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumberTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumberTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumberTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumberTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumberTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumberTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumberTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumberTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumberTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumberTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumberTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumberTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumberTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumberTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumberTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumberTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumberTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumberTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumberTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumberTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumberTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumberTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumberTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumberTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumberTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumberTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumberTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumberTagsOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumberTagsOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumberTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumberTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumberTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumberTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumberTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumberTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumberTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumberTags">ConnectPhoneNumberTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumberTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumberTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumberTagsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumberTagsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumberTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumberTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumberTagsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ConnectPhoneNumberTags InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.connectPhoneNumber.ConnectPhoneNumberTags">ConnectPhoneNumberTags</a>

---



