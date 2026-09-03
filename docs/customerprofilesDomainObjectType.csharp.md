# `customerprofilesDomainObjectType` Submodule <a name="`customerprofilesDomainObjectType` Submodule" id="@cdktn/provider-awscc.customerprofilesDomainObjectType"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CustomerprofilesDomainObjectType <a name="CustomerprofilesDomainObjectType" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/customerprofiles_domain_object_type awscc_customerprofiles_domain_object_type}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CustomerprofilesDomainObjectType(Construct Scope, string Id, CustomerprofilesDomainObjectTypeConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeConfig">CustomerprofilesDomainObjectTypeConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeConfig">CustomerprofilesDomainObjectTypeConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.putFields">PutFields</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.resetEncryptionKey">ResetEncryptionKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutFields` <a name="PutFields" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.putFields"></a>

```csharp
private void PutFields(IResolvable|System.Collections.Generic.IDictionary<string, CustomerprofilesDomainObjectTypeFields> Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.putFields.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|System.Collections.Generic.IDictionary<string, <a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeFields">CustomerprofilesDomainObjectTypeFields</a>>

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.putTags"></a>

```csharp
private void PutTags(IResolvable|CustomerprofilesDomainObjectTypeTags[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.putTags.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeTags">CustomerprofilesDomainObjectTypeTags</a>[]

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetEncryptionKey` <a name="ResetEncryptionKey" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.resetEncryptionKey"></a>

```csharp
private void ResetEncryptionKey()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.resetTags"></a>

```csharp
private void ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a CustomerprofilesDomainObjectType resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

CustomerprofilesDomainObjectType.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

CustomerprofilesDomainObjectType.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

CustomerprofilesDomainObjectType.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

CustomerprofilesDomainObjectType.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a CustomerprofilesDomainObjectType resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the CustomerprofilesDomainObjectType to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing CustomerprofilesDomainObjectType that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/customerprofiles_domain_object_type#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the CustomerprofilesDomainObjectType to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.property.createdAt">CreatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.property.fields">Fields</a></code> | <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeFieldsMap">CustomerprofilesDomainObjectTypeFieldsMap</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.property.lastUpdatedAt">LastUpdatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeTagsList">CustomerprofilesDomainObjectTypeTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.property.domainNameInput">DomainNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.property.encryptionKeyInput">EncryptionKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.property.fieldsInput">FieldsInput</a></code> | <code>Io.Cdktn.IResolvable\|System.Collections.Generic.IDictionary<string, <a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeFields">CustomerprofilesDomainObjectTypeFields</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.property.objectTypeNameInput">ObjectTypeNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.property.tagsInput">TagsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeTags">CustomerprofilesDomainObjectTypeTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.property.domainName">DomainName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.property.encryptionKey">EncryptionKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.property.objectTypeName">ObjectTypeName</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.property.createdAt"></a>

```csharp
public string CreatedAt { get; }
```

- *Type:* string

---

##### `Fields`<sup>Required</sup> <a name="Fields" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.property.fields"></a>

```csharp
public CustomerprofilesDomainObjectTypeFieldsMap Fields { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeFieldsMap">CustomerprofilesDomainObjectTypeFieldsMap</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `LastUpdatedAt`<sup>Required</sup> <a name="LastUpdatedAt" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.property.lastUpdatedAt"></a>

```csharp
public string LastUpdatedAt { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.property.tags"></a>

```csharp
public CustomerprofilesDomainObjectTypeTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeTagsList">CustomerprofilesDomainObjectTypeTagsList</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `DomainNameInput`<sup>Optional</sup> <a name="DomainNameInput" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.property.domainNameInput"></a>

```csharp
public string DomainNameInput { get; }
```

- *Type:* string

---

##### `EncryptionKeyInput`<sup>Optional</sup> <a name="EncryptionKeyInput" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.property.encryptionKeyInput"></a>

```csharp
public string EncryptionKeyInput { get; }
```

- *Type:* string

---

##### `FieldsInput`<sup>Optional</sup> <a name="FieldsInput" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.property.fieldsInput"></a>

```csharp
public IResolvable|System.Collections.Generic.IDictionary<string, CustomerprofilesDomainObjectTypeFields> FieldsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|System.Collections.Generic.IDictionary<string, <a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeFields">CustomerprofilesDomainObjectTypeFields</a>>

---

##### `ObjectTypeNameInput`<sup>Optional</sup> <a name="ObjectTypeNameInput" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.property.objectTypeNameInput"></a>

```csharp
public string ObjectTypeNameInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.property.tagsInput"></a>

```csharp
public IResolvable|CustomerprofilesDomainObjectTypeTags[] TagsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeTags">CustomerprofilesDomainObjectTypeTags</a>[]

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `DomainName`<sup>Required</sup> <a name="DomainName" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.property.domainName"></a>

```csharp
public string DomainName { get; }
```

- *Type:* string

---

##### `EncryptionKey`<sup>Required</sup> <a name="EncryptionKey" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.property.encryptionKey"></a>

```csharp
public string EncryptionKey { get; }
```

- *Type:* string

---

##### `ObjectTypeName`<sup>Required</sup> <a name="ObjectTypeName" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.property.objectTypeName"></a>

```csharp
public string ObjectTypeName { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CustomerprofilesDomainObjectTypeConfig <a name="CustomerprofilesDomainObjectTypeConfig" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CustomerprofilesDomainObjectTypeConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string DomainName,
    IResolvable|System.Collections.Generic.IDictionary<string, CustomerprofilesDomainObjectTypeFields> Fields,
    string ObjectTypeName,
    string Description = null,
    string EncryptionKey = null,
    IResolvable|CustomerprofilesDomainObjectTypeTags[] Tags = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeConfig.property.domainName">DomainName</a></code> | <code>string</code> | The unique name of the domain. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeConfig.property.fields">Fields</a></code> | <code>Io.Cdktn.IResolvable\|System.Collections.Generic.IDictionary<string, <a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeFields">CustomerprofilesDomainObjectTypeFields</a>></code> | A map of the name and ObjectType field. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeConfig.property.objectTypeName">ObjectTypeName</a></code> | <code>string</code> | The name of the domain object type. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeConfig.property.description">Description</a></code> | <code>string</code> | Description of the domain object type. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeConfig.property.encryptionKey">EncryptionKey</a></code> | <code>string</code> | The default encryption key. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeConfig.property.tags">Tags</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeTags">CustomerprofilesDomainObjectTypeTags</a>[]</code> | An array of key-value pairs to apply to this resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `DomainName`<sup>Required</sup> <a name="DomainName" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeConfig.property.domainName"></a>

```csharp
public string DomainName { get; set; }
```

- *Type:* string

The unique name of the domain.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/customerprofiles_domain_object_type#domain_name CustomerprofilesDomainObjectType#domain_name}

---

##### `Fields`<sup>Required</sup> <a name="Fields" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeConfig.property.fields"></a>

```csharp
public IResolvable|System.Collections.Generic.IDictionary<string, CustomerprofilesDomainObjectTypeFields> Fields { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|System.Collections.Generic.IDictionary<string, <a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeFields">CustomerprofilesDomainObjectTypeFields</a>>

A map of the name and ObjectType field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/customerprofiles_domain_object_type#fields CustomerprofilesDomainObjectType#fields}

---

##### `ObjectTypeName`<sup>Required</sup> <a name="ObjectTypeName" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeConfig.property.objectTypeName"></a>

```csharp
public string ObjectTypeName { get; set; }
```

- *Type:* string

The name of the domain object type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/customerprofiles_domain_object_type#object_type_name CustomerprofilesDomainObjectType#object_type_name}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Description of the domain object type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/customerprofiles_domain_object_type#description CustomerprofilesDomainObjectType#description}

---

##### `EncryptionKey`<sup>Optional</sup> <a name="EncryptionKey" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeConfig.property.encryptionKey"></a>

```csharp
public string EncryptionKey { get; set; }
```

- *Type:* string

The default encryption key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/customerprofiles_domain_object_type#encryption_key CustomerprofilesDomainObjectType#encryption_key}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeConfig.property.tags"></a>

```csharp
public IResolvable|CustomerprofilesDomainObjectTypeTags[] Tags { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeTags">CustomerprofilesDomainObjectTypeTags</a>[]

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/customerprofiles_domain_object_type#tags CustomerprofilesDomainObjectType#tags}

---

### CustomerprofilesDomainObjectTypeFields <a name="CustomerprofilesDomainObjectTypeFields" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeFields"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeFields.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CustomerprofilesDomainObjectTypeFields {
    string ContentType = null,
    string FeatureType = null,
    string Source = null,
    string Target = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeFields.property.contentType">ContentType</a></code> | <code>string</code> | The content type of the field. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeFields.property.featureType">FeatureType</a></code> | <code>string</code> | The feature type of the field. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeFields.property.source">Source</a></code> | <code>string</code> | The source field name. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeFields.property.target">Target</a></code> | <code>string</code> | The target field name. |

---

##### `ContentType`<sup>Optional</sup> <a name="ContentType" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeFields.property.contentType"></a>

```csharp
public string ContentType { get; set; }
```

- *Type:* string

The content type of the field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/customerprofiles_domain_object_type#content_type CustomerprofilesDomainObjectType#content_type}

---

##### `FeatureType`<sup>Optional</sup> <a name="FeatureType" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeFields.property.featureType"></a>

```csharp
public string FeatureType { get; set; }
```

- *Type:* string

The feature type of the field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/customerprofiles_domain_object_type#feature_type CustomerprofilesDomainObjectType#feature_type}

---

##### `Source`<sup>Optional</sup> <a name="Source" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeFields.property.source"></a>

```csharp
public string Source { get; set; }
```

- *Type:* string

The source field name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/customerprofiles_domain_object_type#source CustomerprofilesDomainObjectType#source}

---

##### `Target`<sup>Optional</sup> <a name="Target" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeFields.property.target"></a>

```csharp
public string Target { get; set; }
```

- *Type:* string

The target field name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/customerprofiles_domain_object_type#target CustomerprofilesDomainObjectType#target}

---

### CustomerprofilesDomainObjectTypeTags <a name="CustomerprofilesDomainObjectTypeTags" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CustomerprofilesDomainObjectTypeTags {
    string Key = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeTags.property.key">Key</a></code> | <code>string</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeTags.property.value">Value</a></code> | <code>string</code> | The value for the tag. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeTags.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

The key name of the tag.

You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/customerprofiles_domain_object_type#key CustomerprofilesDomainObjectType#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeTags.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

The value for the tag.

You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/customerprofiles_domain_object_type#value CustomerprofilesDomainObjectType#value}

---

## Classes <a name="Classes" id="Classes"></a>

### CustomerprofilesDomainObjectTypeFieldsMap <a name="CustomerprofilesDomainObjectTypeFieldsMap" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeFieldsMap"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeFieldsMap.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CustomerprofilesDomainObjectTypeFieldsMap(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeFieldsMap.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeFieldsMap.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeFieldsMap.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeFieldsMap.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeFieldsMap.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeFieldsMap.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeFieldsMap.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeFieldsMap.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeFieldsMap.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeFieldsMap.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeFieldsMap.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeFieldsMap.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeFieldsMap.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeFieldsMap.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeFieldsMap.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeFieldsMap.get"></a>

```csharp
private CustomerprofilesDomainObjectTypeFieldsOutputReference Get(string Key)
```

###### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeFieldsMap.get.parameter.key"></a>

- *Type:* string

the key of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeFieldsMap.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeFieldsMap.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeFieldsMap.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|System.Collections.Generic.IDictionary<string, <a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeFields">CustomerprofilesDomainObjectTypeFields</a>></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeFieldsMap.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeFieldsMap.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeFieldsMap.property.internalValue"></a>

```csharp
public IResolvable|System.Collections.Generic.IDictionary<string, CustomerprofilesDomainObjectTypeFields> InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|System.Collections.Generic.IDictionary<string, <a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeFields">CustomerprofilesDomainObjectTypeFields</a>>

---


### CustomerprofilesDomainObjectTypeFieldsOutputReference <a name="CustomerprofilesDomainObjectTypeFieldsOutputReference" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeFieldsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeFieldsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CustomerprofilesDomainObjectTypeFieldsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, string ComplexObjectKey);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeFieldsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeFieldsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeFieldsOutputReference.Initializer.parameter.complexObjectKey">ComplexObjectKey</a></code> | <code>string</code> | the key of this item in the map. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeFieldsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeFieldsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectKey`<sup>Required</sup> <a name="ComplexObjectKey" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeFieldsOutputReference.Initializer.parameter.complexObjectKey"></a>

- *Type:* string

the key of this item in the map.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeFieldsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeFieldsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeFieldsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeFieldsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeFieldsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeFieldsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeFieldsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeFieldsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeFieldsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeFieldsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeFieldsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeFieldsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeFieldsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeFieldsOutputReference.resetContentType">ResetContentType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeFieldsOutputReference.resetFeatureType">ResetFeatureType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeFieldsOutputReference.resetSource">ResetSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeFieldsOutputReference.resetTarget">ResetTarget</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeFieldsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeFieldsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeFieldsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeFieldsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeFieldsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeFieldsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeFieldsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeFieldsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeFieldsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeFieldsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeFieldsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeFieldsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeFieldsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeFieldsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeFieldsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeFieldsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeFieldsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeFieldsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeFieldsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeFieldsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeFieldsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeFieldsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeFieldsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeFieldsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetContentType` <a name="ResetContentType" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeFieldsOutputReference.resetContentType"></a>

```csharp
private void ResetContentType()
```

##### `ResetFeatureType` <a name="ResetFeatureType" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeFieldsOutputReference.resetFeatureType"></a>

```csharp
private void ResetFeatureType()
```

##### `ResetSource` <a name="ResetSource" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeFieldsOutputReference.resetSource"></a>

```csharp
private void ResetSource()
```

##### `ResetTarget` <a name="ResetTarget" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeFieldsOutputReference.resetTarget"></a>

```csharp
private void ResetTarget()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeFieldsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeFieldsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeFieldsOutputReference.property.contentTypeInput">ContentTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeFieldsOutputReference.property.featureTypeInput">FeatureTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeFieldsOutputReference.property.sourceInput">SourceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeFieldsOutputReference.property.targetInput">TargetInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeFieldsOutputReference.property.contentType">ContentType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeFieldsOutputReference.property.featureType">FeatureType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeFieldsOutputReference.property.source">Source</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeFieldsOutputReference.property.target">Target</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeFieldsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeFields">CustomerprofilesDomainObjectTypeFields</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeFieldsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeFieldsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ContentTypeInput`<sup>Optional</sup> <a name="ContentTypeInput" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeFieldsOutputReference.property.contentTypeInput"></a>

```csharp
public string ContentTypeInput { get; }
```

- *Type:* string

---

##### `FeatureTypeInput`<sup>Optional</sup> <a name="FeatureTypeInput" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeFieldsOutputReference.property.featureTypeInput"></a>

```csharp
public string FeatureTypeInput { get; }
```

- *Type:* string

---

##### `SourceInput`<sup>Optional</sup> <a name="SourceInput" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeFieldsOutputReference.property.sourceInput"></a>

```csharp
public string SourceInput { get; }
```

- *Type:* string

---

##### `TargetInput`<sup>Optional</sup> <a name="TargetInput" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeFieldsOutputReference.property.targetInput"></a>

```csharp
public string TargetInput { get; }
```

- *Type:* string

---

##### `ContentType`<sup>Required</sup> <a name="ContentType" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeFieldsOutputReference.property.contentType"></a>

```csharp
public string ContentType { get; }
```

- *Type:* string

---

##### `FeatureType`<sup>Required</sup> <a name="FeatureType" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeFieldsOutputReference.property.featureType"></a>

```csharp
public string FeatureType { get; }
```

- *Type:* string

---

##### `Source`<sup>Required</sup> <a name="Source" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeFieldsOutputReference.property.source"></a>

```csharp
public string Source { get; }
```

- *Type:* string

---

##### `Target`<sup>Required</sup> <a name="Target" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeFieldsOutputReference.property.target"></a>

```csharp
public string Target { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeFieldsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|CustomerprofilesDomainObjectTypeFields InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeFields">CustomerprofilesDomainObjectTypeFields</a>

---


### CustomerprofilesDomainObjectTypeTagsList <a name="CustomerprofilesDomainObjectTypeTagsList" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CustomerprofilesDomainObjectTypeTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeTagsList.get"></a>

```csharp
private CustomerprofilesDomainObjectTypeTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeTagsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeTags">CustomerprofilesDomainObjectTypeTags</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeTagsList.property.internalValue"></a>

```csharp
public IResolvable|CustomerprofilesDomainObjectTypeTags[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeTags">CustomerprofilesDomainObjectTypeTags</a>[]

---


### CustomerprofilesDomainObjectTypeTagsOutputReference <a name="CustomerprofilesDomainObjectTypeTagsOutputReference" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CustomerprofilesDomainObjectTypeTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeTagsOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeTagsOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeTags">CustomerprofilesDomainObjectTypeTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeTagsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeTagsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeTagsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|CustomerprofilesDomainObjectTypeTags InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeTags">CustomerprofilesDomainObjectTypeTags</a>

---



