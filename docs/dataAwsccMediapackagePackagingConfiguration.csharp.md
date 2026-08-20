# `dataAwsccMediapackagePackagingConfiguration` Submodule <a name="`dataAwsccMediapackagePackagingConfiguration` Submodule" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccMediapackagePackagingConfiguration <a name="DataAwsccMediapackagePackagingConfiguration" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfiguration"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/data-sources/mediapackage_packaging_configuration awscc_mediapackage_packaging_configuration}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccMediapackagePackagingConfiguration(Construct Scope, string Id, DataAwsccMediapackagePackagingConfigurationConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfiguration.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfiguration.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfiguration.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationConfig">DataAwsccMediapackagePackagingConfigurationConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfiguration.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfiguration.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfiguration.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationConfig">DataAwsccMediapackagePackagingConfigurationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfiguration.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfiguration.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfiguration.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfiguration.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfiguration.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfiguration.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfiguration.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfiguration.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfiguration.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfiguration.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfiguration.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfiguration.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfiguration.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfiguration.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfiguration.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfiguration.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfiguration.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfiguration.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfiguration.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfiguration.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfiguration.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfiguration.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfiguration.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfiguration.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfiguration.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfiguration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfiguration.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfiguration.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfiguration.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfiguration.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfiguration.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfiguration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfiguration.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfiguration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfiguration.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfiguration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfiguration.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfiguration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfiguration.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfiguration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfiguration.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfiguration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfiguration.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfiguration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfiguration.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfiguration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfiguration.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfiguration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfiguration.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfiguration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfiguration.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfiguration.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfiguration.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfiguration.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccMediapackagePackagingConfiguration resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfiguration.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccMediapackagePackagingConfiguration.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfiguration.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfiguration.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccMediapackagePackagingConfiguration.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfiguration.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfiguration.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccMediapackagePackagingConfiguration.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfiguration.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfiguration.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccMediapackagePackagingConfiguration.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataAwsccMediapackagePackagingConfiguration resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfiguration.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfiguration.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccMediapackagePackagingConfiguration to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfiguration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccMediapackagePackagingConfiguration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/data-sources/mediapackage_packaging_configuration#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfiguration.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccMediapackagePackagingConfiguration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfiguration.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfiguration.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfiguration.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfiguration.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfiguration.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfiguration.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfiguration.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfiguration.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfiguration.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfiguration.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfiguration.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfiguration.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfiguration.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfiguration.property.cmafPackage">CmafPackage</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageOutputReference">DataAwsccMediapackagePackagingConfigurationCmafPackageOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfiguration.property.dashPackage">DashPackage</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageOutputReference">DataAwsccMediapackagePackagingConfigurationDashPackageOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfiguration.property.hlsPackage">HlsPackage</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageOutputReference">DataAwsccMediapackagePackagingConfigurationHlsPackageOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfiguration.property.mssPackage">MssPackage</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageOutputReference">DataAwsccMediapackagePackagingConfigurationMssPackageOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfiguration.property.packagingConfigurationId">PackagingConfigurationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfiguration.property.packagingGroupId">PackagingGroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfiguration.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationTagsList">DataAwsccMediapackagePackagingConfigurationTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfiguration.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfiguration.property.id">Id</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfiguration.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfiguration.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfiguration.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfiguration.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfiguration.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfiguration.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfiguration.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfiguration.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfiguration.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfiguration.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfiguration.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfiguration.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfiguration.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `CmafPackage`<sup>Required</sup> <a name="CmafPackage" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfiguration.property.cmafPackage"></a>

```csharp
public DataAwsccMediapackagePackagingConfigurationCmafPackageOutputReference CmafPackage { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageOutputReference">DataAwsccMediapackagePackagingConfigurationCmafPackageOutputReference</a>

---

##### `DashPackage`<sup>Required</sup> <a name="DashPackage" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfiguration.property.dashPackage"></a>

```csharp
public DataAwsccMediapackagePackagingConfigurationDashPackageOutputReference DashPackage { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageOutputReference">DataAwsccMediapackagePackagingConfigurationDashPackageOutputReference</a>

---

##### `HlsPackage`<sup>Required</sup> <a name="HlsPackage" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfiguration.property.hlsPackage"></a>

```csharp
public DataAwsccMediapackagePackagingConfigurationHlsPackageOutputReference HlsPackage { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageOutputReference">DataAwsccMediapackagePackagingConfigurationHlsPackageOutputReference</a>

---

##### `MssPackage`<sup>Required</sup> <a name="MssPackage" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfiguration.property.mssPackage"></a>

```csharp
public DataAwsccMediapackagePackagingConfigurationMssPackageOutputReference MssPackage { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageOutputReference">DataAwsccMediapackagePackagingConfigurationMssPackageOutputReference</a>

---

##### `PackagingConfigurationId`<sup>Required</sup> <a name="PackagingConfigurationId" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfiguration.property.packagingConfigurationId"></a>

```csharp
public string PackagingConfigurationId { get; }
```

- *Type:* string

---

##### `PackagingGroupId`<sup>Required</sup> <a name="PackagingGroupId" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfiguration.property.packagingGroupId"></a>

```csharp
public string PackagingGroupId { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfiguration.property.tags"></a>

```csharp
public DataAwsccMediapackagePackagingConfigurationTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationTagsList">DataAwsccMediapackagePackagingConfigurationTagsList</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfiguration.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfiguration.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfiguration.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfiguration.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccMediapackagePackagingConfigurationCmafPackage <a name="DataAwsccMediapackagePackagingConfigurationCmafPackage" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackage"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackage.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccMediapackagePackagingConfigurationCmafPackage {

};
```


### DataAwsccMediapackagePackagingConfigurationCmafPackageEncryption <a name="DataAwsccMediapackagePackagingConfigurationCmafPackageEncryption" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryption"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryption.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccMediapackagePackagingConfigurationCmafPackageEncryption {

};
```


### DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProvider <a name="DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProvider" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProvider"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProvider.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProvider {

};
```


### DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderEncryptionContractConfiguration <a name="DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderEncryptionContractConfiguration" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderEncryptionContractConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderEncryptionContractConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderEncryptionContractConfiguration {

};
```


### DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifests <a name="DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifests" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifests"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifests.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifests {

};
```


### DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelection <a name="DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelection" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelection"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelection.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelection {

};
```


