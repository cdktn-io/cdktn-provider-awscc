# `dataAwsccSecuritylakeDataLake` Submodule <a name="`dataAwsccSecuritylakeDataLake` Submodule" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccSecuritylakeDataLake <a name="DataAwsccSecuritylakeDataLake" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLake"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/securitylake_data_lake awscc_securitylake_data_lake}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLake.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSecuritylakeDataLake(Construct Scope, string Id, DataAwsccSecuritylakeDataLakeConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLake.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLake.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLake.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeConfig">DataAwsccSecuritylakeDataLakeConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLake.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLake.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLake.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeConfig">DataAwsccSecuritylakeDataLakeConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLake.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLake.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLake.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLake.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLake.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLake.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLake.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLake.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLake.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLake.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLake.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLake.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLake.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLake.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLake.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLake.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLake.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLake.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLake.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLake.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLake.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLake.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLake.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLake.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLake.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLake.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLake.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLake.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLake.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLake.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLake.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLake.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLake.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLake.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLake.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLake.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLake.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLake.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLake.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLake.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLake.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLake.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLake.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLake.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLake.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLake.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLake.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLake.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLake.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLake.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLake.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLake.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLake.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLake.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccSecuritylakeDataLake resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLake.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccSecuritylakeDataLake.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLake.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLake.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccSecuritylakeDataLake.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLake.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLake.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccSecuritylakeDataLake.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLake.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLake.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccSecuritylakeDataLake.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataAwsccSecuritylakeDataLake resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLake.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLake.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccSecuritylakeDataLake to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLake.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccSecuritylakeDataLake that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/securitylake_data_lake#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLake.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccSecuritylakeDataLake to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLake.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLake.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLake.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLake.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLake.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLake.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLake.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLake.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLake.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLake.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLake.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLake.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLake.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLake.property.encryptionConfiguration">EncryptionConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeEncryptionConfigurationOutputReference">DataAwsccSecuritylakeDataLakeEncryptionConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLake.property.lifecycleConfiguration">LifecycleConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeLifecycleConfigurationOutputReference">DataAwsccSecuritylakeDataLakeLifecycleConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLake.property.metaStoreManagerRoleArn">MetaStoreManagerRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLake.property.replicationConfiguration">ReplicationConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeReplicationConfigurationOutputReference">DataAwsccSecuritylakeDataLakeReplicationConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLake.property.s3BucketArn">S3BucketArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLake.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeTagsList">DataAwsccSecuritylakeDataLakeTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLake.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLake.property.id">Id</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLake.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLake.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLake.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLake.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLake.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLake.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLake.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLake.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLake.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLake.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLake.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLake.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLake.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `EncryptionConfiguration`<sup>Required</sup> <a name="EncryptionConfiguration" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLake.property.encryptionConfiguration"></a>

