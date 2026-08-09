# `dataAwsccQbusinessIndex` Submodule <a name="`dataAwsccQbusinessIndex` Submodule" id="@cdktn/provider-awscc.dataAwsccQbusinessIndex"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccQbusinessIndex <a name="DataAwsccQbusinessIndex" id="@cdktn/provider-awscc.dataAwsccQbusinessIndex.DataAwsccQbusinessIndex"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/qbusiness_index awscc_qbusiness_index}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccQbusinessIndex.DataAwsccQbusinessIndex.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccQbusinessIndex(Construct Scope, string Id, DataAwsccQbusinessIndexConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessIndex.DataAwsccQbusinessIndex.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessIndex.DataAwsccQbusinessIndex.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessIndex.DataAwsccQbusinessIndex.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessIndex.DataAwsccQbusinessIndexConfig">DataAwsccQbusinessIndexConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.dataAwsccQbusinessIndex.DataAwsccQbusinessIndex.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccQbusinessIndex.DataAwsccQbusinessIndex.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.dataAwsccQbusinessIndex.DataAwsccQbusinessIndex.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQbusinessIndex.DataAwsccQbusinessIndexConfig">DataAwsccQbusinessIndexConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessIndex.DataAwsccQbusinessIndex.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessIndex.DataAwsccQbusinessIndex.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessIndex.DataAwsccQbusinessIndex.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessIndex.DataAwsccQbusinessIndex.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessIndex.DataAwsccQbusinessIndex.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessIndex.DataAwsccQbusinessIndex.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessIndex.DataAwsccQbusinessIndex.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessIndex.DataAwsccQbusinessIndex.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessIndex.DataAwsccQbusinessIndex.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessIndex.DataAwsccQbusinessIndex.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessIndex.DataAwsccQbusinessIndex.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessIndex.DataAwsccQbusinessIndex.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessIndex.DataAwsccQbusinessIndex.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessIndex.DataAwsccQbusinessIndex.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessIndex.DataAwsccQbusinessIndex.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessIndex.DataAwsccQbusinessIndex.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessIndex.DataAwsccQbusinessIndex.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessIndex.DataAwsccQbusinessIndex.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccQbusinessIndex.DataAwsccQbusinessIndex.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccQbusinessIndex.DataAwsccQbusinessIndex.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.dataAwsccQbusinessIndex.DataAwsccQbusinessIndex.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccQbusinessIndex.DataAwsccQbusinessIndex.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.dataAwsccQbusinessIndex.DataAwsccQbusinessIndex.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccQbusinessIndex.DataAwsccQbusinessIndex.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccQbusinessIndex.DataAwsccQbusinessIndex.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.dataAwsccQbusinessIndex.DataAwsccQbusinessIndex.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccQbusinessIndex.DataAwsccQbusinessIndex.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccQbusinessIndex.DataAwsccQbusinessIndex.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccQbusinessIndex.DataAwsccQbusinessIndex.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccQbusinessIndex.DataAwsccQbusinessIndex.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessIndex.DataAwsccQbusinessIndex.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessIndex.DataAwsccQbusinessIndex.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessIndex.DataAwsccQbusinessIndex.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessIndex.DataAwsccQbusinessIndex.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessIndex.DataAwsccQbusinessIndex.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessIndex.DataAwsccQbusinessIndex.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessIndex.DataAwsccQbusinessIndex.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessIndex.DataAwsccQbusinessIndex.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessIndex.DataAwsccQbusinessIndex.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessIndex.DataAwsccQbusinessIndex.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessIndex.DataAwsccQbusinessIndex.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessIndex.DataAwsccQbusinessIndex.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessIndex.DataAwsccQbusinessIndex.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessIndex.DataAwsccQbusinessIndex.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessIndex.DataAwsccQbusinessIndex.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessIndex.DataAwsccQbusinessIndex.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessIndex.DataAwsccQbusinessIndex.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessIndex.DataAwsccQbusinessIndex.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessIndex.DataAwsccQbusinessIndex.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessIndex.DataAwsccQbusinessIndex.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessIndex.DataAwsccQbusinessIndex.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessIndex.DataAwsccQbusinessIndex.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessIndex.DataAwsccQbusinessIndex.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessIndex.DataAwsccQbusinessIndex.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccQbusinessIndex resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccQbusinessIndex.DataAwsccQbusinessIndex.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccQbusinessIndex.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccQbusinessIndex.DataAwsccQbusinessIndex.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccQbusinessIndex.DataAwsccQbusinessIndex.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccQbusinessIndex.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccQbusinessIndex.DataAwsccQbusinessIndex.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccQbusinessIndex.DataAwsccQbusinessIndex.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccQbusinessIndex.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccQbusinessIndex.DataAwsccQbusinessIndex.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccQbusinessIndex.DataAwsccQbusinessIndex.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccQbusinessIndex.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataAwsccQbusinessIndex resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.dataAwsccQbusinessIndex.DataAwsccQbusinessIndex.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.dataAwsccQbusinessIndex.DataAwsccQbusinessIndex.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccQbusinessIndex to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.dataAwsccQbusinessIndex.DataAwsccQbusinessIndex.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccQbusinessIndex that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/qbusiness_index#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccQbusinessIndex.DataAwsccQbusinessIndex.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccQbusinessIndex to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessIndex.DataAwsccQbusinessIndex.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessIndex.DataAwsccQbusinessIndex.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessIndex.DataAwsccQbusinessIndex.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessIndex.DataAwsccQbusinessIndex.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessIndex.DataAwsccQbusinessIndex.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessIndex.DataAwsccQbusinessIndex.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessIndex.DataAwsccQbusinessIndex.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessIndex.DataAwsccQbusinessIndex.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessIndex.DataAwsccQbusinessIndex.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessIndex.DataAwsccQbusinessIndex.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessIndex.DataAwsccQbusinessIndex.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessIndex.DataAwsccQbusinessIndex.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessIndex.DataAwsccQbusinessIndex.property.applicationId">ApplicationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessIndex.DataAwsccQbusinessIndex.property.capacityConfiguration">CapacityConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessIndex.DataAwsccQbusinessIndexCapacityConfigurationOutputReference">DataAwsccQbusinessIndexCapacityConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessIndex.DataAwsccQbusinessIndex.property.createdAt">CreatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessIndex.DataAwsccQbusinessIndex.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessIndex.DataAwsccQbusinessIndex.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessIndex.DataAwsccQbusinessIndex.property.documentAttributeConfigurations">DocumentAttributeConfigurations</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessIndex.DataAwsccQbusinessIndexDocumentAttributeConfigurationsList">DataAwsccQbusinessIndexDocumentAttributeConfigurationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessIndex.DataAwsccQbusinessIndex.property.indexArn">IndexArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessIndex.DataAwsccQbusinessIndex.property.indexId">IndexId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessIndex.DataAwsccQbusinessIndex.property.indexStatistics">IndexStatistics</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessIndex.DataAwsccQbusinessIndexIndexStatisticsOutputReference">DataAwsccQbusinessIndexIndexStatisticsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessIndex.DataAwsccQbusinessIndex.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessIndex.DataAwsccQbusinessIndex.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessIndex.DataAwsccQbusinessIndexTagsList">DataAwsccQbusinessIndexTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessIndex.DataAwsccQbusinessIndex.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessIndex.DataAwsccQbusinessIndex.property.updatedAt">UpdatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessIndex.DataAwsccQbusinessIndex.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessIndex.DataAwsccQbusinessIndex.property.id">Id</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccQbusinessIndex.DataAwsccQbusinessIndex.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccQbusinessIndex.DataAwsccQbusinessIndex.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccQbusinessIndex.DataAwsccQbusinessIndex.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccQbusinessIndex.DataAwsccQbusinessIndex.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccQbusinessIndex.DataAwsccQbusinessIndex.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccQbusinessIndex.DataAwsccQbusinessIndex.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccQbusinessIndex.DataAwsccQbusinessIndex.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccQbusinessIndex.DataAwsccQbusinessIndex.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccQbusinessIndex.DataAwsccQbusinessIndex.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccQbusinessIndex.DataAwsccQbusinessIndex.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccQbusinessIndex.DataAwsccQbusinessIndex.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccQbusinessIndex.DataAwsccQbusinessIndex.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `ApplicationId`<sup>Required</sup> <a name="ApplicationId" id="@cdktn/provider-awscc.dataAwsccQbusinessIndex.DataAwsccQbusinessIndex.property.applicationId"></a>

