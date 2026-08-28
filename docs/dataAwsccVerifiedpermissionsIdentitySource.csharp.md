# `dataAwsccVerifiedpermissionsIdentitySource` Submodule <a name="`dataAwsccVerifiedpermissionsIdentitySource` Submodule" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccVerifiedpermissionsIdentitySource <a name="DataAwsccVerifiedpermissionsIdentitySource" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySource"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/verifiedpermissions_identity_source awscc_verifiedpermissions_identity_source}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySource.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccVerifiedpermissionsIdentitySource(Construct Scope, string Id, DataAwsccVerifiedpermissionsIdentitySourceConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySource.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySource.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySource.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfig">DataAwsccVerifiedpermissionsIdentitySourceConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySource.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySource.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySource.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfig">DataAwsccVerifiedpermissionsIdentitySourceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySource.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySource.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySource.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySource.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySource.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySource.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySource.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySource.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySource.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySource.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySource.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySource.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySource.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySource.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySource.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySource.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySource.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySource.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySource.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySource.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySource.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySource.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySource.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySource.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySource.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySource.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySource.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySource.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySource.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySource.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySource.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySource.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySource.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySource.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySource.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySource.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySource.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySource.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySource.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySource.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySource.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySource.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySource.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySource.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySource.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySource.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySource.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySource.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySource.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySource.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySource.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySource.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySource.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySource.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccVerifiedpermissionsIdentitySource resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySource.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccVerifiedpermissionsIdentitySource.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySource.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySource.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccVerifiedpermissionsIdentitySource.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySource.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySource.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccVerifiedpermissionsIdentitySource.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySource.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySource.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccVerifiedpermissionsIdentitySource.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataAwsccVerifiedpermissionsIdentitySource resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySource.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySource.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccVerifiedpermissionsIdentitySource to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySource.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccVerifiedpermissionsIdentitySource that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/verifiedpermissions_identity_source#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySource.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccVerifiedpermissionsIdentitySource to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySource.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySource.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySource.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySource.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySource.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySource.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySource.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySource.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySource.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySource.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySource.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySource.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySource.property.configuration">Configuration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOutputReference">DataAwsccVerifiedpermissionsIdentitySourceConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySource.property.details">Details</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceDetailsOutputReference">DataAwsccVerifiedpermissionsIdentitySourceDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySource.property.identitySourceId">IdentitySourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySource.property.policyStoreId">PolicyStoreId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySource.property.principalEntityType">PrincipalEntityType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySource.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySource.property.id">Id</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySource.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySource.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySource.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySource.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySource.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySource.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySource.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySource.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySource.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySource.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySource.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySource.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Configuration`<sup>Required</sup> <a name="Configuration" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySource.property.configuration"></a>

```csharp
public DataAwsccVerifiedpermissionsIdentitySourceConfigurationOutputReference Configuration { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOutputReference">DataAwsccVerifiedpermissionsIdentitySourceConfigurationOutputReference</a>

---

##### `Details`<sup>Required</sup> <a name="Details" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySource.property.details"></a>

```csharp
public DataAwsccVerifiedpermissionsIdentitySourceDetailsOutputReference Details { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceDetailsOutputReference">DataAwsccVerifiedpermissionsIdentitySourceDetailsOutputReference</a>

---

##### `IdentitySourceId`<sup>Required</sup> <a name="IdentitySourceId" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySource.property.identitySourceId"></a>

```csharp
public string IdentitySourceId { get; }
```

- *Type:* string

---

##### `PolicyStoreId`<sup>Required</sup> <a name="PolicyStoreId" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySource.property.policyStoreId"></a>

```csharp
public string PolicyStoreId { get; }
```

- *Type:* string

---

##### `PrincipalEntityType`<sup>Required</sup> <a name="PrincipalEntityType" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySource.property.principalEntityType"></a>

```csharp
public string PrincipalEntityType { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySource.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySource.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySource.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySource.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccVerifiedpermissionsIdentitySourceConfig <a name="DataAwsccVerifiedpermissionsIdentitySourceConfig" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccVerifiedpermissionsIdentitySourceConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Id
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfig.property.id">Id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/verifiedpermissions_identity_source#id DataAwsccVerifiedpermissionsIdentitySource#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccVerifiedpermissionsIdentitySourceConfiguration <a name="DataAwsccVerifiedpermissionsIdentitySourceConfiguration" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccVerifiedpermissionsIdentitySourceConfiguration {

};
```


### DataAwsccVerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfiguration <a name="DataAwsccVerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfiguration" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccVerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfiguration {

};
```


### DataAwsccVerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationGroupConfiguration <a name="DataAwsccVerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationGroupConfiguration" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationGroupConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationGroupConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccVerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationGroupConfiguration {

};
```


### DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfiguration <a name="DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfiguration" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfiguration {

};
```


### DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationGroupConfiguration <a name="DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationGroupConfiguration" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationGroupConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationGroupConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationGroupConfiguration {

};
```


### DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelection <a name="DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelection" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelection"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelection.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelection {

};
```


### DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionAccessTokenOnly <a name="DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionAccessTokenOnly" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionAccessTokenOnly"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionAccessTokenOnly.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionAccessTokenOnly {

};
```


### DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionIdentityTokenOnly <a name="DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionIdentityTokenOnly" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionIdentityTokenOnly"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionIdentityTokenOnly.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionIdentityTokenOnly {

};
```


### DataAwsccVerifiedpermissionsIdentitySourceDetails <a name="DataAwsccVerifiedpermissionsIdentitySourceDetails" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceDetails"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceDetails.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccVerifiedpermissionsIdentitySourceDetails {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccVerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationGroupConfigurationOutputReference <a name="DataAwsccVerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationGroupConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationGroupConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationGroupConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccVerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationGroupConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationGroupConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationGroupConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationGroupConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationGroupConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationGroupConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationGroupConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationGroupConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationGroupConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationGroupConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationGroupConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationGroupConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationGroupConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationGroupConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationGroupConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationGroupConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationGroupConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationGroupConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationGroupConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationGroupConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationGroupConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationGroupConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationGroupConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationGroupConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationGroupConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationGroupConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationGroupConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationGroupConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationGroupConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationGroupConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationGroupConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationGroupConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationGroupConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationGroupConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationGroupConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationGroupConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationGroupConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationGroupConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationGroupConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationGroupConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationGroupConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationGroupConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationGroupConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationGroupConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationGroupConfigurationOutputReference.property.groupEntityType">GroupEntityType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationGroupConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationGroupConfiguration">DataAwsccVerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationGroupConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationGroupConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationGroupConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `GroupEntityType`<sup>Required</sup> <a name="GroupEntityType" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationGroupConfigurationOutputReference.property.groupEntityType"></a>

```csharp
public string GroupEntityType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationGroupConfigurationOutputReference.property.internalValue"></a>

```csharp
public DataAwsccVerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationGroupConfiguration InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationGroupConfiguration">DataAwsccVerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationGroupConfiguration</a>

---


### DataAwsccVerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationOutputReference <a name="DataAwsccVerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccVerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationOutputReference.property.clientIds">ClientIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationOutputReference.property.groupConfiguration">GroupConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationGroupConfigurationOutputReference">DataAwsccVerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationGroupConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationOutputReference.property.userPoolArn">UserPoolArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfiguration">DataAwsccVerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ClientIds`<sup>Required</sup> <a name="ClientIds" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationOutputReference.property.clientIds"></a>

```csharp
public string[] ClientIds { get; }
```

- *Type:* string[]

---

##### `GroupConfiguration`<sup>Required</sup> <a name="GroupConfiguration" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationOutputReference.property.groupConfiguration"></a>

```csharp
public DataAwsccVerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationGroupConfigurationOutputReference GroupConfiguration { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationGroupConfigurationOutputReference">DataAwsccVerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationGroupConfigurationOutputReference</a>

---

##### `UserPoolArn`<sup>Required</sup> <a name="UserPoolArn" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationOutputReference.property.userPoolArn"></a>

```csharp
public string UserPoolArn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationOutputReference.property.internalValue"></a>