### DataAwsccMediapackagePackagingConfigurationConfig <a name="DataAwsccMediapackagePackagingConfigurationConfig" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccMediapackagePackagingConfigurationConfig {
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationConfig.property.id">Id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/data-sources/mediapackage_packaging_configuration#id DataAwsccMediapackagePackagingConfiguration#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccMediapackagePackagingConfigurationDashPackage <a name="DataAwsccMediapackagePackagingConfigurationDashPackage" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackage"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackage.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccMediapackagePackagingConfigurationDashPackage {

};
```


### DataAwsccMediapackagePackagingConfigurationDashPackageDashManifests <a name="DataAwsccMediapackagePackagingConfigurationDashPackageDashManifests" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageDashManifests"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageDashManifests.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccMediapackagePackagingConfigurationDashPackageDashManifests {

};
```


### DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsStreamSelection <a name="DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsStreamSelection" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsStreamSelection"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsStreamSelection.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsStreamSelection {

};
```


### DataAwsccMediapackagePackagingConfigurationDashPackageEncryption <a name="DataAwsccMediapackagePackagingConfigurationDashPackageEncryption" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryption"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryption.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccMediapackagePackagingConfigurationDashPackageEncryption {

};
```


### DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProvider <a name="DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProvider" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProvider"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProvider.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProvider {

};
```


### DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderEncryptionContractConfiguration <a name="DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderEncryptionContractConfiguration" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderEncryptionContractConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderEncryptionContractConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderEncryptionContractConfiguration {

};
```


### DataAwsccMediapackagePackagingConfigurationHlsPackage <a name="DataAwsccMediapackagePackagingConfigurationHlsPackage" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackage"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackage.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccMediapackagePackagingConfigurationHlsPackage {

};
```


### DataAwsccMediapackagePackagingConfigurationHlsPackageEncryption <a name="DataAwsccMediapackagePackagingConfigurationHlsPackageEncryption" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryption"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryption.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccMediapackagePackagingConfigurationHlsPackageEncryption {

};
```


### DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProvider <a name="DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProvider" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProvider"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProvider.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProvider {

};
```


### DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderEncryptionContractConfiguration <a name="DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderEncryptionContractConfiguration" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderEncryptionContractConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderEncryptionContractConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderEncryptionContractConfiguration {

};
```


### DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifests <a name="DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifests" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifests"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifests.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifests {

};
```


### DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelection <a name="DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelection" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelection"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelection.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelection {

};
```


### DataAwsccMediapackagePackagingConfigurationMssPackage <a name="DataAwsccMediapackagePackagingConfigurationMssPackage" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackage"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackage.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccMediapackagePackagingConfigurationMssPackage {

};
```


### DataAwsccMediapackagePackagingConfigurationMssPackageEncryption <a name="DataAwsccMediapackagePackagingConfigurationMssPackageEncryption" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryption"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryption.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccMediapackagePackagingConfigurationMssPackageEncryption {

};
```


### DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProvider <a name="DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProvider" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProvider"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProvider.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProvider {

};
```


### DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderEncryptionContractConfiguration <a name="DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderEncryptionContractConfiguration" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderEncryptionContractConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderEncryptionContractConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderEncryptionContractConfiguration {

};
```


### DataAwsccMediapackagePackagingConfigurationMssPackageMssManifests <a name="DataAwsccMediapackagePackagingConfigurationMssPackageMssManifests" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageMssManifests"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageMssManifests.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccMediapackagePackagingConfigurationMssPackageMssManifests {

};
```


### DataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsStreamSelection <a name="DataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsStreamSelection" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsStreamSelection"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsStreamSelection.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsStreamSelection {

};
```


### DataAwsccMediapackagePackagingConfigurationTags <a name="DataAwsccMediapackagePackagingConfigurationTags" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccMediapackagePackagingConfigurationTags {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionOutputReference <a name="DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionOutputReference" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionOutputReference.property.spekeKeyProvider">SpekeKeyProvider</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderOutputReference">DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryption">DataAwsccMediapackagePackagingConfigurationCmafPackageEncryption</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `SpekeKeyProvider`<sup>Required</sup> <a name="SpekeKeyProvider" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionOutputReference.property.spekeKeyProvider"></a>

```csharp
public DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderOutputReference SpekeKeyProvider { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderOutputReference">DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionOutputReference.property.internalValue"></a>

```csharp
public DataAwsccMediapackagePackagingConfigurationCmafPackageEncryption InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryption">DataAwsccMediapackagePackagingConfigurationCmafPackageEncryption</a>

---


### DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference <a name="DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.property.presetSpeke20Audio">PresetSpeke20Audio</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.property.presetSpeke20Video">PresetSpeke20Video</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderEncryptionContractConfiguration">DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderEncryptionContractConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PresetSpeke20Audio`<sup>Required</sup> <a name="PresetSpeke20Audio" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.property.presetSpeke20Audio"></a>

```csharp
public string PresetSpeke20Audio { get; }
```

- *Type:* string

---

