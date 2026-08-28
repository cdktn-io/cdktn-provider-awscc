# `iamSamlProvider` Submodule <a name="`iamSamlProvider` Submodule" id="@cdktn/provider-awscc.iamSamlProvider"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IamSamlProvider <a name="IamSamlProvider" id="@cdktn/provider-awscc.iamSamlProvider.IamSamlProvider"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iam_saml_provider awscc_iam_saml_provider}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iamSamlProvider.IamSamlProvider.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new IamSamlProvider(Construct Scope, string Id, IamSamlProviderConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iamSamlProvider.IamSamlProvider.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.iamSamlProvider.IamSamlProvider.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.iamSamlProvider.IamSamlProvider.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.iamSamlProvider.IamSamlProviderConfig">IamSamlProviderConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.iamSamlProvider.IamSamlProvider.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.iamSamlProvider.IamSamlProvider.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktn/provider-awscc.iamSamlProvider.IamSamlProvider.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iamSamlProvider.IamSamlProviderConfig">IamSamlProviderConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iamSamlProvider.IamSamlProvider.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.iamSamlProvider.IamSamlProvider.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.iamSamlProvider.IamSamlProvider.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iamSamlProvider.IamSamlProvider.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.iamSamlProvider.IamSamlProvider.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.iamSamlProvider.IamSamlProvider.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iamSamlProvider.IamSamlProvider.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iamSamlProvider.IamSamlProvider.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.iamSamlProvider.IamSamlProvider.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.iamSamlProvider.IamSamlProvider.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iamSamlProvider.IamSamlProvider.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iamSamlProvider.IamSamlProvider.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iamSamlProvider.IamSamlProvider.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iamSamlProvider.IamSamlProvider.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iamSamlProvider.IamSamlProvider.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iamSamlProvider.IamSamlProvider.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iamSamlProvider.IamSamlProvider.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iamSamlProvider.IamSamlProvider.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iamSamlProvider.IamSamlProvider.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iamSamlProvider.IamSamlProvider.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iamSamlProvider.IamSamlProvider.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iamSamlProvider.IamSamlProvider.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.iamSamlProvider.IamSamlProvider.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.iamSamlProvider.IamSamlProvider.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.iamSamlProvider.IamSamlProvider.putPrivateKeyList">PutPrivateKeyList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iamSamlProvider.IamSamlProvider.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iamSamlProvider.IamSamlProvider.resetAddPrivateKey">ResetAddPrivateKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iamSamlProvider.IamSamlProvider.resetAssertionEncryptionMode">ResetAssertionEncryptionMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iamSamlProvider.IamSamlProvider.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iamSamlProvider.IamSamlProvider.resetPrivateKeyList">ResetPrivateKeyList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iamSamlProvider.IamSamlProvider.resetRemovePrivateKey">ResetRemovePrivateKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iamSamlProvider.IamSamlProvider.resetSamlMetadataDocument">ResetSamlMetadataDocument</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iamSamlProvider.IamSamlProvider.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.iamSamlProvider.IamSamlProvider.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.iamSamlProvider.IamSamlProvider.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.iamSamlProvider.IamSamlProvider.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.iamSamlProvider.IamSamlProvider.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.iamSamlProvider.IamSamlProvider.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.iamSamlProvider.IamSamlProvider.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.iamSamlProvider.IamSamlProvider.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.iamSamlProvider.IamSamlProvider.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.iamSamlProvider.IamSamlProvider.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.iamSamlProvider.IamSamlProvider.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.iamSamlProvider.IamSamlProvider.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.iamSamlProvider.IamSamlProvider.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.iamSamlProvider.IamSamlProvider.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.iamSamlProvider.IamSamlProvider.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.iamSamlProvider.IamSamlProvider.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iamSamlProvider.IamSamlProvider.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.iamSamlProvider.IamSamlProvider.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iamSamlProvider.IamSamlProvider.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.iamSamlProvider.IamSamlProvider.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iamSamlProvider.IamSamlProvider.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.iamSamlProvider.IamSamlProvider.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iamSamlProvider.IamSamlProvider.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.iamSamlProvider.IamSamlProvider.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iamSamlProvider.IamSamlProvider.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.iamSamlProvider.IamSamlProvider.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iamSamlProvider.IamSamlProvider.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.iamSamlProvider.IamSamlProvider.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iamSamlProvider.IamSamlProvider.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.iamSamlProvider.IamSamlProvider.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iamSamlProvider.IamSamlProvider.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.iamSamlProvider.IamSamlProvider.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iamSamlProvider.IamSamlProvider.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.iamSamlProvider.IamSamlProvider.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.iamSamlProvider.IamSamlProvider.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.iamSamlProvider.IamSamlProvider.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.iamSamlProvider.IamSamlProvider.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.iamSamlProvider.IamSamlProvider.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iamSamlProvider.IamSamlProvider.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.iamSamlProvider.IamSamlProvider.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.iamSamlProvider.IamSamlProvider.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.iamSamlProvider.IamSamlProvider.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.iamSamlProvider.IamSamlProvider.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.iamSamlProvider.IamSamlProvider.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.iamSamlProvider.IamSamlProvider.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.iamSamlProvider.IamSamlProvider.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutPrivateKeyList` <a name="PutPrivateKeyList" id="@cdktn/provider-awscc.iamSamlProvider.IamSamlProvider.putPrivateKeyList"></a>