```csharp
public DataAwsccVerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfiguration InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfiguration">DataAwsccVerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfiguration</a>

---


### DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationGroupConfigurationOutputReference <a name="DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationGroupConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationGroupConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationGroupConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationGroupConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationGroupConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationGroupConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationGroupConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationGroupConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationGroupConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationGroupConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationGroupConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationGroupConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationGroupConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationGroupConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationGroupConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationGroupConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationGroupConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationGroupConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationGroupConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationGroupConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationGroupConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationGroupConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationGroupConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationGroupConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationGroupConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationGroupConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationGroupConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationGroupConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationGroupConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationGroupConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationGroupConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationGroupConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationGroupConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationGroupConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationGroupConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationGroupConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationGroupConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationGroupConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationGroupConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationGroupConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationGroupConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationGroupConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationGroupConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationGroupConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationGroupConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationGroupConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationGroupConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationGroupConfigurationOutputReference.property.groupClaim">GroupClaim</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationGroupConfigurationOutputReference.property.groupEntityType">GroupEntityType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationGroupConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationGroupConfiguration">DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationGroupConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationGroupConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationGroupConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `GroupClaim`<sup>Required</sup> <a name="GroupClaim" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationGroupConfigurationOutputReference.property.groupClaim"></a>

```csharp
public string GroupClaim { get; }
```

- *Type:* string

---

##### `GroupEntityType`<sup>Required</sup> <a name="GroupEntityType" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationGroupConfigurationOutputReference.property.groupEntityType"></a>

```csharp
public string GroupEntityType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationGroupConfigurationOutputReference.property.internalValue"></a>

```csharp
public DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationGroupConfiguration InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationGroupConfiguration">DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationGroupConfiguration</a>

---


### DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationOutputReference <a name="DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationOutputReference.property.entityIdPrefix">EntityIdPrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationOutputReference.property.groupConfiguration">GroupConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationGroupConfigurationOutputReference">DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationGroupConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationOutputReference.property.issuer">Issuer</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationOutputReference.property.tokenSelection">TokenSelection</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionOutputReference">DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfiguration">DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EntityIdPrefix`<sup>Required</sup> <a name="EntityIdPrefix" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationOutputReference.property.entityIdPrefix"></a>

```csharp
public string EntityIdPrefix { get; }
```

- *Type:* string

---

##### `GroupConfiguration`<sup>Required</sup> <a name="GroupConfiguration" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationOutputReference.property.groupConfiguration"></a>

