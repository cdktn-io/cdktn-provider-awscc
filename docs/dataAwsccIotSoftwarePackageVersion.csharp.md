# `dataAwsccIotSoftwarePackageVersion` Submodule <a name="`dataAwsccIotSoftwarePackageVersion` Submodule" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccIotSoftwarePackageVersion <a name="DataAwsccIotSoftwarePackageVersion" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersion"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/iot_software_package_version awscc_iot_software_package_version}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersion.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccIotSoftwarePackageVersion(Construct Scope, string Id, DataAwsccIotSoftwarePackageVersionConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersion.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersion.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersion.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionConfig">DataAwsccIotSoftwarePackageVersionConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersion.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersion.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersion.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionConfig">DataAwsccIotSoftwarePackageVersionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersion.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersion.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersion.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersion.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersion.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersion.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersion.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersion.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersion.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersion.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersion.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersion.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersion.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersion.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersion.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersion.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersion.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersion.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersion.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersion.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersion.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersion.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersion.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersion.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersion.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersion.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersion.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersion.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersion.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersion.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersion.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersion.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersion.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersion.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersion.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersion.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersion.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersion.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersion.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersion.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersion.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersion.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersion.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersion.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersion.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersion.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersion.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersion.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersion.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersion.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersion.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersion.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersion.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersion.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccIotSoftwarePackageVersion resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersion.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccIotSoftwarePackageVersion.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersion.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersion.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccIotSoftwarePackageVersion.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersion.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersion.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccIotSoftwarePackageVersion.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersion.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersion.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccIotSoftwarePackageVersion.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataAwsccIotSoftwarePackageVersion resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersion.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersion.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccIotSoftwarePackageVersion to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersion.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccIotSoftwarePackageVersion that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/iot_software_package_version#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersion.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccIotSoftwarePackageVersion to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersion.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersion.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersion.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersion.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersion.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersion.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersion.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersion.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersion.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersion.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersion.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersion.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersion.property.artifact">Artifact</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionArtifactOutputReference">DataAwsccIotSoftwarePackageVersionArtifactOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersion.property.attributes">Attributes</a></code> | <code>Io.Cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersion.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersion.property.errorReason">ErrorReason</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersion.property.packageName">PackageName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersion.property.packageVersionArn">PackageVersionArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersion.property.recipe">Recipe</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersion.property.sbom">Sbom</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionSbomOutputReference">DataAwsccIotSoftwarePackageVersionSbomOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersion.property.sbomValidationStatus">SbomValidationStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersion.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersion.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionTagsList">DataAwsccIotSoftwarePackageVersionTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersion.property.versionName">VersionName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersion.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersion.property.id">Id</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersion.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersion.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersion.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersion.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersion.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersion.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersion.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersion.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersion.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersion.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersion.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersion.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Artifact`<sup>Required</sup> <a name="Artifact" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersion.property.artifact"></a>