##### `PresetSpeke20Video`<sup>Required</sup> <a name="PresetSpeke20Video" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.property.presetSpeke20Video"></a>

```csharp
public string PresetSpeke20Video { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.property.internalValue"></a>

```csharp
public DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderEncryptionContractConfiguration InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderEncryptionContractConfiguration">DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderEncryptionContractConfiguration</a>

---


### DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderOutputReference <a name="DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderOutputReference" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderOutputReference.property.encryptionContractConfiguration">EncryptionContractConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference">DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderOutputReference.property.roleArn">RoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderOutputReference.property.systemIds">SystemIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderOutputReference.property.url">Url</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProvider">DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProvider</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EncryptionContractConfiguration`<sup>Required</sup> <a name="EncryptionContractConfiguration" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderOutputReference.property.encryptionContractConfiguration"></a>

```csharp
public DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference EncryptionContractConfiguration { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference">DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference</a>

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderOutputReference.property.roleArn"></a>

```csharp
public string RoleArn { get; }
```

- *Type:* string

---

##### `SystemIds`<sup>Required</sup> <a name="SystemIds" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderOutputReference.property.systemIds"></a>

```csharp
public string[] SystemIds { get; }
```

- *Type:* string[]

---

##### `Url`<sup>Required</sup> <a name="Url" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderOutputReference.property.url"></a>

```csharp
public string Url { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderOutputReference.property.internalValue"></a>

```csharp
public DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProvider InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProvider">DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProvider</a>

---


### DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsList <a name="DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsList" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsList.get"></a>

```csharp
private DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsOutputReference <a name="DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsOutputReference" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsOutputReference.property.adMarkers">AdMarkers</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsOutputReference.property.includeIframeOnlyStream">IncludeIframeOnlyStream</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsOutputReference.property.manifestName">ManifestName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsOutputReference.property.programDateTimeIntervalSeconds">ProgramDateTimeIntervalSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsOutputReference.property.repeatExtXKey">RepeatExtXKey</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsOutputReference.property.streamSelection">StreamSelection</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelectionOutputReference">DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelectionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifests">DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifests</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AdMarkers`<sup>Required</sup> <a name="AdMarkers" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsOutputReference.property.adMarkers"></a>

```csharp
public string AdMarkers { get; }
```

- *Type:* string

---

##### `IncludeIframeOnlyStream`<sup>Required</sup> <a name="IncludeIframeOnlyStream" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsOutputReference.property.includeIframeOnlyStream"></a>

```csharp
public IResolvable IncludeIframeOnlyStream { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `ManifestName`<sup>Required</sup> <a name="ManifestName" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsOutputReference.property.manifestName"></a>

```csharp
public string ManifestName { get; }
```

- *Type:* string

---

##### `ProgramDateTimeIntervalSeconds`<sup>Required</sup> <a name="ProgramDateTimeIntervalSeconds" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsOutputReference.property.programDateTimeIntervalSeconds"></a>

```csharp
public double ProgramDateTimeIntervalSeconds { get; }
```

- *Type:* double

---

##### `RepeatExtXKey`<sup>Required</sup> <a name="RepeatExtXKey" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsOutputReference.property.repeatExtXKey"></a>

```csharp
public IResolvable RepeatExtXKey { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `StreamSelection`<sup>Required</sup> <a name="StreamSelection" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsOutputReference.property.streamSelection"></a>

```csharp
public DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelectionOutputReference StreamSelection { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelectionOutputReference">DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelectionOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsOutputReference.property.internalValue"></a>

```csharp
public DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifests InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifests">DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifests</a>

---


### DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelectionOutputReference <a name="DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelectionOutputReference" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelectionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelectionOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelectionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelectionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelectionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelectionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelectionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelectionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelectionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelectionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelectionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelectionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelectionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelectionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelectionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelectionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelectionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelectionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelectionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelectionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelectionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelectionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelectionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelectionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelectionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelectionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelectionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelectionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelectionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelectionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelectionOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelectionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelectionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelectionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelectionOutputReference.property.maxVideoBitsPerSecond">MaxVideoBitsPerSecond</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelectionOutputReference.property.minVideoBitsPerSecond">MinVideoBitsPerSecond</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelectionOutputReference.property.streamOrder">StreamOrder</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelectionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelection">DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelection</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelectionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelectionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MaxVideoBitsPerSecond`<sup>Required</sup> <a name="MaxVideoBitsPerSecond" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelectionOutputReference.property.maxVideoBitsPerSecond"></a>

```csharp
public double MaxVideoBitsPerSecond { get; }
```

- *Type:* double

---

##### `MinVideoBitsPerSecond`<sup>Required</sup> <a name="MinVideoBitsPerSecond" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelectionOutputReference.property.minVideoBitsPerSecond"></a>

```csharp
public double MinVideoBitsPerSecond { get; }
```

- *Type:* double

---

##### `StreamOrder`<sup>Required</sup> <a name="StreamOrder" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelectionOutputReference.property.streamOrder"></a>

```csharp
public string StreamOrder { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelectionOutputReference.property.internalValue"></a>

```csharp
public DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelection InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelection">DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelection</a>

---


### DataAwsccMediapackagePackagingConfigurationCmafPackageOutputReference <a name="DataAwsccMediapackagePackagingConfigurationCmafPackageOutputReference" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccMediapackagePackagingConfigurationCmafPackageOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageOutputReference.property.encryption">Encryption</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionOutputReference">DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageOutputReference.property.hlsManifests">HlsManifests</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsList">DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageOutputReference.property.includeEncoderConfigurationInSegments">IncludeEncoderConfigurationInSegments</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageOutputReference.property.segmentDurationSeconds">SegmentDurationSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackage">DataAwsccMediapackagePackagingConfigurationCmafPackage</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Encryption`<sup>Required</sup> <a name="Encryption" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageOutputReference.property.encryption"></a>

```csharp
public DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionOutputReference Encryption { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionOutputReference">DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionOutputReference</a>

---

##### `HlsManifests`<sup>Required</sup> <a name="HlsManifests" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageOutputReference.property.hlsManifests"></a>

```csharp
public DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsList HlsManifests { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsList">DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsList</a>

---

##### `IncludeEncoderConfigurationInSegments`<sup>Required</sup> <a name="IncludeEncoderConfigurationInSegments" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageOutputReference.property.includeEncoderConfigurationInSegments"></a>

```csharp
public IResolvable IncludeEncoderConfigurationInSegments { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `SegmentDurationSeconds`<sup>Required</sup> <a name="SegmentDurationSeconds" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageOutputReference.property.segmentDurationSeconds"></a>

```csharp
public double SegmentDurationSeconds { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageOutputReference.property.internalValue"></a>

```csharp
public DataAwsccMediapackagePackagingConfigurationCmafPackage InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackage">DataAwsccMediapackagePackagingConfigurationCmafPackage</a>

---


### DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsList <a name="DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsList" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsList.get"></a>

```csharp
private DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsOutputReference <a name="DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsOutputReference" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsOutputReference.property.manifestLayout">ManifestLayout</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsOutputReference.property.manifestName">ManifestName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsOutputReference.property.minBufferTimeSeconds">MinBufferTimeSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsOutputReference.property.profile">Profile</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsOutputReference.property.scteMarkersSource">ScteMarkersSource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsOutputReference.property.streamSelection">StreamSelection</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsStreamSelectionOutputReference">DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsStreamSelectionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageDashManifests">DataAwsccMediapackagePackagingConfigurationDashPackageDashManifests</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ManifestLayout`<sup>Required</sup> <a name="ManifestLayout" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsOutputReference.property.manifestLayout"></a>

```csharp
public string ManifestLayout { get; }
```

- *Type:* string

---

##### `ManifestName`<sup>Required</sup> <a name="ManifestName" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsOutputReference.property.manifestName"></a>

```csharp
public string ManifestName { get; }
```

- *Type:* string

---

##### `MinBufferTimeSeconds`<sup>Required</sup> <a name="MinBufferTimeSeconds" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsOutputReference.property.minBufferTimeSeconds"></a>

```csharp
public double MinBufferTimeSeconds { get; }
```

- *Type:* double

---

##### `Profile`<sup>Required</sup> <a name="Profile" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsOutputReference.property.profile"></a>

```csharp
public string Profile { get; }
```

- *Type:* string

---

##### `ScteMarkersSource`<sup>Required</sup> <a name="ScteMarkersSource" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsOutputReference.property.scteMarkersSource"></a>

```csharp
public string ScteMarkersSource { get; }
```

- *Type:* string

---

##### `StreamSelection`<sup>Required</sup> <a name="StreamSelection" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsOutputReference.property.streamSelection"></a>

```csharp
public DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsStreamSelectionOutputReference StreamSelection { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsStreamSelectionOutputReference">DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsStreamSelectionOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsOutputReference.property.internalValue"></a>

```csharp
public DataAwsccMediapackagePackagingConfigurationDashPackageDashManifests InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageDashManifests">DataAwsccMediapackagePackagingConfigurationDashPackageDashManifests</a>

---


### DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsStreamSelectionOutputReference <a name="DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsStreamSelectionOutputReference" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsStreamSelectionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsStreamSelectionOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsStreamSelectionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsStreamSelectionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsStreamSelectionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsStreamSelectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsStreamSelectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsStreamSelectionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsStreamSelectionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsStreamSelectionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsStreamSelectionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsStreamSelectionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsStreamSelectionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsStreamSelectionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsStreamSelectionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsStreamSelectionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsStreamSelectionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsStreamSelectionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsStreamSelectionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsStreamSelectionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsStreamSelectionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsStreamSelectionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsStreamSelectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsStreamSelectionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsStreamSelectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsStreamSelectionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsStreamSelectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsStreamSelectionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsStreamSelectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsStreamSelectionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsStreamSelectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsStreamSelectionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsStreamSelectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsStreamSelectionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsStreamSelectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsStreamSelectionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsStreamSelectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsStreamSelectionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsStreamSelectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsStreamSelectionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsStreamSelectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsStreamSelectionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsStreamSelectionOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsStreamSelectionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsStreamSelectionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsStreamSelectionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsStreamSelectionOutputReference.property.maxVideoBitsPerSecond">MaxVideoBitsPerSecond</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsStreamSelectionOutputReference.property.minVideoBitsPerSecond">MinVideoBitsPerSecond</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsStreamSelectionOutputReference.property.streamOrder">StreamOrder</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsStreamSelectionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsStreamSelection">DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsStreamSelection</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsStreamSelectionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsStreamSelectionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MaxVideoBitsPerSecond`<sup>Required</sup> <a name="MaxVideoBitsPerSecond" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsStreamSelectionOutputReference.property.maxVideoBitsPerSecond"></a>

```csharp
public double MaxVideoBitsPerSecond { get; }
```

- *Type:* double

---

##### `MinVideoBitsPerSecond`<sup>Required</sup> <a name="MinVideoBitsPerSecond" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsStreamSelectionOutputReference.property.minVideoBitsPerSecond"></a>

```csharp
public double MinVideoBitsPerSecond { get; }
```

- *Type:* double

---

##### `StreamOrder`<sup>Required</sup> <a name="StreamOrder" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsStreamSelectionOutputReference.property.streamOrder"></a>

```csharp
public string StreamOrder { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsStreamSelectionOutputReference.property.internalValue"></a>

```csharp
public DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsStreamSelection InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsStreamSelection">DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsStreamSelection</a>

---


### DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionOutputReference <a name="DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionOutputReference" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionOutputReference.property.spekeKeyProvider">SpekeKeyProvider</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderOutputReference">DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryption">DataAwsccMediapackagePackagingConfigurationDashPackageEncryption</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `SpekeKeyProvider`<sup>Required</sup> <a name="SpekeKeyProvider" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionOutputReference.property.spekeKeyProvider"></a>

```csharp
public DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderOutputReference SpekeKeyProvider { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderOutputReference">DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionOutputReference.property.internalValue"></a>

```csharp
public DataAwsccMediapackagePackagingConfigurationDashPackageEncryption InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryption">DataAwsccMediapackagePackagingConfigurationDashPackageEncryption</a>

---


### DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference <a name="DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.property.presetSpeke20Audio">PresetSpeke20Audio</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.property.presetSpeke20Video">PresetSpeke20Video</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderEncryptionContractConfiguration">DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderEncryptionContractConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PresetSpeke20Audio`<sup>Required</sup> <a name="PresetSpeke20Audio" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.property.presetSpeke20Audio"></a>

```csharp
public string PresetSpeke20Audio { get; }
```

- *Type:* string

---

##### `PresetSpeke20Video`<sup>Required</sup> <a name="PresetSpeke20Video" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.property.presetSpeke20Video"></a>

```csharp
public string PresetSpeke20Video { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.property.internalValue"></a>

```csharp
public DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderEncryptionContractConfiguration InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderEncryptionContractConfiguration">DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderEncryptionContractConfiguration</a>

---


### DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderOutputReference <a name="DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderOutputReference" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderOutputReference.property.encryptionContractConfiguration">EncryptionContractConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference">DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderOutputReference.property.roleArn">RoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderOutputReference.property.systemIds">SystemIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderOutputReference.property.url">Url</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProvider">DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProvider</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EncryptionContractConfiguration`<sup>Required</sup> <a name="EncryptionContractConfiguration" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderOutputReference.property.encryptionContractConfiguration"></a>

```csharp
public DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference EncryptionContractConfiguration { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference">DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference</a>

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderOutputReference.property.roleArn"></a>

```csharp
public string RoleArn { get; }
```

- *Type:* string

---

##### `SystemIds`<sup>Required</sup> <a name="SystemIds" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderOutputReference.property.systemIds"></a>

```csharp
public string[] SystemIds { get; }
```

- *Type:* string[]

---

##### `Url`<sup>Required</sup> <a name="Url" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderOutputReference.property.url"></a>

```csharp
public string Url { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderOutputReference.property.internalValue"></a>

```csharp
public DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProvider InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProvider">DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProvider</a>

---


### DataAwsccMediapackagePackagingConfigurationDashPackageOutputReference <a name="DataAwsccMediapackagePackagingConfigurationDashPackageOutputReference" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccMediapackagePackagingConfigurationDashPackageOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageOutputReference.property.dashManifests">DashManifests</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsList">DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageOutputReference.property.encryption">Encryption</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionOutputReference">DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageOutputReference.property.includeEncoderConfigurationInSegments">IncludeEncoderConfigurationInSegments</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageOutputReference.property.includeIframeOnlyStream">IncludeIframeOnlyStream</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageOutputReference.property.periodTriggers">PeriodTriggers</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageOutputReference.property.segmentDurationSeconds">SegmentDurationSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageOutputReference.property.segmentTemplateFormat">SegmentTemplateFormat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackage">DataAwsccMediapackagePackagingConfigurationDashPackage</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DashManifests`<sup>Required</sup> <a name="DashManifests" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageOutputReference.property.dashManifests"></a>

```csharp
public DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsList DashManifests { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsList">DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsList</a>

---

##### `Encryption`<sup>Required</sup> <a name="Encryption" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageOutputReference.property.encryption"></a>

```csharp
public DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionOutputReference Encryption { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionOutputReference">DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionOutputReference</a>

---

##### `IncludeEncoderConfigurationInSegments`<sup>Required</sup> <a name="IncludeEncoderConfigurationInSegments" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageOutputReference.property.includeEncoderConfigurationInSegments"></a>

```csharp
public IResolvable IncludeEncoderConfigurationInSegments { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `IncludeIframeOnlyStream`<sup>Required</sup> <a name="IncludeIframeOnlyStream" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageOutputReference.property.includeIframeOnlyStream"></a>

```csharp
public IResolvable IncludeIframeOnlyStream { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `PeriodTriggers`<sup>Required</sup> <a name="PeriodTriggers" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageOutputReference.property.periodTriggers"></a>

```csharp
public string[] PeriodTriggers { get; }
```

- *Type:* string[]

---

##### `SegmentDurationSeconds`<sup>Required</sup> <a name="SegmentDurationSeconds" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageOutputReference.property.segmentDurationSeconds"></a>

```csharp
public double SegmentDurationSeconds { get; }
```

- *Type:* double

---

##### `SegmentTemplateFormat`<sup>Required</sup> <a name="SegmentTemplateFormat" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageOutputReference.property.segmentTemplateFormat"></a>

```csharp
public string SegmentTemplateFormat { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageOutputReference.property.internalValue"></a>

```csharp
public DataAwsccMediapackagePackagingConfigurationDashPackage InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackage">DataAwsccMediapackagePackagingConfigurationDashPackage</a>

---


### DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionOutputReference <a name="DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionOutputReference" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionOutputReference.property.constantInitializationVector">ConstantInitializationVector</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionOutputReference.property.encryptionMethod">EncryptionMethod</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionOutputReference.property.spekeKeyProvider">SpekeKeyProvider</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderOutputReference">DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryption">DataAwsccMediapackagePackagingConfigurationHlsPackageEncryption</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ConstantInitializationVector`<sup>Required</sup> <a name="ConstantInitializationVector" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionOutputReference.property.constantInitializationVector"></a>

```csharp
public string ConstantInitializationVector { get; }
```

- *Type:* string

---

##### `EncryptionMethod`<sup>Required</sup> <a name="EncryptionMethod" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionOutputReference.property.encryptionMethod"></a>

```csharp
public string EncryptionMethod { get; }
```

- *Type:* string

---

##### `SpekeKeyProvider`<sup>Required</sup> <a name="SpekeKeyProvider" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionOutputReference.property.spekeKeyProvider"></a>

```csharp
public DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderOutputReference SpekeKeyProvider { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderOutputReference">DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionOutputReference.property.internalValue"></a>

```csharp
public DataAwsccMediapackagePackagingConfigurationHlsPackageEncryption InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryption">DataAwsccMediapackagePackagingConfigurationHlsPackageEncryption</a>

---


### DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference <a name="DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.property.presetSpeke20Audio">PresetSpeke20Audio</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.property.presetSpeke20Video">PresetSpeke20Video</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderEncryptionContractConfiguration">DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderEncryptionContractConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PresetSpeke20Audio`<sup>Required</sup> <a name="PresetSpeke20Audio" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.property.presetSpeke20Audio"></a>

```csharp
public string PresetSpeke20Audio { get; }
```

- *Type:* string

---

##### `PresetSpeke20Video`<sup>Required</sup> <a name="PresetSpeke20Video" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.property.presetSpeke20Video"></a>

```csharp
public string PresetSpeke20Video { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.property.internalValue"></a>

```csharp
public DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderEncryptionContractConfiguration InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderEncryptionContractConfiguration">DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderEncryptionContractConfiguration</a>

---


### DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderOutputReference <a name="DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderOutputReference" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderOutputReference.property.encryptionContractConfiguration">EncryptionContractConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference">DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderOutputReference.property.roleArn">RoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderOutputReference.property.systemIds">SystemIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderOutputReference.property.url">Url</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProvider">DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProvider</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EncryptionContractConfiguration`<sup>Required</sup> <a name="EncryptionContractConfiguration" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderOutputReference.property.encryptionContractConfiguration"></a>

```csharp
public DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference EncryptionContractConfiguration { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference">DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference</a>

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderOutputReference.property.roleArn"></a>

```csharp
public string RoleArn { get; }
```

- *Type:* string

---

##### `SystemIds`<sup>Required</sup> <a name="SystemIds" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderOutputReference.property.systemIds"></a>

```csharp
public string[] SystemIds { get; }
```

- *Type:* string[]

---

##### `Url`<sup>Required</sup> <a name="Url" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderOutputReference.property.url"></a>

```csharp
public string Url { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderOutputReference.property.internalValue"></a>

```csharp
public DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProvider InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProvider">DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProvider</a>

---


### DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsList <a name="DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsList" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsList.get"></a>

```csharp
private DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsOutputReference <a name="DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsOutputReference" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsOutputReference.property.adMarkers">AdMarkers</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsOutputReference.property.includeIframeOnlyStream">IncludeIframeOnlyStream</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsOutputReference.property.manifestName">ManifestName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsOutputReference.property.programDateTimeIntervalSeconds">ProgramDateTimeIntervalSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsOutputReference.property.repeatExtXKey">RepeatExtXKey</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsOutputReference.property.streamSelection">StreamSelection</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelectionOutputReference">DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelectionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifests">DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifests</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AdMarkers`<sup>Required</sup> <a name="AdMarkers" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsOutputReference.property.adMarkers"></a>

```csharp
public string AdMarkers { get; }
```

- *Type:* string

---

##### `IncludeIframeOnlyStream`<sup>Required</sup> <a name="IncludeIframeOnlyStream" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsOutputReference.property.includeIframeOnlyStream"></a>

```csharp
public IResolvable IncludeIframeOnlyStream { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `ManifestName`<sup>Required</sup> <a name="ManifestName" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsOutputReference.property.manifestName"></a>

```csharp
public string ManifestName { get; }
```

- *Type:* string

---

##### `ProgramDateTimeIntervalSeconds`<sup>Required</sup> <a name="ProgramDateTimeIntervalSeconds" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsOutputReference.property.programDateTimeIntervalSeconds"></a>

```csharp
public double ProgramDateTimeIntervalSeconds { get; }
```

- *Type:* double

---

##### `RepeatExtXKey`<sup>Required</sup> <a name="RepeatExtXKey" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsOutputReference.property.repeatExtXKey"></a>

```csharp
public IResolvable RepeatExtXKey { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `StreamSelection`<sup>Required</sup> <a name="StreamSelection" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsOutputReference.property.streamSelection"></a>

```csharp
public DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelectionOutputReference StreamSelection { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelectionOutputReference">DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelectionOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsOutputReference.property.internalValue"></a>

```csharp
public DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifests InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifests">DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifests</a>

---


### DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelectionOutputReference <a name="DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelectionOutputReference" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelectionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelectionOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelectionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelectionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelectionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelectionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelectionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelectionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelectionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelectionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelectionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelectionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelectionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelectionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelectionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelectionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelectionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelectionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelectionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelectionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelectionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelectionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelectionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelectionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelectionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelectionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelectionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelectionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelectionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelectionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelectionOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelectionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelectionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelectionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelectionOutputReference.property.maxVideoBitsPerSecond">MaxVideoBitsPerSecond</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelectionOutputReference.property.minVideoBitsPerSecond">MinVideoBitsPerSecond</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelectionOutputReference.property.streamOrder">StreamOrder</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelectionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelection">DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelection</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelectionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelectionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MaxVideoBitsPerSecond`<sup>Required</sup> <a name="MaxVideoBitsPerSecond" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelectionOutputReference.property.maxVideoBitsPerSecond"></a>

```csharp
public double MaxVideoBitsPerSecond { get; }
```

- *Type:* double

---

##### `MinVideoBitsPerSecond`<sup>Required</sup> <a name="MinVideoBitsPerSecond" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelectionOutputReference.property.minVideoBitsPerSecond"></a>

```csharp
public double MinVideoBitsPerSecond { get; }
```

- *Type:* double

---

##### `StreamOrder`<sup>Required</sup> <a name="StreamOrder" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelectionOutputReference.property.streamOrder"></a>

```csharp
public string StreamOrder { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelectionOutputReference.property.internalValue"></a>

```csharp
public DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelection InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelection">DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelection</a>

---


### DataAwsccMediapackagePackagingConfigurationHlsPackageOutputReference <a name="DataAwsccMediapackagePackagingConfigurationHlsPackageOutputReference" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccMediapackagePackagingConfigurationHlsPackageOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageOutputReference.property.encryption">Encryption</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionOutputReference">DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageOutputReference.property.hlsManifests">HlsManifests</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsList">DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageOutputReference.property.includeDvbSubtitles">IncludeDvbSubtitles</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageOutputReference.property.segmentDurationSeconds">SegmentDurationSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageOutputReference.property.useAudioRenditionGroup">UseAudioRenditionGroup</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackage">DataAwsccMediapackagePackagingConfigurationHlsPackage</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Encryption`<sup>Required</sup> <a name="Encryption" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageOutputReference.property.encryption"></a>

```csharp
public DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionOutputReference Encryption { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionOutputReference">DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionOutputReference</a>

---

##### `HlsManifests`<sup>Required</sup> <a name="HlsManifests" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageOutputReference.property.hlsManifests"></a>

```csharp
public DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsList HlsManifests { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsList">DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsList</a>

---

##### `IncludeDvbSubtitles`<sup>Required</sup> <a name="IncludeDvbSubtitles" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageOutputReference.property.includeDvbSubtitles"></a>

```csharp
public IResolvable IncludeDvbSubtitles { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `SegmentDurationSeconds`<sup>Required</sup> <a name="SegmentDurationSeconds" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageOutputReference.property.segmentDurationSeconds"></a>

```csharp
public double SegmentDurationSeconds { get; }
```

- *Type:* double

---

##### `UseAudioRenditionGroup`<sup>Required</sup> <a name="UseAudioRenditionGroup" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageOutputReference.property.useAudioRenditionGroup"></a>

```csharp
public IResolvable UseAudioRenditionGroup { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageOutputReference.property.internalValue"></a>

```csharp
public DataAwsccMediapackagePackagingConfigurationHlsPackage InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackage">DataAwsccMediapackagePackagingConfigurationHlsPackage</a>

---


### DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionOutputReference <a name="DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionOutputReference" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionOutputReference.property.spekeKeyProvider">SpekeKeyProvider</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderOutputReference">DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryption">DataAwsccMediapackagePackagingConfigurationMssPackageEncryption</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `SpekeKeyProvider`<sup>Required</sup> <a name="SpekeKeyProvider" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionOutputReference.property.spekeKeyProvider"></a>

```csharp
public DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderOutputReference SpekeKeyProvider { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderOutputReference">DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionOutputReference.property.internalValue"></a>

```csharp
public DataAwsccMediapackagePackagingConfigurationMssPackageEncryption InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryption">DataAwsccMediapackagePackagingConfigurationMssPackageEncryption</a>

---


### DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference <a name="DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.property.presetSpeke20Audio">PresetSpeke20Audio</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.property.presetSpeke20Video">PresetSpeke20Video</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderEncryptionContractConfiguration">DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderEncryptionContractConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PresetSpeke20Audio`<sup>Required</sup> <a name="PresetSpeke20Audio" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.property.presetSpeke20Audio"></a>

```csharp
public string PresetSpeke20Audio { get; }
```

- *Type:* string

---

##### `PresetSpeke20Video`<sup>Required</sup> <a name="PresetSpeke20Video" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.property.presetSpeke20Video"></a>

```csharp
public string PresetSpeke20Video { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.property.internalValue"></a>

```csharp
public DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderEncryptionContractConfiguration InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderEncryptionContractConfiguration">DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderEncryptionContractConfiguration</a>

---


### DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderOutputReference <a name="DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderOutputReference" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderOutputReference.property.encryptionContractConfiguration">EncryptionContractConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference">DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderOutputReference.property.roleArn">RoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderOutputReference.property.systemIds">SystemIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderOutputReference.property.url">Url</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProvider">DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProvider</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EncryptionContractConfiguration`<sup>Required</sup> <a name="EncryptionContractConfiguration" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderOutputReference.property.encryptionContractConfiguration"></a>

```csharp
public DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference EncryptionContractConfiguration { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference">DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference</a>

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderOutputReference.property.roleArn"></a>

```csharp
public string RoleArn { get; }
```

- *Type:* string

---

##### `SystemIds`<sup>Required</sup> <a name="SystemIds" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderOutputReference.property.systemIds"></a>

```csharp
public string[] SystemIds { get; }
```

- *Type:* string[]

---

##### `Url`<sup>Required</sup> <a name="Url" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderOutputReference.property.url"></a>

```csharp
public string Url { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderOutputReference.property.internalValue"></a>

```csharp
public DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProvider InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProvider">DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProvider</a>

---


### DataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsList <a name="DataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsList" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsList.get"></a>

```csharp
private DataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsOutputReference <a name="DataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsOutputReference" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsOutputReference.property.manifestName">ManifestName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsOutputReference.property.streamSelection">StreamSelection</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsStreamSelectionOutputReference">DataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsStreamSelectionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageMssManifests">DataAwsccMediapackagePackagingConfigurationMssPackageMssManifests</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ManifestName`<sup>Required</sup> <a name="ManifestName" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsOutputReference.property.manifestName"></a>

```csharp
public string ManifestName { get; }
```

- *Type:* string

---

##### `StreamSelection`<sup>Required</sup> <a name="StreamSelection" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsOutputReference.property.streamSelection"></a>

```csharp
public DataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsStreamSelectionOutputReference StreamSelection { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsStreamSelectionOutputReference">DataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsStreamSelectionOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsOutputReference.property.internalValue"></a>

```csharp
public DataAwsccMediapackagePackagingConfigurationMssPackageMssManifests InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageMssManifests">DataAwsccMediapackagePackagingConfigurationMssPackageMssManifests</a>

---


### DataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsStreamSelectionOutputReference <a name="DataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsStreamSelectionOutputReference" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsStreamSelectionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsStreamSelectionOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsStreamSelectionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsStreamSelectionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsStreamSelectionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsStreamSelectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsStreamSelectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsStreamSelectionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsStreamSelectionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsStreamSelectionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsStreamSelectionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsStreamSelectionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsStreamSelectionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsStreamSelectionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsStreamSelectionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsStreamSelectionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsStreamSelectionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsStreamSelectionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsStreamSelectionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsStreamSelectionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsStreamSelectionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsStreamSelectionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsStreamSelectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsStreamSelectionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsStreamSelectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsStreamSelectionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsStreamSelectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsStreamSelectionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsStreamSelectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsStreamSelectionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsStreamSelectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsStreamSelectionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsStreamSelectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsStreamSelectionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsStreamSelectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsStreamSelectionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsStreamSelectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsStreamSelectionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsStreamSelectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsStreamSelectionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsStreamSelectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsStreamSelectionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsStreamSelectionOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsStreamSelectionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsStreamSelectionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsStreamSelectionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsStreamSelectionOutputReference.property.maxVideoBitsPerSecond">MaxVideoBitsPerSecond</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsStreamSelectionOutputReference.property.minVideoBitsPerSecond">MinVideoBitsPerSecond</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsStreamSelectionOutputReference.property.streamOrder">StreamOrder</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsStreamSelectionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsStreamSelection">DataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsStreamSelection</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsStreamSelectionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsStreamSelectionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MaxVideoBitsPerSecond`<sup>Required</sup> <a name="MaxVideoBitsPerSecond" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsStreamSelectionOutputReference.property.maxVideoBitsPerSecond"></a>

```csharp
public double MaxVideoBitsPerSecond { get; }
```

- *Type:* double

---

##### `MinVideoBitsPerSecond`<sup>Required</sup> <a name="MinVideoBitsPerSecond" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsStreamSelectionOutputReference.property.minVideoBitsPerSecond"></a>

```csharp
public double MinVideoBitsPerSecond { get; }
```

- *Type:* double

---

##### `StreamOrder`<sup>Required</sup> <a name="StreamOrder" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsStreamSelectionOutputReference.property.streamOrder"></a>

```csharp
public string StreamOrder { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsStreamSelectionOutputReference.property.internalValue"></a>

```csharp
public DataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsStreamSelection InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsStreamSelection">DataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsStreamSelection</a>

---


### DataAwsccMediapackagePackagingConfigurationMssPackageOutputReference <a name="DataAwsccMediapackagePackagingConfigurationMssPackageOutputReference" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccMediapackagePackagingConfigurationMssPackageOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageOutputReference.property.encryption">Encryption</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionOutputReference">DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageOutputReference.property.mssManifests">MssManifests</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsList">DataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageOutputReference.property.segmentDurationSeconds">SegmentDurationSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackage">DataAwsccMediapackagePackagingConfigurationMssPackage</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Encryption`<sup>Required</sup> <a name="Encryption" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageOutputReference.property.encryption"></a>

```csharp
public DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionOutputReference Encryption { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionOutputReference">DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionOutputReference</a>

---

##### `MssManifests`<sup>Required</sup> <a name="MssManifests" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageOutputReference.property.mssManifests"></a>

```csharp
public DataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsList MssManifests { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsList">DataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsList</a>

---

##### `SegmentDurationSeconds`<sup>Required</sup> <a name="SegmentDurationSeconds" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageOutputReference.property.segmentDurationSeconds"></a>

```csharp
public double SegmentDurationSeconds { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageOutputReference.property.internalValue"></a>

```csharp
public DataAwsccMediapackagePackagingConfigurationMssPackage InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackage">DataAwsccMediapackagePackagingConfigurationMssPackage</a>

---


### DataAwsccMediapackagePackagingConfigurationTagsList <a name="DataAwsccMediapackagePackagingConfigurationTagsList" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccMediapackagePackagingConfigurationTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationTagsList.get"></a>

```csharp
private DataAwsccMediapackagePackagingConfigurationTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsccMediapackagePackagingConfigurationTagsOutputReference <a name="DataAwsccMediapackagePackagingConfigurationTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccMediapackagePackagingConfigurationTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationTagsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationTags">DataAwsccMediapackagePackagingConfigurationTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationTagsOutputReference.property.internalValue"></a>

```csharp
public DataAwsccMediapackagePackagingConfigurationTags InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationTags">DataAwsccMediapackagePackagingConfigurationTags</a>

---



