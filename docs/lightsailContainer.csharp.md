# `lightsailContainer` Submodule <a name="`lightsailContainer` Submodule" id="@cdktn/provider-awscc.lightsailContainer"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LightsailContainer <a name="LightsailContainer" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainer"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lightsail_container awscc_lightsail_container}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainer.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new LightsailContainer(Construct Scope, string Id, LightsailContainerConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainer.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainer.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainer.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerConfig">LightsailContainerConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainer.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainer.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainer.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerConfig">LightsailContainerConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainer.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainer.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainer.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainer.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainer.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainer.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainer.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainer.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainer.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainer.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainer.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainer.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainer.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainer.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainer.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainer.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainer.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainer.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainer.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainer.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainer.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainer.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainer.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainer.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainer.putContainerServiceDeployment">PutContainerServiceDeployment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainer.putPrivateRegistryAccess">PutPrivateRegistryAccess</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainer.putPublicDomainNames">PutPublicDomainNames</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainer.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainer.resetContainerServiceDeployment">ResetContainerServiceDeployment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainer.resetIsDisabled">ResetIsDisabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainer.resetPrivateRegistryAccess">ResetPrivateRegistryAccess</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainer.resetPublicDomainNames">ResetPublicDomainNames</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainer.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainer.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainer.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainer.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainer.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainer.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainer.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainer.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainer.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainer.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainer.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainer.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainer.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainer.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainer.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainer.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainer.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainer.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainer.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainer.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainer.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainer.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainer.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainer.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainer.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainer.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainer.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainer.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainer.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainer.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainer.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainer.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainer.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainer.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainer.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainer.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainer.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainer.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainer.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainer.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainer.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainer.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainer.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainer.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainer.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainer.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutContainerServiceDeployment` <a name="PutContainerServiceDeployment" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainer.putContainerServiceDeployment"></a>