```csharp
public string ApplicationId { get; }
```

- *Type:* string

---

##### `CapacityConfiguration`<sup>Required</sup> <a name="CapacityConfiguration" id="@cdktn/provider-awscc.dataAwsccQbusinessIndex.DataAwsccQbusinessIndex.property.capacityConfiguration"></a>

```csharp
public DataAwsccQbusinessIndexCapacityConfigurationOutputReference CapacityConfiguration { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQbusinessIndex.DataAwsccQbusinessIndexCapacityConfigurationOutputReference">DataAwsccQbusinessIndexCapacityConfigurationOutputReference</a>

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktn/provider-awscc.dataAwsccQbusinessIndex.DataAwsccQbusinessIndex.property.createdAt"></a>

```csharp
public string CreatedAt { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.dataAwsccQbusinessIndex.DataAwsccQbusinessIndex.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-awscc.dataAwsccQbusinessIndex.DataAwsccQbusinessIndex.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `DocumentAttributeConfigurations`<sup>Required</sup> <a name="DocumentAttributeConfigurations" id="@cdktn/provider-awscc.dataAwsccQbusinessIndex.DataAwsccQbusinessIndex.property.documentAttributeConfigurations"></a>

```csharp
public DataAwsccQbusinessIndexDocumentAttributeConfigurationsList DocumentAttributeConfigurations { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQbusinessIndex.DataAwsccQbusinessIndexDocumentAttributeConfigurationsList">DataAwsccQbusinessIndexDocumentAttributeConfigurationsList</a>

---

##### `IndexArn`<sup>Required</sup> <a name="IndexArn" id="@cdktn/provider-awscc.dataAwsccQbusinessIndex.DataAwsccQbusinessIndex.property.indexArn"></a>

```csharp
public string IndexArn { get; }
```

- *Type:* string

---

##### `IndexId`<sup>Required</sup> <a name="IndexId" id="@cdktn/provider-awscc.dataAwsccQbusinessIndex.DataAwsccQbusinessIndex.property.indexId"></a>

```csharp
public string IndexId { get; }
```

- *Type:* string

---

##### `IndexStatistics`<sup>Required</sup> <a name="IndexStatistics" id="@cdktn/provider-awscc.dataAwsccQbusinessIndex.DataAwsccQbusinessIndex.property.indexStatistics"></a>

```csharp
public DataAwsccQbusinessIndexIndexStatisticsOutputReference IndexStatistics { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQbusinessIndex.DataAwsccQbusinessIndexIndexStatisticsOutputReference">DataAwsccQbusinessIndexIndexStatisticsOutputReference</a>

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-awscc.dataAwsccQbusinessIndex.DataAwsccQbusinessIndex.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.dataAwsccQbusinessIndex.DataAwsccQbusinessIndex.property.tags"></a>

```csharp
public DataAwsccQbusinessIndexTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQbusinessIndex.DataAwsccQbusinessIndexTagsList">DataAwsccQbusinessIndexTagsList</a>

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.dataAwsccQbusinessIndex.DataAwsccQbusinessIndex.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `UpdatedAt`<sup>Required</sup> <a name="UpdatedAt" id="@cdktn/provider-awscc.dataAwsccQbusinessIndex.DataAwsccQbusinessIndex.property.updatedAt"></a>

```csharp
public string UpdatedAt { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccQbusinessIndex.DataAwsccQbusinessIndex.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccQbusinessIndex.DataAwsccQbusinessIndex.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessIndex.DataAwsccQbusinessIndex.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccQbusinessIndex.DataAwsccQbusinessIndex.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccQbusinessIndexCapacityConfiguration <a name="DataAwsccQbusinessIndexCapacityConfiguration" id="@cdktn/provider-awscc.dataAwsccQbusinessIndex.DataAwsccQbusinessIndexCapacityConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccQbusinessIndex.DataAwsccQbusinessIndexCapacityConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccQbusinessIndexCapacityConfiguration {

};
```


### DataAwsccQbusinessIndexConfig <a name="DataAwsccQbusinessIndexConfig" id="@cdktn/provider-awscc.dataAwsccQbusinessIndex.DataAwsccQbusinessIndexConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccQbusinessIndex.DataAwsccQbusinessIndexConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccQbusinessIndexConfig {
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessIndex.DataAwsccQbusinessIndexConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessIndex.DataAwsccQbusinessIndexConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessIndex.DataAwsccQbusinessIndexConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessIndex.DataAwsccQbusinessIndexConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessIndex.DataAwsccQbusinessIndexConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessIndex.DataAwsccQbusinessIndexConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessIndex.DataAwsccQbusinessIndexConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessIndex.DataAwsccQbusinessIndexConfig.property.id">Id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccQbusinessIndex.DataAwsccQbusinessIndexConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccQbusinessIndex.DataAwsccQbusinessIndexConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccQbusinessIndex.DataAwsccQbusinessIndexConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccQbusinessIndex.DataAwsccQbusinessIndexConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccQbusinessIndex.DataAwsccQbusinessIndexConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccQbusinessIndex.DataAwsccQbusinessIndexConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccQbusinessIndex.DataAwsccQbusinessIndexConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccQbusinessIndex.DataAwsccQbusinessIndexConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/qbusiness_index#id DataAwsccQbusinessIndex#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccQbusinessIndexDocumentAttributeConfigurations <a name="DataAwsccQbusinessIndexDocumentAttributeConfigurations" id="@cdktn/provider-awscc.dataAwsccQbusinessIndex.DataAwsccQbusinessIndexDocumentAttributeConfigurations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccQbusinessIndex.DataAwsccQbusinessIndexDocumentAttributeConfigurations.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccQbusinessIndexDocumentAttributeConfigurations {

};
```


### DataAwsccQbusinessIndexIndexStatistics <a name="DataAwsccQbusinessIndexIndexStatistics" id="@cdktn/provider-awscc.dataAwsccQbusinessIndex.DataAwsccQbusinessIndexIndexStatistics"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccQbusinessIndex.DataAwsccQbusinessIndexIndexStatistics.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccQbusinessIndexIndexStatistics {

};
```


### DataAwsccQbusinessIndexIndexStatisticsTextDocumentStatistics <a name="DataAwsccQbusinessIndexIndexStatisticsTextDocumentStatistics" id="@cdktn/provider-awscc.dataAwsccQbusinessIndex.DataAwsccQbusinessIndexIndexStatisticsTextDocumentStatistics"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccQbusinessIndex.DataAwsccQbusinessIndexIndexStatisticsTextDocumentStatistics.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccQbusinessIndexIndexStatisticsTextDocumentStatistics {

};
```


### DataAwsccQbusinessIndexTags <a name="DataAwsccQbusinessIndexTags" id="@cdktn/provider-awscc.dataAwsccQbusinessIndex.DataAwsccQbusinessIndexTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccQbusinessIndex.DataAwsccQbusinessIndexTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccQbusinessIndexTags {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccQbusinessIndexCapacityConfigurationOutputReference <a name="DataAwsccQbusinessIndexCapacityConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccQbusinessIndex.DataAwsccQbusinessIndexCapacityConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccQbusinessIndex.DataAwsccQbusinessIndexCapacityConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccQbusinessIndexCapacityConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessIndex.DataAwsccQbusinessIndexCapacityConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessIndex.DataAwsccQbusinessIndexCapacityConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccQbusinessIndex.DataAwsccQbusinessIndexCapacityConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessIndex.DataAwsccQbusinessIndexCapacityConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessIndex.DataAwsccQbusinessIndexCapacityConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessIndex.DataAwsccQbusinessIndexCapacityConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessIndex.DataAwsccQbusinessIndexCapacityConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessIndex.DataAwsccQbusinessIndexCapacityConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessIndex.DataAwsccQbusinessIndexCapacityConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessIndex.DataAwsccQbusinessIndexCapacityConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessIndex.DataAwsccQbusinessIndexCapacityConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessIndex.DataAwsccQbusinessIndexCapacityConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessIndex.DataAwsccQbusinessIndexCapacityConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessIndex.DataAwsccQbusinessIndexCapacityConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessIndex.DataAwsccQbusinessIndexCapacityConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessIndex.DataAwsccQbusinessIndexCapacityConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessIndex.DataAwsccQbusinessIndexCapacityConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccQbusinessIndex.DataAwsccQbusinessIndexCapacityConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessIndex.DataAwsccQbusinessIndexCapacityConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessIndex.DataAwsccQbusinessIndexCapacityConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessIndex.DataAwsccQbusinessIndexCapacityConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessIndex.DataAwsccQbusinessIndexCapacityConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessIndex.DataAwsccQbusinessIndexCapacityConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessIndex.DataAwsccQbusinessIndexCapacityConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessIndex.DataAwsccQbusinessIndexCapacityConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessIndex.DataAwsccQbusinessIndexCapacityConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessIndex.DataAwsccQbusinessIndexCapacityConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessIndex.DataAwsccQbusinessIndexCapacityConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessIndex.DataAwsccQbusinessIndexCapacityConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessIndex.DataAwsccQbusinessIndexCapacityConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessIndex.DataAwsccQbusinessIndexCapacityConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessIndex.DataAwsccQbusinessIndexCapacityConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessIndex.DataAwsccQbusinessIndexCapacityConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessIndex.DataAwsccQbusinessIndexCapacityConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessIndex.DataAwsccQbusinessIndexCapacityConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessIndex.DataAwsccQbusinessIndexCapacityConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessIndex.DataAwsccQbusinessIndexCapacityConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccQbusinessIndex.DataAwsccQbusinessIndexCapacityConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccQbusinessIndex.DataAwsccQbusinessIndexCapacityConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccQbusinessIndex.DataAwsccQbusinessIndexCapacityConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccQbusinessIndex.DataAwsccQbusinessIndexCapacityConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessIndex.DataAwsccQbusinessIndexCapacityConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessIndex.DataAwsccQbusinessIndexCapacityConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessIndex.DataAwsccQbusinessIndexCapacityConfigurationOutputReference.property.units">Units</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessIndex.DataAwsccQbusinessIndexCapacityConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessIndex.DataAwsccQbusinessIndexCapacityConfiguration">DataAwsccQbusinessIndexCapacityConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccQbusinessIndex.DataAwsccQbusinessIndexCapacityConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccQbusinessIndex.DataAwsccQbusinessIndexCapacityConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Units`<sup>Required</sup> <a name="Units" id="@cdktn/provider-awscc.dataAwsccQbusinessIndex.DataAwsccQbusinessIndexCapacityConfigurationOutputReference.property.units"></a>

```csharp
public double Units { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccQbusinessIndex.DataAwsccQbusinessIndexCapacityConfigurationOutputReference.property.internalValue"></a>

```csharp
public DataAwsccQbusinessIndexCapacityConfiguration InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQbusinessIndex.DataAwsccQbusinessIndexCapacityConfiguration">DataAwsccQbusinessIndexCapacityConfiguration</a>

---


### DataAwsccQbusinessIndexDocumentAttributeConfigurationsList <a name="DataAwsccQbusinessIndexDocumentAttributeConfigurationsList" id="@cdktn/provider-awscc.dataAwsccQbusinessIndex.DataAwsccQbusinessIndexDocumentAttributeConfigurationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccQbusinessIndex.DataAwsccQbusinessIndexDocumentAttributeConfigurationsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccQbusinessIndexDocumentAttributeConfigurationsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessIndex.DataAwsccQbusinessIndexDocumentAttributeConfigurationsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessIndex.DataAwsccQbusinessIndexDocumentAttributeConfigurationsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessIndex.DataAwsccQbusinessIndexDocumentAttributeConfigurationsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccQbusinessIndex.DataAwsccQbusinessIndexDocumentAttributeConfigurationsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessIndex.DataAwsccQbusinessIndexDocumentAttributeConfigurationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.dataAwsccQbusinessIndex.DataAwsccQbusinessIndexDocumentAttributeConfigurationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessIndex.DataAwsccQbusinessIndexDocumentAttributeConfigurationsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessIndex.DataAwsccQbusinessIndexDocumentAttributeConfigurationsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessIndex.DataAwsccQbusinessIndexDocumentAttributeConfigurationsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessIndex.DataAwsccQbusinessIndexDocumentAttributeConfigurationsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessIndex.DataAwsccQbusinessIndexDocumentAttributeConfigurationsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccQbusinessIndex.DataAwsccQbusinessIndexDocumentAttributeConfigurationsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccQbusinessIndex.DataAwsccQbusinessIndexDocumentAttributeConfigurationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccQbusinessIndex.DataAwsccQbusinessIndexDocumentAttributeConfigurationsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccQbusinessIndex.DataAwsccQbusinessIndexDocumentAttributeConfigurationsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccQbusinessIndex.DataAwsccQbusinessIndexDocumentAttributeConfigurationsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccQbusinessIndex.DataAwsccQbusinessIndexDocumentAttributeConfigurationsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccQbusinessIndex.DataAwsccQbusinessIndexDocumentAttributeConfigurationsList.get"></a>

```csharp
private DataAwsccQbusinessIndexDocumentAttributeConfigurationsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.dataAwsccQbusinessIndex.DataAwsccQbusinessIndexDocumentAttributeConfigurationsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessIndex.DataAwsccQbusinessIndexDocumentAttributeConfigurationsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessIndex.DataAwsccQbusinessIndexDocumentAttributeConfigurationsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccQbusinessIndex.DataAwsccQbusinessIndexDocumentAttributeConfigurationsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccQbusinessIndex.DataAwsccQbusinessIndexDocumentAttributeConfigurationsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsccQbusinessIndexDocumentAttributeConfigurationsOutputReference <a name="DataAwsccQbusinessIndexDocumentAttributeConfigurationsOutputReference" id="@cdktn/provider-awscc.dataAwsccQbusinessIndex.DataAwsccQbusinessIndexDocumentAttributeConfigurationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccQbusinessIndex.DataAwsccQbusinessIndexDocumentAttributeConfigurationsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccQbusinessIndexDocumentAttributeConfigurationsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessIndex.DataAwsccQbusinessIndexDocumentAttributeConfigurationsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessIndex.DataAwsccQbusinessIndexDocumentAttributeConfigurationsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessIndex.DataAwsccQbusinessIndexDocumentAttributeConfigurationsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessIndex.DataAwsccQbusinessIndexDocumentAttributeConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccQbusinessIndex.DataAwsccQbusinessIndexDocumentAttributeConfigurationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessIndex.DataAwsccQbusinessIndexDocumentAttributeConfigurationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.dataAwsccQbusinessIndex.DataAwsccQbusinessIndexDocumentAttributeConfigurationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccQbusinessIndex.DataAwsccQbusinessIndexDocumentAttributeConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessIndex.DataAwsccQbusinessIndexDocumentAttributeConfigurationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessIndex.DataAwsccQbusinessIndexDocumentAttributeConfigurationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessIndex.DataAwsccQbusinessIndexDocumentAttributeConfigurationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessIndex.DataAwsccQbusinessIndexDocumentAttributeConfigurationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessIndex.DataAwsccQbusinessIndexDocumentAttributeConfigurationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessIndex.DataAwsccQbusinessIndexDocumentAttributeConfigurationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessIndex.DataAwsccQbusinessIndexDocumentAttributeConfigurationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessIndex.DataAwsccQbusinessIndexDocumentAttributeConfigurationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessIndex.DataAwsccQbusinessIndexDocumentAttributeConfigurationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessIndex.DataAwsccQbusinessIndexDocumentAttributeConfigurationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessIndex.DataAwsccQbusinessIndexDocumentAttributeConfigurationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessIndex.DataAwsccQbusinessIndexDocumentAttributeConfigurationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessIndex.DataAwsccQbusinessIndexDocumentAttributeConfigurationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccQbusinessIndex.DataAwsccQbusinessIndexDocumentAttributeConfigurationsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessIndex.DataAwsccQbusinessIndexDocumentAttributeConfigurationsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessIndex.DataAwsccQbusinessIndexDocumentAttributeConfigurationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessIndex.DataAwsccQbusinessIndexDocumentAttributeConfigurationsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessIndex.DataAwsccQbusinessIndexDocumentAttributeConfigurationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessIndex.DataAwsccQbusinessIndexDocumentAttributeConfigurationsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessIndex.DataAwsccQbusinessIndexDocumentAttributeConfigurationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessIndex.DataAwsccQbusinessIndexDocumentAttributeConfigurationsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessIndex.DataAwsccQbusinessIndexDocumentAttributeConfigurationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessIndex.DataAwsccQbusinessIndexDocumentAttributeConfigurationsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessIndex.DataAwsccQbusinessIndexDocumentAttributeConfigurationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessIndex.DataAwsccQbusinessIndexDocumentAttributeConfigurationsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessIndex.DataAwsccQbusinessIndexDocumentAttributeConfigurationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessIndex.DataAwsccQbusinessIndexDocumentAttributeConfigurationsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessIndex.DataAwsccQbusinessIndexDocumentAttributeConfigurationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessIndex.DataAwsccQbusinessIndexDocumentAttributeConfigurationsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessIndex.DataAwsccQbusinessIndexDocumentAttributeConfigurationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessIndex.DataAwsccQbusinessIndexDocumentAttributeConfigurationsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessIndex.DataAwsccQbusinessIndexDocumentAttributeConfigurationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessIndex.DataAwsccQbusinessIndexDocumentAttributeConfigurationsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccQbusinessIndex.DataAwsccQbusinessIndexDocumentAttributeConfigurationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccQbusinessIndex.DataAwsccQbusinessIndexDocumentAttributeConfigurationsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccQbusinessIndex.DataAwsccQbusinessIndexDocumentAttributeConfigurationsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccQbusinessIndex.DataAwsccQbusinessIndexDocumentAttributeConfigurationsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessIndex.DataAwsccQbusinessIndexDocumentAttributeConfigurationsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessIndex.DataAwsccQbusinessIndexDocumentAttributeConfigurationsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessIndex.DataAwsccQbusinessIndexDocumentAttributeConfigurationsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessIndex.DataAwsccQbusinessIndexDocumentAttributeConfigurationsOutputReference.property.search">Search</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessIndex.DataAwsccQbusinessIndexDocumentAttributeConfigurationsOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessIndex.DataAwsccQbusinessIndexDocumentAttributeConfigurationsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessIndex.DataAwsccQbusinessIndexDocumentAttributeConfigurations">DataAwsccQbusinessIndexDocumentAttributeConfigurations</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccQbusinessIndex.DataAwsccQbusinessIndexDocumentAttributeConfigurationsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccQbusinessIndex.DataAwsccQbusinessIndexDocumentAttributeConfigurationsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.dataAwsccQbusinessIndex.DataAwsccQbusinessIndexDocumentAttributeConfigurationsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Search`<sup>Required</sup> <a name="Search" id="@cdktn/provider-awscc.dataAwsccQbusinessIndex.DataAwsccQbusinessIndexDocumentAttributeConfigurationsOutputReference.property.search"></a>

```csharp
public string Search { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.dataAwsccQbusinessIndex.DataAwsccQbusinessIndexDocumentAttributeConfigurationsOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccQbusinessIndex.DataAwsccQbusinessIndexDocumentAttributeConfigurationsOutputReference.property.internalValue"></a>

```csharp
public DataAwsccQbusinessIndexDocumentAttributeConfigurations InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQbusinessIndex.DataAwsccQbusinessIndexDocumentAttributeConfigurations">DataAwsccQbusinessIndexDocumentAttributeConfigurations</a>

---


### DataAwsccQbusinessIndexIndexStatisticsOutputReference <a name="DataAwsccQbusinessIndexIndexStatisticsOutputReference" id="@cdktn/provider-awscc.dataAwsccQbusinessIndex.DataAwsccQbusinessIndexIndexStatisticsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccQbusinessIndex.DataAwsccQbusinessIndexIndexStatisticsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccQbusinessIndexIndexStatisticsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessIndex.DataAwsccQbusinessIndexIndexStatisticsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessIndex.DataAwsccQbusinessIndexIndexStatisticsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccQbusinessIndex.DataAwsccQbusinessIndexIndexStatisticsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessIndex.DataAwsccQbusinessIndexIndexStatisticsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessIndex.DataAwsccQbusinessIndexIndexStatisticsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessIndex.DataAwsccQbusinessIndexIndexStatisticsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessIndex.DataAwsccQbusinessIndexIndexStatisticsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessIndex.DataAwsccQbusinessIndexIndexStatisticsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessIndex.DataAwsccQbusinessIndexIndexStatisticsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessIndex.DataAwsccQbusinessIndexIndexStatisticsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessIndex.DataAwsccQbusinessIndexIndexStatisticsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessIndex.DataAwsccQbusinessIndexIndexStatisticsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessIndex.DataAwsccQbusinessIndexIndexStatisticsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessIndex.DataAwsccQbusinessIndexIndexStatisticsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessIndex.DataAwsccQbusinessIndexIndexStatisticsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessIndex.DataAwsccQbusinessIndexIndexStatisticsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessIndex.DataAwsccQbusinessIndexIndexStatisticsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccQbusinessIndex.DataAwsccQbusinessIndexIndexStatisticsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessIndex.DataAwsccQbusinessIndexIndexStatisticsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessIndex.DataAwsccQbusinessIndexIndexStatisticsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessIndex.DataAwsccQbusinessIndexIndexStatisticsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessIndex.DataAwsccQbusinessIndexIndexStatisticsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessIndex.DataAwsccQbusinessIndexIndexStatisticsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessIndex.DataAwsccQbusinessIndexIndexStatisticsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessIndex.DataAwsccQbusinessIndexIndexStatisticsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessIndex.DataAwsccQbusinessIndexIndexStatisticsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessIndex.DataAwsccQbusinessIndexIndexStatisticsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessIndex.DataAwsccQbusinessIndexIndexStatisticsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessIndex.DataAwsccQbusinessIndexIndexStatisticsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessIndex.DataAwsccQbusinessIndexIndexStatisticsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessIndex.DataAwsccQbusinessIndexIndexStatisticsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessIndex.DataAwsccQbusinessIndexIndexStatisticsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessIndex.DataAwsccQbusinessIndexIndexStatisticsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessIndex.DataAwsccQbusinessIndexIndexStatisticsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessIndex.DataAwsccQbusinessIndexIndexStatisticsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessIndex.DataAwsccQbusinessIndexIndexStatisticsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessIndex.DataAwsccQbusinessIndexIndexStatisticsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccQbusinessIndex.DataAwsccQbusinessIndexIndexStatisticsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccQbusinessIndex.DataAwsccQbusinessIndexIndexStatisticsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccQbusinessIndex.DataAwsccQbusinessIndexIndexStatisticsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccQbusinessIndex.DataAwsccQbusinessIndexIndexStatisticsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessIndex.DataAwsccQbusinessIndexIndexStatisticsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessIndex.DataAwsccQbusinessIndexIndexStatisticsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessIndex.DataAwsccQbusinessIndexIndexStatisticsOutputReference.property.textDocumentStatistics">TextDocumentStatistics</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessIndex.DataAwsccQbusinessIndexIndexStatisticsTextDocumentStatisticsOutputReference">DataAwsccQbusinessIndexIndexStatisticsTextDocumentStatisticsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessIndex.DataAwsccQbusinessIndexIndexStatisticsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessIndex.DataAwsccQbusinessIndexIndexStatistics">DataAwsccQbusinessIndexIndexStatistics</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccQbusinessIndex.DataAwsccQbusinessIndexIndexStatisticsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccQbusinessIndex.DataAwsccQbusinessIndexIndexStatisticsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `TextDocumentStatistics`<sup>Required</sup> <a name="TextDocumentStatistics" id="@cdktn/provider-awscc.dataAwsccQbusinessIndex.DataAwsccQbusinessIndexIndexStatisticsOutputReference.property.textDocumentStatistics"></a>

```csharp
public DataAwsccQbusinessIndexIndexStatisticsTextDocumentStatisticsOutputReference TextDocumentStatistics { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQbusinessIndex.DataAwsccQbusinessIndexIndexStatisticsTextDocumentStatisticsOutputReference">DataAwsccQbusinessIndexIndexStatisticsTextDocumentStatisticsOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccQbusinessIndex.DataAwsccQbusinessIndexIndexStatisticsOutputReference.property.internalValue"></a>

```csharp
public DataAwsccQbusinessIndexIndexStatistics InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQbusinessIndex.DataAwsccQbusinessIndexIndexStatistics">DataAwsccQbusinessIndexIndexStatistics</a>

---


### DataAwsccQbusinessIndexIndexStatisticsTextDocumentStatisticsOutputReference <a name="DataAwsccQbusinessIndexIndexStatisticsTextDocumentStatisticsOutputReference" id="@cdktn/provider-awscc.dataAwsccQbusinessIndex.DataAwsccQbusinessIndexIndexStatisticsTextDocumentStatisticsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccQbusinessIndex.DataAwsccQbusinessIndexIndexStatisticsTextDocumentStatisticsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccQbusinessIndexIndexStatisticsTextDocumentStatisticsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessIndex.DataAwsccQbusinessIndexIndexStatisticsTextDocumentStatisticsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessIndex.DataAwsccQbusinessIndexIndexStatisticsTextDocumentStatisticsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccQbusinessIndex.DataAwsccQbusinessIndexIndexStatisticsTextDocumentStatisticsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessIndex.DataAwsccQbusinessIndexIndexStatisticsTextDocumentStatisticsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessIndex.DataAwsccQbusinessIndexIndexStatisticsTextDocumentStatisticsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessIndex.DataAwsccQbusinessIndexIndexStatisticsTextDocumentStatisticsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessIndex.DataAwsccQbusinessIndexIndexStatisticsTextDocumentStatisticsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessIndex.DataAwsccQbusinessIndexIndexStatisticsTextDocumentStatisticsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessIndex.DataAwsccQbusinessIndexIndexStatisticsTextDocumentStatisticsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessIndex.DataAwsccQbusinessIndexIndexStatisticsTextDocumentStatisticsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessIndex.DataAwsccQbusinessIndexIndexStatisticsTextDocumentStatisticsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessIndex.DataAwsccQbusinessIndexIndexStatisticsTextDocumentStatisticsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessIndex.DataAwsccQbusinessIndexIndexStatisticsTextDocumentStatisticsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessIndex.DataAwsccQbusinessIndexIndexStatisticsTextDocumentStatisticsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessIndex.DataAwsccQbusinessIndexIndexStatisticsTextDocumentStatisticsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessIndex.DataAwsccQbusinessIndexIndexStatisticsTextDocumentStatisticsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessIndex.DataAwsccQbusinessIndexIndexStatisticsTextDocumentStatisticsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccQbusinessIndex.DataAwsccQbusinessIndexIndexStatisticsTextDocumentStatisticsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessIndex.DataAwsccQbusinessIndexIndexStatisticsTextDocumentStatisticsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessIndex.DataAwsccQbusinessIndexIndexStatisticsTextDocumentStatisticsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessIndex.DataAwsccQbusinessIndexIndexStatisticsTextDocumentStatisticsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessIndex.DataAwsccQbusinessIndexIndexStatisticsTextDocumentStatisticsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessIndex.DataAwsccQbusinessIndexIndexStatisticsTextDocumentStatisticsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessIndex.DataAwsccQbusinessIndexIndexStatisticsTextDocumentStatisticsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessIndex.DataAwsccQbusinessIndexIndexStatisticsTextDocumentStatisticsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessIndex.DataAwsccQbusinessIndexIndexStatisticsTextDocumentStatisticsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessIndex.DataAwsccQbusinessIndexIndexStatisticsTextDocumentStatisticsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessIndex.DataAwsccQbusinessIndexIndexStatisticsTextDocumentStatisticsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessIndex.DataAwsccQbusinessIndexIndexStatisticsTextDocumentStatisticsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessIndex.DataAwsccQbusinessIndexIndexStatisticsTextDocumentStatisticsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessIndex.DataAwsccQbusinessIndexIndexStatisticsTextDocumentStatisticsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessIndex.DataAwsccQbusinessIndexIndexStatisticsTextDocumentStatisticsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessIndex.DataAwsccQbusinessIndexIndexStatisticsTextDocumentStatisticsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessIndex.DataAwsccQbusinessIndexIndexStatisticsTextDocumentStatisticsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessIndex.DataAwsccQbusinessIndexIndexStatisticsTextDocumentStatisticsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessIndex.DataAwsccQbusinessIndexIndexStatisticsTextDocumentStatisticsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessIndex.DataAwsccQbusinessIndexIndexStatisticsTextDocumentStatisticsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccQbusinessIndex.DataAwsccQbusinessIndexIndexStatisticsTextDocumentStatisticsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccQbusinessIndex.DataAwsccQbusinessIndexIndexStatisticsTextDocumentStatisticsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccQbusinessIndex.DataAwsccQbusinessIndexIndexStatisticsTextDocumentStatisticsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccQbusinessIndex.DataAwsccQbusinessIndexIndexStatisticsTextDocumentStatisticsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessIndex.DataAwsccQbusinessIndexIndexStatisticsTextDocumentStatisticsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessIndex.DataAwsccQbusinessIndexIndexStatisticsTextDocumentStatisticsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessIndex.DataAwsccQbusinessIndexIndexStatisticsTextDocumentStatisticsOutputReference.property.indexedTextBytes">IndexedTextBytes</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessIndex.DataAwsccQbusinessIndexIndexStatisticsTextDocumentStatisticsOutputReference.property.indexedTextDocumentCount">IndexedTextDocumentCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessIndex.DataAwsccQbusinessIndexIndexStatisticsTextDocumentStatisticsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessIndex.DataAwsccQbusinessIndexIndexStatisticsTextDocumentStatistics">DataAwsccQbusinessIndexIndexStatisticsTextDocumentStatistics</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccQbusinessIndex.DataAwsccQbusinessIndexIndexStatisticsTextDocumentStatisticsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccQbusinessIndex.DataAwsccQbusinessIndexIndexStatisticsTextDocumentStatisticsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IndexedTextBytes`<sup>Required</sup> <a name="IndexedTextBytes" id="@cdktn/provider-awscc.dataAwsccQbusinessIndex.DataAwsccQbusinessIndexIndexStatisticsTextDocumentStatisticsOutputReference.property.indexedTextBytes"></a>

```csharp
public double IndexedTextBytes { get; }
```

- *Type:* double

---

##### `IndexedTextDocumentCount`<sup>Required</sup> <a name="IndexedTextDocumentCount" id="@cdktn/provider-awscc.dataAwsccQbusinessIndex.DataAwsccQbusinessIndexIndexStatisticsTextDocumentStatisticsOutputReference.property.indexedTextDocumentCount"></a>

```csharp
public double IndexedTextDocumentCount { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccQbusinessIndex.DataAwsccQbusinessIndexIndexStatisticsTextDocumentStatisticsOutputReference.property.internalValue"></a>

```csharp
public DataAwsccQbusinessIndexIndexStatisticsTextDocumentStatistics InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQbusinessIndex.DataAwsccQbusinessIndexIndexStatisticsTextDocumentStatistics">DataAwsccQbusinessIndexIndexStatisticsTextDocumentStatistics</a>

---


### DataAwsccQbusinessIndexTagsList <a name="DataAwsccQbusinessIndexTagsList" id="@cdktn/provider-awscc.dataAwsccQbusinessIndex.DataAwsccQbusinessIndexTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccQbusinessIndex.DataAwsccQbusinessIndexTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccQbusinessIndexTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessIndex.DataAwsccQbusinessIndexTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessIndex.DataAwsccQbusinessIndexTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessIndex.DataAwsccQbusinessIndexTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccQbusinessIndex.DataAwsccQbusinessIndexTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessIndex.DataAwsccQbusinessIndexTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.dataAwsccQbusinessIndex.DataAwsccQbusinessIndexTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessIndex.DataAwsccQbusinessIndexTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessIndex.DataAwsccQbusinessIndexTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessIndex.DataAwsccQbusinessIndexTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessIndex.DataAwsccQbusinessIndexTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessIndex.DataAwsccQbusinessIndexTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccQbusinessIndex.DataAwsccQbusinessIndexTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccQbusinessIndex.DataAwsccQbusinessIndexTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccQbusinessIndex.DataAwsccQbusinessIndexTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccQbusinessIndex.DataAwsccQbusinessIndexTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccQbusinessIndex.DataAwsccQbusinessIndexTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccQbusinessIndex.DataAwsccQbusinessIndexTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccQbusinessIndex.DataAwsccQbusinessIndexTagsList.get"></a>

```csharp
private DataAwsccQbusinessIndexTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.dataAwsccQbusinessIndex.DataAwsccQbusinessIndexTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessIndex.DataAwsccQbusinessIndexTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessIndex.DataAwsccQbusinessIndexTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccQbusinessIndex.DataAwsccQbusinessIndexTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccQbusinessIndex.DataAwsccQbusinessIndexTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsccQbusinessIndexTagsOutputReference <a name="DataAwsccQbusinessIndexTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccQbusinessIndex.DataAwsccQbusinessIndexTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccQbusinessIndex.DataAwsccQbusinessIndexTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccQbusinessIndexTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessIndex.DataAwsccQbusinessIndexTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessIndex.DataAwsccQbusinessIndexTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessIndex.DataAwsccQbusinessIndexTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessIndex.DataAwsccQbusinessIndexTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccQbusinessIndex.DataAwsccQbusinessIndexTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessIndex.DataAwsccQbusinessIndexTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.dataAwsccQbusinessIndex.DataAwsccQbusinessIndexTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccQbusinessIndex.DataAwsccQbusinessIndexTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessIndex.DataAwsccQbusinessIndexTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessIndex.DataAwsccQbusinessIndexTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessIndex.DataAwsccQbusinessIndexTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessIndex.DataAwsccQbusinessIndexTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessIndex.DataAwsccQbusinessIndexTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessIndex.DataAwsccQbusinessIndexTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessIndex.DataAwsccQbusinessIndexTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessIndex.DataAwsccQbusinessIndexTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessIndex.DataAwsccQbusinessIndexTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessIndex.DataAwsccQbusinessIndexTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessIndex.DataAwsccQbusinessIndexTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessIndex.DataAwsccQbusinessIndexTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessIndex.DataAwsccQbusinessIndexTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccQbusinessIndex.DataAwsccQbusinessIndexTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessIndex.DataAwsccQbusinessIndexTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessIndex.DataAwsccQbusinessIndexTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessIndex.DataAwsccQbusinessIndexTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessIndex.DataAwsccQbusinessIndexTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessIndex.DataAwsccQbusinessIndexTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessIndex.DataAwsccQbusinessIndexTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessIndex.DataAwsccQbusinessIndexTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessIndex.DataAwsccQbusinessIndexTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessIndex.DataAwsccQbusinessIndexTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessIndex.DataAwsccQbusinessIndexTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessIndex.DataAwsccQbusinessIndexTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessIndex.DataAwsccQbusinessIndexTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessIndex.DataAwsccQbusinessIndexTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessIndex.DataAwsccQbusinessIndexTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessIndex.DataAwsccQbusinessIndexTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessIndex.DataAwsccQbusinessIndexTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessIndex.DataAwsccQbusinessIndexTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessIndex.DataAwsccQbusinessIndexTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessIndex.DataAwsccQbusinessIndexTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccQbusinessIndex.DataAwsccQbusinessIndexTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccQbusinessIndex.DataAwsccQbusinessIndexTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccQbusinessIndex.DataAwsccQbusinessIndexTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccQbusinessIndex.DataAwsccQbusinessIndexTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessIndex.DataAwsccQbusinessIndexTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessIndex.DataAwsccQbusinessIndexTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessIndex.DataAwsccQbusinessIndexTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessIndex.DataAwsccQbusinessIndexTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessIndex.DataAwsccQbusinessIndexTagsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessIndex.DataAwsccQbusinessIndexTags">DataAwsccQbusinessIndexTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccQbusinessIndex.DataAwsccQbusinessIndexTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccQbusinessIndex.DataAwsccQbusinessIndexTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dataAwsccQbusinessIndex.DataAwsccQbusinessIndexTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccQbusinessIndex.DataAwsccQbusinessIndexTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccQbusinessIndex.DataAwsccQbusinessIndexTagsOutputReference.property.internalValue"></a>

```csharp
public DataAwsccQbusinessIndexTags InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQbusinessIndex.DataAwsccQbusinessIndexTags">DataAwsccQbusinessIndexTags</a>

---



