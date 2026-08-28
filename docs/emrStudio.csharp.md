# `emrStudio` Submodule <a name="`emrStudio` Submodule" id="@cdktn/provider-awscc.emrStudio"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EmrStudio <a name="EmrStudio" id="@cdktn/provider-awscc.emrStudio.EmrStudio"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/emr_studio awscc_emr_studio}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.emrStudio.EmrStudio.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new EmrStudio(Construct Scope, string Id, EmrStudioConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudio.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudio.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudio.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudioConfig">EmrStudioConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.emrStudio.EmrStudio.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.emrStudio.EmrStudio.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.emrStudio.EmrStudio.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.emrStudio.EmrStudioConfig">EmrStudioConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudio.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudio.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudio.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudio.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudio.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudio.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudio.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudio.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudio.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudio.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudio.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudio.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudio.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudio.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudio.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudio.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudio.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudio.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudio.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudio.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudio.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudio.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudio.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudio.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudio.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudio.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudio.resetEncryptionKeyArn">ResetEncryptionKeyArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudio.resetIdcInstanceArn">ResetIdcInstanceArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudio.resetIdcUserAssignment">ResetIdcUserAssignment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudio.resetIdpAuthUrl">ResetIdpAuthUrl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudio.resetIdpRelayStateParameterName">ResetIdpRelayStateParameterName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudio.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudio.resetTrustedIdentityPropagationEnabled">ResetTrustedIdentityPropagationEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudio.resetUserRole">ResetUserRole</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.emrStudio.EmrStudio.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.emrStudio.EmrStudio.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.emrStudio.EmrStudio.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.emrStudio.EmrStudio.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.emrStudio.EmrStudio.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.emrStudio.EmrStudio.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.emrStudio.EmrStudio.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.emrStudio.EmrStudio.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.emrStudio.EmrStudio.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.emrStudio.EmrStudio.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.emrStudio.EmrStudio.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.emrStudio.EmrStudio.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.emrStudio.EmrStudio.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.emrStudio.EmrStudio.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.emrStudio.EmrStudio.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.emrStudio.EmrStudio.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.emrStudio.EmrStudio.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.emrStudio.EmrStudio.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.emrStudio.EmrStudio.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.emrStudio.EmrStudio.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.emrStudio.EmrStudio.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.emrStudio.EmrStudio.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.emrStudio.EmrStudio.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.emrStudio.EmrStudio.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.emrStudio.EmrStudio.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.emrStudio.EmrStudio.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.emrStudio.EmrStudio.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.emrStudio.EmrStudio.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.emrStudio.EmrStudio.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.emrStudio.EmrStudio.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.emrStudio.EmrStudio.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.emrStudio.EmrStudio.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.emrStudio.EmrStudio.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.emrStudio.EmrStudio.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.emrStudio.EmrStudio.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.emrStudio.EmrStudio.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.emrStudio.EmrStudio.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.emrStudio.EmrStudio.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.emrStudio.EmrStudio.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.emrStudio.EmrStudio.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.emrStudio.EmrStudio.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.emrStudio.EmrStudio.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.emrStudio.EmrStudio.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.emrStudio.EmrStudio.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.emrStudio.EmrStudio.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.emrStudio.EmrStudio.putTags"></a>

```csharp
private void PutTags(IResolvable|EmrStudioTags[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.emrStudio.EmrStudio.putTags.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.emrStudio.EmrStudioTags">EmrStudioTags</a>[]

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-awscc.emrStudio.EmrStudio.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetEncryptionKeyArn` <a name="ResetEncryptionKeyArn" id="@cdktn/provider-awscc.emrStudio.EmrStudio.resetEncryptionKeyArn"></a>

```csharp
private void ResetEncryptionKeyArn()
```

##### `ResetIdcInstanceArn` <a name="ResetIdcInstanceArn" id="@cdktn/provider-awscc.emrStudio.EmrStudio.resetIdcInstanceArn"></a>

```csharp
private void ResetIdcInstanceArn()
```

##### `ResetIdcUserAssignment` <a name="ResetIdcUserAssignment" id="@cdktn/provider-awscc.emrStudio.EmrStudio.resetIdcUserAssignment"></a>