```csharp
private void PutContainerServiceDeployment(LightsailContainerContainerServiceDeployment Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainer.putContainerServiceDeployment.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeployment">LightsailContainerContainerServiceDeployment</a>

---

##### `PutPrivateRegistryAccess` <a name="PutPrivateRegistryAccess" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainer.putPrivateRegistryAccess"></a>

```csharp
private void PutPrivateRegistryAccess(LightsailContainerPrivateRegistryAccess Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainer.putPrivateRegistryAccess.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerPrivateRegistryAccess">LightsailContainerPrivateRegistryAccess</a>

---

##### `PutPublicDomainNames` <a name="PutPublicDomainNames" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainer.putPublicDomainNames"></a>

```csharp
private void PutPublicDomainNames(IResolvable|LightsailContainerPublicDomainNames[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainer.putPublicDomainNames.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerPublicDomainNames">LightsailContainerPublicDomainNames</a>[]

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainer.putTags"></a>

```csharp
private void PutTags(IResolvable|LightsailContainerTags[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainer.putTags.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerTags">LightsailContainerTags</a>[]

---

##### `ResetContainerServiceDeployment` <a name="ResetContainerServiceDeployment" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainer.resetContainerServiceDeployment"></a>

```csharp
private void ResetContainerServiceDeployment()
```

##### `ResetIsDisabled` <a name="ResetIsDisabled" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainer.resetIsDisabled"></a>

```csharp
private void ResetIsDisabled()
```

##### `ResetPrivateRegistryAccess` <a name="ResetPrivateRegistryAccess" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainer.resetPrivateRegistryAccess"></a>

```csharp
private void ResetPrivateRegistryAccess()
```

##### `ResetPublicDomainNames` <a name="ResetPublicDomainNames" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainer.resetPublicDomainNames"></a>

```csharp
private void ResetPublicDomainNames()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainer.resetTags"></a>

```csharp
private void ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainer.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainer.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainer.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainer.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a LightsailContainer resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainer.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

LightsailContainer.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainer.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainer.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

LightsailContainer.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainer.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainer.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

LightsailContainer.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainer.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainer.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

LightsailContainer.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a LightsailContainer resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainer.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainer.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the LightsailContainer to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainer.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing LightsailContainer that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lightsail_container#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainer.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the LightsailContainer to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainer.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainer.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainer.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainer.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainer.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainer.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainer.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainer.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainer.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainer.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainer.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainer.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainer.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainer.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainer.property.containerArn">ContainerArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainer.property.containerServiceDeployment">ContainerServiceDeployment</a></code> | <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentOutputReference">LightsailContainerContainerServiceDeploymentOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainer.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainer.property.principalArn">PrincipalArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainer.property.privateRegistryAccess">PrivateRegistryAccess</a></code> | <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerPrivateRegistryAccessOutputReference">LightsailContainerPrivateRegistryAccessOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainer.property.publicDomainNames">PublicDomainNames</a></code> | <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerPublicDomainNamesList">LightsailContainerPublicDomainNamesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainer.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerTagsList">LightsailContainerTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainer.property.url">Url</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainer.property.containerServiceDeploymentInput">ContainerServiceDeploymentInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeployment">LightsailContainerContainerServiceDeployment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainer.property.isDisabledInput">IsDisabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainer.property.powerInput">PowerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainer.property.privateRegistryAccessInput">PrivateRegistryAccessInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerPrivateRegistryAccess">LightsailContainerPrivateRegistryAccess</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainer.property.publicDomainNamesInput">PublicDomainNamesInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerPublicDomainNames">LightsailContainerPublicDomainNames</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainer.property.scaleInput">ScaleInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainer.property.serviceNameInput">ServiceNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainer.property.tagsInput">TagsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerTags">LightsailContainerTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainer.property.isDisabled">IsDisabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainer.property.power">Power</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainer.property.scale">Scale</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainer.property.serviceName">ServiceName</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainer.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainer.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainer.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainer.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainer.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainer.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainer.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainer.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainer.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainer.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainer.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainer.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainer.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainer.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `ContainerArn`<sup>Required</sup> <a name="ContainerArn" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainer.property.containerArn"></a>

```csharp
public string ContainerArn { get; }
```

- *Type:* string

---

##### `ContainerServiceDeployment`<sup>Required</sup> <a name="ContainerServiceDeployment" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainer.property.containerServiceDeployment"></a>

```csharp
public LightsailContainerContainerServiceDeploymentOutputReference ContainerServiceDeployment { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentOutputReference">LightsailContainerContainerServiceDeploymentOutputReference</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainer.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `PrincipalArn`<sup>Required</sup> <a name="PrincipalArn" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainer.property.principalArn"></a>

```csharp
public string PrincipalArn { get; }
```

- *Type:* string

---

##### `PrivateRegistryAccess`<sup>Required</sup> <a name="PrivateRegistryAccess" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainer.property.privateRegistryAccess"></a>

```csharp
public LightsailContainerPrivateRegistryAccessOutputReference PrivateRegistryAccess { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerPrivateRegistryAccessOutputReference">LightsailContainerPrivateRegistryAccessOutputReference</a>

---

##### `PublicDomainNames`<sup>Required</sup> <a name="PublicDomainNames" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainer.property.publicDomainNames"></a>

```csharp
public LightsailContainerPublicDomainNamesList PublicDomainNames { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerPublicDomainNamesList">LightsailContainerPublicDomainNamesList</a>

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainer.property.tags"></a>

```csharp
public LightsailContainerTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerTagsList">LightsailContainerTagsList</a>

---

##### `Url`<sup>Required</sup> <a name="Url" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainer.property.url"></a>

```csharp
public string Url { get; }
```

- *Type:* string

---

##### `ContainerServiceDeploymentInput`<sup>Optional</sup> <a name="ContainerServiceDeploymentInput" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainer.property.containerServiceDeploymentInput"></a>

```csharp
public IResolvable|LightsailContainerContainerServiceDeployment ContainerServiceDeploymentInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeployment">LightsailContainerContainerServiceDeployment</a>

---

##### `IsDisabledInput`<sup>Optional</sup> <a name="IsDisabledInput" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainer.property.isDisabledInput"></a>

```csharp
public bool|IResolvable IsDisabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `PowerInput`<sup>Optional</sup> <a name="PowerInput" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainer.property.powerInput"></a>

```csharp
public string PowerInput { get; }
```

- *Type:* string

---

##### `PrivateRegistryAccessInput`<sup>Optional</sup> <a name="PrivateRegistryAccessInput" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainer.property.privateRegistryAccessInput"></a>

```csharp
public IResolvable|LightsailContainerPrivateRegistryAccess PrivateRegistryAccessInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerPrivateRegistryAccess">LightsailContainerPrivateRegistryAccess</a>

---

##### `PublicDomainNamesInput`<sup>Optional</sup> <a name="PublicDomainNamesInput" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainer.property.publicDomainNamesInput"></a>

```csharp
public IResolvable|LightsailContainerPublicDomainNames[] PublicDomainNamesInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerPublicDomainNames">LightsailContainerPublicDomainNames</a>[]

---

##### `ScaleInput`<sup>Optional</sup> <a name="ScaleInput" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainer.property.scaleInput"></a>

```csharp
public double ScaleInput { get; }
```

- *Type:* double

---

##### `ServiceNameInput`<sup>Optional</sup> <a name="ServiceNameInput" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainer.property.serviceNameInput"></a>

```csharp
public string ServiceNameInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainer.property.tagsInput"></a>

```csharp
public IResolvable|LightsailContainerTags[] TagsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerTags">LightsailContainerTags</a>[]

---

##### `IsDisabled`<sup>Required</sup> <a name="IsDisabled" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainer.property.isDisabled"></a>

```csharp
public bool|IResolvable IsDisabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Power`<sup>Required</sup> <a name="Power" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainer.property.power"></a>

```csharp
public string Power { get; }
```

- *Type:* string

---

##### `Scale`<sup>Required</sup> <a name="Scale" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainer.property.scale"></a>

```csharp
public double Scale { get; }
```

- *Type:* double

---

##### `ServiceName`<sup>Required</sup> <a name="ServiceName" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainer.property.serviceName"></a>

```csharp
public string ServiceName { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainer.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainer.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### LightsailContainerConfig <a name="LightsailContainerConfig" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new LightsailContainerConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Power,
    double Scale,
    string ServiceName,
    LightsailContainerContainerServiceDeployment ContainerServiceDeployment = null,
    bool|IResolvable IsDisabled = null,
    LightsailContainerPrivateRegistryAccess PrivateRegistryAccess = null,
    IResolvable|LightsailContainerPublicDomainNames[] PublicDomainNames = null,
    IResolvable|LightsailContainerTags[] Tags = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerConfig.property.power">Power</a></code> | <code>string</code> | The power specification for the container service. |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerConfig.property.scale">Scale</a></code> | <code>double</code> | The scale specification for the container service. |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerConfig.property.serviceName">ServiceName</a></code> | <code>string</code> | The name for the container service. |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerConfig.property.containerServiceDeployment">ContainerServiceDeployment</a></code> | <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeployment">LightsailContainerContainerServiceDeployment</a></code> | Describes a container deployment configuration of an Amazon Lightsail container service. |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerConfig.property.isDisabled">IsDisabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | A Boolean value to indicate whether the container service is disabled. |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerConfig.property.privateRegistryAccess">PrivateRegistryAccess</a></code> | <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerPrivateRegistryAccess">LightsailContainerPrivateRegistryAccess</a></code> | A Boolean value to indicate whether the container service has access to private container image repositories, such as Amazon Elastic Container Registry (Amazon ECR) private repositories. |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerConfig.property.publicDomainNames">PublicDomainNames</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerPublicDomainNames">LightsailContainerPublicDomainNames</a>[]</code> | The public domain names to use with the container service, such as example.com and www.example.com. |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerConfig.property.tags">Tags</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerTags">LightsailContainerTags</a>[]</code> | An array of key-value pairs to apply to this resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Power`<sup>Required</sup> <a name="Power" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerConfig.property.power"></a>

```csharp
public string Power { get; set; }
```

- *Type:* string

The power specification for the container service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lightsail_container#power LightsailContainer#power}

---

##### `Scale`<sup>Required</sup> <a name="Scale" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerConfig.property.scale"></a>

```csharp
public double Scale { get; set; }
```

- *Type:* double

The scale specification for the container service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lightsail_container#scale LightsailContainer#scale}

---

##### `ServiceName`<sup>Required</sup> <a name="ServiceName" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerConfig.property.serviceName"></a>

```csharp
public string ServiceName { get; set; }
```

- *Type:* string

The name for the container service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lightsail_container#service_name LightsailContainer#service_name}

---

##### `ContainerServiceDeployment`<sup>Optional</sup> <a name="ContainerServiceDeployment" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerConfig.property.containerServiceDeployment"></a>

```csharp
public LightsailContainerContainerServiceDeployment ContainerServiceDeployment { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeployment">LightsailContainerContainerServiceDeployment</a>

Describes a container deployment configuration of an Amazon Lightsail container service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lightsail_container#container_service_deployment LightsailContainer#container_service_deployment}

---

##### `IsDisabled`<sup>Optional</sup> <a name="IsDisabled" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerConfig.property.isDisabled"></a>

```csharp
public bool|IResolvable IsDisabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

A Boolean value to indicate whether the container service is disabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lightsail_container#is_disabled LightsailContainer#is_disabled}

---

##### `PrivateRegistryAccess`<sup>Optional</sup> <a name="PrivateRegistryAccess" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerConfig.property.privateRegistryAccess"></a>

```csharp
public LightsailContainerPrivateRegistryAccess PrivateRegistryAccess { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerPrivateRegistryAccess">LightsailContainerPrivateRegistryAccess</a>

A Boolean value to indicate whether the container service has access to private container image repositories, such as Amazon Elastic Container Registry (Amazon ECR) private repositories.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lightsail_container#private_registry_access LightsailContainer#private_registry_access}

---

##### `PublicDomainNames`<sup>Optional</sup> <a name="PublicDomainNames" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerConfig.property.publicDomainNames"></a>

```csharp
public IResolvable|LightsailContainerPublicDomainNames[] PublicDomainNames { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerPublicDomainNames">LightsailContainerPublicDomainNames</a>[]

The public domain names to use with the container service, such as example.com and www.example.com.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lightsail_container#public_domain_names LightsailContainer#public_domain_names}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerConfig.property.tags"></a>

```csharp
public IResolvable|LightsailContainerTags[] Tags { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerTags">LightsailContainerTags</a>[]

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lightsail_container#tags LightsailContainer#tags}

---

### LightsailContainerContainerServiceDeployment <a name="LightsailContainerContainerServiceDeployment" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeployment"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeployment.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new LightsailContainerContainerServiceDeployment {
    IResolvable|LightsailContainerContainerServiceDeploymentContainers[] Containers = null,
    LightsailContainerContainerServiceDeploymentPublicEndpoint PublicEndpoint = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeployment.property.containers">Containers</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainers">LightsailContainerContainerServiceDeploymentContainers</a>[]</code> | An object that describes the configuration for the containers of the deployment. |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeployment.property.publicEndpoint">PublicEndpoint</a></code> | <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpoint">LightsailContainerContainerServiceDeploymentPublicEndpoint</a></code> | An object that describes the endpoint of the deployment. |

---

##### `Containers`<sup>Optional</sup> <a name="Containers" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeployment.property.containers"></a>

```csharp
public IResolvable|LightsailContainerContainerServiceDeploymentContainers[] Containers { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainers">LightsailContainerContainerServiceDeploymentContainers</a>[]

An object that describes the configuration for the containers of the deployment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lightsail_container#containers LightsailContainer#containers}

---

##### `PublicEndpoint`<sup>Optional</sup> <a name="PublicEndpoint" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeployment.property.publicEndpoint"></a>

```csharp
public LightsailContainerContainerServiceDeploymentPublicEndpoint PublicEndpoint { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpoint">LightsailContainerContainerServiceDeploymentPublicEndpoint</a>

An object that describes the endpoint of the deployment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lightsail_container#public_endpoint LightsailContainer#public_endpoint}

---

### LightsailContainerContainerServiceDeploymentContainers <a name="LightsailContainerContainerServiceDeploymentContainers" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainers"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainers.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new LightsailContainerContainerServiceDeploymentContainers {
    string[] Command = null,
    string ContainerName = null,
    IResolvable|LightsailContainerContainerServiceDeploymentContainersEnvironment[] Environment = null,
    string Image = null,
    IResolvable|LightsailContainerContainerServiceDeploymentContainersPorts[] Ports = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainers.property.command">Command</a></code> | <code>string[]</code> | The launch command for the container. |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainers.property.containerName">ContainerName</a></code> | <code>string</code> | The name of the container. |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainers.property.environment">Environment</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersEnvironment">LightsailContainerContainerServiceDeploymentContainersEnvironment</a>[]</code> | The environment variables of the container. |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainers.property.image">Image</a></code> | <code>string</code> | The name of the image used for the container. |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainers.property.ports">Ports</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersPorts">LightsailContainerContainerServiceDeploymentContainersPorts</a>[]</code> | The open firewall ports of the container. |

---

##### `Command`<sup>Optional</sup> <a name="Command" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainers.property.command"></a>

```csharp
public string[] Command { get; set; }
```

- *Type:* string[]

The launch command for the container.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lightsail_container#command LightsailContainer#command}

---

##### `ContainerName`<sup>Optional</sup> <a name="ContainerName" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainers.property.containerName"></a>

```csharp
public string ContainerName { get; set; }
```

- *Type:* string

The name of the container.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lightsail_container#container_name LightsailContainer#container_name}

---

##### `Environment`<sup>Optional</sup> <a name="Environment" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainers.property.environment"></a>

```csharp
public IResolvable|LightsailContainerContainerServiceDeploymentContainersEnvironment[] Environment { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersEnvironment">LightsailContainerContainerServiceDeploymentContainersEnvironment</a>[]

The environment variables of the container.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lightsail_container#environment LightsailContainer#environment}

---

##### `Image`<sup>Optional</sup> <a name="Image" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainers.property.image"></a>

```csharp
public string Image { get; set; }
```

- *Type:* string

The name of the image used for the container.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lightsail_container#image LightsailContainer#image}

---

##### `Ports`<sup>Optional</sup> <a name="Ports" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainers.property.ports"></a>

```csharp
public IResolvable|LightsailContainerContainerServiceDeploymentContainersPorts[] Ports { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersPorts">LightsailContainerContainerServiceDeploymentContainersPorts</a>[]

The open firewall ports of the container.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lightsail_container#ports LightsailContainer#ports}

---

### LightsailContainerContainerServiceDeploymentContainersEnvironment <a name="LightsailContainerContainerServiceDeploymentContainersEnvironment" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersEnvironment"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersEnvironment.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new LightsailContainerContainerServiceDeploymentContainersEnvironment {
    string Value = null,
    string Variable = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersEnvironment.property.value">Value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lightsail_container#value LightsailContainer#value}. |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersEnvironment.property.variable">Variable</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lightsail_container#variable LightsailContainer#variable}. |

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersEnvironment.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lightsail_container#value LightsailContainer#value}.

---

##### `Variable`<sup>Optional</sup> <a name="Variable" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersEnvironment.property.variable"></a>

```csharp
public string Variable { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lightsail_container#variable LightsailContainer#variable}.

---

### LightsailContainerContainerServiceDeploymentContainersPorts <a name="LightsailContainerContainerServiceDeploymentContainersPorts" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersPorts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersPorts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new LightsailContainerContainerServiceDeploymentContainersPorts {
    string Port = null,
    string Protocol = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersPorts.property.port">Port</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lightsail_container#port LightsailContainer#port}. |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersPorts.property.protocol">Protocol</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lightsail_container#protocol LightsailContainer#protocol}. |

---

##### `Port`<sup>Optional</sup> <a name="Port" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersPorts.property.port"></a>

```csharp
public string Port { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lightsail_container#port LightsailContainer#port}.

---

##### `Protocol`<sup>Optional</sup> <a name="Protocol" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersPorts.property.protocol"></a>

```csharp
public string Protocol { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lightsail_container#protocol LightsailContainer#protocol}.

---

### LightsailContainerContainerServiceDeploymentPublicEndpoint <a name="LightsailContainerContainerServiceDeploymentPublicEndpoint" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpoint"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpoint.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new LightsailContainerContainerServiceDeploymentPublicEndpoint {
    string ContainerName = null,
    double ContainerPort = null,
    LightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfig HealthCheckConfig = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpoint.property.containerName">ContainerName</a></code> | <code>string</code> | The name of the container for the endpoint. |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpoint.property.containerPort">ContainerPort</a></code> | <code>double</code> | The port of the container to which traffic is forwarded to. |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpoint.property.healthCheckConfig">HealthCheckConfig</a></code> | <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfig">LightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfig</a></code> | An object that describes the health check configuration of the container. |

---

##### `ContainerName`<sup>Optional</sup> <a name="ContainerName" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpoint.property.containerName"></a>

```csharp
public string ContainerName { get; set; }
```

- *Type:* string

The name of the container for the endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lightsail_container#container_name LightsailContainer#container_name}

---

##### `ContainerPort`<sup>Optional</sup> <a name="ContainerPort" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpoint.property.containerPort"></a>

```csharp
public double ContainerPort { get; set; }
```

- *Type:* double

The port of the container to which traffic is forwarded to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lightsail_container#container_port LightsailContainer#container_port}

---

##### `HealthCheckConfig`<sup>Optional</sup> <a name="HealthCheckConfig" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpoint.property.healthCheckConfig"></a>

```csharp
public LightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfig HealthCheckConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfig">LightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfig</a>

An object that describes the health check configuration of the container.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lightsail_container#health_check_config LightsailContainer#health_check_config}

---

### LightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfig <a name="LightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfig" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new LightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfig {
    double HealthyThreshold = null,
    double IntervalSeconds = null,
    string Path = null,
    string SuccessCodes = null,
    double TimeoutSeconds = null,
    double UnhealthyThreshold = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfig.property.healthyThreshold">HealthyThreshold</a></code> | <code>double</code> | The number of consecutive health checks successes required before moving the container to the Healthy state. |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfig.property.intervalSeconds">IntervalSeconds</a></code> | <code>double</code> | The approximate interval, in seconds, between health checks of an individual container. |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfig.property.path">Path</a></code> | <code>string</code> | The path on the container on which to perform the health check. The default value is /. |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfig.property.successCodes">SuccessCodes</a></code> | <code>string</code> | The HTTP codes to use when checking for a successful response from a container. |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfig.property.timeoutSeconds">TimeoutSeconds</a></code> | <code>double</code> | The amount of time, in seconds, during which no response means a failed health check. |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfig.property.unhealthyThreshold">UnhealthyThreshold</a></code> | <code>double</code> | The number of consecutive health check failures required before moving the container to the Unhealthy state. |

---

##### `HealthyThreshold`<sup>Optional</sup> <a name="HealthyThreshold" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfig.property.healthyThreshold"></a>

```csharp
public double HealthyThreshold { get; set; }
```

- *Type:* double

The number of consecutive health checks successes required before moving the container to the Healthy state.

The default value is 2.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lightsail_container#healthy_threshold LightsailContainer#healthy_threshold}

---

##### `IntervalSeconds`<sup>Optional</sup> <a name="IntervalSeconds" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfig.property.intervalSeconds"></a>

```csharp
public double IntervalSeconds { get; set; }
```

- *Type:* double

The approximate interval, in seconds, between health checks of an individual container.

You can specify between 5 and 300 seconds. The default value is 5.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lightsail_container#interval_seconds LightsailContainer#interval_seconds}

---

##### `Path`<sup>Optional</sup> <a name="Path" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfig.property.path"></a>

```csharp
public string Path { get; set; }
```

- *Type:* string

The path on the container on which to perform the health check. The default value is /.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lightsail_container#path LightsailContainer#path}

---

##### `SuccessCodes`<sup>Optional</sup> <a name="SuccessCodes" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfig.property.successCodes"></a>

```csharp
public string SuccessCodes { get; set; }
```

- *Type:* string

The HTTP codes to use when checking for a successful response from a container.

You can specify values between 200 and 499. You can specify multiple values (for example, 200,202) or a range of values (for example, 200-299).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lightsail_container#success_codes LightsailContainer#success_codes}

---

##### `TimeoutSeconds`<sup>Optional</sup> <a name="TimeoutSeconds" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfig.property.timeoutSeconds"></a>

```csharp
public double TimeoutSeconds { get; set; }
```

- *Type:* double

The amount of time, in seconds, during which no response means a failed health check.

You can specify between 2 and 60 seconds. The default value is 2.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lightsail_container#timeout_seconds LightsailContainer#timeout_seconds}

---

##### `UnhealthyThreshold`<sup>Optional</sup> <a name="UnhealthyThreshold" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfig.property.unhealthyThreshold"></a>

```csharp
public double UnhealthyThreshold { get; set; }
```

- *Type:* double

The number of consecutive health check failures required before moving the container to the Unhealthy state.

The default value is 2.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lightsail_container#unhealthy_threshold LightsailContainer#unhealthy_threshold}

---

### LightsailContainerPrivateRegistryAccess <a name="LightsailContainerPrivateRegistryAccess" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerPrivateRegistryAccess"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerPrivateRegistryAccess.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new LightsailContainerPrivateRegistryAccess {
    LightsailContainerPrivateRegistryAccessEcrImagePullerRole EcrImagePullerRole = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerPrivateRegistryAccess.property.ecrImagePullerRole">EcrImagePullerRole</a></code> | <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerPrivateRegistryAccessEcrImagePullerRole">LightsailContainerPrivateRegistryAccessEcrImagePullerRole</a></code> | An object to describe a request to activate or deactivate the role that you can use to grant an Amazon Lightsail container service access to Amazon Elastic Container Registry (Amazon ECR) private repositories. |

---

##### `EcrImagePullerRole`<sup>Optional</sup> <a name="EcrImagePullerRole" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerPrivateRegistryAccess.property.ecrImagePullerRole"></a>

```csharp
public LightsailContainerPrivateRegistryAccessEcrImagePullerRole EcrImagePullerRole { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerPrivateRegistryAccessEcrImagePullerRole">LightsailContainerPrivateRegistryAccessEcrImagePullerRole</a>

An object to describe a request to activate or deactivate the role that you can use to grant an Amazon Lightsail container service access to Amazon Elastic Container Registry (Amazon ECR) private repositories.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lightsail_container#ecr_image_puller_role LightsailContainer#ecr_image_puller_role}

---

### LightsailContainerPrivateRegistryAccessEcrImagePullerRole <a name="LightsailContainerPrivateRegistryAccessEcrImagePullerRole" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerPrivateRegistryAccessEcrImagePullerRole"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerPrivateRegistryAccessEcrImagePullerRole.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new LightsailContainerPrivateRegistryAccessEcrImagePullerRole {
    bool|IResolvable IsActive = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerPrivateRegistryAccessEcrImagePullerRole.property.isActive">IsActive</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | A Boolean value that indicates whether to activate the role. |

---

##### `IsActive`<sup>Optional</sup> <a name="IsActive" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerPrivateRegistryAccessEcrImagePullerRole.property.isActive"></a>

```csharp
public bool|IResolvable IsActive { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

A Boolean value that indicates whether to activate the role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lightsail_container#is_active LightsailContainer#is_active}

---

### LightsailContainerPublicDomainNames <a name="LightsailContainerPublicDomainNames" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerPublicDomainNames"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerPublicDomainNames.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new LightsailContainerPublicDomainNames {
    string CertificateName = null,
    string[] DomainNames = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerPublicDomainNames.property.certificateName">CertificateName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lightsail_container#certificate_name LightsailContainer#certificate_name}. |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerPublicDomainNames.property.domainNames">DomainNames</a></code> | <code>string[]</code> | An object that describes the configuration for the containers of the deployment. |

---

##### `CertificateName`<sup>Optional</sup> <a name="CertificateName" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerPublicDomainNames.property.certificateName"></a>

```csharp
public string CertificateName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lightsail_container#certificate_name LightsailContainer#certificate_name}.

---

##### `DomainNames`<sup>Optional</sup> <a name="DomainNames" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerPublicDomainNames.property.domainNames"></a>

```csharp
public string[] DomainNames { get; set; }
```

- *Type:* string[]

An object that describes the configuration for the containers of the deployment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lightsail_container#domain_names LightsailContainer#domain_names}

---

### LightsailContainerTags <a name="LightsailContainerTags" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new LightsailContainerTags {
    string Key = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerTags.property.key">Key</a></code> | <code>string</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerTags.property.value">Value</a></code> | <code>string</code> | The value for the tag. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerTags.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

The key name of the tag.

You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lightsail_container#key LightsailContainer#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerTags.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

The value for the tag.

You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lightsail_container#value LightsailContainer#value}

---

## Classes <a name="Classes" id="Classes"></a>

### LightsailContainerContainerServiceDeploymentContainersEnvironmentList <a name="LightsailContainerContainerServiceDeploymentContainersEnvironmentList" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersEnvironmentList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersEnvironmentList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new LightsailContainerContainerServiceDeploymentContainersEnvironmentList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersEnvironmentList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersEnvironmentList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersEnvironmentList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersEnvironmentList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersEnvironmentList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersEnvironmentList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersEnvironmentList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersEnvironmentList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersEnvironmentList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersEnvironmentList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersEnvironmentList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersEnvironmentList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersEnvironmentList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersEnvironmentList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersEnvironmentList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersEnvironmentList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersEnvironmentList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersEnvironmentList.get"></a>

```csharp
private LightsailContainerContainerServiceDeploymentContainersEnvironmentOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersEnvironmentList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersEnvironmentList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersEnvironmentList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersEnvironmentList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersEnvironment">LightsailContainerContainerServiceDeploymentContainersEnvironment</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersEnvironmentList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersEnvironmentList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersEnvironmentList.property.internalValue"></a>

```csharp
public IResolvable|LightsailContainerContainerServiceDeploymentContainersEnvironment[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersEnvironment">LightsailContainerContainerServiceDeploymentContainersEnvironment</a>[]

---


### LightsailContainerContainerServiceDeploymentContainersEnvironmentOutputReference <a name="LightsailContainerContainerServiceDeploymentContainersEnvironmentOutputReference" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersEnvironmentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersEnvironmentOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new LightsailContainerContainerServiceDeploymentContainersEnvironmentOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersEnvironmentOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersEnvironmentOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersEnvironmentOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersEnvironmentOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersEnvironmentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersEnvironmentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersEnvironmentOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersEnvironmentOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersEnvironmentOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersEnvironmentOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersEnvironmentOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersEnvironmentOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersEnvironmentOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersEnvironmentOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersEnvironmentOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersEnvironmentOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersEnvironmentOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersEnvironmentOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersEnvironmentOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersEnvironmentOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersEnvironmentOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersEnvironmentOutputReference.resetValue">ResetValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersEnvironmentOutputReference.resetVariable">ResetVariable</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersEnvironmentOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersEnvironmentOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersEnvironmentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersEnvironmentOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersEnvironmentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersEnvironmentOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersEnvironmentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersEnvironmentOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersEnvironmentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersEnvironmentOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersEnvironmentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersEnvironmentOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersEnvironmentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersEnvironmentOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersEnvironmentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersEnvironmentOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersEnvironmentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersEnvironmentOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersEnvironmentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersEnvironmentOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersEnvironmentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersEnvironmentOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersEnvironmentOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersEnvironmentOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersEnvironmentOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```

##### `ResetVariable` <a name="ResetVariable" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersEnvironmentOutputReference.resetVariable"></a>

```csharp
private void ResetVariable()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersEnvironmentOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersEnvironmentOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersEnvironmentOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersEnvironmentOutputReference.property.variableInput">VariableInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersEnvironmentOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersEnvironmentOutputReference.property.variable">Variable</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersEnvironmentOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersEnvironment">LightsailContainerContainerServiceDeploymentContainersEnvironment</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersEnvironmentOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersEnvironmentOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersEnvironmentOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `VariableInput`<sup>Optional</sup> <a name="VariableInput" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersEnvironmentOutputReference.property.variableInput"></a>

```csharp
public string VariableInput { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersEnvironmentOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `Variable`<sup>Required</sup> <a name="Variable" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersEnvironmentOutputReference.property.variable"></a>

```csharp
public string Variable { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersEnvironmentOutputReference.property.internalValue"></a>

```csharp
public IResolvable|LightsailContainerContainerServiceDeploymentContainersEnvironment InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersEnvironment">LightsailContainerContainerServiceDeploymentContainersEnvironment</a>

---


### LightsailContainerContainerServiceDeploymentContainersList <a name="LightsailContainerContainerServiceDeploymentContainersList" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new LightsailContainerContainerServiceDeploymentContainersList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersList.get"></a>

```csharp
private LightsailContainerContainerServiceDeploymentContainersOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainers">LightsailContainerContainerServiceDeploymentContainers</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersList.property.internalValue"></a>

```csharp
public IResolvable|LightsailContainerContainerServiceDeploymentContainers[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainers">LightsailContainerContainerServiceDeploymentContainers</a>[]

---


### LightsailContainerContainerServiceDeploymentContainersOutputReference <a name="LightsailContainerContainerServiceDeploymentContainersOutputReference" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new LightsailContainerContainerServiceDeploymentContainersOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersOutputReference.putEnvironment">PutEnvironment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersOutputReference.putPorts">PutPorts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersOutputReference.resetCommand">ResetCommand</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersOutputReference.resetContainerName">ResetContainerName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersOutputReference.resetEnvironment">ResetEnvironment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersOutputReference.resetImage">ResetImage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersOutputReference.resetPorts">ResetPorts</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutEnvironment` <a name="PutEnvironment" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersOutputReference.putEnvironment"></a>

```csharp
private void PutEnvironment(IResolvable|LightsailContainerContainerServiceDeploymentContainersEnvironment[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersOutputReference.putEnvironment.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersEnvironment">LightsailContainerContainerServiceDeploymentContainersEnvironment</a>[]

---

##### `PutPorts` <a name="PutPorts" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersOutputReference.putPorts"></a>

```csharp
private void PutPorts(IResolvable|LightsailContainerContainerServiceDeploymentContainersPorts[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersOutputReference.putPorts.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersPorts">LightsailContainerContainerServiceDeploymentContainersPorts</a>[]

---

##### `ResetCommand` <a name="ResetCommand" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersOutputReference.resetCommand"></a>

```csharp
private void ResetCommand()
```

##### `ResetContainerName` <a name="ResetContainerName" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersOutputReference.resetContainerName"></a>

```csharp
private void ResetContainerName()
```

##### `ResetEnvironment` <a name="ResetEnvironment" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersOutputReference.resetEnvironment"></a>

```csharp
private void ResetEnvironment()
```

##### `ResetImage` <a name="ResetImage" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersOutputReference.resetImage"></a>

```csharp
private void ResetImage()
```

##### `ResetPorts` <a name="ResetPorts" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersOutputReference.resetPorts"></a>

```csharp
private void ResetPorts()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersOutputReference.property.environment">Environment</a></code> | <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersEnvironmentList">LightsailContainerContainerServiceDeploymentContainersEnvironmentList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersOutputReference.property.ports">Ports</a></code> | <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersPortsList">LightsailContainerContainerServiceDeploymentContainersPortsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersOutputReference.property.commandInput">CommandInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersOutputReference.property.containerNameInput">ContainerNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersOutputReference.property.environmentInput">EnvironmentInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersEnvironment">LightsailContainerContainerServiceDeploymentContainersEnvironment</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersOutputReference.property.imageInput">ImageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersOutputReference.property.portsInput">PortsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersPorts">LightsailContainerContainerServiceDeploymentContainersPorts</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersOutputReference.property.command">Command</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersOutputReference.property.containerName">ContainerName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersOutputReference.property.image">Image</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainers">LightsailContainerContainerServiceDeploymentContainers</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Environment`<sup>Required</sup> <a name="Environment" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersOutputReference.property.environment"></a>

```csharp
public LightsailContainerContainerServiceDeploymentContainersEnvironmentList Environment { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersEnvironmentList">LightsailContainerContainerServiceDeploymentContainersEnvironmentList</a>

---

##### `Ports`<sup>Required</sup> <a name="Ports" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersOutputReference.property.ports"></a>

```csharp
public LightsailContainerContainerServiceDeploymentContainersPortsList Ports { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersPortsList">LightsailContainerContainerServiceDeploymentContainersPortsList</a>

---

##### `CommandInput`<sup>Optional</sup> <a name="CommandInput" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersOutputReference.property.commandInput"></a>

```csharp
public string[] CommandInput { get; }
```

- *Type:* string[]

---

##### `ContainerNameInput`<sup>Optional</sup> <a name="ContainerNameInput" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersOutputReference.property.containerNameInput"></a>

```csharp
public string ContainerNameInput { get; }
```

- *Type:* string

---

##### `EnvironmentInput`<sup>Optional</sup> <a name="EnvironmentInput" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersOutputReference.property.environmentInput"></a>

```csharp
public IResolvable|LightsailContainerContainerServiceDeploymentContainersEnvironment[] EnvironmentInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersEnvironment">LightsailContainerContainerServiceDeploymentContainersEnvironment</a>[]

---

##### `ImageInput`<sup>Optional</sup> <a name="ImageInput" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersOutputReference.property.imageInput"></a>

```csharp
public string ImageInput { get; }
```

- *Type:* string

---

##### `PortsInput`<sup>Optional</sup> <a name="PortsInput" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersOutputReference.property.portsInput"></a>

```csharp
public IResolvable|LightsailContainerContainerServiceDeploymentContainersPorts[] PortsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersPorts">LightsailContainerContainerServiceDeploymentContainersPorts</a>[]

---

##### `Command`<sup>Required</sup> <a name="Command" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersOutputReference.property.command"></a>

```csharp
public string[] Command { get; }
```

- *Type:* string[]

---

##### `ContainerName`<sup>Required</sup> <a name="ContainerName" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersOutputReference.property.containerName"></a>

```csharp
public string ContainerName { get; }
```

- *Type:* string

---

##### `Image`<sup>Required</sup> <a name="Image" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersOutputReference.property.image"></a>

```csharp
public string Image { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersOutputReference.property.internalValue"></a>

```csharp
public IResolvable|LightsailContainerContainerServiceDeploymentContainers InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainers">LightsailContainerContainerServiceDeploymentContainers</a>

---


### LightsailContainerContainerServiceDeploymentContainersPortsList <a name="LightsailContainerContainerServiceDeploymentContainersPortsList" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersPortsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersPortsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new LightsailContainerContainerServiceDeploymentContainersPortsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersPortsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersPortsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersPortsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersPortsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersPortsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersPortsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersPortsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersPortsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersPortsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersPortsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersPortsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersPortsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersPortsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersPortsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersPortsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersPortsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersPortsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersPortsList.get"></a>

```csharp
private LightsailContainerContainerServiceDeploymentContainersPortsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersPortsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersPortsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersPortsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersPortsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersPorts">LightsailContainerContainerServiceDeploymentContainersPorts</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersPortsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersPortsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersPortsList.property.internalValue"></a>

```csharp
public IResolvable|LightsailContainerContainerServiceDeploymentContainersPorts[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersPorts">LightsailContainerContainerServiceDeploymentContainersPorts</a>[]

---


### LightsailContainerContainerServiceDeploymentContainersPortsOutputReference <a name="LightsailContainerContainerServiceDeploymentContainersPortsOutputReference" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersPortsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersPortsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new LightsailContainerContainerServiceDeploymentContainersPortsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersPortsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersPortsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersPortsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersPortsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersPortsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersPortsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersPortsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersPortsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersPortsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersPortsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersPortsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersPortsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersPortsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersPortsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersPortsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersPortsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersPortsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersPortsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersPortsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersPortsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersPortsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersPortsOutputReference.resetPort">ResetPort</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersPortsOutputReference.resetProtocol">ResetProtocol</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersPortsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersPortsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersPortsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersPortsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersPortsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersPortsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersPortsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersPortsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersPortsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersPortsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersPortsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersPortsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersPortsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersPortsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersPortsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersPortsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersPortsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersPortsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersPortsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersPortsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersPortsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersPortsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersPortsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersPortsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPort` <a name="ResetPort" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersPortsOutputReference.resetPort"></a>

```csharp
private void ResetPort()
```

##### `ResetProtocol` <a name="ResetProtocol" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersPortsOutputReference.resetProtocol"></a>

```csharp
private void ResetProtocol()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersPortsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersPortsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersPortsOutputReference.property.portInput">PortInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersPortsOutputReference.property.protocolInput">ProtocolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersPortsOutputReference.property.port">Port</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersPortsOutputReference.property.protocol">Protocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersPortsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersPorts">LightsailContainerContainerServiceDeploymentContainersPorts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersPortsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersPortsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PortInput`<sup>Optional</sup> <a name="PortInput" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersPortsOutputReference.property.portInput"></a>

```csharp
public string PortInput { get; }
```

- *Type:* string

---

##### `ProtocolInput`<sup>Optional</sup> <a name="ProtocolInput" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersPortsOutputReference.property.protocolInput"></a>

```csharp
public string ProtocolInput { get; }
```

- *Type:* string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersPortsOutputReference.property.port"></a>

```csharp
public string Port { get; }
```

- *Type:* string

---

##### `Protocol`<sup>Required</sup> <a name="Protocol" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersPortsOutputReference.property.protocol"></a>

```csharp
public string Protocol { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersPortsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|LightsailContainerContainerServiceDeploymentContainersPorts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersPorts">LightsailContainerContainerServiceDeploymentContainersPorts</a>

---


### LightsailContainerContainerServiceDeploymentOutputReference <a name="LightsailContainerContainerServiceDeploymentOutputReference" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new LightsailContainerContainerServiceDeploymentOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentOutputReference.putContainers">PutContainers</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentOutputReference.putPublicEndpoint">PutPublicEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentOutputReference.resetContainers">ResetContainers</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentOutputReference.resetPublicEndpoint">ResetPublicEndpoint</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutContainers` <a name="PutContainers" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentOutputReference.putContainers"></a>

```csharp
private void PutContainers(IResolvable|LightsailContainerContainerServiceDeploymentContainers[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentOutputReference.putContainers.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainers">LightsailContainerContainerServiceDeploymentContainers</a>[]

---

##### `PutPublicEndpoint` <a name="PutPublicEndpoint" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentOutputReference.putPublicEndpoint"></a>

```csharp
private void PutPublicEndpoint(LightsailContainerContainerServiceDeploymentPublicEndpoint Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentOutputReference.putPublicEndpoint.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpoint">LightsailContainerContainerServiceDeploymentPublicEndpoint</a>

---

##### `ResetContainers` <a name="ResetContainers" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentOutputReference.resetContainers"></a>

```csharp
private void ResetContainers()
```

##### `ResetPublicEndpoint` <a name="ResetPublicEndpoint" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentOutputReference.resetPublicEndpoint"></a>

```csharp
private void ResetPublicEndpoint()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentOutputReference.property.containers">Containers</a></code> | <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersList">LightsailContainerContainerServiceDeploymentContainersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentOutputReference.property.publicEndpoint">PublicEndpoint</a></code> | <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointOutputReference">LightsailContainerContainerServiceDeploymentPublicEndpointOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentOutputReference.property.containersInput">ContainersInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainers">LightsailContainerContainerServiceDeploymentContainers</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentOutputReference.property.publicEndpointInput">PublicEndpointInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpoint">LightsailContainerContainerServiceDeploymentPublicEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeployment">LightsailContainerContainerServiceDeployment</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Containers`<sup>Required</sup> <a name="Containers" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentOutputReference.property.containers"></a>

```csharp
public LightsailContainerContainerServiceDeploymentContainersList Containers { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersList">LightsailContainerContainerServiceDeploymentContainersList</a>

---

##### `PublicEndpoint`<sup>Required</sup> <a name="PublicEndpoint" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentOutputReference.property.publicEndpoint"></a>

```csharp
public LightsailContainerContainerServiceDeploymentPublicEndpointOutputReference PublicEndpoint { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointOutputReference">LightsailContainerContainerServiceDeploymentPublicEndpointOutputReference</a>

---

##### `ContainersInput`<sup>Optional</sup> <a name="ContainersInput" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentOutputReference.property.containersInput"></a>

```csharp
public IResolvable|LightsailContainerContainerServiceDeploymentContainers[] ContainersInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainers">LightsailContainerContainerServiceDeploymentContainers</a>[]

---

##### `PublicEndpointInput`<sup>Optional</sup> <a name="PublicEndpointInput" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentOutputReference.property.publicEndpointInput"></a>

```csharp
public IResolvable|LightsailContainerContainerServiceDeploymentPublicEndpoint PublicEndpointInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpoint">LightsailContainerContainerServiceDeploymentPublicEndpoint</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentOutputReference.property.internalValue"></a>

```csharp
public IResolvable|LightsailContainerContainerServiceDeployment InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeployment">LightsailContainerContainerServiceDeployment</a>

---


### LightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfigOutputReference <a name="LightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfigOutputReference" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new LightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfigOutputReference.resetHealthyThreshold">ResetHealthyThreshold</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfigOutputReference.resetIntervalSeconds">ResetIntervalSeconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfigOutputReference.resetPath">ResetPath</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfigOutputReference.resetSuccessCodes">ResetSuccessCodes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfigOutputReference.resetTimeoutSeconds">ResetTimeoutSeconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfigOutputReference.resetUnhealthyThreshold">ResetUnhealthyThreshold</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetHealthyThreshold` <a name="ResetHealthyThreshold" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfigOutputReference.resetHealthyThreshold"></a>

```csharp
private void ResetHealthyThreshold()
```

##### `ResetIntervalSeconds` <a name="ResetIntervalSeconds" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfigOutputReference.resetIntervalSeconds"></a>

```csharp
private void ResetIntervalSeconds()
```

##### `ResetPath` <a name="ResetPath" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfigOutputReference.resetPath"></a>

```csharp
private void ResetPath()
```

##### `ResetSuccessCodes` <a name="ResetSuccessCodes" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfigOutputReference.resetSuccessCodes"></a>

```csharp
private void ResetSuccessCodes()
```

##### `ResetTimeoutSeconds` <a name="ResetTimeoutSeconds" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfigOutputReference.resetTimeoutSeconds"></a>

```csharp
private void ResetTimeoutSeconds()
```

##### `ResetUnhealthyThreshold` <a name="ResetUnhealthyThreshold" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfigOutputReference.resetUnhealthyThreshold"></a>

```csharp
private void ResetUnhealthyThreshold()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfigOutputReference.property.healthyThresholdInput">HealthyThresholdInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfigOutputReference.property.intervalSecondsInput">IntervalSecondsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfigOutputReference.property.pathInput">PathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfigOutputReference.property.successCodesInput">SuccessCodesInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfigOutputReference.property.timeoutSecondsInput">TimeoutSecondsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfigOutputReference.property.unhealthyThresholdInput">UnhealthyThresholdInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfigOutputReference.property.healthyThreshold">HealthyThreshold</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfigOutputReference.property.intervalSeconds">IntervalSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfigOutputReference.property.path">Path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfigOutputReference.property.successCodes">SuccessCodes</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfigOutputReference.property.timeoutSeconds">TimeoutSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfigOutputReference.property.unhealthyThreshold">UnhealthyThreshold</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfig">LightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `HealthyThresholdInput`<sup>Optional</sup> <a name="HealthyThresholdInput" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfigOutputReference.property.healthyThresholdInput"></a>

```csharp
public double HealthyThresholdInput { get; }
```

- *Type:* double

---

##### `IntervalSecondsInput`<sup>Optional</sup> <a name="IntervalSecondsInput" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfigOutputReference.property.intervalSecondsInput"></a>

```csharp
public double IntervalSecondsInput { get; }
```

- *Type:* double

---

##### `PathInput`<sup>Optional</sup> <a name="PathInput" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfigOutputReference.property.pathInput"></a>

```csharp
public string PathInput { get; }
```

- *Type:* string

---

##### `SuccessCodesInput`<sup>Optional</sup> <a name="SuccessCodesInput" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfigOutputReference.property.successCodesInput"></a>

```csharp
public string SuccessCodesInput { get; }
```

- *Type:* string

---

##### `TimeoutSecondsInput`<sup>Optional</sup> <a name="TimeoutSecondsInput" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfigOutputReference.property.timeoutSecondsInput"></a>

```csharp
public double TimeoutSecondsInput { get; }
```

- *Type:* double

---

##### `UnhealthyThresholdInput`<sup>Optional</sup> <a name="UnhealthyThresholdInput" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfigOutputReference.property.unhealthyThresholdInput"></a>

```csharp
public double UnhealthyThresholdInput { get; }
```

- *Type:* double

---

##### `HealthyThreshold`<sup>Required</sup> <a name="HealthyThreshold" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfigOutputReference.property.healthyThreshold"></a>

```csharp
public double HealthyThreshold { get; }
```

- *Type:* double

---

##### `IntervalSeconds`<sup>Required</sup> <a name="IntervalSeconds" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfigOutputReference.property.intervalSeconds"></a>

```csharp
public double IntervalSeconds { get; }
```

- *Type:* double

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfigOutputReference.property.path"></a>

```csharp
public string Path { get; }
```

- *Type:* string

---

##### `SuccessCodes`<sup>Required</sup> <a name="SuccessCodes" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfigOutputReference.property.successCodes"></a>

```csharp
public string SuccessCodes { get; }
```

- *Type:* string

---

##### `TimeoutSeconds`<sup>Required</sup> <a name="TimeoutSeconds" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfigOutputReference.property.timeoutSeconds"></a>

```csharp
public double TimeoutSeconds { get; }
```

- *Type:* double

---

##### `UnhealthyThreshold`<sup>Required</sup> <a name="UnhealthyThreshold" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfigOutputReference.property.unhealthyThreshold"></a>

```csharp
public double UnhealthyThreshold { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfigOutputReference.property.internalValue"></a>

```csharp
public IResolvable|LightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfig InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfig">LightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfig</a>

---


### LightsailContainerContainerServiceDeploymentPublicEndpointOutputReference <a name="LightsailContainerContainerServiceDeploymentPublicEndpointOutputReference" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new LightsailContainerContainerServiceDeploymentPublicEndpointOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointOutputReference.putHealthCheckConfig">PutHealthCheckConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointOutputReference.resetContainerName">ResetContainerName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointOutputReference.resetContainerPort">ResetContainerPort</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointOutputReference.resetHealthCheckConfig">ResetHealthCheckConfig</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutHealthCheckConfig` <a name="PutHealthCheckConfig" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointOutputReference.putHealthCheckConfig"></a>

```csharp
private void PutHealthCheckConfig(LightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointOutputReference.putHealthCheckConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfig">LightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfig</a>

---

##### `ResetContainerName` <a name="ResetContainerName" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointOutputReference.resetContainerName"></a>

```csharp
private void ResetContainerName()
```

##### `ResetContainerPort` <a name="ResetContainerPort" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointOutputReference.resetContainerPort"></a>

```csharp
private void ResetContainerPort()
```

##### `ResetHealthCheckConfig` <a name="ResetHealthCheckConfig" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointOutputReference.resetHealthCheckConfig"></a>

```csharp
private void ResetHealthCheckConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointOutputReference.property.healthCheckConfig">HealthCheckConfig</a></code> | <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfigOutputReference">LightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointOutputReference.property.containerNameInput">ContainerNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointOutputReference.property.containerPortInput">ContainerPortInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointOutputReference.property.healthCheckConfigInput">HealthCheckConfigInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfig">LightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointOutputReference.property.containerName">ContainerName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointOutputReference.property.containerPort">ContainerPort</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpoint">LightsailContainerContainerServiceDeploymentPublicEndpoint</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `HealthCheckConfig`<sup>Required</sup> <a name="HealthCheckConfig" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointOutputReference.property.healthCheckConfig"></a>

```csharp
public LightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfigOutputReference HealthCheckConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfigOutputReference">LightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfigOutputReference</a>

---

##### `ContainerNameInput`<sup>Optional</sup> <a name="ContainerNameInput" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointOutputReference.property.containerNameInput"></a>

```csharp
public string ContainerNameInput { get; }
```

- *Type:* string

---

##### `ContainerPortInput`<sup>Optional</sup> <a name="ContainerPortInput" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointOutputReference.property.containerPortInput"></a>

```csharp
public double ContainerPortInput { get; }
```

- *Type:* double

---

##### `HealthCheckConfigInput`<sup>Optional</sup> <a name="HealthCheckConfigInput" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointOutputReference.property.healthCheckConfigInput"></a>

```csharp
public IResolvable|LightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfig HealthCheckConfigInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfig">LightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfig</a>

---

##### `ContainerName`<sup>Required</sup> <a name="ContainerName" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointOutputReference.property.containerName"></a>

```csharp
public string ContainerName { get; }
```

- *Type:* string

---

##### `ContainerPort`<sup>Required</sup> <a name="ContainerPort" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointOutputReference.property.containerPort"></a>

```csharp
public double ContainerPort { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointOutputReference.property.internalValue"></a>

```csharp
public IResolvable|LightsailContainerContainerServiceDeploymentPublicEndpoint InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpoint">LightsailContainerContainerServiceDeploymentPublicEndpoint</a>

---


### LightsailContainerPrivateRegistryAccessEcrImagePullerRoleOutputReference <a name="LightsailContainerPrivateRegistryAccessEcrImagePullerRoleOutputReference" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerPrivateRegistryAccessEcrImagePullerRoleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerPrivateRegistryAccessEcrImagePullerRoleOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new LightsailContainerPrivateRegistryAccessEcrImagePullerRoleOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerPrivateRegistryAccessEcrImagePullerRoleOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerPrivateRegistryAccessEcrImagePullerRoleOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerPrivateRegistryAccessEcrImagePullerRoleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerPrivateRegistryAccessEcrImagePullerRoleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerPrivateRegistryAccessEcrImagePullerRoleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerPrivateRegistryAccessEcrImagePullerRoleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerPrivateRegistryAccessEcrImagePullerRoleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerPrivateRegistryAccessEcrImagePullerRoleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerPrivateRegistryAccessEcrImagePullerRoleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerPrivateRegistryAccessEcrImagePullerRoleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerPrivateRegistryAccessEcrImagePullerRoleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerPrivateRegistryAccessEcrImagePullerRoleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerPrivateRegistryAccessEcrImagePullerRoleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerPrivateRegistryAccessEcrImagePullerRoleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerPrivateRegistryAccessEcrImagePullerRoleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerPrivateRegistryAccessEcrImagePullerRoleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerPrivateRegistryAccessEcrImagePullerRoleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerPrivateRegistryAccessEcrImagePullerRoleOutputReference.resetIsActive">ResetIsActive</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerPrivateRegistryAccessEcrImagePullerRoleOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerPrivateRegistryAccessEcrImagePullerRoleOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerPrivateRegistryAccessEcrImagePullerRoleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerPrivateRegistryAccessEcrImagePullerRoleOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerPrivateRegistryAccessEcrImagePullerRoleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerPrivateRegistryAccessEcrImagePullerRoleOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerPrivateRegistryAccessEcrImagePullerRoleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerPrivateRegistryAccessEcrImagePullerRoleOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerPrivateRegistryAccessEcrImagePullerRoleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerPrivateRegistryAccessEcrImagePullerRoleOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerPrivateRegistryAccessEcrImagePullerRoleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerPrivateRegistryAccessEcrImagePullerRoleOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerPrivateRegistryAccessEcrImagePullerRoleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerPrivateRegistryAccessEcrImagePullerRoleOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerPrivateRegistryAccessEcrImagePullerRoleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerPrivateRegistryAccessEcrImagePullerRoleOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerPrivateRegistryAccessEcrImagePullerRoleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerPrivateRegistryAccessEcrImagePullerRoleOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerPrivateRegistryAccessEcrImagePullerRoleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerPrivateRegistryAccessEcrImagePullerRoleOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerPrivateRegistryAccessEcrImagePullerRoleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerPrivateRegistryAccessEcrImagePullerRoleOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerPrivateRegistryAccessEcrImagePullerRoleOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerPrivateRegistryAccessEcrImagePullerRoleOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIsActive` <a name="ResetIsActive" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerPrivateRegistryAccessEcrImagePullerRoleOutputReference.resetIsActive"></a>

```csharp
private void ResetIsActive()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerPrivateRegistryAccessEcrImagePullerRoleOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerPrivateRegistryAccessEcrImagePullerRoleOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerPrivateRegistryAccessEcrImagePullerRoleOutputReference.property.principalArn">PrincipalArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerPrivateRegistryAccessEcrImagePullerRoleOutputReference.property.isActiveInput">IsActiveInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerPrivateRegistryAccessEcrImagePullerRoleOutputReference.property.isActive">IsActive</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerPrivateRegistryAccessEcrImagePullerRoleOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerPrivateRegistryAccessEcrImagePullerRole">LightsailContainerPrivateRegistryAccessEcrImagePullerRole</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerPrivateRegistryAccessEcrImagePullerRoleOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerPrivateRegistryAccessEcrImagePullerRoleOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PrincipalArn`<sup>Required</sup> <a name="PrincipalArn" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerPrivateRegistryAccessEcrImagePullerRoleOutputReference.property.principalArn"></a>

```csharp
public string PrincipalArn { get; }
```

- *Type:* string

---

##### `IsActiveInput`<sup>Optional</sup> <a name="IsActiveInput" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerPrivateRegistryAccessEcrImagePullerRoleOutputReference.property.isActiveInput"></a>

```csharp
public bool|IResolvable IsActiveInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `IsActive`<sup>Required</sup> <a name="IsActive" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerPrivateRegistryAccessEcrImagePullerRoleOutputReference.property.isActive"></a>

```csharp
public bool|IResolvable IsActive { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerPrivateRegistryAccessEcrImagePullerRoleOutputReference.property.internalValue"></a>

```csharp
public IResolvable|LightsailContainerPrivateRegistryAccessEcrImagePullerRole InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerPrivateRegistryAccessEcrImagePullerRole">LightsailContainerPrivateRegistryAccessEcrImagePullerRole</a>

---


### LightsailContainerPrivateRegistryAccessOutputReference <a name="LightsailContainerPrivateRegistryAccessOutputReference" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerPrivateRegistryAccessOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerPrivateRegistryAccessOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new LightsailContainerPrivateRegistryAccessOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerPrivateRegistryAccessOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerPrivateRegistryAccessOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerPrivateRegistryAccessOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerPrivateRegistryAccessOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerPrivateRegistryAccessOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerPrivateRegistryAccessOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerPrivateRegistryAccessOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerPrivateRegistryAccessOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerPrivateRegistryAccessOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerPrivateRegistryAccessOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerPrivateRegistryAccessOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerPrivateRegistryAccessOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerPrivateRegistryAccessOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerPrivateRegistryAccessOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerPrivateRegistryAccessOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerPrivateRegistryAccessOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerPrivateRegistryAccessOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerPrivateRegistryAccessOutputReference.putEcrImagePullerRole">PutEcrImagePullerRole</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerPrivateRegistryAccessOutputReference.resetEcrImagePullerRole">ResetEcrImagePullerRole</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerPrivateRegistryAccessOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerPrivateRegistryAccessOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerPrivateRegistryAccessOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerPrivateRegistryAccessOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerPrivateRegistryAccessOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerPrivateRegistryAccessOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerPrivateRegistryAccessOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerPrivateRegistryAccessOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerPrivateRegistryAccessOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerPrivateRegistryAccessOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerPrivateRegistryAccessOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerPrivateRegistryAccessOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerPrivateRegistryAccessOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerPrivateRegistryAccessOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerPrivateRegistryAccessOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerPrivateRegistryAccessOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerPrivateRegistryAccessOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerPrivateRegistryAccessOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerPrivateRegistryAccessOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerPrivateRegistryAccessOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerPrivateRegistryAccessOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerPrivateRegistryAccessOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerPrivateRegistryAccessOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerPrivateRegistryAccessOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutEcrImagePullerRole` <a name="PutEcrImagePullerRole" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerPrivateRegistryAccessOutputReference.putEcrImagePullerRole"></a>

```csharp
private void PutEcrImagePullerRole(LightsailContainerPrivateRegistryAccessEcrImagePullerRole Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerPrivateRegistryAccessOutputReference.putEcrImagePullerRole.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerPrivateRegistryAccessEcrImagePullerRole">LightsailContainerPrivateRegistryAccessEcrImagePullerRole</a>

---

##### `ResetEcrImagePullerRole` <a name="ResetEcrImagePullerRole" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerPrivateRegistryAccessOutputReference.resetEcrImagePullerRole"></a>

```csharp
private void ResetEcrImagePullerRole()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerPrivateRegistryAccessOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerPrivateRegistryAccessOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerPrivateRegistryAccessOutputReference.property.ecrImagePullerRole">EcrImagePullerRole</a></code> | <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerPrivateRegistryAccessEcrImagePullerRoleOutputReference">LightsailContainerPrivateRegistryAccessEcrImagePullerRoleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerPrivateRegistryAccessOutputReference.property.ecrImagePullerRoleInput">EcrImagePullerRoleInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerPrivateRegistryAccessEcrImagePullerRole">LightsailContainerPrivateRegistryAccessEcrImagePullerRole</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerPrivateRegistryAccessOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerPrivateRegistryAccess">LightsailContainerPrivateRegistryAccess</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerPrivateRegistryAccessOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerPrivateRegistryAccessOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EcrImagePullerRole`<sup>Required</sup> <a name="EcrImagePullerRole" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerPrivateRegistryAccessOutputReference.property.ecrImagePullerRole"></a>

```csharp
public LightsailContainerPrivateRegistryAccessEcrImagePullerRoleOutputReference EcrImagePullerRole { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerPrivateRegistryAccessEcrImagePullerRoleOutputReference">LightsailContainerPrivateRegistryAccessEcrImagePullerRoleOutputReference</a>

---

##### `EcrImagePullerRoleInput`<sup>Optional</sup> <a name="EcrImagePullerRoleInput" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerPrivateRegistryAccessOutputReference.property.ecrImagePullerRoleInput"></a>

```csharp
public IResolvable|LightsailContainerPrivateRegistryAccessEcrImagePullerRole EcrImagePullerRoleInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerPrivateRegistryAccessEcrImagePullerRole">LightsailContainerPrivateRegistryAccessEcrImagePullerRole</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerPrivateRegistryAccessOutputReference.property.internalValue"></a>

```csharp
public IResolvable|LightsailContainerPrivateRegistryAccess InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerPrivateRegistryAccess">LightsailContainerPrivateRegistryAccess</a>

---


### LightsailContainerPublicDomainNamesList <a name="LightsailContainerPublicDomainNamesList" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerPublicDomainNamesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerPublicDomainNamesList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new LightsailContainerPublicDomainNamesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerPublicDomainNamesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerPublicDomainNamesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerPublicDomainNamesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerPublicDomainNamesList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerPublicDomainNamesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerPublicDomainNamesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerPublicDomainNamesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerPublicDomainNamesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerPublicDomainNamesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerPublicDomainNamesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerPublicDomainNamesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerPublicDomainNamesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerPublicDomainNamesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerPublicDomainNamesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerPublicDomainNamesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerPublicDomainNamesList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerPublicDomainNamesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerPublicDomainNamesList.get"></a>

```csharp
private LightsailContainerPublicDomainNamesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerPublicDomainNamesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerPublicDomainNamesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerPublicDomainNamesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerPublicDomainNamesList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerPublicDomainNames">LightsailContainerPublicDomainNames</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerPublicDomainNamesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerPublicDomainNamesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerPublicDomainNamesList.property.internalValue"></a>

```csharp
public IResolvable|LightsailContainerPublicDomainNames[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerPublicDomainNames">LightsailContainerPublicDomainNames</a>[]

---


### LightsailContainerPublicDomainNamesOutputReference <a name="LightsailContainerPublicDomainNamesOutputReference" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerPublicDomainNamesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerPublicDomainNamesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new LightsailContainerPublicDomainNamesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerPublicDomainNamesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerPublicDomainNamesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerPublicDomainNamesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerPublicDomainNamesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerPublicDomainNamesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerPublicDomainNamesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerPublicDomainNamesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerPublicDomainNamesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerPublicDomainNamesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerPublicDomainNamesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerPublicDomainNamesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerPublicDomainNamesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerPublicDomainNamesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerPublicDomainNamesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerPublicDomainNamesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerPublicDomainNamesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerPublicDomainNamesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerPublicDomainNamesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerPublicDomainNamesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerPublicDomainNamesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerPublicDomainNamesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerPublicDomainNamesOutputReference.resetCertificateName">ResetCertificateName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerPublicDomainNamesOutputReference.resetDomainNames">ResetDomainNames</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerPublicDomainNamesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerPublicDomainNamesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerPublicDomainNamesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerPublicDomainNamesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerPublicDomainNamesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerPublicDomainNamesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerPublicDomainNamesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerPublicDomainNamesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerPublicDomainNamesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerPublicDomainNamesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerPublicDomainNamesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerPublicDomainNamesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerPublicDomainNamesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerPublicDomainNamesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerPublicDomainNamesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerPublicDomainNamesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerPublicDomainNamesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerPublicDomainNamesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerPublicDomainNamesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerPublicDomainNamesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerPublicDomainNamesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerPublicDomainNamesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerPublicDomainNamesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerPublicDomainNamesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCertificateName` <a name="ResetCertificateName" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerPublicDomainNamesOutputReference.resetCertificateName"></a>

```csharp
private void ResetCertificateName()
```

##### `ResetDomainNames` <a name="ResetDomainNames" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerPublicDomainNamesOutputReference.resetDomainNames"></a>

```csharp
private void ResetDomainNames()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerPublicDomainNamesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerPublicDomainNamesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerPublicDomainNamesOutputReference.property.certificateNameInput">CertificateNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerPublicDomainNamesOutputReference.property.domainNamesInput">DomainNamesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerPublicDomainNamesOutputReference.property.certificateName">CertificateName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerPublicDomainNamesOutputReference.property.domainNames">DomainNames</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerPublicDomainNamesOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerPublicDomainNames">LightsailContainerPublicDomainNames</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerPublicDomainNamesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerPublicDomainNamesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CertificateNameInput`<sup>Optional</sup> <a name="CertificateNameInput" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerPublicDomainNamesOutputReference.property.certificateNameInput"></a>

```csharp
public string CertificateNameInput { get; }
```

- *Type:* string

---

##### `DomainNamesInput`<sup>Optional</sup> <a name="DomainNamesInput" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerPublicDomainNamesOutputReference.property.domainNamesInput"></a>

```csharp
public string[] DomainNamesInput { get; }
```

- *Type:* string[]

---

##### `CertificateName`<sup>Required</sup> <a name="CertificateName" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerPublicDomainNamesOutputReference.property.certificateName"></a>

```csharp
public string CertificateName { get; }
```

- *Type:* string

---

##### `DomainNames`<sup>Required</sup> <a name="DomainNames" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerPublicDomainNamesOutputReference.property.domainNames"></a>

```csharp
public string[] DomainNames { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerPublicDomainNamesOutputReference.property.internalValue"></a>

```csharp
public IResolvable|LightsailContainerPublicDomainNames InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerPublicDomainNames">LightsailContainerPublicDomainNames</a>

---


### LightsailContainerTagsList <a name="LightsailContainerTagsList" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new LightsailContainerTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerTagsList.get"></a>

```csharp
private LightsailContainerTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerTagsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerTags">LightsailContainerTags</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerTagsList.property.internalValue"></a>

```csharp
public IResolvable|LightsailContainerTags[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerTags">LightsailContainerTags</a>[]

---


### LightsailContainerTagsOutputReference <a name="LightsailContainerTagsOutputReference" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new LightsailContainerTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerTagsOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerTagsOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerTags">LightsailContainerTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerTagsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerTagsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerTagsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|LightsailContainerTags InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerTags">LightsailContainerTags</a>

---



