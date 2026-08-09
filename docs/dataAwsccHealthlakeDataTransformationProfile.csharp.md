# `dataAwsccHealthlakeDataTransformationProfile` Submodule <a name="`dataAwsccHealthlakeDataTransformationProfile` Submodule" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccHealthlakeDataTransformationProfile <a name="DataAwsccHealthlakeDataTransformationProfile" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfile"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/healthlake_data_transformation_profile awscc_healthlake_data_transformation_profile}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfile.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccHealthlakeDataTransformationProfile(Construct Scope, string Id, DataAwsccHealthlakeDataTransformationProfileConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfile.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfile.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfile.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileConfig">DataAwsccHealthlakeDataTransformationProfileConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfile.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfile.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfile.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileConfig">DataAwsccHealthlakeDataTransformationProfileConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfile.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfile.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfile.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfile.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfile.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfile.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfile.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfile.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfile.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfile.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfile.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfile.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfile.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfile.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfile.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfile.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfile.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfile.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfile.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfile.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfile.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfile.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfile.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfile.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfile.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfile.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfile.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfile.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfile.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfile.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfile.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfile.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfile.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfile.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfile.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfile.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfile.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfile.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfile.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfile.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfile.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfile.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfile.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfile.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfile.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfile.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfile.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfile.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfile.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfile.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfile.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfile.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfile.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfile.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccHealthlakeDataTransformationProfile resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfile.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccHealthlakeDataTransformationProfile.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfile.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfile.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccHealthlakeDataTransformationProfile.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfile.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfile.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccHealthlakeDataTransformationProfile.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfile.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfile.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccHealthlakeDataTransformationProfile.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataAwsccHealthlakeDataTransformationProfile resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfile.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfile.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccHealthlakeDataTransformationProfile to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfile.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccHealthlakeDataTransformationProfile that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/healthlake_data_transformation_profile#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfile.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccHealthlakeDataTransformationProfile to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfile.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfile.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfile.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfile.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfile.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfile.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfile.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfile.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfile.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfile.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfile.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfile.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfile.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfile.property.kmsKeyId">KmsKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfile.property.profileDescription">ProfileDescription</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfile.property.profileId">ProfileId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfile.property.profileName">ProfileName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfile.property.source">Source</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceOutputReference">DataAwsccHealthlakeDataTransformationProfileSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfile.property.sourceFormat">SourceFormat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfile.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileTagsList">DataAwsccHealthlakeDataTransformationProfileTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfile.property.targetFormat">TargetFormat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfile.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfile.property.id">Id</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfile.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfile.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfile.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfile.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfile.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfile.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfile.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfile.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfile.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfile.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfile.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfile.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfile.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `KmsKeyId`<sup>Required</sup> <a name="KmsKeyId" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfile.property.kmsKeyId"></a>

```csharp
public string KmsKeyId { get; }
```

- *Type:* string

---

##### `ProfileDescription`<sup>Required</sup> <a name="ProfileDescription" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfile.property.profileDescription"></a>

```csharp
public string ProfileDescription { get; }
```

- *Type:* string

---

##### `ProfileId`<sup>Required</sup> <a name="ProfileId" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfile.property.profileId"></a>

```csharp
public string ProfileId { get; }
```

- *Type:* string

---

##### `ProfileName`<sup>Required</sup> <a name="ProfileName" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfile.property.profileName"></a>

```csharp
public string ProfileName { get; }
```

- *Type:* string

---

##### `Source`<sup>Required</sup> <a name="Source" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfile.property.source"></a>