```csharp
private void ResetIdcUserAssignment()
```

##### `ResetIdpAuthUrl` <a name="ResetIdpAuthUrl" id="@cdktn/provider-awscc.emrStudio.EmrStudio.resetIdpAuthUrl"></a>

```csharp
private void ResetIdpAuthUrl()
```

##### `ResetIdpRelayStateParameterName` <a name="ResetIdpRelayStateParameterName" id="@cdktn/provider-awscc.emrStudio.EmrStudio.resetIdpRelayStateParameterName"></a>

```csharp
private void ResetIdpRelayStateParameterName()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.emrStudio.EmrStudio.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTrustedIdentityPropagationEnabled` <a name="ResetTrustedIdentityPropagationEnabled" id="@cdktn/provider-awscc.emrStudio.EmrStudio.resetTrustedIdentityPropagationEnabled"></a>

```csharp
private void ResetTrustedIdentityPropagationEnabled()
```

##### `ResetUserRole` <a name="ResetUserRole" id="@cdktn/provider-awscc.emrStudio.EmrStudio.resetUserRole"></a>

```csharp
private void ResetUserRole()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudio.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudio.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudio.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudio.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a EmrStudio resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.emrStudio.EmrStudio.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

EmrStudio.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.emrStudio.EmrStudio.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.emrStudio.EmrStudio.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

EmrStudio.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.emrStudio.EmrStudio.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.emrStudio.EmrStudio.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

EmrStudio.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.emrStudio.EmrStudio.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.emrStudio.EmrStudio.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

EmrStudio.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a EmrStudio resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.emrStudio.EmrStudio.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.emrStudio.EmrStudio.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the EmrStudio to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.emrStudio.EmrStudio.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing EmrStudio that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/emr_studio#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.emrStudio.EmrStudio.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the EmrStudio to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudio.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudio.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudio.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudio.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudio.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudio.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudio.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudio.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudio.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudio.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudio.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudio.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudio.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudio.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudio.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudio.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudio.property.studioId">StudioId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudio.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudioTagsList">EmrStudioTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudio.property.url">Url</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudio.property.authModeInput">AuthModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudio.property.defaultS3LocationInput">DefaultS3LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudio.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudio.property.encryptionKeyArnInput">EncryptionKeyArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudio.property.engineSecurityGroupIdInput">EngineSecurityGroupIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudio.property.idcInstanceArnInput">IdcInstanceArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudio.property.idcUserAssignmentInput">IdcUserAssignmentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudio.property.idpAuthUrlInput">IdpAuthUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudio.property.idpRelayStateParameterNameInput">IdpRelayStateParameterNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudio.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudio.property.serviceRoleInput">ServiceRoleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudio.property.subnetIdsInput">SubnetIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudio.property.tagsInput">TagsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.emrStudio.EmrStudioTags">EmrStudioTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudio.property.trustedIdentityPropagationEnabledInput">TrustedIdentityPropagationEnabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudio.property.userRoleInput">UserRoleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudio.property.vpcIdInput">VpcIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudio.property.workspaceSecurityGroupIdInput">WorkspaceSecurityGroupIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudio.property.authMode">AuthMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudio.property.defaultS3Location">DefaultS3Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudio.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudio.property.encryptionKeyArn">EncryptionKeyArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudio.property.engineSecurityGroupId">EngineSecurityGroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudio.property.idcInstanceArn">IdcInstanceArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudio.property.idcUserAssignment">IdcUserAssignment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudio.property.idpAuthUrl">IdpAuthUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudio.property.idpRelayStateParameterName">IdpRelayStateParameterName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudio.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudio.property.serviceRole">ServiceRole</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudio.property.subnetIds">SubnetIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudio.property.trustedIdentityPropagationEnabled">TrustedIdentityPropagationEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudio.property.userRole">UserRole</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudio.property.vpcId">VpcId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudio.property.workspaceSecurityGroupId">WorkspaceSecurityGroupId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.emrStudio.EmrStudio.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.emrStudio.EmrStudio.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.emrStudio.EmrStudio.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.emrStudio.EmrStudio.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.emrStudio.EmrStudio.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.emrStudio.EmrStudio.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.emrStudio.EmrStudio.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.emrStudio.EmrStudio.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.emrStudio.EmrStudio.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.emrStudio.EmrStudio.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.emrStudio.EmrStudio.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.emrStudio.EmrStudio.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.emrStudio.EmrStudio.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.emrStudio.EmrStudio.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.emrStudio.EmrStudio.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.emrStudio.EmrStudio.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `StudioId`<sup>Required</sup> <a name="StudioId" id="@cdktn/provider-awscc.emrStudio.EmrStudio.property.studioId"></a>

```csharp
public string StudioId { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.emrStudio.EmrStudio.property.tags"></a>

```csharp
public EmrStudioTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.emrStudio.EmrStudioTagsList">EmrStudioTagsList</a>

---

##### `Url`<sup>Required</sup> <a name="Url" id="@cdktn/provider-awscc.emrStudio.EmrStudio.property.url"></a>

```csharp
public string Url { get; }
```

- *Type:* string

---

##### `AuthModeInput`<sup>Optional</sup> <a name="AuthModeInput" id="@cdktn/provider-awscc.emrStudio.EmrStudio.property.authModeInput"></a>

```csharp
public string AuthModeInput { get; }
```

- *Type:* string

---

##### `DefaultS3LocationInput`<sup>Optional</sup> <a name="DefaultS3LocationInput" id="@cdktn/provider-awscc.emrStudio.EmrStudio.property.defaultS3LocationInput"></a>

```csharp
public string DefaultS3LocationInput { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-awscc.emrStudio.EmrStudio.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `EncryptionKeyArnInput`<sup>Optional</sup> <a name="EncryptionKeyArnInput" id="@cdktn/provider-awscc.emrStudio.EmrStudio.property.encryptionKeyArnInput"></a>

```csharp
public string EncryptionKeyArnInput { get; }
```

- *Type:* string

---

##### `EngineSecurityGroupIdInput`<sup>Optional</sup> <a name="EngineSecurityGroupIdInput" id="@cdktn/provider-awscc.emrStudio.EmrStudio.property.engineSecurityGroupIdInput"></a>

```csharp
public string EngineSecurityGroupIdInput { get; }
```

- *Type:* string

---

##### `IdcInstanceArnInput`<sup>Optional</sup> <a name="IdcInstanceArnInput" id="@cdktn/provider-awscc.emrStudio.EmrStudio.property.idcInstanceArnInput"></a>

```csharp
public string IdcInstanceArnInput { get; }
```

- *Type:* string

---

##### `IdcUserAssignmentInput`<sup>Optional</sup> <a name="IdcUserAssignmentInput" id="@cdktn/provider-awscc.emrStudio.EmrStudio.property.idcUserAssignmentInput"></a>

```csharp
public string IdcUserAssignmentInput { get; }
```

- *Type:* string

---

##### `IdpAuthUrlInput`<sup>Optional</sup> <a name="IdpAuthUrlInput" id="@cdktn/provider-awscc.emrStudio.EmrStudio.property.idpAuthUrlInput"></a>

```csharp
public string IdpAuthUrlInput { get; }
```

- *Type:* string

---

##### `IdpRelayStateParameterNameInput`<sup>Optional</sup> <a name="IdpRelayStateParameterNameInput" id="@cdktn/provider-awscc.emrStudio.EmrStudio.property.idpRelayStateParameterNameInput"></a>

```csharp
public string IdpRelayStateParameterNameInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.emrStudio.EmrStudio.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ServiceRoleInput`<sup>Optional</sup> <a name="ServiceRoleInput" id="@cdktn/provider-awscc.emrStudio.EmrStudio.property.serviceRoleInput"></a>

```csharp
public string ServiceRoleInput { get; }
```

- *Type:* string

---

##### `SubnetIdsInput`<sup>Optional</sup> <a name="SubnetIdsInput" id="@cdktn/provider-awscc.emrStudio.EmrStudio.property.subnetIdsInput"></a>

```csharp
public string[] SubnetIdsInput { get; }
```

- *Type:* string[]

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.emrStudio.EmrStudio.property.tagsInput"></a>

```csharp
public IResolvable|EmrStudioTags[] TagsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.emrStudio.EmrStudioTags">EmrStudioTags</a>[]

---

##### `TrustedIdentityPropagationEnabledInput`<sup>Optional</sup> <a name="TrustedIdentityPropagationEnabledInput" id="@cdktn/provider-awscc.emrStudio.EmrStudio.property.trustedIdentityPropagationEnabledInput"></a>

```csharp
public bool|IResolvable TrustedIdentityPropagationEnabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `UserRoleInput`<sup>Optional</sup> <a name="UserRoleInput" id="@cdktn/provider-awscc.emrStudio.EmrStudio.property.userRoleInput"></a>

```csharp
public string UserRoleInput { get; }
```

- *Type:* string

---

##### `VpcIdInput`<sup>Optional</sup> <a name="VpcIdInput" id="@cdktn/provider-awscc.emrStudio.EmrStudio.property.vpcIdInput"></a>

```csharp
public string VpcIdInput { get; }
```

- *Type:* string

---

##### `WorkspaceSecurityGroupIdInput`<sup>Optional</sup> <a name="WorkspaceSecurityGroupIdInput" id="@cdktn/provider-awscc.emrStudio.EmrStudio.property.workspaceSecurityGroupIdInput"></a>

```csharp
public string WorkspaceSecurityGroupIdInput { get; }
```

- *Type:* string

---

##### `AuthMode`<sup>Required</sup> <a name="AuthMode" id="@cdktn/provider-awscc.emrStudio.EmrStudio.property.authMode"></a>

```csharp
public string AuthMode { get; }
```

- *Type:* string

---

##### `DefaultS3Location`<sup>Required</sup> <a name="DefaultS3Location" id="@cdktn/provider-awscc.emrStudio.EmrStudio.property.defaultS3Location"></a>

```csharp
public string DefaultS3Location { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.emrStudio.EmrStudio.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `EncryptionKeyArn`<sup>Required</sup> <a name="EncryptionKeyArn" id="@cdktn/provider-awscc.emrStudio.EmrStudio.property.encryptionKeyArn"></a>

```csharp
public string EncryptionKeyArn { get; }
```

- *Type:* string

---

##### `EngineSecurityGroupId`<sup>Required</sup> <a name="EngineSecurityGroupId" id="@cdktn/provider-awscc.emrStudio.EmrStudio.property.engineSecurityGroupId"></a>

```csharp
public string EngineSecurityGroupId { get; }
```

- *Type:* string

---

##### `IdcInstanceArn`<sup>Required</sup> <a name="IdcInstanceArn" id="@cdktn/provider-awscc.emrStudio.EmrStudio.property.idcInstanceArn"></a>

```csharp
public string IdcInstanceArn { get; }
```

- *Type:* string

---

##### `IdcUserAssignment`<sup>Required</sup> <a name="IdcUserAssignment" id="@cdktn/provider-awscc.emrStudio.EmrStudio.property.idcUserAssignment"></a>

```csharp
public string IdcUserAssignment { get; }
```

- *Type:* string

---

##### `IdpAuthUrl`<sup>Required</sup> <a name="IdpAuthUrl" id="@cdktn/provider-awscc.emrStudio.EmrStudio.property.idpAuthUrl"></a>

```csharp
public string IdpAuthUrl { get; }
```

- *Type:* string

---

##### `IdpRelayStateParameterName`<sup>Required</sup> <a name="IdpRelayStateParameterName" id="@cdktn/provider-awscc.emrStudio.EmrStudio.property.idpRelayStateParameterName"></a>

```csharp
public string IdpRelayStateParameterName { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.emrStudio.EmrStudio.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `ServiceRole`<sup>Required</sup> <a name="ServiceRole" id="@cdktn/provider-awscc.emrStudio.EmrStudio.property.serviceRole"></a>

```csharp
public string ServiceRole { get; }
```

- *Type:* string

---

##### `SubnetIds`<sup>Required</sup> <a name="SubnetIds" id="@cdktn/provider-awscc.emrStudio.EmrStudio.property.subnetIds"></a>

```csharp
public string[] SubnetIds { get; }
```

- *Type:* string[]

---

##### `TrustedIdentityPropagationEnabled`<sup>Required</sup> <a name="TrustedIdentityPropagationEnabled" id="@cdktn/provider-awscc.emrStudio.EmrStudio.property.trustedIdentityPropagationEnabled"></a>

```csharp
public bool|IResolvable TrustedIdentityPropagationEnabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `UserRole`<sup>Required</sup> <a name="UserRole" id="@cdktn/provider-awscc.emrStudio.EmrStudio.property.userRole"></a>

```csharp
public string UserRole { get; }
```

- *Type:* string

---

##### `VpcId`<sup>Required</sup> <a name="VpcId" id="@cdktn/provider-awscc.emrStudio.EmrStudio.property.vpcId"></a>

```csharp
public string VpcId { get; }
```

- *Type:* string

---

##### `WorkspaceSecurityGroupId`<sup>Required</sup> <a name="WorkspaceSecurityGroupId" id="@cdktn/provider-awscc.emrStudio.EmrStudio.property.workspaceSecurityGroupId"></a>

```csharp
public string WorkspaceSecurityGroupId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudio.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.emrStudio.EmrStudio.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### EmrStudioConfig <a name="EmrStudioConfig" id="@cdktn/provider-awscc.emrStudio.EmrStudioConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.emrStudio.EmrStudioConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new EmrStudioConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string AuthMode,
    string DefaultS3Location,
    string EngineSecurityGroupId,
    string Name,
    string ServiceRole,
    string[] SubnetIds,
    string VpcId,
    string WorkspaceSecurityGroupId,
    string Description = null,
    string EncryptionKeyArn = null,
    string IdcInstanceArn = null,
    string IdcUserAssignment = null,
    string IdpAuthUrl = null,
    string IdpRelayStateParameterName = null,
    IResolvable|EmrStudioTags[] Tags = null,
    bool|IResolvable TrustedIdentityPropagationEnabled = null,
    string UserRole = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudioConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudioConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudioConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudioConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudioConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudioConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudioConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudioConfig.property.authMode">AuthMode</a></code> | <code>string</code> | Specifies whether the Studio authenticates users using single sign-on (SSO) or IAM. |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudioConfig.property.defaultS3Location">DefaultS3Location</a></code> | <code>string</code> | The default Amazon S3 location to back up EMR Studio Workspaces and notebook files. |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudioConfig.property.engineSecurityGroupId">EngineSecurityGroupId</a></code> | <code>string</code> | The ID of the Amazon EMR Studio Engine security group. |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudioConfig.property.name">Name</a></code> | <code>string</code> | A descriptive name for the Amazon EMR Studio. |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudioConfig.property.serviceRole">ServiceRole</a></code> | <code>string</code> | The IAM role that will be assumed by the Amazon EMR Studio. |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudioConfig.property.subnetIds">SubnetIds</a></code> | <code>string[]</code> | A list of up to 5 subnet IDs to associate with the Studio. |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudioConfig.property.vpcId">VpcId</a></code> | <code>string</code> | The ID of the Amazon Virtual Private Cloud (Amazon VPC) to associate with the Studio. |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudioConfig.property.workspaceSecurityGroupId">WorkspaceSecurityGroupId</a></code> | <code>string</code> | The ID of the Amazon EMR Studio Workspace security group. |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudioConfig.property.description">Description</a></code> | <code>string</code> | A detailed description of the Studio. |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudioConfig.property.encryptionKeyArn">EncryptionKeyArn</a></code> | <code>string</code> | The AWS KMS key identifier (ARN) used to encrypt AWS EMR Studio workspace and notebook files when backed up to AWS S3. |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudioConfig.property.idcInstanceArn">IdcInstanceArn</a></code> | <code>string</code> | The ARN of the IAM Identity Center instance to create the Studio application. |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudioConfig.property.idcUserAssignment">IdcUserAssignment</a></code> | <code>string</code> | Specifies whether IAM Identity Center user assignment is REQUIRED or OPTIONAL. |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudioConfig.property.idpAuthUrl">IdpAuthUrl</a></code> | <code>string</code> | Your identity provider's authentication endpoint. |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudioConfig.property.idpRelayStateParameterName">IdpRelayStateParameterName</a></code> | <code>string</code> | The name of relay state parameter for external Identity Provider. |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudioConfig.property.tags">Tags</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.emrStudio.EmrStudioTags">EmrStudioTags</a>[]</code> | A list of tags to associate with the Studio. |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudioConfig.property.trustedIdentityPropagationEnabled">TrustedIdentityPropagationEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | A Boolean indicating whether to enable Trusted identity propagation for the Studio. The default value is false. |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudioConfig.property.userRole">UserRole</a></code> | <code>string</code> | The IAM user role that will be assumed by users and groups logged in to a Studio. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.emrStudio.EmrStudioConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.emrStudio.EmrStudioConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.emrStudio.EmrStudioConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.emrStudio.EmrStudioConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.emrStudio.EmrStudioConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.emrStudio.EmrStudioConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.emrStudio.EmrStudioConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `AuthMode`<sup>Required</sup> <a name="AuthMode" id="@cdktn/provider-awscc.emrStudio.EmrStudioConfig.property.authMode"></a>

```csharp
public string AuthMode { get; set; }
```

- *Type:* string

Specifies whether the Studio authenticates users using single sign-on (SSO) or IAM.

Amazon EMR Studio currently only supports SSO authentication.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/emr_studio#auth_mode EmrStudio#auth_mode}

---

##### `DefaultS3Location`<sup>Required</sup> <a name="DefaultS3Location" id="@cdktn/provider-awscc.emrStudio.EmrStudioConfig.property.defaultS3Location"></a>

```csharp
public string DefaultS3Location { get; set; }
```

- *Type:* string

The default Amazon S3 location to back up EMR Studio Workspaces and notebook files.

A Studio user can select an alternative Amazon S3 location when creating a Workspace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/emr_studio#default_s3_location EmrStudio#default_s3_location}

---

##### `EngineSecurityGroupId`<sup>Required</sup> <a name="EngineSecurityGroupId" id="@cdktn/provider-awscc.emrStudio.EmrStudioConfig.property.engineSecurityGroupId"></a>

```csharp
public string EngineSecurityGroupId { get; set; }
```

- *Type:* string

The ID of the Amazon EMR Studio Engine security group.

The Engine security group allows inbound network traffic from the Workspace security group, and it must be in the same VPC specified by VpcId.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/emr_studio#engine_security_group_id EmrStudio#engine_security_group_id}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.emrStudio.EmrStudioConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

A descriptive name for the Amazon EMR Studio.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/emr_studio#name EmrStudio#name}

---

##### `ServiceRole`<sup>Required</sup> <a name="ServiceRole" id="@cdktn/provider-awscc.emrStudio.EmrStudioConfig.property.serviceRole"></a>

```csharp
public string ServiceRole { get; set; }
```

- *Type:* string

The IAM role that will be assumed by the Amazon EMR Studio.

The service role provides a way for Amazon EMR Studio to interoperate with other AWS services.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/emr_studio#service_role EmrStudio#service_role}

---

##### `SubnetIds`<sup>Required</sup> <a name="SubnetIds" id="@cdktn/provider-awscc.emrStudio.EmrStudioConfig.property.subnetIds"></a>

```csharp
public string[] SubnetIds { get; set; }
```

- *Type:* string[]

A list of up to 5 subnet IDs to associate with the Studio.

The subnets must belong to the VPC specified by VpcId. Studio users can create a Workspace in any of the specified subnets.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/emr_studio#subnet_ids EmrStudio#subnet_ids}

---

##### `VpcId`<sup>Required</sup> <a name="VpcId" id="@cdktn/provider-awscc.emrStudio.EmrStudioConfig.property.vpcId"></a>

```csharp
public string VpcId { get; set; }
```

- *Type:* string

The ID of the Amazon Virtual Private Cloud (Amazon VPC) to associate with the Studio.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/emr_studio#vpc_id EmrStudio#vpc_id}

---

##### `WorkspaceSecurityGroupId`<sup>Required</sup> <a name="WorkspaceSecurityGroupId" id="@cdktn/provider-awscc.emrStudio.EmrStudioConfig.property.workspaceSecurityGroupId"></a>

```csharp
public string WorkspaceSecurityGroupId { get; set; }
```

- *Type:* string

The ID of the Amazon EMR Studio Workspace security group.

The Workspace security group allows outbound network traffic to resources in the Engine security group, and it must be in the same VPC specified by VpcId.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/emr_studio#workspace_security_group_id EmrStudio#workspace_security_group_id}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-awscc.emrStudio.EmrStudioConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

A detailed description of the Studio.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/emr_studio#description EmrStudio#description}

---

##### `EncryptionKeyArn`<sup>Optional</sup> <a name="EncryptionKeyArn" id="@cdktn/provider-awscc.emrStudio.EmrStudioConfig.property.encryptionKeyArn"></a>

```csharp
public string EncryptionKeyArn { get; set; }
```

- *Type:* string

The AWS KMS key identifier (ARN) used to encrypt AWS EMR Studio workspace and notebook files when backed up to AWS S3.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/emr_studio#encryption_key_arn EmrStudio#encryption_key_arn}

---

##### `IdcInstanceArn`<sup>Optional</sup> <a name="IdcInstanceArn" id="@cdktn/provider-awscc.emrStudio.EmrStudioConfig.property.idcInstanceArn"></a>

```csharp
public string IdcInstanceArn { get; set; }
```

- *Type:* string

The ARN of the IAM Identity Center instance to create the Studio application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/emr_studio#idc_instance_arn EmrStudio#idc_instance_arn}

---

##### `IdcUserAssignment`<sup>Optional</sup> <a name="IdcUserAssignment" id="@cdktn/provider-awscc.emrStudio.EmrStudioConfig.property.idcUserAssignment"></a>

```csharp
public string IdcUserAssignment { get; set; }
```

- *Type:* string

Specifies whether IAM Identity Center user assignment is REQUIRED or OPTIONAL.

If the value is set to REQUIRED, users must be explicitly assigned to the Studio application to access the Studio.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/emr_studio#idc_user_assignment EmrStudio#idc_user_assignment}

---

##### `IdpAuthUrl`<sup>Optional</sup> <a name="IdpAuthUrl" id="@cdktn/provider-awscc.emrStudio.EmrStudioConfig.property.idpAuthUrl"></a>

```csharp
public string IdpAuthUrl { get; set; }
```

- *Type:* string

Your identity provider's authentication endpoint.

Amazon EMR Studio redirects federated users to this endpoint for authentication when logging in to a Studio with the Studio URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/emr_studio#idp_auth_url EmrStudio#idp_auth_url}

---

##### `IdpRelayStateParameterName`<sup>Optional</sup> <a name="IdpRelayStateParameterName" id="@cdktn/provider-awscc.emrStudio.EmrStudioConfig.property.idpRelayStateParameterName"></a>

```csharp
public string IdpRelayStateParameterName { get; set; }
```

- *Type:* string

The name of relay state parameter for external Identity Provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/emr_studio#idp_relay_state_parameter_name EmrStudio#idp_relay_state_parameter_name}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.emrStudio.EmrStudioConfig.property.tags"></a>

```csharp
public IResolvable|EmrStudioTags[] Tags { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.emrStudio.EmrStudioTags">EmrStudioTags</a>[]

A list of tags to associate with the Studio.

Tags are user-defined key-value pairs that consist of a required key string with a maximum of 128 characters, and an optional value string with a maximum of 256 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/emr_studio#tags EmrStudio#tags}

---

##### `TrustedIdentityPropagationEnabled`<sup>Optional</sup> <a name="TrustedIdentityPropagationEnabled" id="@cdktn/provider-awscc.emrStudio.EmrStudioConfig.property.trustedIdentityPropagationEnabled"></a>

```csharp
public bool|IResolvable TrustedIdentityPropagationEnabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

A Boolean indicating whether to enable Trusted identity propagation for the Studio. The default value is false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/emr_studio#trusted_identity_propagation_enabled EmrStudio#trusted_identity_propagation_enabled}

---

##### `UserRole`<sup>Optional</sup> <a name="UserRole" id="@cdktn/provider-awscc.emrStudio.EmrStudioConfig.property.userRole"></a>

```csharp
public string UserRole { get; set; }
```

- *Type:* string

The IAM user role that will be assumed by users and groups logged in to a Studio.

The permissions attached to this IAM role can be scoped down for each user or group using session policies.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/emr_studio#user_role EmrStudio#user_role}

---

### EmrStudioTags <a name="EmrStudioTags" id="@cdktn/provider-awscc.emrStudio.EmrStudioTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.emrStudio.EmrStudioTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new EmrStudioTags {
    string Key = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudioTags.property.key">Key</a></code> | <code>string</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudioTags.property.value">Value</a></code> | <code>string</code> | The value for the tag. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.emrStudio.EmrStudioTags.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

The key name of the tag.

You can specify a value that is 1 to 127 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/emr_studio#key EmrStudio#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.emrStudio.EmrStudioTags.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

The value for the tag.

You can specify a value that is 0 to 255 Unicode characters in length. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/emr_studio#value EmrStudio#value}

---

## Classes <a name="Classes" id="Classes"></a>

### EmrStudioTagsList <a name="EmrStudioTagsList" id="@cdktn/provider-awscc.emrStudio.EmrStudioTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.emrStudio.EmrStudioTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new EmrStudioTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudioTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudioTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudioTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.emrStudio.EmrStudioTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.emrStudio.EmrStudioTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.emrStudio.EmrStudioTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudioTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudioTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudioTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudioTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudioTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.emrStudio.EmrStudioTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.emrStudio.EmrStudioTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.emrStudio.EmrStudioTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.emrStudio.EmrStudioTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.emrStudio.EmrStudioTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.emrStudio.EmrStudioTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.emrStudio.EmrStudioTagsList.get"></a>

```csharp
private EmrStudioTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.emrStudio.EmrStudioTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudioTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudioTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudioTagsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.emrStudio.EmrStudioTags">EmrStudioTags</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.emrStudio.EmrStudioTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.emrStudio.EmrStudioTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.emrStudio.EmrStudioTagsList.property.internalValue"></a>

```csharp
public IResolvable|EmrStudioTags[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.emrStudio.EmrStudioTags">EmrStudioTags</a>[]

---


### EmrStudioTagsOutputReference <a name="EmrStudioTagsOutputReference" id="@cdktn/provider-awscc.emrStudio.EmrStudioTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.emrStudio.EmrStudioTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new EmrStudioTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudioTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudioTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudioTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudioTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.emrStudio.EmrStudioTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.emrStudio.EmrStudioTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.emrStudio.EmrStudioTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.emrStudio.EmrStudioTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudioTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudioTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudioTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudioTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudioTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudioTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudioTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudioTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudioTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudioTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudioTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudioTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudioTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudioTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudioTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.emrStudio.EmrStudioTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.emrStudio.EmrStudioTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.emrStudio.EmrStudioTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.emrStudio.EmrStudioTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.emrStudio.EmrStudioTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.emrStudio.EmrStudioTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.emrStudio.EmrStudioTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.emrStudio.EmrStudioTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.emrStudio.EmrStudioTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.emrStudio.EmrStudioTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.emrStudio.EmrStudioTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.emrStudio.EmrStudioTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.emrStudio.EmrStudioTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.emrStudio.EmrStudioTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.emrStudio.EmrStudioTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.emrStudio.EmrStudioTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.emrStudio.EmrStudioTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.emrStudio.EmrStudioTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.emrStudio.EmrStudioTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.emrStudio.EmrStudioTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.emrStudio.EmrStudioTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.emrStudio.EmrStudioTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.emrStudio.EmrStudioTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.emrStudio.EmrStudioTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.emrStudio.EmrStudioTagsOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.emrStudio.EmrStudioTagsOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudioTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudioTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudioTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudioTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudioTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudioTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudioTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.emrStudio.EmrStudioTags">EmrStudioTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.emrStudio.EmrStudioTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.emrStudio.EmrStudioTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.emrStudio.EmrStudioTagsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.emrStudio.EmrStudioTagsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.emrStudio.EmrStudioTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.emrStudio.EmrStudioTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.emrStudio.EmrStudioTagsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|EmrStudioTags InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.emrStudio.EmrStudioTags">EmrStudioTags</a>

---



