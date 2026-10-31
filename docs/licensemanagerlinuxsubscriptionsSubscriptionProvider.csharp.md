# `licensemanagerlinuxsubscriptionsSubscriptionProvider` Submodule <a name="`licensemanagerlinuxsubscriptionsSubscriptionProvider` Submodule" id="@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LicensemanagerlinuxsubscriptionsSubscriptionProvider <a name="LicensemanagerlinuxsubscriptionsSubscriptionProvider" id="@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProvider"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/licensemanagerlinuxsubscriptions_subscription_provider awscc_licensemanagerlinuxsubscriptions_subscription_provider}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProvider.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new LicensemanagerlinuxsubscriptionsSubscriptionProvider(Construct Scope, string Id, LicensemanagerlinuxsubscriptionsSubscriptionProviderConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProvider.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProvider.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProvider.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProviderConfig">LicensemanagerlinuxsubscriptionsSubscriptionProviderConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProvider.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProvider.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProvider.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProviderConfig">LicensemanagerlinuxsubscriptionsSubscriptionProviderConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProvider.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProvider.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProvider.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProvider.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProvider.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProvider.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProvider.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProvider.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProvider.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProvider.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProvider.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProvider.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProvider.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProvider.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProvider.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProvider.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProvider.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProvider.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProvider.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProvider.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProvider.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProvider.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProvider.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProvider.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProvider.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProvider.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProvider.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProvider.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProvider.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProvider.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProvider.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProvider.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProvider.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProvider.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProvider.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProvider.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProvider.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProvider.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProvider.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProvider.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProvider.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProvider.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProvider.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProvider.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProvider.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProvider.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProvider.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProvider.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProvider.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProvider.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProvider.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProvider.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProvider.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProvider.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProvider.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProvider.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProvider.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProvider.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProvider.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProvider.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProvider.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProvider.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProvider.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProvider.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProvider.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProvider.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProvider.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProvider.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProvider.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProvider.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProvider.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProvider.putTags"></a>

```csharp
private void PutTags(IResolvable|LicensemanagerlinuxsubscriptionsSubscriptionProviderTags[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProvider.putTags.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProviderTags">LicensemanagerlinuxsubscriptionsSubscriptionProviderTags</a>[]

---

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProvider.resetTags"></a>

```csharp
private void ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProvider.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProvider.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProvider.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProvider.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a LicensemanagerlinuxsubscriptionsSubscriptionProvider resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProvider.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

LicensemanagerlinuxsubscriptionsSubscriptionProvider.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProvider.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProvider.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

LicensemanagerlinuxsubscriptionsSubscriptionProvider.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProvider.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProvider.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

LicensemanagerlinuxsubscriptionsSubscriptionProvider.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProvider.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProvider.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

LicensemanagerlinuxsubscriptionsSubscriptionProvider.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a LicensemanagerlinuxsubscriptionsSubscriptionProvider resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProvider.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProvider.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the LicensemanagerlinuxsubscriptionsSubscriptionProvider to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProvider.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing LicensemanagerlinuxsubscriptionsSubscriptionProvider that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/licensemanagerlinuxsubscriptions_subscription_provider#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProvider.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the LicensemanagerlinuxsubscriptionsSubscriptionProvider to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProvider.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProvider.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProvider.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProvider.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProvider.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProvider.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProvider.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProvider.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProvider.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProvider.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProvider.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProvider.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProvider.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProvider.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProvider.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProvider.property.lastSuccessfulDataRetrievalTime">LastSuccessfulDataRetrievalTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProvider.property.subscriptionProviderArn">SubscriptionProviderArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProvider.property.subscriptionProviderStatus">SubscriptionProviderStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProvider.property.subscriptionProviderStatusMessage">SubscriptionProviderStatusMessage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProvider.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProviderTagsList">LicensemanagerlinuxsubscriptionsSubscriptionProviderTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProvider.property.secretArnInput">SecretArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProvider.property.subscriptionProviderSourceInput">SubscriptionProviderSourceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProvider.property.tagsInput">TagsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProviderTags">LicensemanagerlinuxsubscriptionsSubscriptionProviderTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProvider.property.secretArn">SecretArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProvider.property.subscriptionProviderSource">SubscriptionProviderSource</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProvider.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProvider.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProvider.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProvider.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProvider.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProvider.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProvider.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProvider.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProvider.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProvider.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProvider.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProvider.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProvider.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProvider.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProvider.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `LastSuccessfulDataRetrievalTime`<sup>Required</sup> <a name="LastSuccessfulDataRetrievalTime" id="@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProvider.property.lastSuccessfulDataRetrievalTime"></a>

