# `dataAwsccIotOtaUpdate` Submodule <a name="`dataAwsccIotOtaUpdate` Submodule" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccIotOtaUpdate <a name="DataAwsccIotOtaUpdate" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdate"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/data-sources/iot_ota_update awscc_iot_ota_update}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdate.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccIotOtaUpdate(Construct Scope, string Id, DataAwsccIotOtaUpdateConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdate.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdate.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdate.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateConfig">DataAwsccIotOtaUpdateConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdate.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdate.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdate.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateConfig">DataAwsccIotOtaUpdateConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdate.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdate.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdate.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdate.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdate.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdate.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdate.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdate.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdate.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdate.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdate.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdate.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdate.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdate.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdate.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdate.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdate.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdate.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdate.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdate.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdate.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdate.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdate.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdate.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdate.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdate.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdate.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdate.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdate.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdate.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdate.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdate.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdate.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdate.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdate.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdate.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdate.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdate.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdate.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdate.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdate.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdate.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdate.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdate.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdate.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdate.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdate.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdate.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdate.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdate.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdate.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdate.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdate.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdate.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccIotOtaUpdate resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdate.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccIotOtaUpdate.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdate.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdate.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccIotOtaUpdate.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdate.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdate.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccIotOtaUpdate.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdate.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdate.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccIotOtaUpdate.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataAwsccIotOtaUpdate resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdate.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdate.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccIotOtaUpdate to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdate.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccIotOtaUpdate that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/data-sources/iot_ota_update#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdate.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccIotOtaUpdate to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdate.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdate.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdate.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdate.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdate.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdate.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdate.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdate.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdate.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdate.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdate.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdate.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdate.property.additionalParameters">AdditionalParameters</a></code> | <code>Io.Cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdate.property.awsJobAbortConfig">AwsJobAbortConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateAwsJobAbortConfigOutputReference">DataAwsccIotOtaUpdateAwsJobAbortConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdate.property.awsJobExecutionsRolloutConfig">AwsJobExecutionsRolloutConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateAwsJobExecutionsRolloutConfigOutputReference">DataAwsccIotOtaUpdateAwsJobExecutionsRolloutConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdate.property.awsJobPresignedUrlConfig">AwsJobPresignedUrlConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateAwsJobPresignedUrlConfigOutputReference">DataAwsccIotOtaUpdateAwsJobPresignedUrlConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdate.property.awsJobTimeoutConfig">AwsJobTimeoutConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateAwsJobTimeoutConfigOutputReference">DataAwsccIotOtaUpdateAwsJobTimeoutConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdate.property.creationDate">CreationDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdate.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdate.property.files">Files</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesList">DataAwsccIotOtaUpdateFilesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdate.property.lastModifiedDate">LastModifiedDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdate.property.otaUpdateArn">OtaUpdateArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdate.property.otaUpdateId">OtaUpdateId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdate.property.otaUpdateStatus">OtaUpdateStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdate.property.protocols">Protocols</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdate.property.roleArn">RoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdate.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateTagsList">DataAwsccIotOtaUpdateTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdate.property.targets">Targets</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdate.property.targetSelection">TargetSelection</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdate.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdate.property.id">Id</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdate.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdate.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdate.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdate.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdate.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdate.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdate.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdate.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdate.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdate.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdate.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdate.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `AdditionalParameters`<sup>Required</sup> <a name="AdditionalParameters" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdate.property.additionalParameters"></a>

```csharp
public StringMap AdditionalParameters { get; }
```

- *Type:* Io.Cdktn.StringMap

---

##### `AwsJobAbortConfig`<sup>Required</sup> <a name="AwsJobAbortConfig" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdate.property.awsJobAbortConfig"></a>

```csharp
public DataAwsccIotOtaUpdateAwsJobAbortConfigOutputReference AwsJobAbortConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateAwsJobAbortConfigOutputReference">DataAwsccIotOtaUpdateAwsJobAbortConfigOutputReference</a>

---

##### `AwsJobExecutionsRolloutConfig`<sup>Required</sup> <a name="AwsJobExecutionsRolloutConfig" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdate.property.awsJobExecutionsRolloutConfig"></a>

```csharp
public DataAwsccIotOtaUpdateAwsJobExecutionsRolloutConfigOutputReference AwsJobExecutionsRolloutConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateAwsJobExecutionsRolloutConfigOutputReference">DataAwsccIotOtaUpdateAwsJobExecutionsRolloutConfigOutputReference</a>

---

##### `AwsJobPresignedUrlConfig`<sup>Required</sup> <a name="AwsJobPresignedUrlConfig" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdate.property.awsJobPresignedUrlConfig"></a>

```csharp
public DataAwsccIotOtaUpdateAwsJobPresignedUrlConfigOutputReference AwsJobPresignedUrlConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateAwsJobPresignedUrlConfigOutputReference">DataAwsccIotOtaUpdateAwsJobPresignedUrlConfigOutputReference</a>

---

##### `AwsJobTimeoutConfig`<sup>Required</sup> <a name="AwsJobTimeoutConfig" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdate.property.awsJobTimeoutConfig"></a>

```csharp
public DataAwsccIotOtaUpdateAwsJobTimeoutConfigOutputReference AwsJobTimeoutConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateAwsJobTimeoutConfigOutputReference">DataAwsccIotOtaUpdateAwsJobTimeoutConfigOutputReference</a>

---

##### `CreationDate`<sup>Required</sup> <a name="CreationDate" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdate.property.creationDate"></a>

```csharp
public string CreationDate { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdate.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Files`<sup>Required</sup> <a name="Files" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdate.property.files"></a>

```csharp
public DataAwsccIotOtaUpdateFilesList Files { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesList">DataAwsccIotOtaUpdateFilesList</a>

---

##### `LastModifiedDate`<sup>Required</sup> <a name="LastModifiedDate" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdate.property.lastModifiedDate"></a>

```csharp
public string LastModifiedDate { get; }
```

- *Type:* string

---

##### `OtaUpdateArn`<sup>Required</sup> <a name="OtaUpdateArn" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdate.property.otaUpdateArn"></a>

```csharp
public string OtaUpdateArn { get; }
```

- *Type:* string

---

##### `OtaUpdateId`<sup>Required</sup> <a name="OtaUpdateId" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdate.property.otaUpdateId"></a>

```csharp
public string OtaUpdateId { get; }
```

- *Type:* string

---

##### `OtaUpdateStatus`<sup>Required</sup> <a name="OtaUpdateStatus" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdate.property.otaUpdateStatus"></a>

```csharp
public string OtaUpdateStatus { get; }
```

- *Type:* string

---

##### `Protocols`<sup>Required</sup> <a name="Protocols" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdate.property.protocols"></a>

```csharp
public string[] Protocols { get; }
```

- *Type:* string[]

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdate.property.roleArn"></a>

```csharp
public string RoleArn { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdate.property.tags"></a>

```csharp
public DataAwsccIotOtaUpdateTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateTagsList">DataAwsccIotOtaUpdateTagsList</a>

---

##### `Targets`<sup>Required</sup> <a name="Targets" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdate.property.targets"></a>

```csharp
public string[] Targets { get; }
```

- *Type:* string[]

---

##### `TargetSelection`<sup>Required</sup> <a name="TargetSelection" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdate.property.targetSelection"></a>

```csharp
public string TargetSelection { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdate.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdate.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdate.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdate.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccIotOtaUpdateAwsJobAbortConfig <a name="DataAwsccIotOtaUpdateAwsJobAbortConfig" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateAwsJobAbortConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateAwsJobAbortConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccIotOtaUpdateAwsJobAbortConfig {

};
```


### DataAwsccIotOtaUpdateAwsJobAbortConfigAbortCriteriaListStruct <a name="DataAwsccIotOtaUpdateAwsJobAbortConfigAbortCriteriaListStruct" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateAwsJobAbortConfigAbortCriteriaListStruct"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateAwsJobAbortConfigAbortCriteriaListStruct.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccIotOtaUpdateAwsJobAbortConfigAbortCriteriaListStruct {

};
```


### DataAwsccIotOtaUpdateAwsJobExecutionsRolloutConfig <a name="DataAwsccIotOtaUpdateAwsJobExecutionsRolloutConfig" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateAwsJobExecutionsRolloutConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateAwsJobExecutionsRolloutConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccIotOtaUpdateAwsJobExecutionsRolloutConfig {

};
```


### DataAwsccIotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRate <a name="DataAwsccIotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRate" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRate"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRate.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccIotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRate {

};
```


### DataAwsccIotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteria <a name="DataAwsccIotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteria" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteria"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteria.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccIotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteria {

};
```


### DataAwsccIotOtaUpdateAwsJobPresignedUrlConfig <a name="DataAwsccIotOtaUpdateAwsJobPresignedUrlConfig" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateAwsJobPresignedUrlConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateAwsJobPresignedUrlConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccIotOtaUpdateAwsJobPresignedUrlConfig {

};
```