```csharp
public DataAwsccSecuritylakeDataLakeEncryptionConfigurationOutputReference EncryptionConfiguration { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeEncryptionConfigurationOutputReference">DataAwsccSecuritylakeDataLakeEncryptionConfigurationOutputReference</a>

---

##### `LifecycleConfiguration`<sup>Required</sup> <a name="LifecycleConfiguration" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLake.property.lifecycleConfiguration"></a>

```csharp
public DataAwsccSecuritylakeDataLakeLifecycleConfigurationOutputReference LifecycleConfiguration { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeLifecycleConfigurationOutputReference">DataAwsccSecuritylakeDataLakeLifecycleConfigurationOutputReference</a>

---

##### `MetaStoreManagerRoleArn`<sup>Required</sup> <a name="MetaStoreManagerRoleArn" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLake.property.metaStoreManagerRoleArn"></a>

```csharp
public string MetaStoreManagerRoleArn { get; }
```

- *Type:* string

---

##### `ReplicationConfiguration`<sup>Required</sup> <a name="ReplicationConfiguration" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLake.property.replicationConfiguration"></a>

```csharp
public DataAwsccSecuritylakeDataLakeReplicationConfigurationOutputReference ReplicationConfiguration { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeReplicationConfigurationOutputReference">DataAwsccSecuritylakeDataLakeReplicationConfigurationOutputReference</a>

---

##### `S3BucketArn`<sup>Required</sup> <a name="S3BucketArn" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLake.property.s3BucketArn"></a>

```csharp
public string S3BucketArn { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLake.property.tags"></a>

```csharp
public DataAwsccSecuritylakeDataLakeTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeTagsList">DataAwsccSecuritylakeDataLakeTagsList</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLake.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLake.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLake.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLake.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccSecuritylakeDataLakeConfig <a name="DataAwsccSecuritylakeDataLakeConfig" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSecuritylakeDataLakeConfig {
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeConfig.property.id">Id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/securitylake_data_lake#id DataAwsccSecuritylakeDataLake#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccSecuritylakeDataLakeEncryptionConfiguration <a name="DataAwsccSecuritylakeDataLakeEncryptionConfiguration" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeEncryptionConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeEncryptionConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSecuritylakeDataLakeEncryptionConfiguration {

};
```


### DataAwsccSecuritylakeDataLakeLifecycleConfiguration <a name="DataAwsccSecuritylakeDataLakeLifecycleConfiguration" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeLifecycleConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeLifecycleConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSecuritylakeDataLakeLifecycleConfiguration {

};
```


### DataAwsccSecuritylakeDataLakeLifecycleConfigurationExpiration <a name="DataAwsccSecuritylakeDataLakeLifecycleConfigurationExpiration" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeLifecycleConfigurationExpiration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeLifecycleConfigurationExpiration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSecuritylakeDataLakeLifecycleConfigurationExpiration {

};
```


### DataAwsccSecuritylakeDataLakeLifecycleConfigurationTransitions <a name="DataAwsccSecuritylakeDataLakeLifecycleConfigurationTransitions" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeLifecycleConfigurationTransitions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeLifecycleConfigurationTransitions.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSecuritylakeDataLakeLifecycleConfigurationTransitions {

};
```


### DataAwsccSecuritylakeDataLakeReplicationConfiguration <a name="DataAwsccSecuritylakeDataLakeReplicationConfiguration" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeReplicationConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeReplicationConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSecuritylakeDataLakeReplicationConfiguration {

};
```


### DataAwsccSecuritylakeDataLakeTags <a name="DataAwsccSecuritylakeDataLakeTags" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSecuritylakeDataLakeTags {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccSecuritylakeDataLakeEncryptionConfigurationOutputReference <a name="DataAwsccSecuritylakeDataLakeEncryptionConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeEncryptionConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeEncryptionConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSecuritylakeDataLakeEncryptionConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeEncryptionConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeEncryptionConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeEncryptionConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeEncryptionConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeEncryptionConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeEncryptionConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeEncryptionConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeEncryptionConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeEncryptionConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeEncryptionConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeEncryptionConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeEncryptionConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeEncryptionConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeEncryptionConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeEncryptionConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeEncryptionConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeEncryptionConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeEncryptionConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeEncryptionConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeEncryptionConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeEncryptionConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeEncryptionConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeEncryptionConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeEncryptionConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeEncryptionConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeEncryptionConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeEncryptionConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeEncryptionConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeEncryptionConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeEncryptionConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeEncryptionConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeEncryptionConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeEncryptionConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeEncryptionConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeEncryptionConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeEncryptionConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeEncryptionConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeEncryptionConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeEncryptionConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeEncryptionConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeEncryptionConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeEncryptionConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeEncryptionConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeEncryptionConfigurationOutputReference.property.kmsKeyId">KmsKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeEncryptionConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeEncryptionConfiguration">DataAwsccSecuritylakeDataLakeEncryptionConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeEncryptionConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeEncryptionConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KmsKeyId`<sup>Required</sup> <a name="KmsKeyId" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeEncryptionConfigurationOutputReference.property.kmsKeyId"></a>

```csharp
public string KmsKeyId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeEncryptionConfigurationOutputReference.property.internalValue"></a>

```csharp
public DataAwsccSecuritylakeDataLakeEncryptionConfiguration InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeEncryptionConfiguration">DataAwsccSecuritylakeDataLakeEncryptionConfiguration</a>