```csharp
public string LastSuccessfulDataRetrievalTime { get; }
```

- *Type:* string

---

##### `SubscriptionProviderArn`<sup>Required</sup> <a name="SubscriptionProviderArn" id="@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProvider.property.subscriptionProviderArn"></a>

```csharp
public string SubscriptionProviderArn { get; }
```

- *Type:* string

---

##### `SubscriptionProviderStatus`<sup>Required</sup> <a name="SubscriptionProviderStatus" id="@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProvider.property.subscriptionProviderStatus"></a>

```csharp
public string SubscriptionProviderStatus { get; }
```

- *Type:* string

---

##### `SubscriptionProviderStatusMessage`<sup>Required</sup> <a name="SubscriptionProviderStatusMessage" id="@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProvider.property.subscriptionProviderStatusMessage"></a>

```csharp
public string SubscriptionProviderStatusMessage { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProvider.property.tags"></a>

```csharp
public LicensemanagerlinuxsubscriptionsSubscriptionProviderTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProviderTagsList">LicensemanagerlinuxsubscriptionsSubscriptionProviderTagsList</a>

---

##### `SecretArnInput`<sup>Optional</sup> <a name="SecretArnInput" id="@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProvider.property.secretArnInput"></a>

```csharp
public string SecretArnInput { get; }
```

- *Type:* string

---

##### `SubscriptionProviderSourceInput`<sup>Optional</sup> <a name="SubscriptionProviderSourceInput" id="@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProvider.property.subscriptionProviderSourceInput"></a>

```csharp
public string SubscriptionProviderSourceInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProvider.property.tagsInput"></a>

```csharp
public IResolvable|LicensemanagerlinuxsubscriptionsSubscriptionProviderTags[] TagsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProviderTags">LicensemanagerlinuxsubscriptionsSubscriptionProviderTags</a>[]

---

##### `SecretArn`<sup>Required</sup> <a name="SecretArn" id="@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProvider.property.secretArn"></a>

```csharp
public string SecretArn { get; }
```

- *Type:* string

---

##### `SubscriptionProviderSource`<sup>Required</sup> <a name="SubscriptionProviderSource" id="@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProvider.property.subscriptionProviderSource"></a>