### DataAwsccIotOtaUpdateAwsJobTimeoutConfig <a name="DataAwsccIotOtaUpdateAwsJobTimeoutConfig" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateAwsJobTimeoutConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateAwsJobTimeoutConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccIotOtaUpdateAwsJobTimeoutConfig {

};
```


### DataAwsccIotOtaUpdateConfig <a name="DataAwsccIotOtaUpdateConfig" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccIotOtaUpdateConfig {
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateConfig.property.id">Id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/data-sources/iot_ota_update#id DataAwsccIotOtaUpdate#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccIotOtaUpdateFiles <a name="DataAwsccIotOtaUpdateFiles" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFiles"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFiles.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccIotOtaUpdateFiles {

};
```


### DataAwsccIotOtaUpdateFilesCodeSigning <a name="DataAwsccIotOtaUpdateFilesCodeSigning" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesCodeSigning"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesCodeSigning.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccIotOtaUpdateFilesCodeSigning {

};
```


### DataAwsccIotOtaUpdateFilesCodeSigningCustomCodeSigning <a name="DataAwsccIotOtaUpdateFilesCodeSigningCustomCodeSigning" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesCodeSigningCustomCodeSigning"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesCodeSigningCustomCodeSigning.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccIotOtaUpdateFilesCodeSigningCustomCodeSigning {

};
```


### DataAwsccIotOtaUpdateFilesCodeSigningCustomCodeSigningCertificateChain <a name="DataAwsccIotOtaUpdateFilesCodeSigningCustomCodeSigningCertificateChain" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesCodeSigningCustomCodeSigningCertificateChain"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesCodeSigningCustomCodeSigningCertificateChain.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccIotOtaUpdateFilesCodeSigningCustomCodeSigningCertificateChain {

};
```


### DataAwsccIotOtaUpdateFilesCodeSigningCustomCodeSigningSignature <a name="DataAwsccIotOtaUpdateFilesCodeSigningCustomCodeSigningSignature" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesCodeSigningCustomCodeSigningSignature"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesCodeSigningCustomCodeSigningSignature.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccIotOtaUpdateFilesCodeSigningCustomCodeSigningSignature {

};
```


### DataAwsccIotOtaUpdateFilesCodeSigningStartSigningJobParameter <a name="DataAwsccIotOtaUpdateFilesCodeSigningStartSigningJobParameter" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesCodeSigningStartSigningJobParameter"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesCodeSigningStartSigningJobParameter.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccIotOtaUpdateFilesCodeSigningStartSigningJobParameter {

};
```


### DataAwsccIotOtaUpdateFilesCodeSigningStartSigningJobParameterDestination <a name="DataAwsccIotOtaUpdateFilesCodeSigningStartSigningJobParameterDestination" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesCodeSigningStartSigningJobParameterDestination"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesCodeSigningStartSigningJobParameterDestination.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccIotOtaUpdateFilesCodeSigningStartSigningJobParameterDestination {

};
```


### DataAwsccIotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationS3Destination <a name="DataAwsccIotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationS3Destination" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationS3Destination"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationS3Destination.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccIotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationS3Destination {

};
```


### DataAwsccIotOtaUpdateFilesCodeSigningStartSigningJobParameterSigningProfileParameter <a name="DataAwsccIotOtaUpdateFilesCodeSigningStartSigningJobParameterSigningProfileParameter" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesCodeSigningStartSigningJobParameterSigningProfileParameter"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesCodeSigningStartSigningJobParameterSigningProfileParameter.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccIotOtaUpdateFilesCodeSigningStartSigningJobParameterSigningProfileParameter {

};
```


### DataAwsccIotOtaUpdateFilesFileLocation <a name="DataAwsccIotOtaUpdateFilesFileLocation" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesFileLocation"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesFileLocation.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccIotOtaUpdateFilesFileLocation {

};
```


### DataAwsccIotOtaUpdateFilesFileLocationS3Location <a name="DataAwsccIotOtaUpdateFilesFileLocationS3Location" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesFileLocationS3Location"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesFileLocationS3Location.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccIotOtaUpdateFilesFileLocationS3Location {

};
```


### DataAwsccIotOtaUpdateFilesFileLocationStream <a name="DataAwsccIotOtaUpdateFilesFileLocationStream" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesFileLocationStream"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesFileLocationStream.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccIotOtaUpdateFilesFileLocationStream {

};
```


### DataAwsccIotOtaUpdateTags <a name="DataAwsccIotOtaUpdateTags" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccIotOtaUpdateTags {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccIotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructList <a name="DataAwsccIotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructList" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccIotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructList.get"></a>

```csharp
private DataAwsccIotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsccIotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructOutputReference <a name="DataAwsccIotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructOutputReference" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccIotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructOutputReference.property.action">Action</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructOutputReference.property.failureType">FailureType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructOutputReference.property.minNumberOfExecutedThings">MinNumberOfExecutedThings</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructOutputReference.property.thresholdPercentage">ThresholdPercentage</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateAwsJobAbortConfigAbortCriteriaListStruct">DataAwsccIotOtaUpdateAwsJobAbortConfigAbortCriteriaListStruct</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Action`<sup>Required</sup> <a name="Action" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructOutputReference.property.action"></a>

```csharp
public string Action { get; }
```

- *Type:* string

---

##### `FailureType`<sup>Required</sup> <a name="FailureType" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructOutputReference.property.failureType"></a>

```csharp
public string FailureType { get; }
```

- *Type:* string

---

##### `MinNumberOfExecutedThings`<sup>Required</sup> <a name="MinNumberOfExecutedThings" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructOutputReference.property.minNumberOfExecutedThings"></a>

```csharp
public double MinNumberOfExecutedThings { get; }
```

- *Type:* double

---

##### `ThresholdPercentage`<sup>Required</sup> <a name="ThresholdPercentage" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructOutputReference.property.thresholdPercentage"></a>

```csharp
public double ThresholdPercentage { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructOutputReference.property.internalValue"></a>

```csharp
public DataAwsccIotOtaUpdateAwsJobAbortConfigAbortCriteriaListStruct InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateAwsJobAbortConfigAbortCriteriaListStruct">DataAwsccIotOtaUpdateAwsJobAbortConfigAbortCriteriaListStruct</a>

---


### DataAwsccIotOtaUpdateAwsJobAbortConfigOutputReference <a name="DataAwsccIotOtaUpdateAwsJobAbortConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateAwsJobAbortConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateAwsJobAbortConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccIotOtaUpdateAwsJobAbortConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateAwsJobAbortConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateAwsJobAbortConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateAwsJobAbortConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateAwsJobAbortConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateAwsJobAbortConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateAwsJobAbortConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateAwsJobAbortConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateAwsJobAbortConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateAwsJobAbortConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateAwsJobAbortConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateAwsJobAbortConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateAwsJobAbortConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateAwsJobAbortConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateAwsJobAbortConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateAwsJobAbortConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateAwsJobAbortConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateAwsJobAbortConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateAwsJobAbortConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateAwsJobAbortConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateAwsJobAbortConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateAwsJobAbortConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateAwsJobAbortConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateAwsJobAbortConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateAwsJobAbortConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateAwsJobAbortConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateAwsJobAbortConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateAwsJobAbortConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateAwsJobAbortConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateAwsJobAbortConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateAwsJobAbortConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateAwsJobAbortConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateAwsJobAbortConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateAwsJobAbortConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateAwsJobAbortConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateAwsJobAbortConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateAwsJobAbortConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateAwsJobAbortConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateAwsJobAbortConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateAwsJobAbortConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateAwsJobAbortConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateAwsJobAbortConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateAwsJobAbortConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateAwsJobAbortConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateAwsJobAbortConfigOutputReference.property.abortCriteriaList">AbortCriteriaList</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructList">DataAwsccIotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateAwsJobAbortConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateAwsJobAbortConfig">DataAwsccIotOtaUpdateAwsJobAbortConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateAwsJobAbortConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateAwsJobAbortConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AbortCriteriaList`<sup>Required</sup> <a name="AbortCriteriaList" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateAwsJobAbortConfigOutputReference.property.abortCriteriaList"></a>