---


### DataAwsccSecuritylakeDataLakeLifecycleConfigurationExpirationOutputReference <a name="DataAwsccSecuritylakeDataLakeLifecycleConfigurationExpirationOutputReference" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeLifecycleConfigurationExpirationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeLifecycleConfigurationExpirationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSecuritylakeDataLakeLifecycleConfigurationExpirationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeLifecycleConfigurationExpirationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeLifecycleConfigurationExpirationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeLifecycleConfigurationExpirationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeLifecycleConfigurationExpirationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeLifecycleConfigurationExpirationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeLifecycleConfigurationExpirationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeLifecycleConfigurationExpirationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeLifecycleConfigurationExpirationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeLifecycleConfigurationExpirationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeLifecycleConfigurationExpirationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeLifecycleConfigurationExpirationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeLifecycleConfigurationExpirationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeLifecycleConfigurationExpirationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeLifecycleConfigurationExpirationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeLifecycleConfigurationExpirationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeLifecycleConfigurationExpirationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeLifecycleConfigurationExpirationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeLifecycleConfigurationExpirationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeLifecycleConfigurationExpirationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeLifecycleConfigurationExpirationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeLifecycleConfigurationExpirationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeLifecycleConfigurationExpirationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeLifecycleConfigurationExpirationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeLifecycleConfigurationExpirationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeLifecycleConfigurationExpirationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeLifecycleConfigurationExpirationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeLifecycleConfigurationExpirationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeLifecycleConfigurationExpirationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeLifecycleConfigurationExpirationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeLifecycleConfigurationExpirationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeLifecycleConfigurationExpirationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeLifecycleConfigurationExpirationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeLifecycleConfigurationExpirationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeLifecycleConfigurationExpirationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeLifecycleConfigurationExpirationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeLifecycleConfigurationExpirationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeLifecycleConfigurationExpirationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeLifecycleConfigurationExpirationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeLifecycleConfigurationExpirationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeLifecycleConfigurationExpirationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeLifecycleConfigurationExpirationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeLifecycleConfigurationExpirationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeLifecycleConfigurationExpirationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeLifecycleConfigurationExpirationOutputReference.property.days">Days</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeLifecycleConfigurationExpirationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeLifecycleConfigurationExpiration">DataAwsccSecuritylakeDataLakeLifecycleConfigurationExpiration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeLifecycleConfigurationExpirationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeLifecycleConfigurationExpirationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Days`<sup>Required</sup> <a name="Days" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeLifecycleConfigurationExpirationOutputReference.property.days"></a>

```csharp
public double Days { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeLifecycleConfigurationExpirationOutputReference.property.internalValue"></a>

```csharp
public DataAwsccSecuritylakeDataLakeLifecycleConfigurationExpiration InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeLifecycleConfigurationExpiration">DataAwsccSecuritylakeDataLakeLifecycleConfigurationExpiration</a>

---


### DataAwsccSecuritylakeDataLakeLifecycleConfigurationOutputReference <a name="DataAwsccSecuritylakeDataLakeLifecycleConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeLifecycleConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeLifecycleConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSecuritylakeDataLakeLifecycleConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeLifecycleConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeLifecycleConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeLifecycleConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeLifecycleConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeLifecycleConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeLifecycleConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeLifecycleConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeLifecycleConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeLifecycleConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeLifecycleConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeLifecycleConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeLifecycleConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeLifecycleConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeLifecycleConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeLifecycleConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeLifecycleConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeLifecycleConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeLifecycleConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeLifecycleConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeLifecycleConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeLifecycleConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeLifecycleConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeLifecycleConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeLifecycleConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeLifecycleConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeLifecycleConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeLifecycleConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeLifecycleConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeLifecycleConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeLifecycleConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeLifecycleConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeLifecycleConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeLifecycleConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeLifecycleConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeLifecycleConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeLifecycleConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeLifecycleConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeLifecycleConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeLifecycleConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeLifecycleConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeLifecycleConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeLifecycleConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeLifecycleConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeLifecycleConfigurationOutputReference.property.expiration">Expiration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeLifecycleConfigurationExpirationOutputReference">DataAwsccSecuritylakeDataLakeLifecycleConfigurationExpirationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeLifecycleConfigurationOutputReference.property.transitions">Transitions</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeLifecycleConfigurationTransitionsList">DataAwsccSecuritylakeDataLakeLifecycleConfigurationTransitionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeLifecycleConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeLifecycleConfiguration">DataAwsccSecuritylakeDataLakeLifecycleConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeLifecycleConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeLifecycleConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Expiration`<sup>Required</sup> <a name="Expiration" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeLifecycleConfigurationOutputReference.property.expiration"></a>