```csharp
public DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationGroupConfigurationOutputReference GroupConfiguration { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationGroupConfigurationOutputReference">DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationGroupConfigurationOutputReference</a>

---

##### `Issuer`<sup>Required</sup> <a name="Issuer" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationOutputReference.property.issuer"></a>

```csharp
public string Issuer { get; }
```

- *Type:* string

---

##### `TokenSelection`<sup>Required</sup> <a name="TokenSelection" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationOutputReference.property.tokenSelection"></a>

```csharp
public DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionOutputReference TokenSelection { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionOutputReference">DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationOutputReference.property.internalValue"></a>

```csharp
public DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfiguration InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfiguration">DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfiguration</a>

---


### DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionAccessTokenOnlyOutputReference <a name="DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionAccessTokenOnlyOutputReference" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionAccessTokenOnlyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionAccessTokenOnlyOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionAccessTokenOnlyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionAccessTokenOnlyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionAccessTokenOnlyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionAccessTokenOnlyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionAccessTokenOnlyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionAccessTokenOnlyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionAccessTokenOnlyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionAccessTokenOnlyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionAccessTokenOnlyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionAccessTokenOnlyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionAccessTokenOnlyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionAccessTokenOnlyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionAccessTokenOnlyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionAccessTokenOnlyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionAccessTokenOnlyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionAccessTokenOnlyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionAccessTokenOnlyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionAccessTokenOnlyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionAccessTokenOnlyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionAccessTokenOnlyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionAccessTokenOnlyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionAccessTokenOnlyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionAccessTokenOnlyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionAccessTokenOnlyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionAccessTokenOnlyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionAccessTokenOnlyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionAccessTokenOnlyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionAccessTokenOnlyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionAccessTokenOnlyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionAccessTokenOnlyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionAccessTokenOnlyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionAccessTokenOnlyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionAccessTokenOnlyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionAccessTokenOnlyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionAccessTokenOnlyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionAccessTokenOnlyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionAccessTokenOnlyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionAccessTokenOnlyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionAccessTokenOnlyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionAccessTokenOnlyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionAccessTokenOnlyOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionAccessTokenOnlyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionAccessTokenOnlyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionAccessTokenOnlyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionAccessTokenOnlyOutputReference.property.audiences">Audiences</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionAccessTokenOnlyOutputReference.property.principalIdClaim">PrincipalIdClaim</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionAccessTokenOnlyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionAccessTokenOnly">DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionAccessTokenOnly</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionAccessTokenOnlyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionAccessTokenOnlyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Audiences`<sup>Required</sup> <a name="Audiences" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionAccessTokenOnlyOutputReference.property.audiences"></a>

```csharp
public string[] Audiences { get; }
```

- *Type:* string[]

---

##### `PrincipalIdClaim`<sup>Required</sup> <a name="PrincipalIdClaim" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionAccessTokenOnlyOutputReference.property.principalIdClaim"></a>

```csharp
public string PrincipalIdClaim { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionAccessTokenOnlyOutputReference.property.internalValue"></a>

```csharp
public DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionAccessTokenOnly InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionAccessTokenOnly">DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionAccessTokenOnly</a>

---


### DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionIdentityTokenOnlyOutputReference <a name="DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionIdentityTokenOnlyOutputReference" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionIdentityTokenOnlyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionIdentityTokenOnlyOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionIdentityTokenOnlyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionIdentityTokenOnlyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionIdentityTokenOnlyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionIdentityTokenOnlyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionIdentityTokenOnlyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionIdentityTokenOnlyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionIdentityTokenOnlyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionIdentityTokenOnlyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionIdentityTokenOnlyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionIdentityTokenOnlyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionIdentityTokenOnlyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionIdentityTokenOnlyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionIdentityTokenOnlyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionIdentityTokenOnlyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionIdentityTokenOnlyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionIdentityTokenOnlyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionIdentityTokenOnlyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionIdentityTokenOnlyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionIdentityTokenOnlyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionIdentityTokenOnlyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionIdentityTokenOnlyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionIdentityTokenOnlyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionIdentityTokenOnlyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionIdentityTokenOnlyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionIdentityTokenOnlyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionIdentityTokenOnlyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionIdentityTokenOnlyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionIdentityTokenOnlyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionIdentityTokenOnlyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionIdentityTokenOnlyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionIdentityTokenOnlyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionIdentityTokenOnlyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionIdentityTokenOnlyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionIdentityTokenOnlyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionIdentityTokenOnlyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionIdentityTokenOnlyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionIdentityTokenOnlyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionIdentityTokenOnlyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionIdentityTokenOnlyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionIdentityTokenOnlyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionIdentityTokenOnlyOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionIdentityTokenOnlyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionIdentityTokenOnlyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionIdentityTokenOnlyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionIdentityTokenOnlyOutputReference.property.clientIds">ClientIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionIdentityTokenOnlyOutputReference.property.principalIdClaim">PrincipalIdClaim</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionIdentityTokenOnlyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionIdentityTokenOnly">DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionIdentityTokenOnly</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionIdentityTokenOnlyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionIdentityTokenOnlyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ClientIds`<sup>Required</sup> <a name="ClientIds" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionIdentityTokenOnlyOutputReference.property.clientIds"></a>

```csharp
public string[] ClientIds { get; }
```

- *Type:* string[]

---

##### `PrincipalIdClaim`<sup>Required</sup> <a name="PrincipalIdClaim" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionIdentityTokenOnlyOutputReference.property.principalIdClaim"></a>

```csharp
public string PrincipalIdClaim { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionIdentityTokenOnlyOutputReference.property.internalValue"></a>

```csharp
public DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionIdentityTokenOnly InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionIdentityTokenOnly">DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionIdentityTokenOnly</a>

---


### DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionOutputReference <a name="DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionOutputReference" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionOutputReference.property.accessTokenOnly">AccessTokenOnly</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionAccessTokenOnlyOutputReference">DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionAccessTokenOnlyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionOutputReference.property.identityTokenOnly">IdentityTokenOnly</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionIdentityTokenOnlyOutputReference">DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionIdentityTokenOnlyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelection">DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelection</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AccessTokenOnly`<sup>Required</sup> <a name="AccessTokenOnly" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionOutputReference.property.accessTokenOnly"></a>

```csharp
public DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionAccessTokenOnlyOutputReference AccessTokenOnly { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionAccessTokenOnlyOutputReference">DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionAccessTokenOnlyOutputReference</a>

---

##### `IdentityTokenOnly`<sup>Required</sup> <a name="IdentityTokenOnly" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionOutputReference.property.identityTokenOnly"></a>

```csharp
public DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionIdentityTokenOnlyOutputReference IdentityTokenOnly { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionIdentityTokenOnlyOutputReference">DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionIdentityTokenOnlyOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionOutputReference.property.internalValue"></a>

```csharp
public DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelection InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelection">DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelection</a>

---


### DataAwsccVerifiedpermissionsIdentitySourceConfigurationOutputReference <a name="DataAwsccVerifiedpermissionsIdentitySourceConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccVerifiedpermissionsIdentitySourceConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOutputReference.property.cognitoUserPoolConfiguration">CognitoUserPoolConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationOutputReference">DataAwsccVerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOutputReference.property.openIdConnectConfiguration">OpenIdConnectConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationOutputReference">DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfiguration">DataAwsccVerifiedpermissionsIdentitySourceConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CognitoUserPoolConfiguration`<sup>Required</sup> <a name="CognitoUserPoolConfiguration" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOutputReference.property.cognitoUserPoolConfiguration"></a>

```csharp
public DataAwsccVerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationOutputReference CognitoUserPoolConfiguration { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationOutputReference">DataAwsccVerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationOutputReference</a>

---

##### `OpenIdConnectConfiguration`<sup>Required</sup> <a name="OpenIdConnectConfiguration" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOutputReference.property.openIdConnectConfiguration"></a>

```csharp
public DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationOutputReference OpenIdConnectConfiguration { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationOutputReference">DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfigurationOutputReference.property.internalValue"></a>

```csharp
public DataAwsccVerifiedpermissionsIdentitySourceConfiguration InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceConfiguration">DataAwsccVerifiedpermissionsIdentitySourceConfiguration</a>

---


### DataAwsccVerifiedpermissionsIdentitySourceDetailsOutputReference <a name="DataAwsccVerifiedpermissionsIdentitySourceDetailsOutputReference" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceDetailsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccVerifiedpermissionsIdentitySourceDetailsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceDetailsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceDetailsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceDetailsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceDetailsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceDetailsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceDetailsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceDetailsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceDetailsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceDetailsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceDetailsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceDetailsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceDetailsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceDetailsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceDetailsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceDetailsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceDetailsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceDetailsOutputReference.property.clientIds">ClientIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceDetailsOutputReference.property.discoveryUrl">DiscoveryUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceDetailsOutputReference.property.openIdIssuer">OpenIdIssuer</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceDetailsOutputReference.property.userPoolArn">UserPoolArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceDetails">DataAwsccVerifiedpermissionsIdentitySourceDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceDetailsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceDetailsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ClientIds`<sup>Required</sup> <a name="ClientIds" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceDetailsOutputReference.property.clientIds"></a>

```csharp
public string[] ClientIds { get; }
```

- *Type:* string[]

---

##### `DiscoveryUrl`<sup>Required</sup> <a name="DiscoveryUrl" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceDetailsOutputReference.property.discoveryUrl"></a>

```csharp
public string DiscoveryUrl { get; }
```

- *Type:* string

---

##### `OpenIdIssuer`<sup>Required</sup> <a name="OpenIdIssuer" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceDetailsOutputReference.property.openIdIssuer"></a>

```csharp
public string OpenIdIssuer { get; }
```

- *Type:* string

---

##### `UserPoolArn`<sup>Required</sup> <a name="UserPoolArn" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceDetailsOutputReference.property.userPoolArn"></a>

```csharp
public string UserPoolArn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceDetailsOutputReference.property.internalValue"></a>

```csharp
public DataAwsccVerifiedpermissionsIdentitySourceDetails InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsIdentitySource.DataAwsccVerifiedpermissionsIdentitySourceDetails">DataAwsccVerifiedpermissionsIdentitySourceDetails</a>

---