```csharp
public DataAwsccIotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructList AbortCriteriaList { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructList">DataAwsccIotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateAwsJobAbortConfigOutputReference.property.internalValue"></a>

```csharp
public DataAwsccIotOtaUpdateAwsJobAbortConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateAwsJobAbortConfig">DataAwsccIotOtaUpdateAwsJobAbortConfig</a>

---


### DataAwsccIotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateOutputReference <a name="DataAwsccIotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateOutputReference" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccIotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateOutputReference.property.baseRatePerMinute">BaseRatePerMinute</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateOutputReference.property.incrementFactor">IncrementFactor</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateOutputReference.property.rateIncreaseCriteria">RateIncreaseCriteria</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference">DataAwsccIotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRate">DataAwsccIotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRate</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BaseRatePerMinute`<sup>Required</sup> <a name="BaseRatePerMinute" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateOutputReference.property.baseRatePerMinute"></a>

```csharp
public double BaseRatePerMinute { get; }
```

- *Type:* double

---

##### `IncrementFactor`<sup>Required</sup> <a name="IncrementFactor" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateOutputReference.property.incrementFactor"></a>

```csharp
public double IncrementFactor { get; }
```

- *Type:* double

---

##### `RateIncreaseCriteria`<sup>Required</sup> <a name="RateIncreaseCriteria" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateOutputReference.property.rateIncreaseCriteria"></a>

```csharp
public DataAwsccIotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference RateIncreaseCriteria { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference">DataAwsccIotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateOutputReference.property.internalValue"></a>

```csharp
public DataAwsccIotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRate InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRate">DataAwsccIotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRate</a>

---


### DataAwsccIotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference <a name="DataAwsccIotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccIotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.property.numberOfNotifiedThings">NumberOfNotifiedThings</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.property.numberOfSucceededThings">NumberOfSucceededThings</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteria">DataAwsccIotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteria</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NumberOfNotifiedThings`<sup>Required</sup> <a name="NumberOfNotifiedThings" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.property.numberOfNotifiedThings"></a>

```csharp
public double NumberOfNotifiedThings { get; }
```

- *Type:* double

---

##### `NumberOfSucceededThings`<sup>Required</sup> <a name="NumberOfSucceededThings" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.property.numberOfSucceededThings"></a>

```csharp
public double NumberOfSucceededThings { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.property.internalValue"></a>

```csharp
public DataAwsccIotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteria InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteria">DataAwsccIotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteria</a>

---


### DataAwsccIotOtaUpdateAwsJobExecutionsRolloutConfigOutputReference <a name="DataAwsccIotOtaUpdateAwsJobExecutionsRolloutConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateAwsJobExecutionsRolloutConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateAwsJobExecutionsRolloutConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccIotOtaUpdateAwsJobExecutionsRolloutConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateAwsJobExecutionsRolloutConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateAwsJobExecutionsRolloutConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateAwsJobExecutionsRolloutConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateAwsJobExecutionsRolloutConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateAwsJobExecutionsRolloutConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateAwsJobExecutionsRolloutConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateAwsJobExecutionsRolloutConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateAwsJobExecutionsRolloutConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateAwsJobExecutionsRolloutConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateAwsJobExecutionsRolloutConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateAwsJobExecutionsRolloutConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateAwsJobExecutionsRolloutConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateAwsJobExecutionsRolloutConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateAwsJobExecutionsRolloutConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateAwsJobExecutionsRolloutConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateAwsJobExecutionsRolloutConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateAwsJobExecutionsRolloutConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateAwsJobExecutionsRolloutConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateAwsJobExecutionsRolloutConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateAwsJobExecutionsRolloutConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateAwsJobExecutionsRolloutConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateAwsJobExecutionsRolloutConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateAwsJobExecutionsRolloutConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateAwsJobExecutionsRolloutConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateAwsJobExecutionsRolloutConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateAwsJobExecutionsRolloutConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateAwsJobExecutionsRolloutConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateAwsJobExecutionsRolloutConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateAwsJobExecutionsRolloutConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateAwsJobExecutionsRolloutConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateAwsJobExecutionsRolloutConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateAwsJobExecutionsRolloutConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateAwsJobExecutionsRolloutConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateAwsJobExecutionsRolloutConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateAwsJobExecutionsRolloutConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateAwsJobExecutionsRolloutConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateAwsJobExecutionsRolloutConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateAwsJobExecutionsRolloutConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateAwsJobExecutionsRolloutConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateAwsJobExecutionsRolloutConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateAwsJobExecutionsRolloutConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateAwsJobExecutionsRolloutConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateAwsJobExecutionsRolloutConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateAwsJobExecutionsRolloutConfigOutputReference.property.exponentialRate">ExponentialRate</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateOutputReference">DataAwsccIotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateAwsJobExecutionsRolloutConfigOutputReference.property.maximumPerMinute">MaximumPerMinute</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateAwsJobExecutionsRolloutConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateAwsJobExecutionsRolloutConfig">DataAwsccIotOtaUpdateAwsJobExecutionsRolloutConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateAwsJobExecutionsRolloutConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateAwsJobExecutionsRolloutConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ExponentialRate`<sup>Required</sup> <a name="ExponentialRate" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateAwsJobExecutionsRolloutConfigOutputReference.property.exponentialRate"></a>