```csharp
public DataAwsccSecuritylakeDataLakeLifecycleConfigurationExpirationOutputReference Expiration { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeLifecycleConfigurationExpirationOutputReference">DataAwsccSecuritylakeDataLakeLifecycleConfigurationExpirationOutputReference</a>

---

##### `Transitions`<sup>Required</sup> <a name="Transitions" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeLifecycleConfigurationOutputReference.property.transitions"></a>

```csharp
public DataAwsccSecuritylakeDataLakeLifecycleConfigurationTransitionsList Transitions { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeLifecycleConfigurationTransitionsList">DataAwsccSecuritylakeDataLakeLifecycleConfigurationTransitionsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeLifecycleConfigurationOutputReference.property.internalValue"></a>

```csharp
public DataAwsccSecuritylakeDataLakeLifecycleConfiguration InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeLifecycleConfiguration">DataAwsccSecuritylakeDataLakeLifecycleConfiguration</a>

---


### DataAwsccSecuritylakeDataLakeLifecycleConfigurationTransitionsList <a name="DataAwsccSecuritylakeDataLakeLifecycleConfigurationTransitionsList" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeLifecycleConfigurationTransitionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeLifecycleConfigurationTransitionsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSecuritylakeDataLakeLifecycleConfigurationTransitionsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeLifecycleConfigurationTransitionsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeLifecycleConfigurationTransitionsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeLifecycleConfigurationTransitionsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeLifecycleConfigurationTransitionsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeLifecycleConfigurationTransitionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeLifecycleConfigurationTransitionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeLifecycleConfigurationTransitionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeLifecycleConfigurationTransitionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeLifecycleConfigurationTransitionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeLifecycleConfigurationTransitionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeLifecycleConfigurationTransitionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeLifecycleConfigurationTransitionsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeLifecycleConfigurationTransitionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeLifecycleConfigurationTransitionsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeLifecycleConfigurationTransitionsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeLifecycleConfigurationTransitionsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeLifecycleConfigurationTransitionsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeLifecycleConfigurationTransitionsList.get"></a>

```csharp
private DataAwsccSecuritylakeDataLakeLifecycleConfigurationTransitionsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeLifecycleConfigurationTransitionsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeLifecycleConfigurationTransitionsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeLifecycleConfigurationTransitionsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeLifecycleConfigurationTransitionsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeLifecycleConfigurationTransitionsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsccSecuritylakeDataLakeLifecycleConfigurationTransitionsOutputReference <a name="DataAwsccSecuritylakeDataLakeLifecycleConfigurationTransitionsOutputReference" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeLifecycleConfigurationTransitionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeLifecycleConfigurationTransitionsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSecuritylakeDataLakeLifecycleConfigurationTransitionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeLifecycleConfigurationTransitionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeLifecycleConfigurationTransitionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeLifecycleConfigurationTransitionsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeLifecycleConfigurationTransitionsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeLifecycleConfigurationTransitionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeLifecycleConfigurationTransitionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeLifecycleConfigurationTransitionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeLifecycleConfigurationTransitionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeLifecycleConfigurationTransitionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeLifecycleConfigurationTransitionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeLifecycleConfigurationTransitionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeLifecycleConfigurationTransitionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeLifecycleConfigurationTransitionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeLifecycleConfigurationTransitionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeLifecycleConfigurationTransitionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeLifecycleConfigurationTransitionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeLifecycleConfigurationTransitionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeLifecycleConfigurationTransitionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeLifecycleConfigurationTransitionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeLifecycleConfigurationTransitionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeLifecycleConfigurationTransitionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeLifecycleConfigurationTransitionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeLifecycleConfigurationTransitionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeLifecycleConfigurationTransitionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeLifecycleConfigurationTransitionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeLifecycleConfigurationTransitionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeLifecycleConfigurationTransitionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeLifecycleConfigurationTransitionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeLifecycleConfigurationTransitionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeLifecycleConfigurationTransitionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeLifecycleConfigurationTransitionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeLifecycleConfigurationTransitionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeLifecycleConfigurationTransitionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeLifecycleConfigurationTransitionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeLifecycleConfigurationTransitionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeLifecycleConfigurationTransitionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeLifecycleConfigurationTransitionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeLifecycleConfigurationTransitionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeLifecycleConfigurationTransitionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeLifecycleConfigurationTransitionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeLifecycleConfigurationTransitionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeLifecycleConfigurationTransitionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeLifecycleConfigurationTransitionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeLifecycleConfigurationTransitionsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeLifecycleConfigurationTransitionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeLifecycleConfigurationTransitionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeLifecycleConfigurationTransitionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeLifecycleConfigurationTransitionsOutputReference.property.days">Days</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeLifecycleConfigurationTransitionsOutputReference.property.storageClass">StorageClass</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeLifecycleConfigurationTransitionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeLifecycleConfigurationTransitions">DataAwsccSecuritylakeDataLakeLifecycleConfigurationTransitions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeLifecycleConfigurationTransitionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeLifecycleConfigurationTransitionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Days`<sup>Required</sup> <a name="Days" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeLifecycleConfigurationTransitionsOutputReference.property.days"></a>

```csharp
public double Days { get; }
```

- *Type:* double

---

##### `StorageClass`<sup>Required</sup> <a name="StorageClass" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeLifecycleConfigurationTransitionsOutputReference.property.storageClass"></a>

```csharp
public string StorageClass { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeLifecycleConfigurationTransitionsOutputReference.property.internalValue"></a>

```csharp
public DataAwsccSecuritylakeDataLakeLifecycleConfigurationTransitions InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeLifecycleConfigurationTransitions">DataAwsccSecuritylakeDataLakeLifecycleConfigurationTransitions</a>

---


### DataAwsccSecuritylakeDataLakeReplicationConfigurationOutputReference <a name="DataAwsccSecuritylakeDataLakeReplicationConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeReplicationConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeReplicationConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSecuritylakeDataLakeReplicationConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeReplicationConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeReplicationConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeReplicationConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeReplicationConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeReplicationConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeReplicationConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeReplicationConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeReplicationConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeReplicationConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeReplicationConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeReplicationConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeReplicationConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeReplicationConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeReplicationConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeReplicationConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeReplicationConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeReplicationConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeReplicationConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeReplicationConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeReplicationConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeReplicationConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeReplicationConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeReplicationConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeReplicationConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeReplicationConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeReplicationConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeReplicationConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeReplicationConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeReplicationConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeReplicationConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeReplicationConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeReplicationConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeReplicationConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeReplicationConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeReplicationConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeReplicationConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeReplicationConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeReplicationConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeReplicationConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeReplicationConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeReplicationConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeReplicationConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeReplicationConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeReplicationConfigurationOutputReference.property.regions">Regions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeReplicationConfigurationOutputReference.property.roleArn">RoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeReplicationConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeReplicationConfiguration">DataAwsccSecuritylakeDataLakeReplicationConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeReplicationConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeReplicationConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Regions`<sup>Required</sup> <a name="Regions" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeReplicationConfigurationOutputReference.property.regions"></a>

```csharp
public string[] Regions { get; }
```

- *Type:* string[]

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeReplicationConfigurationOutputReference.property.roleArn"></a>

```csharp
public string RoleArn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeReplicationConfigurationOutputReference.property.internalValue"></a>

```csharp
public DataAwsccSecuritylakeDataLakeReplicationConfiguration InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeReplicationConfiguration">DataAwsccSecuritylakeDataLakeReplicationConfiguration</a>

---


### DataAwsccSecuritylakeDataLakeTagsList <a name="DataAwsccSecuritylakeDataLakeTagsList" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSecuritylakeDataLakeTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeTagsList.get"></a>

```csharp
private DataAwsccSecuritylakeDataLakeTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsccSecuritylakeDataLakeTagsOutputReference <a name="DataAwsccSecuritylakeDataLakeTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSecuritylakeDataLakeTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeTagsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeTags">DataAwsccSecuritylakeDataLakeTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeTagsOutputReference.property.internalValue"></a>

```csharp
public DataAwsccSecuritylakeDataLakeTags InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeTags">DataAwsccSecuritylakeDataLakeTags</a>

---