```csharp
public DataAwsccIotSoftwarePackageVersionArtifactOutputReference Artifact { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionArtifactOutputReference">DataAwsccIotSoftwarePackageVersionArtifactOutputReference</a>

---

##### `Attributes`<sup>Required</sup> <a name="Attributes" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersion.property.attributes"></a>

```csharp
public StringMap Attributes { get; }
```

- *Type:* Io.Cdktn.StringMap

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersion.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `ErrorReason`<sup>Required</sup> <a name="ErrorReason" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersion.property.errorReason"></a>

```csharp
public string ErrorReason { get; }
```

- *Type:* string

---

##### `PackageName`<sup>Required</sup> <a name="PackageName" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersion.property.packageName"></a>

```csharp
public string PackageName { get; }
```

- *Type:* string

---

##### `PackageVersionArn`<sup>Required</sup> <a name="PackageVersionArn" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersion.property.packageVersionArn"></a>

```csharp
public string PackageVersionArn { get; }
```

- *Type:* string

---

##### `Recipe`<sup>Required</sup> <a name="Recipe" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersion.property.recipe"></a>

```csharp
public string Recipe { get; }
```

- *Type:* string

---

##### `Sbom`<sup>Required</sup> <a name="Sbom" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersion.property.sbom"></a>

```csharp
public DataAwsccIotSoftwarePackageVersionSbomOutputReference Sbom { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionSbomOutputReference">DataAwsccIotSoftwarePackageVersionSbomOutputReference</a>

---

##### `SbomValidationStatus`<sup>Required</sup> <a name="SbomValidationStatus" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersion.property.sbomValidationStatus"></a>

```csharp
public string SbomValidationStatus { get; }
```

- *Type:* string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersion.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersion.property.tags"></a>

```csharp
public DataAwsccIotSoftwarePackageVersionTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionTagsList">DataAwsccIotSoftwarePackageVersionTagsList</a>

---

##### `VersionName`<sup>Required</sup> <a name="VersionName" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersion.property.versionName"></a>

```csharp
public string VersionName { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersion.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersion.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersion.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersion.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccIotSoftwarePackageVersionArtifact <a name="DataAwsccIotSoftwarePackageVersionArtifact" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionArtifact"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionArtifact.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccIotSoftwarePackageVersionArtifact {

};
```


### DataAwsccIotSoftwarePackageVersionArtifactS3Location <a name="DataAwsccIotSoftwarePackageVersionArtifactS3Location" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionArtifactS3Location"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionArtifactS3Location.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccIotSoftwarePackageVersionArtifactS3Location {

};
```


### DataAwsccIotSoftwarePackageVersionConfig <a name="DataAwsccIotSoftwarePackageVersionConfig" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccIotSoftwarePackageVersionConfig {
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionConfig.property.id">Id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/iot_software_package_version#id DataAwsccIotSoftwarePackageVersion#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccIotSoftwarePackageVersionSbom <a name="DataAwsccIotSoftwarePackageVersionSbom" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionSbom"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionSbom.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccIotSoftwarePackageVersionSbom {

};
```


### DataAwsccIotSoftwarePackageVersionSbomS3Location <a name="DataAwsccIotSoftwarePackageVersionSbomS3Location" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionSbomS3Location"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionSbomS3Location.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccIotSoftwarePackageVersionSbomS3Location {

};
```


### DataAwsccIotSoftwarePackageVersionTags <a name="DataAwsccIotSoftwarePackageVersionTags" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccIotSoftwarePackageVersionTags {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccIotSoftwarePackageVersionArtifactOutputReference <a name="DataAwsccIotSoftwarePackageVersionArtifactOutputReference" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionArtifactOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionArtifactOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccIotSoftwarePackageVersionArtifactOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionArtifactOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionArtifactOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionArtifactOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionArtifactOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionArtifactOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionArtifactOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionArtifactOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionArtifactOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionArtifactOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionArtifactOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionArtifactOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionArtifactOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionArtifactOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionArtifactOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionArtifactOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionArtifactOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionArtifactOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionArtifactOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionArtifactOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionArtifactOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionArtifactOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionArtifactOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionArtifactOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionArtifactOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionArtifactOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionArtifactOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionArtifactOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionArtifactOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionArtifactOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionArtifactOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionArtifactOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionArtifactOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionArtifactOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionArtifactOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionArtifactOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionArtifactOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionArtifactOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionArtifactOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionArtifactOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionArtifactOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionArtifactOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionArtifactOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionArtifactOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionArtifactOutputReference.property.s3Location">S3Location</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionArtifactS3LocationOutputReference">DataAwsccIotSoftwarePackageVersionArtifactS3LocationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionArtifactOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionArtifact">DataAwsccIotSoftwarePackageVersionArtifact</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionArtifactOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionArtifactOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `S3Location`<sup>Required</sup> <a name="S3Location" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionArtifactOutputReference.property.s3Location"></a>

```csharp
public DataAwsccIotSoftwarePackageVersionArtifactS3LocationOutputReference S3Location { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionArtifactS3LocationOutputReference">DataAwsccIotSoftwarePackageVersionArtifactS3LocationOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionArtifactOutputReference.property.internalValue"></a>

```csharp
public DataAwsccIotSoftwarePackageVersionArtifact InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionArtifact">DataAwsccIotSoftwarePackageVersionArtifact</a>

---


### DataAwsccIotSoftwarePackageVersionArtifactS3LocationOutputReference <a name="DataAwsccIotSoftwarePackageVersionArtifactS3LocationOutputReference" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionArtifactS3LocationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionArtifactS3LocationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccIotSoftwarePackageVersionArtifactS3LocationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionArtifactS3LocationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionArtifactS3LocationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionArtifactS3LocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionArtifactS3LocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionArtifactS3LocationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionArtifactS3LocationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionArtifactS3LocationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionArtifactS3LocationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionArtifactS3LocationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionArtifactS3LocationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionArtifactS3LocationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionArtifactS3LocationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionArtifactS3LocationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionArtifactS3LocationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionArtifactS3LocationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionArtifactS3LocationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionArtifactS3LocationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionArtifactS3LocationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionArtifactS3LocationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionArtifactS3LocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionArtifactS3LocationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionArtifactS3LocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionArtifactS3LocationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionArtifactS3LocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionArtifactS3LocationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionArtifactS3LocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionArtifactS3LocationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionArtifactS3LocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionArtifactS3LocationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionArtifactS3LocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionArtifactS3LocationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionArtifactS3LocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionArtifactS3LocationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionArtifactS3LocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionArtifactS3LocationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionArtifactS3LocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionArtifactS3LocationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionArtifactS3LocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionArtifactS3LocationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionArtifactS3LocationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionArtifactS3LocationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionArtifactS3LocationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionArtifactS3LocationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionArtifactS3LocationOutputReference.property.bucket">Bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionArtifactS3LocationOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionArtifactS3LocationOutputReference.property.version">Version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionArtifactS3LocationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionArtifactS3Location">DataAwsccIotSoftwarePackageVersionArtifactS3Location</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionArtifactS3LocationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionArtifactS3LocationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionArtifactS3LocationOutputReference.property.bucket"></a>

```csharp
public string Bucket { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionArtifactS3LocationOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionArtifactS3LocationOutputReference.property.version"></a>

```csharp
public string Version { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionArtifactS3LocationOutputReference.property.internalValue"></a>

```csharp
public DataAwsccIotSoftwarePackageVersionArtifactS3Location InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionArtifactS3Location">DataAwsccIotSoftwarePackageVersionArtifactS3Location</a>

---


### DataAwsccIotSoftwarePackageVersionSbomOutputReference <a name="DataAwsccIotSoftwarePackageVersionSbomOutputReference" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionSbomOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionSbomOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccIotSoftwarePackageVersionSbomOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionSbomOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionSbomOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionSbomOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionSbomOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionSbomOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionSbomOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionSbomOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionSbomOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionSbomOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionSbomOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionSbomOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionSbomOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionSbomOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionSbomOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionSbomOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionSbomOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionSbomOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionSbomOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionSbomOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionSbomOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionSbomOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionSbomOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionSbomOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionSbomOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionSbomOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionSbomOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionSbomOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionSbomOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionSbomOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionSbomOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionSbomOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionSbomOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionSbomOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionSbomOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionSbomOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionSbomOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionSbomOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionSbomOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionSbomOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionSbomOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionSbomOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionSbomOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionSbomOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionSbomOutputReference.property.s3Location">S3Location</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionSbomS3LocationOutputReference">DataAwsccIotSoftwarePackageVersionSbomS3LocationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionSbomOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionSbom">DataAwsccIotSoftwarePackageVersionSbom</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionSbomOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionSbomOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `S3Location`<sup>Required</sup> <a name="S3Location" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionSbomOutputReference.property.s3Location"></a>

```csharp
public DataAwsccIotSoftwarePackageVersionSbomS3LocationOutputReference S3Location { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionSbomS3LocationOutputReference">DataAwsccIotSoftwarePackageVersionSbomS3LocationOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionSbomOutputReference.property.internalValue"></a>

```csharp
public DataAwsccIotSoftwarePackageVersionSbom InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionSbom">DataAwsccIotSoftwarePackageVersionSbom</a>

---


### DataAwsccIotSoftwarePackageVersionSbomS3LocationOutputReference <a name="DataAwsccIotSoftwarePackageVersionSbomS3LocationOutputReference" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionSbomS3LocationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionSbomS3LocationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccIotSoftwarePackageVersionSbomS3LocationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionSbomS3LocationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionSbomS3LocationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionSbomS3LocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionSbomS3LocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionSbomS3LocationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionSbomS3LocationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionSbomS3LocationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionSbomS3LocationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionSbomS3LocationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionSbomS3LocationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionSbomS3LocationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionSbomS3LocationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionSbomS3LocationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionSbomS3LocationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionSbomS3LocationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionSbomS3LocationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionSbomS3LocationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionSbomS3LocationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionSbomS3LocationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionSbomS3LocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionSbomS3LocationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionSbomS3LocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionSbomS3LocationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionSbomS3LocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionSbomS3LocationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionSbomS3LocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionSbomS3LocationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionSbomS3LocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionSbomS3LocationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionSbomS3LocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionSbomS3LocationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionSbomS3LocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionSbomS3LocationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionSbomS3LocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionSbomS3LocationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionSbomS3LocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionSbomS3LocationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionSbomS3LocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionSbomS3LocationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionSbomS3LocationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionSbomS3LocationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionSbomS3LocationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionSbomS3LocationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionSbomS3LocationOutputReference.property.bucket">Bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionSbomS3LocationOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionSbomS3LocationOutputReference.property.version">Version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionSbomS3LocationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionSbomS3Location">DataAwsccIotSoftwarePackageVersionSbomS3Location</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionSbomS3LocationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionSbomS3LocationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionSbomS3LocationOutputReference.property.bucket"></a>

```csharp
public string Bucket { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionSbomS3LocationOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionSbomS3LocationOutputReference.property.version"></a>

```csharp
public string Version { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionSbomS3LocationOutputReference.property.internalValue"></a>

```csharp
public DataAwsccIotSoftwarePackageVersionSbomS3Location InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionSbomS3Location">DataAwsccIotSoftwarePackageVersionSbomS3Location</a>

---


### DataAwsccIotSoftwarePackageVersionTagsList <a name="DataAwsccIotSoftwarePackageVersionTagsList" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccIotSoftwarePackageVersionTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionTagsList.get"></a>

```csharp
private DataAwsccIotSoftwarePackageVersionTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsccIotSoftwarePackageVersionTagsOutputReference <a name="DataAwsccIotSoftwarePackageVersionTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccIotSoftwarePackageVersionTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionTagsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionTags">DataAwsccIotSoftwarePackageVersionTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionTagsOutputReference.property.internalValue"></a>

```csharp
public DataAwsccIotSoftwarePackageVersionTags InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionTags">DataAwsccIotSoftwarePackageVersionTags</a>

---