```csharp
private void PutPrivateKeyList(IResolvable|IamSamlProviderPrivateKeyListStruct[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.iamSamlProvider.IamSamlProvider.putPrivateKeyList.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iamSamlProvider.IamSamlProviderPrivateKeyListStruct">IamSamlProviderPrivateKeyListStruct</a>[]

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.iamSamlProvider.IamSamlProvider.putTags"></a>

```csharp
private void PutTags(IResolvable|IamSamlProviderTags[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.iamSamlProvider.IamSamlProvider.putTags.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iamSamlProvider.IamSamlProviderTags">IamSamlProviderTags</a>[]

---

##### `ResetAddPrivateKey` <a name="ResetAddPrivateKey" id="@cdktn/provider-awscc.iamSamlProvider.IamSamlProvider.resetAddPrivateKey"></a>

```csharp
private void ResetAddPrivateKey()
```

##### `ResetAssertionEncryptionMode` <a name="ResetAssertionEncryptionMode" id="@cdktn/provider-awscc.iamSamlProvider.IamSamlProvider.resetAssertionEncryptionMode"></a>

```csharp
private void ResetAssertionEncryptionMode()
```

##### `ResetName` <a name="ResetName" id="@cdktn/provider-awscc.iamSamlProvider.IamSamlProvider.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetPrivateKeyList` <a name="ResetPrivateKeyList" id="@cdktn/provider-awscc.iamSamlProvider.IamSamlProvider.resetPrivateKeyList"></a>

```csharp
private void ResetPrivateKeyList()
```

##### `ResetRemovePrivateKey` <a name="ResetRemovePrivateKey" id="@cdktn/provider-awscc.iamSamlProvider.IamSamlProvider.resetRemovePrivateKey"></a>

```csharp
private void ResetRemovePrivateKey()
```

##### `ResetSamlMetadataDocument` <a name="ResetSamlMetadataDocument" id="@cdktn/provider-awscc.iamSamlProvider.IamSamlProvider.resetSamlMetadataDocument"></a>

```csharp
private void ResetSamlMetadataDocument()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.iamSamlProvider.IamSamlProvider.resetTags"></a>

```csharp
private void ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iamSamlProvider.IamSamlProvider.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.iamSamlProvider.IamSamlProvider.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iamSamlProvider.IamSamlProvider.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iamSamlProvider.IamSamlProvider.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a IamSamlProvider resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.iamSamlProvider.IamSamlProvider.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

IamSamlProvider.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.iamSamlProvider.IamSamlProvider.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.iamSamlProvider.IamSamlProvider.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

IamSamlProvider.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.iamSamlProvider.IamSamlProvider.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.iamSamlProvider.IamSamlProvider.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

IamSamlProvider.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.iamSamlProvider.IamSamlProvider.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.iamSamlProvider.IamSamlProvider.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

IamSamlProvider.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a IamSamlProvider resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.iamSamlProvider.IamSamlProvider.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.iamSamlProvider.IamSamlProvider.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the IamSamlProvider to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.iamSamlProvider.IamSamlProvider.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing IamSamlProvider that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iam_saml_provider#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.iamSamlProvider.IamSamlProvider.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the IamSamlProvider to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iamSamlProvider.IamSamlProvider.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.iamSamlProvider.IamSamlProvider.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iamSamlProvider.IamSamlProvider.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iamSamlProvider.IamSamlProvider.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iamSamlProvider.IamSamlProvider.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iamSamlProvider.IamSamlProvider.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iamSamlProvider.IamSamlProvider.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iamSamlProvider.IamSamlProvider.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iamSamlProvider.IamSamlProvider.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iamSamlProvider.IamSamlProvider.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iamSamlProvider.IamSamlProvider.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iamSamlProvider.IamSamlProvider.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iamSamlProvider.IamSamlProvider.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iamSamlProvider.IamSamlProvider.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iamSamlProvider.IamSamlProvider.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iamSamlProvider.IamSamlProvider.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iamSamlProvider.IamSamlProvider.property.privateKeyList">PrivateKeyList</a></code> | <code><a href="#@cdktn/provider-awscc.iamSamlProvider.IamSamlProviderPrivateKeyListStructList">IamSamlProviderPrivateKeyListStructList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iamSamlProvider.IamSamlProvider.property.samlProviderUuid">SamlProviderUuid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iamSamlProvider.IamSamlProvider.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.iamSamlProvider.IamSamlProviderTagsList">IamSamlProviderTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iamSamlProvider.IamSamlProvider.property.addPrivateKeyInput">AddPrivateKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iamSamlProvider.IamSamlProvider.property.assertionEncryptionModeInput">AssertionEncryptionModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iamSamlProvider.IamSamlProvider.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iamSamlProvider.IamSamlProvider.property.privateKeyListInput">PrivateKeyListInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iamSamlProvider.IamSamlProviderPrivateKeyListStruct">IamSamlProviderPrivateKeyListStruct</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iamSamlProvider.IamSamlProvider.property.removePrivateKeyInput">RemovePrivateKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iamSamlProvider.IamSamlProvider.property.samlMetadataDocumentInput">SamlMetadataDocumentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iamSamlProvider.IamSamlProvider.property.tagsInput">TagsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iamSamlProvider.IamSamlProviderTags">IamSamlProviderTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iamSamlProvider.IamSamlProvider.property.addPrivateKey">AddPrivateKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iamSamlProvider.IamSamlProvider.property.assertionEncryptionMode">AssertionEncryptionMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iamSamlProvider.IamSamlProvider.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iamSamlProvider.IamSamlProvider.property.removePrivateKey">RemovePrivateKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iamSamlProvider.IamSamlProvider.property.samlMetadataDocument">SamlMetadataDocument</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.iamSamlProvider.IamSamlProvider.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.iamSamlProvider.IamSamlProvider.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.iamSamlProvider.IamSamlProvider.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.iamSamlProvider.IamSamlProvider.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.iamSamlProvider.IamSamlProvider.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.iamSamlProvider.IamSamlProvider.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.iamSamlProvider.IamSamlProvider.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.iamSamlProvider.IamSamlProvider.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.iamSamlProvider.IamSamlProvider.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.iamSamlProvider.IamSamlProvider.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.iamSamlProvider.IamSamlProvider.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.iamSamlProvider.IamSamlProvider.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.iamSamlProvider.IamSamlProvider.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.iamSamlProvider.IamSamlProvider.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.iamSamlProvider.IamSamlProvider.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.iamSamlProvider.IamSamlProvider.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `PrivateKeyList`<sup>Required</sup> <a name="PrivateKeyList" id="@cdktn/provider-awscc.iamSamlProvider.IamSamlProvider.property.privateKeyList"></a>

```csharp
public IamSamlProviderPrivateKeyListStructList PrivateKeyList { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.iamSamlProvider.IamSamlProviderPrivateKeyListStructList">IamSamlProviderPrivateKeyListStructList</a>

---

##### `SamlProviderUuid`<sup>Required</sup> <a name="SamlProviderUuid" id="@cdktn/provider-awscc.iamSamlProvider.IamSamlProvider.property.samlProviderUuid"></a>

```csharp
public string SamlProviderUuid { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.iamSamlProvider.IamSamlProvider.property.tags"></a>

```csharp
public IamSamlProviderTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.iamSamlProvider.IamSamlProviderTagsList">IamSamlProviderTagsList</a>

---

##### `AddPrivateKeyInput`<sup>Optional</sup> <a name="AddPrivateKeyInput" id="@cdktn/provider-awscc.iamSamlProvider.IamSamlProvider.property.addPrivateKeyInput"></a>

```csharp
public string AddPrivateKeyInput { get; }
```

- *Type:* string

---

##### `AssertionEncryptionModeInput`<sup>Optional</sup> <a name="AssertionEncryptionModeInput" id="@cdktn/provider-awscc.iamSamlProvider.IamSamlProvider.property.assertionEncryptionModeInput"></a>

```csharp
public string AssertionEncryptionModeInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.iamSamlProvider.IamSamlProvider.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `PrivateKeyListInput`<sup>Optional</sup> <a name="PrivateKeyListInput" id="@cdktn/provider-awscc.iamSamlProvider.IamSamlProvider.property.privateKeyListInput"></a>

```csharp
public IResolvable|IamSamlProviderPrivateKeyListStruct[] PrivateKeyListInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iamSamlProvider.IamSamlProviderPrivateKeyListStruct">IamSamlProviderPrivateKeyListStruct</a>[]

---

##### `RemovePrivateKeyInput`<sup>Optional</sup> <a name="RemovePrivateKeyInput" id="@cdktn/provider-awscc.iamSamlProvider.IamSamlProvider.property.removePrivateKeyInput"></a>

```csharp
public string RemovePrivateKeyInput { get; }
```

- *Type:* string

---

##### `SamlMetadataDocumentInput`<sup>Optional</sup> <a name="SamlMetadataDocumentInput" id="@cdktn/provider-awscc.iamSamlProvider.IamSamlProvider.property.samlMetadataDocumentInput"></a>

```csharp
public string SamlMetadataDocumentInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.iamSamlProvider.IamSamlProvider.property.tagsInput"></a>

```csharp
public IResolvable|IamSamlProviderTags[] TagsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iamSamlProvider.IamSamlProviderTags">IamSamlProviderTags</a>[]

---

##### `AddPrivateKey`<sup>Required</sup> <a name="AddPrivateKey" id="@cdktn/provider-awscc.iamSamlProvider.IamSamlProvider.property.addPrivateKey"></a>

```csharp
public string AddPrivateKey { get; }
```

- *Type:* string

---

##### `AssertionEncryptionMode`<sup>Required</sup> <a name="AssertionEncryptionMode" id="@cdktn/provider-awscc.iamSamlProvider.IamSamlProvider.property.assertionEncryptionMode"></a>

```csharp
public string AssertionEncryptionMode { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.iamSamlProvider.IamSamlProvider.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `RemovePrivateKey`<sup>Required</sup> <a name="RemovePrivateKey" id="@cdktn/provider-awscc.iamSamlProvider.IamSamlProvider.property.removePrivateKey"></a>

```csharp
public string RemovePrivateKey { get; }
```

- *Type:* string

---

##### `SamlMetadataDocument`<sup>Required</sup> <a name="SamlMetadataDocument" id="@cdktn/provider-awscc.iamSamlProvider.IamSamlProvider.property.samlMetadataDocument"></a>

```csharp
public string SamlMetadataDocument { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iamSamlProvider.IamSamlProvider.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.iamSamlProvider.IamSamlProvider.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### IamSamlProviderConfig <a name="IamSamlProviderConfig" id="@cdktn/provider-awscc.iamSamlProvider.IamSamlProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iamSamlProvider.IamSamlProviderConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new IamSamlProviderConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string AddPrivateKey = null,
    string AssertionEncryptionMode = null,
    string Name = null,
    IResolvable|IamSamlProviderPrivateKeyListStruct[] PrivateKeyList = null,
    string RemovePrivateKey = null,
    string SamlMetadataDocument = null,
    IResolvable|IamSamlProviderTags[] Tags = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iamSamlProvider.IamSamlProviderConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iamSamlProvider.IamSamlProviderConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iamSamlProvider.IamSamlProviderConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iamSamlProvider.IamSamlProviderConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iamSamlProvider.IamSamlProviderConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iamSamlProvider.IamSamlProviderConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iamSamlProvider.IamSamlProviderConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iamSamlProvider.IamSamlProviderConfig.property.addPrivateKey">AddPrivateKey</a></code> | <code>string</code> | The private key from your external identity provider. |
| <code><a href="#@cdktn/provider-awscc.iamSamlProvider.IamSamlProviderConfig.property.assertionEncryptionMode">AssertionEncryptionMode</a></code> | <code>string</code> | The encryption setting for the SAML provider. |
| <code><a href="#@cdktn/provider-awscc.iamSamlProvider.IamSamlProviderConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iam_saml_provider#name IamSamlProvider#name}. |
| <code><a href="#@cdktn/provider-awscc.iamSamlProvider.IamSamlProviderConfig.property.privateKeyList">PrivateKeyList</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iamSamlProvider.IamSamlProviderPrivateKeyListStruct">IamSamlProviderPrivateKeyListStruct</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iam_saml_provider#private_key_list IamSamlProvider#private_key_list}. |
| <code><a href="#@cdktn/provider-awscc.iamSamlProvider.IamSamlProviderConfig.property.removePrivateKey">RemovePrivateKey</a></code> | <code>string</code> | The Key ID of the private key to remove. |
| <code><a href="#@cdktn/provider-awscc.iamSamlProvider.IamSamlProviderConfig.property.samlMetadataDocument">SamlMetadataDocument</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iam_saml_provider#saml_metadata_document IamSamlProvider#saml_metadata_document}. |
| <code><a href="#@cdktn/provider-awscc.iamSamlProvider.IamSamlProviderConfig.property.tags">Tags</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iamSamlProvider.IamSamlProviderTags">IamSamlProviderTags</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iam_saml_provider#tags IamSamlProvider#tags}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.iamSamlProvider.IamSamlProviderConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.iamSamlProvider.IamSamlProviderConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.iamSamlProvider.IamSamlProviderConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.iamSamlProvider.IamSamlProviderConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.iamSamlProvider.IamSamlProviderConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.iamSamlProvider.IamSamlProviderConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.iamSamlProvider.IamSamlProviderConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `AddPrivateKey`<sup>Optional</sup> <a name="AddPrivateKey" id="@cdktn/provider-awscc.iamSamlProvider.IamSamlProviderConfig.property.addPrivateKey"></a>

```csharp
public string AddPrivateKey { get; set; }
```

- *Type:* string

The private key from your external identity provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iam_saml_provider#add_private_key IamSamlProvider#add_private_key}

---

##### `AssertionEncryptionMode`<sup>Optional</sup> <a name="AssertionEncryptionMode" id="@cdktn/provider-awscc.iamSamlProvider.IamSamlProviderConfig.property.assertionEncryptionMode"></a>

```csharp
public string AssertionEncryptionMode { get; set; }
```

- *Type:* string

The encryption setting for the SAML provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iam_saml_provider#assertion_encryption_mode IamSamlProvider#assertion_encryption_mode}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-awscc.iamSamlProvider.IamSamlProviderConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iam_saml_provider#name IamSamlProvider#name}.

---

##### `PrivateKeyList`<sup>Optional</sup> <a name="PrivateKeyList" id="@cdktn/provider-awscc.iamSamlProvider.IamSamlProviderConfig.property.privateKeyList"></a>

```csharp
public IResolvable|IamSamlProviderPrivateKeyListStruct[] PrivateKeyList { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iamSamlProvider.IamSamlProviderPrivateKeyListStruct">IamSamlProviderPrivateKeyListStruct</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iam_saml_provider#private_key_list IamSamlProvider#private_key_list}.

---

##### `RemovePrivateKey`<sup>Optional</sup> <a name="RemovePrivateKey" id="@cdktn/provider-awscc.iamSamlProvider.IamSamlProviderConfig.property.removePrivateKey"></a>

```csharp
public string RemovePrivateKey { get; set; }
```

- *Type:* string

The Key ID of the private key to remove.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iam_saml_provider#remove_private_key IamSamlProvider#remove_private_key}

---

##### `SamlMetadataDocument`<sup>Optional</sup> <a name="SamlMetadataDocument" id="@cdktn/provider-awscc.iamSamlProvider.IamSamlProviderConfig.property.samlMetadataDocument"></a>

```csharp
public string SamlMetadataDocument { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iam_saml_provider#saml_metadata_document IamSamlProvider#saml_metadata_document}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.iamSamlProvider.IamSamlProviderConfig.property.tags"></a>

```csharp
public IResolvable|IamSamlProviderTags[] Tags { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iamSamlProvider.IamSamlProviderTags">IamSamlProviderTags</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iam_saml_provider#tags IamSamlProvider#tags}.

---

### IamSamlProviderPrivateKeyListStruct <a name="IamSamlProviderPrivateKeyListStruct" id="@cdktn/provider-awscc.iamSamlProvider.IamSamlProviderPrivateKeyListStruct"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iamSamlProvider.IamSamlProviderPrivateKeyListStruct.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new IamSamlProviderPrivateKeyListStruct {
    string KeyId = null,
    string Timestamp = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iamSamlProvider.IamSamlProviderPrivateKeyListStruct.property.keyId">KeyId</a></code> | <code>string</code> | The unique identifier for the SAML private key. |
| <code><a href="#@cdktn/provider-awscc.iamSamlProvider.IamSamlProviderPrivateKeyListStruct.property.timestamp">Timestamp</a></code> | <code>string</code> | The date and time, in <a href=\"http://www.iso.org/iso/iso8601\">ISO 8601 date-time </a> format, when the private key was uploaded. |

---

##### `KeyId`<sup>Optional</sup> <a name="KeyId" id="@cdktn/provider-awscc.iamSamlProvider.IamSamlProviderPrivateKeyListStruct.property.keyId"></a>

```csharp
public string KeyId { get; set; }
```

- *Type:* string

The unique identifier for the SAML private key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iam_saml_provider#key_id IamSamlProvider#key_id}

---

##### `Timestamp`<sup>Optional</sup> <a name="Timestamp" id="@cdktn/provider-awscc.iamSamlProvider.IamSamlProviderPrivateKeyListStruct.property.timestamp"></a>

```csharp
public string Timestamp { get; set; }
```

- *Type:* string

The date and time, in <a href=\"http://www.iso.org/iso/iso8601\">ISO 8601 date-time </a> format, when the private key was uploaded.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iam_saml_provider#timestamp IamSamlProvider#timestamp}

---

### IamSamlProviderTags <a name="IamSamlProviderTags" id="@cdktn/provider-awscc.iamSamlProvider.IamSamlProviderTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iamSamlProvider.IamSamlProviderTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new IamSamlProviderTags {
    string Key = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iamSamlProvider.IamSamlProviderTags.property.key">Key</a></code> | <code>string</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.iamSamlProvider.IamSamlProviderTags.property.value">Value</a></code> | <code>string</code> | The value for the tag. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.iamSamlProvider.IamSamlProviderTags.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

The key name of the tag.

You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iam_saml_provider#key IamSamlProvider#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.iamSamlProvider.IamSamlProviderTags.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

The value for the tag.

You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iam_saml_provider#value IamSamlProvider#value}

---

## Classes <a name="Classes" id="Classes"></a>

### IamSamlProviderPrivateKeyListStructList <a name="IamSamlProviderPrivateKeyListStructList" id="@cdktn/provider-awscc.iamSamlProvider.IamSamlProviderPrivateKeyListStructList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iamSamlProvider.IamSamlProviderPrivateKeyListStructList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new IamSamlProviderPrivateKeyListStructList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iamSamlProvider.IamSamlProviderPrivateKeyListStructList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iamSamlProvider.IamSamlProviderPrivateKeyListStructList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iamSamlProvider.IamSamlProviderPrivateKeyListStructList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.iamSamlProvider.IamSamlProviderPrivateKeyListStructList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iamSamlProvider.IamSamlProviderPrivateKeyListStructList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.iamSamlProvider.IamSamlProviderPrivateKeyListStructList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iamSamlProvider.IamSamlProviderPrivateKeyListStructList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.iamSamlProvider.IamSamlProviderPrivateKeyListStructList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iamSamlProvider.IamSamlProviderPrivateKeyListStructList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iamSamlProvider.IamSamlProviderPrivateKeyListStructList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iamSamlProvider.IamSamlProviderPrivateKeyListStructList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.iamSamlProvider.IamSamlProviderPrivateKeyListStructList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.iamSamlProvider.IamSamlProviderPrivateKeyListStructList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.iamSamlProvider.IamSamlProviderPrivateKeyListStructList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.iamSamlProvider.IamSamlProviderPrivateKeyListStructList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.iamSamlProvider.IamSamlProviderPrivateKeyListStructList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.iamSamlProvider.IamSamlProviderPrivateKeyListStructList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.iamSamlProvider.IamSamlProviderPrivateKeyListStructList.get"></a>

```csharp
private IamSamlProviderPrivateKeyListStructOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.iamSamlProvider.IamSamlProviderPrivateKeyListStructList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iamSamlProvider.IamSamlProviderPrivateKeyListStructList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iamSamlProvider.IamSamlProviderPrivateKeyListStructList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iamSamlProvider.IamSamlProviderPrivateKeyListStructList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iamSamlProvider.IamSamlProviderPrivateKeyListStruct">IamSamlProviderPrivateKeyListStruct</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.iamSamlProvider.IamSamlProviderPrivateKeyListStructList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.iamSamlProvider.IamSamlProviderPrivateKeyListStructList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.iamSamlProvider.IamSamlProviderPrivateKeyListStructList.property.internalValue"></a>

```csharp
public IResolvable|IamSamlProviderPrivateKeyListStruct[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iamSamlProvider.IamSamlProviderPrivateKeyListStruct">IamSamlProviderPrivateKeyListStruct</a>[]

---


### IamSamlProviderPrivateKeyListStructOutputReference <a name="IamSamlProviderPrivateKeyListStructOutputReference" id="@cdktn/provider-awscc.iamSamlProvider.IamSamlProviderPrivateKeyListStructOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iamSamlProvider.IamSamlProviderPrivateKeyListStructOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new IamSamlProviderPrivateKeyListStructOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iamSamlProvider.IamSamlProviderPrivateKeyListStructOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iamSamlProvider.IamSamlProviderPrivateKeyListStructOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iamSamlProvider.IamSamlProviderPrivateKeyListStructOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.iamSamlProvider.IamSamlProviderPrivateKeyListStructOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.iamSamlProvider.IamSamlProviderPrivateKeyListStructOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iamSamlProvider.IamSamlProviderPrivateKeyListStructOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.iamSamlProvider.IamSamlProviderPrivateKeyListStructOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.iamSamlProvider.IamSamlProviderPrivateKeyListStructOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iamSamlProvider.IamSamlProviderPrivateKeyListStructOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iamSamlProvider.IamSamlProviderPrivateKeyListStructOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iamSamlProvider.IamSamlProviderPrivateKeyListStructOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iamSamlProvider.IamSamlProviderPrivateKeyListStructOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iamSamlProvider.IamSamlProviderPrivateKeyListStructOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iamSamlProvider.IamSamlProviderPrivateKeyListStructOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iamSamlProvider.IamSamlProviderPrivateKeyListStructOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iamSamlProvider.IamSamlProviderPrivateKeyListStructOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iamSamlProvider.IamSamlProviderPrivateKeyListStructOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iamSamlProvider.IamSamlProviderPrivateKeyListStructOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iamSamlProvider.IamSamlProviderPrivateKeyListStructOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iamSamlProvider.IamSamlProviderPrivateKeyListStructOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iamSamlProvider.IamSamlProviderPrivateKeyListStructOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iamSamlProvider.IamSamlProviderPrivateKeyListStructOutputReference.resetKeyId">ResetKeyId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iamSamlProvider.IamSamlProviderPrivateKeyListStructOutputReference.resetTimestamp">ResetTimestamp</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.iamSamlProvider.IamSamlProviderPrivateKeyListStructOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.iamSamlProvider.IamSamlProviderPrivateKeyListStructOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iamSamlProvider.IamSamlProviderPrivateKeyListStructOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.iamSamlProvider.IamSamlProviderPrivateKeyListStructOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iamSamlProvider.IamSamlProviderPrivateKeyListStructOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.iamSamlProvider.IamSamlProviderPrivateKeyListStructOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iamSamlProvider.IamSamlProviderPrivateKeyListStructOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.iamSamlProvider.IamSamlProviderPrivateKeyListStructOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iamSamlProvider.IamSamlProviderPrivateKeyListStructOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.iamSamlProvider.IamSamlProviderPrivateKeyListStructOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iamSamlProvider.IamSamlProviderPrivateKeyListStructOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.iamSamlProvider.IamSamlProviderPrivateKeyListStructOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iamSamlProvider.IamSamlProviderPrivateKeyListStructOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.iamSamlProvider.IamSamlProviderPrivateKeyListStructOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iamSamlProvider.IamSamlProviderPrivateKeyListStructOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.iamSamlProvider.IamSamlProviderPrivateKeyListStructOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iamSamlProvider.IamSamlProviderPrivateKeyListStructOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.iamSamlProvider.IamSamlProviderPrivateKeyListStructOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iamSamlProvider.IamSamlProviderPrivateKeyListStructOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.iamSamlProvider.IamSamlProviderPrivateKeyListStructOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.iamSamlProvider.IamSamlProviderPrivateKeyListStructOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.iamSamlProvider.IamSamlProviderPrivateKeyListStructOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.iamSamlProvider.IamSamlProviderPrivateKeyListStructOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.iamSamlProvider.IamSamlProviderPrivateKeyListStructOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKeyId` <a name="ResetKeyId" id="@cdktn/provider-awscc.iamSamlProvider.IamSamlProviderPrivateKeyListStructOutputReference.resetKeyId"></a>

```csharp
private void ResetKeyId()
```

##### `ResetTimestamp` <a name="ResetTimestamp" id="@cdktn/provider-awscc.iamSamlProvider.IamSamlProviderPrivateKeyListStructOutputReference.resetTimestamp"></a>

```csharp
private void ResetTimestamp()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iamSamlProvider.IamSamlProviderPrivateKeyListStructOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iamSamlProvider.IamSamlProviderPrivateKeyListStructOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iamSamlProvider.IamSamlProviderPrivateKeyListStructOutputReference.property.keyIdInput">KeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iamSamlProvider.IamSamlProviderPrivateKeyListStructOutputReference.property.timestampInput">TimestampInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iamSamlProvider.IamSamlProviderPrivateKeyListStructOutputReference.property.keyId">KeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iamSamlProvider.IamSamlProviderPrivateKeyListStructOutputReference.property.timestamp">Timestamp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iamSamlProvider.IamSamlProviderPrivateKeyListStructOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iamSamlProvider.IamSamlProviderPrivateKeyListStruct">IamSamlProviderPrivateKeyListStruct</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.iamSamlProvider.IamSamlProviderPrivateKeyListStructOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.iamSamlProvider.IamSamlProviderPrivateKeyListStructOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyIdInput`<sup>Optional</sup> <a name="KeyIdInput" id="@cdktn/provider-awscc.iamSamlProvider.IamSamlProviderPrivateKeyListStructOutputReference.property.keyIdInput"></a>

```csharp
public string KeyIdInput { get; }
```

- *Type:* string

---

##### `TimestampInput`<sup>Optional</sup> <a name="TimestampInput" id="@cdktn/provider-awscc.iamSamlProvider.IamSamlProviderPrivateKeyListStructOutputReference.property.timestampInput"></a>

```csharp
public string TimestampInput { get; }
```

- *Type:* string

---

##### `KeyId`<sup>Required</sup> <a name="KeyId" id="@cdktn/provider-awscc.iamSamlProvider.IamSamlProviderPrivateKeyListStructOutputReference.property.keyId"></a>

```csharp
public string KeyId { get; }
```

- *Type:* string

---

##### `Timestamp`<sup>Required</sup> <a name="Timestamp" id="@cdktn/provider-awscc.iamSamlProvider.IamSamlProviderPrivateKeyListStructOutputReference.property.timestamp"></a>

```csharp
public string Timestamp { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.iamSamlProvider.IamSamlProviderPrivateKeyListStructOutputReference.property.internalValue"></a>

```csharp
public IResolvable|IamSamlProviderPrivateKeyListStruct InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iamSamlProvider.IamSamlProviderPrivateKeyListStruct">IamSamlProviderPrivateKeyListStruct</a>

---


### IamSamlProviderTagsList <a name="IamSamlProviderTagsList" id="@cdktn/provider-awscc.iamSamlProvider.IamSamlProviderTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iamSamlProvider.IamSamlProviderTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new IamSamlProviderTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iamSamlProvider.IamSamlProviderTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iamSamlProvider.IamSamlProviderTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iamSamlProvider.IamSamlProviderTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.iamSamlProvider.IamSamlProviderTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iamSamlProvider.IamSamlProviderTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.iamSamlProvider.IamSamlProviderTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iamSamlProvider.IamSamlProviderTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.iamSamlProvider.IamSamlProviderTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iamSamlProvider.IamSamlProviderTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iamSamlProvider.IamSamlProviderTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iamSamlProvider.IamSamlProviderTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.iamSamlProvider.IamSamlProviderTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.iamSamlProvider.IamSamlProviderTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.iamSamlProvider.IamSamlProviderTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.iamSamlProvider.IamSamlProviderTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.iamSamlProvider.IamSamlProviderTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.iamSamlProvider.IamSamlProviderTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.iamSamlProvider.IamSamlProviderTagsList.get"></a>

```csharp
private IamSamlProviderTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.iamSamlProvider.IamSamlProviderTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iamSamlProvider.IamSamlProviderTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iamSamlProvider.IamSamlProviderTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iamSamlProvider.IamSamlProviderTagsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iamSamlProvider.IamSamlProviderTags">IamSamlProviderTags</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.iamSamlProvider.IamSamlProviderTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.iamSamlProvider.IamSamlProviderTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.iamSamlProvider.IamSamlProviderTagsList.property.internalValue"></a>

```csharp
public IResolvable|IamSamlProviderTags[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iamSamlProvider.IamSamlProviderTags">IamSamlProviderTags</a>[]

---


### IamSamlProviderTagsOutputReference <a name="IamSamlProviderTagsOutputReference" id="@cdktn/provider-awscc.iamSamlProvider.IamSamlProviderTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iamSamlProvider.IamSamlProviderTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new IamSamlProviderTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iamSamlProvider.IamSamlProviderTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iamSamlProvider.IamSamlProviderTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iamSamlProvider.IamSamlProviderTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.iamSamlProvider.IamSamlProviderTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.iamSamlProvider.IamSamlProviderTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iamSamlProvider.IamSamlProviderTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.iamSamlProvider.IamSamlProviderTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.iamSamlProvider.IamSamlProviderTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iamSamlProvider.IamSamlProviderTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iamSamlProvider.IamSamlProviderTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iamSamlProvider.IamSamlProviderTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iamSamlProvider.IamSamlProviderTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iamSamlProvider.IamSamlProviderTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iamSamlProvider.IamSamlProviderTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iamSamlProvider.IamSamlProviderTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iamSamlProvider.IamSamlProviderTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iamSamlProvider.IamSamlProviderTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iamSamlProvider.IamSamlProviderTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iamSamlProvider.IamSamlProviderTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iamSamlProvider.IamSamlProviderTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iamSamlProvider.IamSamlProviderTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iamSamlProvider.IamSamlProviderTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iamSamlProvider.IamSamlProviderTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.iamSamlProvider.IamSamlProviderTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.iamSamlProvider.IamSamlProviderTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iamSamlProvider.IamSamlProviderTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.iamSamlProvider.IamSamlProviderTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iamSamlProvider.IamSamlProviderTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.iamSamlProvider.IamSamlProviderTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iamSamlProvider.IamSamlProviderTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.iamSamlProvider.IamSamlProviderTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iamSamlProvider.IamSamlProviderTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.iamSamlProvider.IamSamlProviderTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iamSamlProvider.IamSamlProviderTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.iamSamlProvider.IamSamlProviderTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iamSamlProvider.IamSamlProviderTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.iamSamlProvider.IamSamlProviderTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iamSamlProvider.IamSamlProviderTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.iamSamlProvider.IamSamlProviderTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iamSamlProvider.IamSamlProviderTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.iamSamlProvider.IamSamlProviderTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iamSamlProvider.IamSamlProviderTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.iamSamlProvider.IamSamlProviderTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.iamSamlProvider.IamSamlProviderTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.iamSamlProvider.IamSamlProviderTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.iamSamlProvider.IamSamlProviderTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.iamSamlProvider.IamSamlProviderTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.iamSamlProvider.IamSamlProviderTagsOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.iamSamlProvider.IamSamlProviderTagsOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iamSamlProvider.IamSamlProviderTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iamSamlProvider.IamSamlProviderTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iamSamlProvider.IamSamlProviderTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iamSamlProvider.IamSamlProviderTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iamSamlProvider.IamSamlProviderTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iamSamlProvider.IamSamlProviderTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iamSamlProvider.IamSamlProviderTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iamSamlProvider.IamSamlProviderTags">IamSamlProviderTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.iamSamlProvider.IamSamlProviderTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.iamSamlProvider.IamSamlProviderTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.iamSamlProvider.IamSamlProviderTagsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.iamSamlProvider.IamSamlProviderTagsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.iamSamlProvider.IamSamlProviderTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.iamSamlProvider.IamSamlProviderTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.iamSamlProvider.IamSamlProviderTagsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|IamSamlProviderTags InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iamSamlProvider.IamSamlProviderTags">IamSamlProviderTags</a>

---