```csharp
public DataAwsccHealthlakeDataTransformationProfileSourceOutputReference Source { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceOutputReference">DataAwsccHealthlakeDataTransformationProfileSourceOutputReference</a>

---

##### `SourceFormat`<sup>Required</sup> <a name="SourceFormat" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfile.property.sourceFormat"></a>

```csharp
public string SourceFormat { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfile.property.tags"></a>

```csharp
public DataAwsccHealthlakeDataTransformationProfileTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileTagsList">DataAwsccHealthlakeDataTransformationProfileTagsList</a>

---

##### `TargetFormat`<sup>Required</sup> <a name="TargetFormat" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfile.property.targetFormat"></a>

```csharp
public string TargetFormat { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfile.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfile.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfile.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfile.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccHealthlakeDataTransformationProfileConfig <a name="DataAwsccHealthlakeDataTransformationProfileConfig" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccHealthlakeDataTransformationProfileConfig {
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileConfig.property.id">Id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/healthlake_data_transformation_profile#id DataAwsccHealthlakeDataTransformationProfile#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccHealthlakeDataTransformationProfileSource <a name="DataAwsccHealthlakeDataTransformationProfileSource" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSource.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccHealthlakeDataTransformationProfileSource {

};
```


### DataAwsccHealthlakeDataTransformationProfileSourceExistingVersionedProfileId <a name="DataAwsccHealthlakeDataTransformationProfileSourceExistingVersionedProfileId" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceExistingVersionedProfileId"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceExistingVersionedProfileId.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccHealthlakeDataTransformationProfileSourceExistingVersionedProfileId {

};
```


### DataAwsccHealthlakeDataTransformationProfileSourceProfileMapping <a name="DataAwsccHealthlakeDataTransformationProfileSourceProfileMapping" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceProfileMapping"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceProfileMapping.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccHealthlakeDataTransformationProfileSourceProfileMapping {

};
```


### DataAwsccHealthlakeDataTransformationProfileSourceStarterProfile <a name="DataAwsccHealthlakeDataTransformationProfileSourceStarterProfile" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceStarterProfile"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceStarterProfile.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccHealthlakeDataTransformationProfileSourceStarterProfile {

};
```


### DataAwsccHealthlakeDataTransformationProfileTags <a name="DataAwsccHealthlakeDataTransformationProfileTags" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccHealthlakeDataTransformationProfileTags {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccHealthlakeDataTransformationProfileSourceExistingVersionedProfileIdOutputReference <a name="DataAwsccHealthlakeDataTransformationProfileSourceExistingVersionedProfileIdOutputReference" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceExistingVersionedProfileIdOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceExistingVersionedProfileIdOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccHealthlakeDataTransformationProfileSourceExistingVersionedProfileIdOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceExistingVersionedProfileIdOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceExistingVersionedProfileIdOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceExistingVersionedProfileIdOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceExistingVersionedProfileIdOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceExistingVersionedProfileIdOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceExistingVersionedProfileIdOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceExistingVersionedProfileIdOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceExistingVersionedProfileIdOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceExistingVersionedProfileIdOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceExistingVersionedProfileIdOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceExistingVersionedProfileIdOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceExistingVersionedProfileIdOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceExistingVersionedProfileIdOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceExistingVersionedProfileIdOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceExistingVersionedProfileIdOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceExistingVersionedProfileIdOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceExistingVersionedProfileIdOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceExistingVersionedProfileIdOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceExistingVersionedProfileIdOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceExistingVersionedProfileIdOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceExistingVersionedProfileIdOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceExistingVersionedProfileIdOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceExistingVersionedProfileIdOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceExistingVersionedProfileIdOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceExistingVersionedProfileIdOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceExistingVersionedProfileIdOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceExistingVersionedProfileIdOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceExistingVersionedProfileIdOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceExistingVersionedProfileIdOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceExistingVersionedProfileIdOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceExistingVersionedProfileIdOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceExistingVersionedProfileIdOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceExistingVersionedProfileIdOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceExistingVersionedProfileIdOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceExistingVersionedProfileIdOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceExistingVersionedProfileIdOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceExistingVersionedProfileIdOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceExistingVersionedProfileIdOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceExistingVersionedProfileIdOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceExistingVersionedProfileIdOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceExistingVersionedProfileIdOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceExistingVersionedProfileIdOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceExistingVersionedProfileIdOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceExistingVersionedProfileIdOutputReference.property.profileId">ProfileId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceExistingVersionedProfileIdOutputReference.property.version">Version</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceExistingVersionedProfileIdOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceExistingVersionedProfileId">DataAwsccHealthlakeDataTransformationProfileSourceExistingVersionedProfileId</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceExistingVersionedProfileIdOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceExistingVersionedProfileIdOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ProfileId`<sup>Required</sup> <a name="ProfileId" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceExistingVersionedProfileIdOutputReference.property.profileId"></a>

```csharp
public string ProfileId { get; }
```

- *Type:* string

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceExistingVersionedProfileIdOutputReference.property.version"></a>

```csharp
public double Version { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceExistingVersionedProfileIdOutputReference.property.internalValue"></a>

```csharp
public DataAwsccHealthlakeDataTransformationProfileSourceExistingVersionedProfileId InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceExistingVersionedProfileId">DataAwsccHealthlakeDataTransformationProfileSourceExistingVersionedProfileId</a>

---


### DataAwsccHealthlakeDataTransformationProfileSourceOutputReference <a name="DataAwsccHealthlakeDataTransformationProfileSourceOutputReference" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccHealthlakeDataTransformationProfileSourceOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceOutputReference.property.existingVersionedProfileId">ExistingVersionedProfileId</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceExistingVersionedProfileIdOutputReference">DataAwsccHealthlakeDataTransformationProfileSourceExistingVersionedProfileIdOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceOutputReference.property.profileMapping">ProfileMapping</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceProfileMappingOutputReference">DataAwsccHealthlakeDataTransformationProfileSourceProfileMappingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceOutputReference.property.starterProfile">StarterProfile</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceStarterProfileOutputReference">DataAwsccHealthlakeDataTransformationProfileSourceStarterProfileOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSource">DataAwsccHealthlakeDataTransformationProfileSource</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ExistingVersionedProfileId`<sup>Required</sup> <a name="ExistingVersionedProfileId" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceOutputReference.property.existingVersionedProfileId"></a>

```csharp
public DataAwsccHealthlakeDataTransformationProfileSourceExistingVersionedProfileIdOutputReference ExistingVersionedProfileId { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceExistingVersionedProfileIdOutputReference">DataAwsccHealthlakeDataTransformationProfileSourceExistingVersionedProfileIdOutputReference</a>

---

##### `ProfileMapping`<sup>Required</sup> <a name="ProfileMapping" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceOutputReference.property.profileMapping"></a>

```csharp
public DataAwsccHealthlakeDataTransformationProfileSourceProfileMappingOutputReference ProfileMapping { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceProfileMappingOutputReference">DataAwsccHealthlakeDataTransformationProfileSourceProfileMappingOutputReference</a>

---

##### `StarterProfile`<sup>Required</sup> <a name="StarterProfile" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceOutputReference.property.starterProfile"></a>

```csharp
public DataAwsccHealthlakeDataTransformationProfileSourceStarterProfileOutputReference StarterProfile { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceStarterProfileOutputReference">DataAwsccHealthlakeDataTransformationProfileSourceStarterProfileOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceOutputReference.property.internalValue"></a>

```csharp
public DataAwsccHealthlakeDataTransformationProfileSource InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSource">DataAwsccHealthlakeDataTransformationProfileSource</a>

---


### DataAwsccHealthlakeDataTransformationProfileSourceProfileMappingOutputReference <a name="DataAwsccHealthlakeDataTransformationProfileSourceProfileMappingOutputReference" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceProfileMappingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceProfileMappingOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccHealthlakeDataTransformationProfileSourceProfileMappingOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceProfileMappingOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceProfileMappingOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceProfileMappingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceProfileMappingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceProfileMappingOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceProfileMappingOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceProfileMappingOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceProfileMappingOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceProfileMappingOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceProfileMappingOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceProfileMappingOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceProfileMappingOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceProfileMappingOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceProfileMappingOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceProfileMappingOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceProfileMappingOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceProfileMappingOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceProfileMappingOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceProfileMappingOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceProfileMappingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceProfileMappingOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceProfileMappingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceProfileMappingOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceProfileMappingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceProfileMappingOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceProfileMappingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceProfileMappingOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceProfileMappingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceProfileMappingOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceProfileMappingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceProfileMappingOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceProfileMappingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceProfileMappingOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceProfileMappingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceProfileMappingOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceProfileMappingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceProfileMappingOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceProfileMappingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceProfileMappingOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceProfileMappingOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceProfileMappingOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceProfileMappingOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceProfileMappingOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceProfileMappingOutputReference.property.profileMapping">ProfileMapping</a></code> | <code>Io.Cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceProfileMappingOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceProfileMapping">DataAwsccHealthlakeDataTransformationProfileSourceProfileMapping</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceProfileMappingOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceProfileMappingOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ProfileMapping`<sup>Required</sup> <a name="ProfileMapping" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceProfileMappingOutputReference.property.profileMapping"></a>

```csharp
public StringMap ProfileMapping { get; }
```

- *Type:* Io.Cdktn.StringMap

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceProfileMappingOutputReference.property.internalValue"></a>

```csharp
public DataAwsccHealthlakeDataTransformationProfileSourceProfileMapping InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceProfileMapping">DataAwsccHealthlakeDataTransformationProfileSourceProfileMapping</a>

---


### DataAwsccHealthlakeDataTransformationProfileSourceStarterProfileOutputReference <a name="DataAwsccHealthlakeDataTransformationProfileSourceStarterProfileOutputReference" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceStarterProfileOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceStarterProfileOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccHealthlakeDataTransformationProfileSourceStarterProfileOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceStarterProfileOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceStarterProfileOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceStarterProfileOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceStarterProfileOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceStarterProfileOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceStarterProfileOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceStarterProfileOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceStarterProfileOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceStarterProfileOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceStarterProfileOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceStarterProfileOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceStarterProfileOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceStarterProfileOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceStarterProfileOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceStarterProfileOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceStarterProfileOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceStarterProfileOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceStarterProfileOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceStarterProfileOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceStarterProfileOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceStarterProfileOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceStarterProfileOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceStarterProfileOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceStarterProfileOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceStarterProfileOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceStarterProfileOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceStarterProfileOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceStarterProfileOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceStarterProfileOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceStarterProfileOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceStarterProfileOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceStarterProfileOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceStarterProfileOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceStarterProfileOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceStarterProfileOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceStarterProfileOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceStarterProfileOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceStarterProfileOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceStarterProfileOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceStarterProfileOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceStarterProfileOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceStarterProfileOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceStarterProfileOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceStarterProfileOutputReference.property.starterProfileName">StarterProfileName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceStarterProfileOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceStarterProfile">DataAwsccHealthlakeDataTransformationProfileSourceStarterProfile</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceStarterProfileOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceStarterProfileOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `StarterProfileName`<sup>Required</sup> <a name="StarterProfileName" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceStarterProfileOutputReference.property.starterProfileName"></a>

```csharp
public string StarterProfileName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceStarterProfileOutputReference.property.internalValue"></a>

```csharp
public DataAwsccHealthlakeDataTransformationProfileSourceStarterProfile InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileSourceStarterProfile">DataAwsccHealthlakeDataTransformationProfileSourceStarterProfile</a>

---


### DataAwsccHealthlakeDataTransformationProfileTagsList <a name="DataAwsccHealthlakeDataTransformationProfileTagsList" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccHealthlakeDataTransformationProfileTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileTagsList.get"></a>

```csharp
private DataAwsccHealthlakeDataTransformationProfileTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsccHealthlakeDataTransformationProfileTagsOutputReference <a name="DataAwsccHealthlakeDataTransformationProfileTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccHealthlakeDataTransformationProfileTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileTagsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileTags">DataAwsccHealthlakeDataTransformationProfileTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileTagsOutputReference.property.internalValue"></a>

```csharp
public DataAwsccHealthlakeDataTransformationProfileTags InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccHealthlakeDataTransformationProfile.DataAwsccHealthlakeDataTransformationProfileTags">DataAwsccHealthlakeDataTransformationProfileTags</a>

---