```csharp
public string SubscriptionProviderSource { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProvider.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProvider.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### LicensemanagerlinuxsubscriptionsSubscriptionProviderConfig <a name="LicensemanagerlinuxsubscriptionsSubscriptionProviderConfig" id="@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProviderConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new LicensemanagerlinuxsubscriptionsSubscriptionProviderConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string SecretArn,
    string SubscriptionProviderSource,
    IResolvable|LicensemanagerlinuxsubscriptionsSubscriptionProviderTags[] Tags = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProviderConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProviderConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProviderConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProviderConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProviderConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProviderConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProviderConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProviderConfig.property.secretArn">SecretArn</a></code> | <code>string</code> | The Amazon Resource Name (ARN) of the Secrets Manager secret that contains the access token for the third-party Linux subscription provider. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProviderConfig.property.subscriptionProviderSource">SubscriptionProviderSource</a></code> | <code>string</code> | The Linux subscription provider that the registration is for. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProviderConfig.property.tags">Tags</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProviderTags">LicensemanagerlinuxsubscriptionsSubscriptionProviderTags</a>[]</code> | The metadata tags assigned to the registered subscription provider. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProviderConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProviderConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProviderConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProviderConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProviderConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProviderConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProviderConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `SecretArn`<sup>Required</sup> <a name="SecretArn" id="@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProviderConfig.property.secretArn"></a>

```csharp
public string SecretArn { get; set; }
```

- *Type:* string

The Amazon Resource Name (ARN) of the Secrets Manager secret that contains the access token for the third-party Linux subscription provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/licensemanagerlinuxsubscriptions_subscription_provider#secret_arn LicensemanagerlinuxsubscriptionsSubscriptionProvider#secret_arn}

---

##### `SubscriptionProviderSource`<sup>Required</sup> <a name="SubscriptionProviderSource" id="@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProviderConfig.property.subscriptionProviderSource"></a>

```csharp
public string SubscriptionProviderSource { get; set; }
```

- *Type:* string

The Linux subscription provider that the registration is for.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/licensemanagerlinuxsubscriptions_subscription_provider#subscription_provider_source LicensemanagerlinuxsubscriptionsSubscriptionProvider#subscription_provider_source}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProviderConfig.property.tags"></a>

```csharp
public IResolvable|LicensemanagerlinuxsubscriptionsSubscriptionProviderTags[] Tags { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProviderTags">LicensemanagerlinuxsubscriptionsSubscriptionProviderTags</a>[]

The metadata tags assigned to the registered subscription provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/licensemanagerlinuxsubscriptions_subscription_provider#tags LicensemanagerlinuxsubscriptionsSubscriptionProvider#tags}

---

### LicensemanagerlinuxsubscriptionsSubscriptionProviderTags <a name="LicensemanagerlinuxsubscriptionsSubscriptionProviderTags" id="@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProviderTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProviderTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new LicensemanagerlinuxsubscriptionsSubscriptionProviderTags {
    string Key = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProviderTags.property.key">Key</a></code> | <code>string</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProviderTags.property.value">Value</a></code> | <code>string</code> | The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProviderTags.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

The key name of the tag.

You can specify a value that is 1 to 128 Unicode characters in length.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/licensemanagerlinuxsubscriptions_subscription_provider#key LicensemanagerlinuxsubscriptionsSubscriptionProvider#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProviderTags.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/licensemanagerlinuxsubscriptions_subscription_provider#value LicensemanagerlinuxsubscriptionsSubscriptionProvider#value}

---

## Classes <a name="Classes" id="Classes"></a>

### LicensemanagerlinuxsubscriptionsSubscriptionProviderTagsList <a name="LicensemanagerlinuxsubscriptionsSubscriptionProviderTagsList" id="@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProviderTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProviderTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new LicensemanagerlinuxsubscriptionsSubscriptionProviderTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProviderTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProviderTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProviderTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProviderTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProviderTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProviderTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProviderTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProviderTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProviderTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProviderTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProviderTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProviderTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProviderTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProviderTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProviderTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProviderTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProviderTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProviderTagsList.get"></a>

```csharp
private LicensemanagerlinuxsubscriptionsSubscriptionProviderTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProviderTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProviderTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProviderTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProviderTagsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProviderTags">LicensemanagerlinuxsubscriptionsSubscriptionProviderTags</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProviderTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProviderTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProviderTagsList.property.internalValue"></a>

```csharp
public IResolvable|LicensemanagerlinuxsubscriptionsSubscriptionProviderTags[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProviderTags">LicensemanagerlinuxsubscriptionsSubscriptionProviderTags</a>[]

---


### LicensemanagerlinuxsubscriptionsSubscriptionProviderTagsOutputReference <a name="LicensemanagerlinuxsubscriptionsSubscriptionProviderTagsOutputReference" id="@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProviderTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProviderTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new LicensemanagerlinuxsubscriptionsSubscriptionProviderTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProviderTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProviderTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProviderTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProviderTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProviderTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProviderTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProviderTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProviderTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProviderTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProviderTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProviderTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProviderTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProviderTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProviderTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProviderTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProviderTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProviderTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProviderTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProviderTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProviderTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProviderTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProviderTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProviderTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProviderTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProviderTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProviderTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProviderTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProviderTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProviderTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProviderTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProviderTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProviderTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProviderTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProviderTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProviderTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProviderTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProviderTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProviderTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProviderTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProviderTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProviderTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProviderTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProviderTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProviderTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProviderTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProviderTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProviderTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProviderTagsOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProviderTagsOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProviderTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProviderTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProviderTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProviderTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProviderTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProviderTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProviderTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProviderTags">LicensemanagerlinuxsubscriptionsSubscriptionProviderTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProviderTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProviderTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProviderTagsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProviderTagsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProviderTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProviderTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProviderTagsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|LicensemanagerlinuxsubscriptionsSubscriptionProviderTags InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.licensemanagerlinuxsubscriptionsSubscriptionProvider.LicensemanagerlinuxsubscriptionsSubscriptionProviderTags">LicensemanagerlinuxsubscriptionsSubscriptionProviderTags</a>

---