```csharp
public DataAwsccIotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateOutputReference ExponentialRate { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateOutputReference">DataAwsccIotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateOutputReference</a>

---

##### `MaximumPerMinute`<sup>Required</sup> <a name="MaximumPerMinute" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateAwsJobExecutionsRolloutConfigOutputReference.property.maximumPerMinute"></a>

```csharp
public double MaximumPerMinute { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateAwsJobExecutionsRolloutConfigOutputReference.property.internalValue"></a>

```csharp
public DataAwsccIotOtaUpdateAwsJobExecutionsRolloutConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateAwsJobExecutionsRolloutConfig">DataAwsccIotOtaUpdateAwsJobExecutionsRolloutConfig</a>

---


### DataAwsccIotOtaUpdateAwsJobPresignedUrlConfigOutputReference <a name="DataAwsccIotOtaUpdateAwsJobPresignedUrlConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateAwsJobPresignedUrlConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateAwsJobPresignedUrlConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccIotOtaUpdateAwsJobPresignedUrlConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateAwsJobPresignedUrlConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateAwsJobPresignedUrlConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateAwsJobPresignedUrlConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateAwsJobPresignedUrlConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateAwsJobPresignedUrlConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateAwsJobPresignedUrlConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateAwsJobPresignedUrlConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateAwsJobPresignedUrlConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateAwsJobPresignedUrlConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateAwsJobPresignedUrlConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateAwsJobPresignedUrlConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateAwsJobPresignedUrlConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateAwsJobPresignedUrlConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateAwsJobPresignedUrlConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateAwsJobPresignedUrlConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateAwsJobPresignedUrlConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateAwsJobPresignedUrlConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateAwsJobPresignedUrlConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateAwsJobPresignedUrlConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateAwsJobPresignedUrlConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateAwsJobPresignedUrlConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateAwsJobPresignedUrlConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateAwsJobPresignedUrlConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateAwsJobPresignedUrlConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateAwsJobPresignedUrlConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateAwsJobPresignedUrlConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateAwsJobPresignedUrlConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateAwsJobPresignedUrlConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateAwsJobPresignedUrlConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateAwsJobPresignedUrlConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateAwsJobPresignedUrlConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateAwsJobPresignedUrlConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateAwsJobPresignedUrlConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateAwsJobPresignedUrlConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateAwsJobPresignedUrlConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateAwsJobPresignedUrlConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateAwsJobPresignedUrlConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateAwsJobPresignedUrlConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateAwsJobPresignedUrlConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateAwsJobPresignedUrlConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateAwsJobPresignedUrlConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateAwsJobPresignedUrlConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateAwsJobPresignedUrlConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateAwsJobPresignedUrlConfigOutputReference.property.expiresInSec">ExpiresInSec</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateAwsJobPresignedUrlConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateAwsJobPresignedUrlConfig">DataAwsccIotOtaUpdateAwsJobPresignedUrlConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateAwsJobPresignedUrlConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateAwsJobPresignedUrlConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ExpiresInSec`<sup>Required</sup> <a name="ExpiresInSec" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateAwsJobPresignedUrlConfigOutputReference.property.expiresInSec"></a>

```csharp
public double ExpiresInSec { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateAwsJobPresignedUrlConfigOutputReference.property.internalValue"></a>

```csharp
public DataAwsccIotOtaUpdateAwsJobPresignedUrlConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateAwsJobPresignedUrlConfig">DataAwsccIotOtaUpdateAwsJobPresignedUrlConfig</a>

---


### DataAwsccIotOtaUpdateAwsJobTimeoutConfigOutputReference <a name="DataAwsccIotOtaUpdateAwsJobTimeoutConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateAwsJobTimeoutConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateAwsJobTimeoutConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccIotOtaUpdateAwsJobTimeoutConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateAwsJobTimeoutConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateAwsJobTimeoutConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateAwsJobTimeoutConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateAwsJobTimeoutConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateAwsJobTimeoutConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateAwsJobTimeoutConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateAwsJobTimeoutConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateAwsJobTimeoutConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateAwsJobTimeoutConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateAwsJobTimeoutConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateAwsJobTimeoutConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateAwsJobTimeoutConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateAwsJobTimeoutConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateAwsJobTimeoutConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateAwsJobTimeoutConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateAwsJobTimeoutConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateAwsJobTimeoutConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateAwsJobTimeoutConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateAwsJobTimeoutConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateAwsJobTimeoutConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateAwsJobTimeoutConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateAwsJobTimeoutConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateAwsJobTimeoutConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateAwsJobTimeoutConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateAwsJobTimeoutConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateAwsJobTimeoutConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateAwsJobTimeoutConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateAwsJobTimeoutConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateAwsJobTimeoutConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateAwsJobTimeoutConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateAwsJobTimeoutConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateAwsJobTimeoutConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateAwsJobTimeoutConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateAwsJobTimeoutConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateAwsJobTimeoutConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateAwsJobTimeoutConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateAwsJobTimeoutConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateAwsJobTimeoutConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateAwsJobTimeoutConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateAwsJobTimeoutConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateAwsJobTimeoutConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateAwsJobTimeoutConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateAwsJobTimeoutConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateAwsJobTimeoutConfigOutputReference.property.inProgressTimeoutInMinutes">InProgressTimeoutInMinutes</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateAwsJobTimeoutConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateAwsJobTimeoutConfig">DataAwsccIotOtaUpdateAwsJobTimeoutConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateAwsJobTimeoutConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateAwsJobTimeoutConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InProgressTimeoutInMinutes`<sup>Required</sup> <a name="InProgressTimeoutInMinutes" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateAwsJobTimeoutConfigOutputReference.property.inProgressTimeoutInMinutes"></a>

```csharp
public double InProgressTimeoutInMinutes { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateAwsJobTimeoutConfigOutputReference.property.internalValue"></a>

```csharp
public DataAwsccIotOtaUpdateAwsJobTimeoutConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateAwsJobTimeoutConfig">DataAwsccIotOtaUpdateAwsJobTimeoutConfig</a>

---


### DataAwsccIotOtaUpdateFilesCodeSigningCustomCodeSigningCertificateChainOutputReference <a name="DataAwsccIotOtaUpdateFilesCodeSigningCustomCodeSigningCertificateChainOutputReference" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesCodeSigningCustomCodeSigningCertificateChainOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesCodeSigningCustomCodeSigningCertificateChainOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccIotOtaUpdateFilesCodeSigningCustomCodeSigningCertificateChainOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesCodeSigningCustomCodeSigningCertificateChainOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesCodeSigningCustomCodeSigningCertificateChainOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesCodeSigningCustomCodeSigningCertificateChainOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesCodeSigningCustomCodeSigningCertificateChainOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesCodeSigningCustomCodeSigningCertificateChainOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesCodeSigningCustomCodeSigningCertificateChainOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesCodeSigningCustomCodeSigningCertificateChainOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesCodeSigningCustomCodeSigningCertificateChainOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesCodeSigningCustomCodeSigningCertificateChainOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesCodeSigningCustomCodeSigningCertificateChainOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesCodeSigningCustomCodeSigningCertificateChainOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesCodeSigningCustomCodeSigningCertificateChainOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesCodeSigningCustomCodeSigningCertificateChainOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesCodeSigningCustomCodeSigningCertificateChainOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesCodeSigningCustomCodeSigningCertificateChainOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesCodeSigningCustomCodeSigningCertificateChainOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesCodeSigningCustomCodeSigningCertificateChainOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesCodeSigningCustomCodeSigningCertificateChainOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesCodeSigningCustomCodeSigningCertificateChainOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesCodeSigningCustomCodeSigningCertificateChainOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesCodeSigningCustomCodeSigningCertificateChainOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesCodeSigningCustomCodeSigningCertificateChainOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesCodeSigningCustomCodeSigningCertificateChainOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesCodeSigningCustomCodeSigningCertificateChainOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesCodeSigningCustomCodeSigningCertificateChainOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesCodeSigningCustomCodeSigningCertificateChainOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesCodeSigningCustomCodeSigningCertificateChainOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesCodeSigningCustomCodeSigningCertificateChainOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesCodeSigningCustomCodeSigningCertificateChainOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesCodeSigningCustomCodeSigningCertificateChainOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesCodeSigningCustomCodeSigningCertificateChainOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesCodeSigningCustomCodeSigningCertificateChainOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesCodeSigningCustomCodeSigningCertificateChainOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesCodeSigningCustomCodeSigningCertificateChainOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesCodeSigningCustomCodeSigningCertificateChainOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesCodeSigningCustomCodeSigningCertificateChainOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesCodeSigningCustomCodeSigningCertificateChainOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesCodeSigningCustomCodeSigningCertificateChainOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesCodeSigningCustomCodeSigningCertificateChainOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesCodeSigningCustomCodeSigningCertificateChainOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesCodeSigningCustomCodeSigningCertificateChainOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesCodeSigningCustomCodeSigningCertificateChainOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesCodeSigningCustomCodeSigningCertificateChainOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesCodeSigningCustomCodeSigningCertificateChainOutputReference.property.certificateName">CertificateName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesCodeSigningCustomCodeSigningCertificateChainOutputReference.property.inlineDocument">InlineDocument</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesCodeSigningCustomCodeSigningCertificateChainOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesCodeSigningCustomCodeSigningCertificateChain">DataAwsccIotOtaUpdateFilesCodeSigningCustomCodeSigningCertificateChain</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesCodeSigningCustomCodeSigningCertificateChainOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesCodeSigningCustomCodeSigningCertificateChainOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CertificateName`<sup>Required</sup> <a name="CertificateName" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesCodeSigningCustomCodeSigningCertificateChainOutputReference.property.certificateName"></a>

```csharp
public string CertificateName { get; }
```

- *Type:* string

---

##### `InlineDocument`<sup>Required</sup> <a name="InlineDocument" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesCodeSigningCustomCodeSigningCertificateChainOutputReference.property.inlineDocument"></a>

```csharp
public string InlineDocument { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesCodeSigningCustomCodeSigningCertificateChainOutputReference.property.internalValue"></a>

```csharp
public DataAwsccIotOtaUpdateFilesCodeSigningCustomCodeSigningCertificateChain InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesCodeSigningCustomCodeSigningCertificateChain">DataAwsccIotOtaUpdateFilesCodeSigningCustomCodeSigningCertificateChain</a>

---


### DataAwsccIotOtaUpdateFilesCodeSigningCustomCodeSigningOutputReference <a name="DataAwsccIotOtaUpdateFilesCodeSigningCustomCodeSigningOutputReference" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesCodeSigningCustomCodeSigningOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesCodeSigningCustomCodeSigningOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccIotOtaUpdateFilesCodeSigningCustomCodeSigningOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesCodeSigningCustomCodeSigningOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesCodeSigningCustomCodeSigningOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesCodeSigningCustomCodeSigningOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesCodeSigningCustomCodeSigningOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesCodeSigningCustomCodeSigningOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesCodeSigningCustomCodeSigningOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesCodeSigningCustomCodeSigningOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesCodeSigningCustomCodeSigningOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesCodeSigningCustomCodeSigningOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesCodeSigningCustomCodeSigningOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesCodeSigningCustomCodeSigningOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesCodeSigningCustomCodeSigningOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesCodeSigningCustomCodeSigningOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesCodeSigningCustomCodeSigningOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesCodeSigningCustomCodeSigningOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesCodeSigningCustomCodeSigningOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesCodeSigningCustomCodeSigningOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesCodeSigningCustomCodeSigningOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesCodeSigningCustomCodeSigningOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesCodeSigningCustomCodeSigningOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesCodeSigningCustomCodeSigningOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesCodeSigningCustomCodeSigningOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesCodeSigningCustomCodeSigningOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesCodeSigningCustomCodeSigningOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesCodeSigningCustomCodeSigningOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesCodeSigningCustomCodeSigningOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesCodeSigningCustomCodeSigningOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesCodeSigningCustomCodeSigningOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesCodeSigningCustomCodeSigningOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesCodeSigningCustomCodeSigningOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesCodeSigningCustomCodeSigningOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesCodeSigningCustomCodeSigningOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesCodeSigningCustomCodeSigningOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesCodeSigningCustomCodeSigningOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesCodeSigningCustomCodeSigningOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesCodeSigningCustomCodeSigningOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesCodeSigningCustomCodeSigningOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesCodeSigningCustomCodeSigningOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesCodeSigningCustomCodeSigningOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesCodeSigningCustomCodeSigningOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesCodeSigningCustomCodeSigningOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesCodeSigningCustomCodeSigningOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesCodeSigningCustomCodeSigningOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesCodeSigningCustomCodeSigningOutputReference.property.certificateChain">CertificateChain</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesCodeSigningCustomCodeSigningCertificateChainOutputReference">DataAwsccIotOtaUpdateFilesCodeSigningCustomCodeSigningCertificateChainOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesCodeSigningCustomCodeSigningOutputReference.property.hashAlgorithm">HashAlgorithm</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesCodeSigningCustomCodeSigningOutputReference.property.signature">Signature</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesCodeSigningCustomCodeSigningSignatureOutputReference">DataAwsccIotOtaUpdateFilesCodeSigningCustomCodeSigningSignatureOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesCodeSigningCustomCodeSigningOutputReference.property.signatureAlgorithm">SignatureAlgorithm</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesCodeSigningCustomCodeSigningOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesCodeSigningCustomCodeSigning">DataAwsccIotOtaUpdateFilesCodeSigningCustomCodeSigning</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesCodeSigningCustomCodeSigningOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesCodeSigningCustomCodeSigningOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CertificateChain`<sup>Required</sup> <a name="CertificateChain" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesCodeSigningCustomCodeSigningOutputReference.property.certificateChain"></a>

```csharp
public DataAwsccIotOtaUpdateFilesCodeSigningCustomCodeSigningCertificateChainOutputReference CertificateChain { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesCodeSigningCustomCodeSigningCertificateChainOutputReference">DataAwsccIotOtaUpdateFilesCodeSigningCustomCodeSigningCertificateChainOutputReference</a>

---

##### `HashAlgorithm`<sup>Required</sup> <a name="HashAlgorithm" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesCodeSigningCustomCodeSigningOutputReference.property.hashAlgorithm"></a>

```csharp
public string HashAlgorithm { get; }
```

- *Type:* string

---

##### `Signature`<sup>Required</sup> <a name="Signature" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesCodeSigningCustomCodeSigningOutputReference.property.signature"></a>

```csharp
public DataAwsccIotOtaUpdateFilesCodeSigningCustomCodeSigningSignatureOutputReference Signature { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesCodeSigningCustomCodeSigningSignatureOutputReference">DataAwsccIotOtaUpdateFilesCodeSigningCustomCodeSigningSignatureOutputReference</a>

---

##### `SignatureAlgorithm`<sup>Required</sup> <a name="SignatureAlgorithm" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesCodeSigningCustomCodeSigningOutputReference.property.signatureAlgorithm"></a>

```csharp
public string SignatureAlgorithm { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesCodeSigningCustomCodeSigningOutputReference.property.internalValue"></a>

```csharp
public DataAwsccIotOtaUpdateFilesCodeSigningCustomCodeSigning InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesCodeSigningCustomCodeSigning">DataAwsccIotOtaUpdateFilesCodeSigningCustomCodeSigning</a>

---


### DataAwsccIotOtaUpdateFilesCodeSigningCustomCodeSigningSignatureOutputReference <a name="DataAwsccIotOtaUpdateFilesCodeSigningCustomCodeSigningSignatureOutputReference" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesCodeSigningCustomCodeSigningSignatureOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesCodeSigningCustomCodeSigningSignatureOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccIotOtaUpdateFilesCodeSigningCustomCodeSigningSignatureOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesCodeSigningCustomCodeSigningSignatureOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesCodeSigningCustomCodeSigningSignatureOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesCodeSigningCustomCodeSigningSignatureOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesCodeSigningCustomCodeSigningSignatureOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesCodeSigningCustomCodeSigningSignatureOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesCodeSigningCustomCodeSigningSignatureOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesCodeSigningCustomCodeSigningSignatureOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesCodeSigningCustomCodeSigningSignatureOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesCodeSigningCustomCodeSigningSignatureOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesCodeSigningCustomCodeSigningSignatureOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesCodeSigningCustomCodeSigningSignatureOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesCodeSigningCustomCodeSigningSignatureOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesCodeSigningCustomCodeSigningSignatureOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesCodeSigningCustomCodeSigningSignatureOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesCodeSigningCustomCodeSigningSignatureOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesCodeSigningCustomCodeSigningSignatureOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesCodeSigningCustomCodeSigningSignatureOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesCodeSigningCustomCodeSigningSignatureOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesCodeSigningCustomCodeSigningSignatureOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesCodeSigningCustomCodeSigningSignatureOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesCodeSigningCustomCodeSigningSignatureOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesCodeSigningCustomCodeSigningSignatureOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesCodeSigningCustomCodeSigningSignatureOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesCodeSigningCustomCodeSigningSignatureOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesCodeSigningCustomCodeSigningSignatureOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesCodeSigningCustomCodeSigningSignatureOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesCodeSigningCustomCodeSigningSignatureOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesCodeSigningCustomCodeSigningSignatureOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesCodeSigningCustomCodeSigningSignatureOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesCodeSigningCustomCodeSigningSignatureOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesCodeSigningCustomCodeSigningSignatureOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesCodeSigningCustomCodeSigningSignatureOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesCodeSigningCustomCodeSigningSignatureOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesCodeSigningCustomCodeSigningSignatureOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesCodeSigningCustomCodeSigningSignatureOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesCodeSigningCustomCodeSigningSignatureOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesCodeSigningCustomCodeSigningSignatureOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesCodeSigningCustomCodeSigningSignatureOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesCodeSigningCustomCodeSigningSignatureOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesCodeSigningCustomCodeSigningSignatureOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesCodeSigningCustomCodeSigningSignatureOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesCodeSigningCustomCodeSigningSignatureOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesCodeSigningCustomCodeSigningSignatureOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesCodeSigningCustomCodeSigningSignatureOutputReference.property.inlineDocument">InlineDocument</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesCodeSigningCustomCodeSigningSignatureOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesCodeSigningCustomCodeSigningSignature">DataAwsccIotOtaUpdateFilesCodeSigningCustomCodeSigningSignature</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesCodeSigningCustomCodeSigningSignatureOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesCodeSigningCustomCodeSigningSignatureOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InlineDocument`<sup>Required</sup> <a name="InlineDocument" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesCodeSigningCustomCodeSigningSignatureOutputReference.property.inlineDocument"></a>

```csharp
public string InlineDocument { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesCodeSigningCustomCodeSigningSignatureOutputReference.property.internalValue"></a>

```csharp
public DataAwsccIotOtaUpdateFilesCodeSigningCustomCodeSigningSignature InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesCodeSigningCustomCodeSigningSignature">DataAwsccIotOtaUpdateFilesCodeSigningCustomCodeSigningSignature</a>

---


### DataAwsccIotOtaUpdateFilesCodeSigningOutputReference <a name="DataAwsccIotOtaUpdateFilesCodeSigningOutputReference" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesCodeSigningOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesCodeSigningOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccIotOtaUpdateFilesCodeSigningOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesCodeSigningOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesCodeSigningOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesCodeSigningOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesCodeSigningOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesCodeSigningOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesCodeSigningOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesCodeSigningOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesCodeSigningOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesCodeSigningOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesCodeSigningOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesCodeSigningOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesCodeSigningOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesCodeSigningOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesCodeSigningOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesCodeSigningOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesCodeSigningOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesCodeSigningOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesCodeSigningOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesCodeSigningOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesCodeSigningOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesCodeSigningOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesCodeSigningOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesCodeSigningOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesCodeSigningOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesCodeSigningOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesCodeSigningOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesCodeSigningOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesCodeSigningOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesCodeSigningOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesCodeSigningOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesCodeSigningOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesCodeSigningOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesCodeSigningOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesCodeSigningOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesCodeSigningOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesCodeSigningOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesCodeSigningOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesCodeSigningOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesCodeSigningOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesCodeSigningOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesCodeSigningOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesCodeSigningOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesCodeSigningOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesCodeSigningOutputReference.property.awsSignerJobId">AwsSignerJobId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesCodeSigningOutputReference.property.customCodeSigning">CustomCodeSigning</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesCodeSigningCustomCodeSigningOutputReference">DataAwsccIotOtaUpdateFilesCodeSigningCustomCodeSigningOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesCodeSigningOutputReference.property.startSigningJobParameter">StartSigningJobParameter</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesCodeSigningStartSigningJobParameterOutputReference">DataAwsccIotOtaUpdateFilesCodeSigningStartSigningJobParameterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesCodeSigningOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesCodeSigning">DataAwsccIotOtaUpdateFilesCodeSigning</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesCodeSigningOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesCodeSigningOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AwsSignerJobId`<sup>Required</sup> <a name="AwsSignerJobId" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesCodeSigningOutputReference.property.awsSignerJobId"></a>

```csharp
public string AwsSignerJobId { get; }
```

- *Type:* string

---

##### `CustomCodeSigning`<sup>Required</sup> <a name="CustomCodeSigning" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesCodeSigningOutputReference.property.customCodeSigning"></a>

```csharp
public DataAwsccIotOtaUpdateFilesCodeSigningCustomCodeSigningOutputReference CustomCodeSigning { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesCodeSigningCustomCodeSigningOutputReference">DataAwsccIotOtaUpdateFilesCodeSigningCustomCodeSigningOutputReference</a>

---

##### `StartSigningJobParameter`<sup>Required</sup> <a name="StartSigningJobParameter" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesCodeSigningOutputReference.property.startSigningJobParameter"></a>

```csharp
public DataAwsccIotOtaUpdateFilesCodeSigningStartSigningJobParameterOutputReference StartSigningJobParameter { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesCodeSigningStartSigningJobParameterOutputReference">DataAwsccIotOtaUpdateFilesCodeSigningStartSigningJobParameterOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesCodeSigningOutputReference.property.internalValue"></a>

```csharp
public DataAwsccIotOtaUpdateFilesCodeSigning InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesCodeSigning">DataAwsccIotOtaUpdateFilesCodeSigning</a>

---


### DataAwsccIotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationOutputReference <a name="DataAwsccIotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationOutputReference" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccIotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationOutputReference.property.s3Destination">S3Destination</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationS3DestinationOutputReference">DataAwsccIotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationS3DestinationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesCodeSigningStartSigningJobParameterDestination">DataAwsccIotOtaUpdateFilesCodeSigningStartSigningJobParameterDestination</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `S3Destination`<sup>Required</sup> <a name="S3Destination" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationOutputReference.property.s3Destination"></a>

```csharp
public DataAwsccIotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationS3DestinationOutputReference S3Destination { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationS3DestinationOutputReference">DataAwsccIotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationS3DestinationOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationOutputReference.property.internalValue"></a>

```csharp
public DataAwsccIotOtaUpdateFilesCodeSigningStartSigningJobParameterDestination InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesCodeSigningStartSigningJobParameterDestination">DataAwsccIotOtaUpdateFilesCodeSigningStartSigningJobParameterDestination</a>

---


### DataAwsccIotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationS3DestinationOutputReference <a name="DataAwsccIotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationS3DestinationOutputReference" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationS3DestinationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationS3DestinationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccIotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationS3DestinationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationS3DestinationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationS3DestinationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationS3DestinationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationS3DestinationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationS3DestinationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationS3DestinationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationS3DestinationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationS3DestinationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationS3DestinationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationS3DestinationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationS3DestinationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationS3DestinationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationS3DestinationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationS3DestinationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationS3DestinationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationS3DestinationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationS3DestinationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationS3DestinationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationS3DestinationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationS3DestinationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationS3DestinationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationS3DestinationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationS3DestinationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationS3DestinationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationS3DestinationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationS3DestinationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationS3DestinationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationS3DestinationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationS3DestinationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationS3DestinationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationS3DestinationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationS3DestinationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationS3DestinationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationS3DestinationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationS3DestinationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationS3DestinationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationS3DestinationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationS3DestinationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationS3DestinationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationS3DestinationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationS3DestinationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationS3DestinationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationS3DestinationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationS3DestinationOutputReference.property.bucket">Bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationS3DestinationOutputReference.property.prefix">Prefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationS3DestinationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationS3Destination">DataAwsccIotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationS3Destination</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationS3DestinationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationS3DestinationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationS3DestinationOutputReference.property.bucket"></a>

```csharp
public string Bucket { get; }
```

- *Type:* string

---

##### `Prefix`<sup>Required</sup> <a name="Prefix" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationS3DestinationOutputReference.property.prefix"></a>

```csharp
public string Prefix { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationS3DestinationOutputReference.property.internalValue"></a>

```csharp
public DataAwsccIotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationS3Destination InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationS3Destination">DataAwsccIotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationS3Destination</a>

---


### DataAwsccIotOtaUpdateFilesCodeSigningStartSigningJobParameterOutputReference <a name="DataAwsccIotOtaUpdateFilesCodeSigningStartSigningJobParameterOutputReference" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesCodeSigningStartSigningJobParameterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesCodeSigningStartSigningJobParameterOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccIotOtaUpdateFilesCodeSigningStartSigningJobParameterOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesCodeSigningStartSigningJobParameterOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesCodeSigningStartSigningJobParameterOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesCodeSigningStartSigningJobParameterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesCodeSigningStartSigningJobParameterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesCodeSigningStartSigningJobParameterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesCodeSigningStartSigningJobParameterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesCodeSigningStartSigningJobParameterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesCodeSigningStartSigningJobParameterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesCodeSigningStartSigningJobParameterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesCodeSigningStartSigningJobParameterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesCodeSigningStartSigningJobParameterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesCodeSigningStartSigningJobParameterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesCodeSigningStartSigningJobParameterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesCodeSigningStartSigningJobParameterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesCodeSigningStartSigningJobParameterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesCodeSigningStartSigningJobParameterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesCodeSigningStartSigningJobParameterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesCodeSigningStartSigningJobParameterOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesCodeSigningStartSigningJobParameterOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesCodeSigningStartSigningJobParameterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesCodeSigningStartSigningJobParameterOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesCodeSigningStartSigningJobParameterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesCodeSigningStartSigningJobParameterOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesCodeSigningStartSigningJobParameterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesCodeSigningStartSigningJobParameterOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesCodeSigningStartSigningJobParameterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesCodeSigningStartSigningJobParameterOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesCodeSigningStartSigningJobParameterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesCodeSigningStartSigningJobParameterOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesCodeSigningStartSigningJobParameterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesCodeSigningStartSigningJobParameterOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesCodeSigningStartSigningJobParameterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesCodeSigningStartSigningJobParameterOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesCodeSigningStartSigningJobParameterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesCodeSigningStartSigningJobParameterOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesCodeSigningStartSigningJobParameterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesCodeSigningStartSigningJobParameterOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesCodeSigningStartSigningJobParameterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesCodeSigningStartSigningJobParameterOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesCodeSigningStartSigningJobParameterOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesCodeSigningStartSigningJobParameterOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesCodeSigningStartSigningJobParameterOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesCodeSigningStartSigningJobParameterOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesCodeSigningStartSigningJobParameterOutputReference.property.destination">Destination</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationOutputReference">DataAwsccIotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesCodeSigningStartSigningJobParameterOutputReference.property.signingProfileName">SigningProfileName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesCodeSigningStartSigningJobParameterOutputReference.property.signingProfileParameter">SigningProfileParameter</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesCodeSigningStartSigningJobParameterSigningProfileParameterOutputReference">DataAwsccIotOtaUpdateFilesCodeSigningStartSigningJobParameterSigningProfileParameterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesCodeSigningStartSigningJobParameterOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesCodeSigningStartSigningJobParameter">DataAwsccIotOtaUpdateFilesCodeSigningStartSigningJobParameter</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesCodeSigningStartSigningJobParameterOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesCodeSigningStartSigningJobParameterOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Destination`<sup>Required</sup> <a name="Destination" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesCodeSigningStartSigningJobParameterOutputReference.property.destination"></a>

```csharp
public DataAwsccIotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationOutputReference Destination { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationOutputReference">DataAwsccIotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationOutputReference</a>

---

##### `SigningProfileName`<sup>Required</sup> <a name="SigningProfileName" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesCodeSigningStartSigningJobParameterOutputReference.property.signingProfileName"></a>

```csharp
public string SigningProfileName { get; }
```

- *Type:* string

---

##### `SigningProfileParameter`<sup>Required</sup> <a name="SigningProfileParameter" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesCodeSigningStartSigningJobParameterOutputReference.property.signingProfileParameter"></a>

```csharp
public DataAwsccIotOtaUpdateFilesCodeSigningStartSigningJobParameterSigningProfileParameterOutputReference SigningProfileParameter { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesCodeSigningStartSigningJobParameterSigningProfileParameterOutputReference">DataAwsccIotOtaUpdateFilesCodeSigningStartSigningJobParameterSigningProfileParameterOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesCodeSigningStartSigningJobParameterOutputReference.property.internalValue"></a>

```csharp
public DataAwsccIotOtaUpdateFilesCodeSigningStartSigningJobParameter InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesCodeSigningStartSigningJobParameter">DataAwsccIotOtaUpdateFilesCodeSigningStartSigningJobParameter</a>

---


### DataAwsccIotOtaUpdateFilesCodeSigningStartSigningJobParameterSigningProfileParameterOutputReference <a name="DataAwsccIotOtaUpdateFilesCodeSigningStartSigningJobParameterSigningProfileParameterOutputReference" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesCodeSigningStartSigningJobParameterSigningProfileParameterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesCodeSigningStartSigningJobParameterSigningProfileParameterOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccIotOtaUpdateFilesCodeSigningStartSigningJobParameterSigningProfileParameterOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesCodeSigningStartSigningJobParameterSigningProfileParameterOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesCodeSigningStartSigningJobParameterSigningProfileParameterOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesCodeSigningStartSigningJobParameterSigningProfileParameterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesCodeSigningStartSigningJobParameterSigningProfileParameterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesCodeSigningStartSigningJobParameterSigningProfileParameterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesCodeSigningStartSigningJobParameterSigningProfileParameterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesCodeSigningStartSigningJobParameterSigningProfileParameterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesCodeSigningStartSigningJobParameterSigningProfileParameterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesCodeSigningStartSigningJobParameterSigningProfileParameterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesCodeSigningStartSigningJobParameterSigningProfileParameterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesCodeSigningStartSigningJobParameterSigningProfileParameterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesCodeSigningStartSigningJobParameterSigningProfileParameterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesCodeSigningStartSigningJobParameterSigningProfileParameterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesCodeSigningStartSigningJobParameterSigningProfileParameterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesCodeSigningStartSigningJobParameterSigningProfileParameterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesCodeSigningStartSigningJobParameterSigningProfileParameterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesCodeSigningStartSigningJobParameterSigningProfileParameterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesCodeSigningStartSigningJobParameterSigningProfileParameterOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesCodeSigningStartSigningJobParameterSigningProfileParameterOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesCodeSigningStartSigningJobParameterSigningProfileParameterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesCodeSigningStartSigningJobParameterSigningProfileParameterOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesCodeSigningStartSigningJobParameterSigningProfileParameterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesCodeSigningStartSigningJobParameterSigningProfileParameterOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesCodeSigningStartSigningJobParameterSigningProfileParameterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesCodeSigningStartSigningJobParameterSigningProfileParameterOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesCodeSigningStartSigningJobParameterSigningProfileParameterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesCodeSigningStartSigningJobParameterSigningProfileParameterOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesCodeSigningStartSigningJobParameterSigningProfileParameterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesCodeSigningStartSigningJobParameterSigningProfileParameterOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesCodeSigningStartSigningJobParameterSigningProfileParameterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesCodeSigningStartSigningJobParameterSigningProfileParameterOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesCodeSigningStartSigningJobParameterSigningProfileParameterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesCodeSigningStartSigningJobParameterSigningProfileParameterOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesCodeSigningStartSigningJobParameterSigningProfileParameterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesCodeSigningStartSigningJobParameterSigningProfileParameterOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesCodeSigningStartSigningJobParameterSigningProfileParameterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesCodeSigningStartSigningJobParameterSigningProfileParameterOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesCodeSigningStartSigningJobParameterSigningProfileParameterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesCodeSigningStartSigningJobParameterSigningProfileParameterOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesCodeSigningStartSigningJobParameterSigningProfileParameterOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesCodeSigningStartSigningJobParameterSigningProfileParameterOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesCodeSigningStartSigningJobParameterSigningProfileParameterOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesCodeSigningStartSigningJobParameterSigningProfileParameterOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesCodeSigningStartSigningJobParameterSigningProfileParameterOutputReference.property.certificateArn">CertificateArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesCodeSigningStartSigningJobParameterSigningProfileParameterOutputReference.property.certificatePathOnDevice">CertificatePathOnDevice</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesCodeSigningStartSigningJobParameterSigningProfileParameterOutputReference.property.platform">Platform</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesCodeSigningStartSigningJobParameterSigningProfileParameterOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesCodeSigningStartSigningJobParameterSigningProfileParameter">DataAwsccIotOtaUpdateFilesCodeSigningStartSigningJobParameterSigningProfileParameter</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesCodeSigningStartSigningJobParameterSigningProfileParameterOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesCodeSigningStartSigningJobParameterSigningProfileParameterOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CertificateArn`<sup>Required</sup> <a name="CertificateArn" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesCodeSigningStartSigningJobParameterSigningProfileParameterOutputReference.property.certificateArn"></a>

```csharp
public string CertificateArn { get; }
```

- *Type:* string

---

##### `CertificatePathOnDevice`<sup>Required</sup> <a name="CertificatePathOnDevice" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesCodeSigningStartSigningJobParameterSigningProfileParameterOutputReference.property.certificatePathOnDevice"></a>

```csharp
public string CertificatePathOnDevice { get; }
```

- *Type:* string

---

##### `Platform`<sup>Required</sup> <a name="Platform" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesCodeSigningStartSigningJobParameterSigningProfileParameterOutputReference.property.platform"></a>

```csharp
public string Platform { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesCodeSigningStartSigningJobParameterSigningProfileParameterOutputReference.property.internalValue"></a>

```csharp
public DataAwsccIotOtaUpdateFilesCodeSigningStartSigningJobParameterSigningProfileParameter InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesCodeSigningStartSigningJobParameterSigningProfileParameter">DataAwsccIotOtaUpdateFilesCodeSigningStartSigningJobParameterSigningProfileParameter</a>

---


### DataAwsccIotOtaUpdateFilesFileLocationOutputReference <a name="DataAwsccIotOtaUpdateFilesFileLocationOutputReference" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesFileLocationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesFileLocationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccIotOtaUpdateFilesFileLocationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesFileLocationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesFileLocationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesFileLocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesFileLocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesFileLocationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesFileLocationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesFileLocationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesFileLocationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesFileLocationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesFileLocationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesFileLocationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesFileLocationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesFileLocationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesFileLocationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesFileLocationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesFileLocationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesFileLocationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesFileLocationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesFileLocationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesFileLocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesFileLocationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesFileLocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesFileLocationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesFileLocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesFileLocationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesFileLocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesFileLocationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesFileLocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesFileLocationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesFileLocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesFileLocationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesFileLocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesFileLocationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesFileLocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesFileLocationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesFileLocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesFileLocationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesFileLocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesFileLocationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesFileLocationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesFileLocationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesFileLocationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesFileLocationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesFileLocationOutputReference.property.s3Location">S3Location</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesFileLocationS3LocationOutputReference">DataAwsccIotOtaUpdateFilesFileLocationS3LocationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesFileLocationOutputReference.property.stream">Stream</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesFileLocationStreamOutputReference">DataAwsccIotOtaUpdateFilesFileLocationStreamOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesFileLocationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesFileLocation">DataAwsccIotOtaUpdateFilesFileLocation</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesFileLocationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesFileLocationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `S3Location`<sup>Required</sup> <a name="S3Location" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesFileLocationOutputReference.property.s3Location"></a>

```csharp
public DataAwsccIotOtaUpdateFilesFileLocationS3LocationOutputReference S3Location { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesFileLocationS3LocationOutputReference">DataAwsccIotOtaUpdateFilesFileLocationS3LocationOutputReference</a>

---

##### `Stream`<sup>Required</sup> <a name="Stream" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesFileLocationOutputReference.property.stream"></a>

```csharp
public DataAwsccIotOtaUpdateFilesFileLocationStreamOutputReference Stream { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesFileLocationStreamOutputReference">DataAwsccIotOtaUpdateFilesFileLocationStreamOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesFileLocationOutputReference.property.internalValue"></a>

```csharp
public DataAwsccIotOtaUpdateFilesFileLocation InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesFileLocation">DataAwsccIotOtaUpdateFilesFileLocation</a>

---


### DataAwsccIotOtaUpdateFilesFileLocationS3LocationOutputReference <a name="DataAwsccIotOtaUpdateFilesFileLocationS3LocationOutputReference" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesFileLocationS3LocationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesFileLocationS3LocationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccIotOtaUpdateFilesFileLocationS3LocationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesFileLocationS3LocationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesFileLocationS3LocationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesFileLocationS3LocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesFileLocationS3LocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesFileLocationS3LocationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesFileLocationS3LocationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesFileLocationS3LocationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesFileLocationS3LocationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesFileLocationS3LocationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesFileLocationS3LocationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesFileLocationS3LocationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesFileLocationS3LocationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesFileLocationS3LocationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesFileLocationS3LocationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesFileLocationS3LocationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesFileLocationS3LocationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesFileLocationS3LocationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesFileLocationS3LocationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesFileLocationS3LocationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesFileLocationS3LocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesFileLocationS3LocationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesFileLocationS3LocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesFileLocationS3LocationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesFileLocationS3LocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesFileLocationS3LocationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesFileLocationS3LocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesFileLocationS3LocationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesFileLocationS3LocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesFileLocationS3LocationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesFileLocationS3LocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesFileLocationS3LocationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesFileLocationS3LocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesFileLocationS3LocationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesFileLocationS3LocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesFileLocationS3LocationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesFileLocationS3LocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesFileLocationS3LocationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesFileLocationS3LocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesFileLocationS3LocationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesFileLocationS3LocationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesFileLocationS3LocationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesFileLocationS3LocationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesFileLocationS3LocationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesFileLocationS3LocationOutputReference.property.bucket">Bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesFileLocationS3LocationOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesFileLocationS3LocationOutputReference.property.version">Version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesFileLocationS3LocationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesFileLocationS3Location">DataAwsccIotOtaUpdateFilesFileLocationS3Location</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesFileLocationS3LocationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesFileLocationS3LocationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesFileLocationS3LocationOutputReference.property.bucket"></a>

```csharp
public string Bucket { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesFileLocationS3LocationOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesFileLocationS3LocationOutputReference.property.version"></a>

```csharp
public string Version { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesFileLocationS3LocationOutputReference.property.internalValue"></a>

```csharp
public DataAwsccIotOtaUpdateFilesFileLocationS3Location InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesFileLocationS3Location">DataAwsccIotOtaUpdateFilesFileLocationS3Location</a>

---


### DataAwsccIotOtaUpdateFilesFileLocationStreamOutputReference <a name="DataAwsccIotOtaUpdateFilesFileLocationStreamOutputReference" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesFileLocationStreamOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesFileLocationStreamOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccIotOtaUpdateFilesFileLocationStreamOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesFileLocationStreamOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesFileLocationStreamOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesFileLocationStreamOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesFileLocationStreamOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesFileLocationStreamOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesFileLocationStreamOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesFileLocationStreamOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesFileLocationStreamOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesFileLocationStreamOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesFileLocationStreamOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesFileLocationStreamOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesFileLocationStreamOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesFileLocationStreamOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesFileLocationStreamOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesFileLocationStreamOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesFileLocationStreamOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesFileLocationStreamOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesFileLocationStreamOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesFileLocationStreamOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesFileLocationStreamOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesFileLocationStreamOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesFileLocationStreamOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesFileLocationStreamOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesFileLocationStreamOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesFileLocationStreamOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesFileLocationStreamOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesFileLocationStreamOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesFileLocationStreamOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesFileLocationStreamOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesFileLocationStreamOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesFileLocationStreamOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesFileLocationStreamOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesFileLocationStreamOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesFileLocationStreamOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesFileLocationStreamOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesFileLocationStreamOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesFileLocationStreamOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesFileLocationStreamOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesFileLocationStreamOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesFileLocationStreamOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesFileLocationStreamOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesFileLocationStreamOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesFileLocationStreamOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesFileLocationStreamOutputReference.property.fileId">FileId</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesFileLocationStreamOutputReference.property.streamId">StreamId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesFileLocationStreamOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesFileLocationStream">DataAwsccIotOtaUpdateFilesFileLocationStream</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesFileLocationStreamOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesFileLocationStreamOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FileId`<sup>Required</sup> <a name="FileId" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesFileLocationStreamOutputReference.property.fileId"></a>

```csharp
public double FileId { get; }
```

- *Type:* double

---

##### `StreamId`<sup>Required</sup> <a name="StreamId" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesFileLocationStreamOutputReference.property.streamId"></a>

```csharp
public string StreamId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesFileLocationStreamOutputReference.property.internalValue"></a>

```csharp
public DataAwsccIotOtaUpdateFilesFileLocationStream InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesFileLocationStream">DataAwsccIotOtaUpdateFilesFileLocationStream</a>

---


### DataAwsccIotOtaUpdateFilesList <a name="DataAwsccIotOtaUpdateFilesList" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccIotOtaUpdateFilesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesList.get"></a>

```csharp
private DataAwsccIotOtaUpdateFilesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsccIotOtaUpdateFilesOutputReference <a name="DataAwsccIotOtaUpdateFilesOutputReference" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccIotOtaUpdateFilesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesOutputReference.property.attributes">Attributes</a></code> | <code>Io.Cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesOutputReference.property.codeSigning">CodeSigning</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesCodeSigningOutputReference">DataAwsccIotOtaUpdateFilesCodeSigningOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesOutputReference.property.fileLocation">FileLocation</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesFileLocationOutputReference">DataAwsccIotOtaUpdateFilesFileLocationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesOutputReference.property.fileName">FileName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesOutputReference.property.fileType">FileType</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesOutputReference.property.fileVersion">FileVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFiles">DataAwsccIotOtaUpdateFiles</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Attributes`<sup>Required</sup> <a name="Attributes" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesOutputReference.property.attributes"></a>

```csharp
public StringMap Attributes { get; }
```

- *Type:* Io.Cdktn.StringMap

---

##### `CodeSigning`<sup>Required</sup> <a name="CodeSigning" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesOutputReference.property.codeSigning"></a>

```csharp
public DataAwsccIotOtaUpdateFilesCodeSigningOutputReference CodeSigning { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesCodeSigningOutputReference">DataAwsccIotOtaUpdateFilesCodeSigningOutputReference</a>

---

##### `FileLocation`<sup>Required</sup> <a name="FileLocation" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesOutputReference.property.fileLocation"></a>

```csharp
public DataAwsccIotOtaUpdateFilesFileLocationOutputReference FileLocation { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesFileLocationOutputReference">DataAwsccIotOtaUpdateFilesFileLocationOutputReference</a>

---

##### `FileName`<sup>Required</sup> <a name="FileName" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesOutputReference.property.fileName"></a>

```csharp
public string FileName { get; }
```

- *Type:* string

---

##### `FileType`<sup>Required</sup> <a name="FileType" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesOutputReference.property.fileType"></a>

```csharp
public double FileType { get; }
```

- *Type:* double

---

##### `FileVersion`<sup>Required</sup> <a name="FileVersion" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesOutputReference.property.fileVersion"></a>

```csharp
public string FileVersion { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFilesOutputReference.property.internalValue"></a>

```csharp
public DataAwsccIotOtaUpdateFiles InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateFiles">DataAwsccIotOtaUpdateFiles</a>

---


### DataAwsccIotOtaUpdateTagsList <a name="DataAwsccIotOtaUpdateTagsList" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccIotOtaUpdateTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateTagsList.get"></a>

```csharp
private DataAwsccIotOtaUpdateTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsccIotOtaUpdateTagsOutputReference <a name="DataAwsccIotOtaUpdateTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccIotOtaUpdateTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateTagsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateTags">DataAwsccIotOtaUpdateTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateTagsOutputReference.property.internalValue"></a>

```csharp
public DataAwsccIotOtaUpdateTags InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotOtaUpdate.DataAwsccIotOtaUpdateTags">DataAwsccIotOtaUpdateTags</a>

---



