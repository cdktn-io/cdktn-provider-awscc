# `dataAwsccOpensearchmemorySpace` Submodule <a name="`dataAwsccOpensearchmemorySpace` Submodule" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccOpensearchmemorySpace <a name="DataAwsccOpensearchmemorySpace" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpace"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/data-sources/opensearchmemory_space awscc_opensearchmemory_space}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpace.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccOpensearchmemorySpace(Construct Scope, string Id, DataAwsccOpensearchmemorySpaceConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpace.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpace.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpace.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceConfig">DataAwsccOpensearchmemorySpaceConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpace.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpace.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpace.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceConfig">DataAwsccOpensearchmemorySpaceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpace.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpace.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpace.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpace.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpace.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpace.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpace.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpace.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpace.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpace.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpace.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpace.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpace.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpace.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpace.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpace.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpace.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpace.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpace.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpace.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpace.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpace.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpace.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpace.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpace.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpace.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpace.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpace.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpace.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpace.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpace.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpace.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpace.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpace.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpace.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpace.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpace.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpace.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpace.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpace.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpace.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpace.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpace.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpace.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpace.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpace.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpace.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpace.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpace.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpace.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpace.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpace.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpace.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpace.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccOpensearchmemorySpace resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpace.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccOpensearchmemorySpace.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpace.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpace.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccOpensearchmemorySpace.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpace.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpace.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccOpensearchmemorySpace.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpace.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpace.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccOpensearchmemorySpace.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataAwsccOpensearchmemorySpace resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpace.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpace.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccOpensearchmemorySpace to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpace.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccOpensearchmemorySpace that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/data-sources/opensearchmemory_space#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpace.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccOpensearchmemorySpace to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpace.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpace.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpace.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpace.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpace.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpace.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpace.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpace.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpace.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpace.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpace.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpace.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpace.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpace.property.createdAt">CreatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpace.property.encryptionConfiguration">EncryptionConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceEncryptionConfigurationOutputReference">DataAwsccOpensearchmemorySpaceEncryptionConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpace.property.eventExpiryDays">EventExpiryDays</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpace.property.extractionModelId">ExtractionModelId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpace.property.memoryExpiryDays">MemoryExpiryDays</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpace.property.memoryStrategies">MemoryStrategies</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceMemoryStrategiesList">DataAwsccOpensearchmemorySpaceMemoryStrategiesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpace.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpace.property.spaceId">SpaceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpace.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpace.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceTagsList">DataAwsccOpensearchmemorySpaceTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpace.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpace.property.id">Id</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpace.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpace.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpace.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpace.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpace.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpace.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpace.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpace.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpace.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpace.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpace.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpace.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpace.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpace.property.createdAt"></a>

```csharp
public string CreatedAt { get; }
```

- *Type:* string

---

##### `EncryptionConfiguration`<sup>Required</sup> <a name="EncryptionConfiguration" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpace.property.encryptionConfiguration"></a>

```csharp
public DataAwsccOpensearchmemorySpaceEncryptionConfigurationOutputReference EncryptionConfiguration { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceEncryptionConfigurationOutputReference">DataAwsccOpensearchmemorySpaceEncryptionConfigurationOutputReference</a>

---

##### `EventExpiryDays`<sup>Required</sup> <a name="EventExpiryDays" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpace.property.eventExpiryDays"></a>

```csharp
public double EventExpiryDays { get; }
```

- *Type:* double

---

##### `ExtractionModelId`<sup>Required</sup> <a name="ExtractionModelId" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpace.property.extractionModelId"></a>

```csharp
public string ExtractionModelId { get; }
```

- *Type:* string

---

##### `MemoryExpiryDays`<sup>Required</sup> <a name="MemoryExpiryDays" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpace.property.memoryExpiryDays"></a>

```csharp
public double MemoryExpiryDays { get; }
```

- *Type:* double

---

##### `MemoryStrategies`<sup>Required</sup> <a name="MemoryStrategies" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpace.property.memoryStrategies"></a>

```csharp
public DataAwsccOpensearchmemorySpaceMemoryStrategiesList MemoryStrategies { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceMemoryStrategiesList">DataAwsccOpensearchmemorySpaceMemoryStrategiesList</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpace.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `SpaceId`<sup>Required</sup> <a name="SpaceId" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpace.property.spaceId"></a>

```csharp
public string SpaceId { get; }
```

- *Type:* string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpace.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpace.property.tags"></a>

```csharp
public DataAwsccOpensearchmemorySpaceTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceTagsList">DataAwsccOpensearchmemorySpaceTagsList</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpace.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpace.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpace.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpace.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccOpensearchmemorySpaceConfig <a name="DataAwsccOpensearchmemorySpaceConfig" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccOpensearchmemorySpaceConfig {
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceConfig.property.id">Id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/data-sources/opensearchmemory_space#id DataAwsccOpensearchmemorySpace#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccOpensearchmemorySpaceEncryptionConfiguration <a name="DataAwsccOpensearchmemorySpaceEncryptionConfiguration" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceEncryptionConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceEncryptionConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccOpensearchmemorySpaceEncryptionConfiguration {

};
```


### DataAwsccOpensearchmemorySpaceMemoryStrategies <a name="DataAwsccOpensearchmemorySpaceMemoryStrategies" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceMemoryStrategies"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceMemoryStrategies.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccOpensearchmemorySpaceMemoryStrategies {

};
```


### DataAwsccOpensearchmemorySpaceMemoryStrategiesConfiguration <a name="DataAwsccOpensearchmemorySpaceMemoryStrategiesConfiguration" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceMemoryStrategiesConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceMemoryStrategiesConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccOpensearchmemorySpaceMemoryStrategiesConfiguration {

};
```


### DataAwsccOpensearchmemorySpaceTags <a name="DataAwsccOpensearchmemorySpaceTags" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccOpensearchmemorySpaceTags {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccOpensearchmemorySpaceEncryptionConfigurationOutputReference <a name="DataAwsccOpensearchmemorySpaceEncryptionConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceEncryptionConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceEncryptionConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccOpensearchmemorySpaceEncryptionConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceEncryptionConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceEncryptionConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceEncryptionConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceEncryptionConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceEncryptionConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceEncryptionConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceEncryptionConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceEncryptionConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceEncryptionConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceEncryptionConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceEncryptionConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceEncryptionConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceEncryptionConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceEncryptionConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceEncryptionConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceEncryptionConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceEncryptionConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceEncryptionConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceEncryptionConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceEncryptionConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceEncryptionConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceEncryptionConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceEncryptionConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceEncryptionConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceEncryptionConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceEncryptionConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceEncryptionConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceEncryptionConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceEncryptionConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceEncryptionConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceEncryptionConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceEncryptionConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceEncryptionConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceEncryptionConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceEncryptionConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceEncryptionConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceEncryptionConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceEncryptionConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceEncryptionConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceEncryptionConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceEncryptionConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceEncryptionConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceEncryptionConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceEncryptionConfigurationOutputReference.property.kmsKeyArn">KmsKeyArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceEncryptionConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceEncryptionConfiguration">DataAwsccOpensearchmemorySpaceEncryptionConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceEncryptionConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceEncryptionConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KmsKeyArn`<sup>Required</sup> <a name="KmsKeyArn" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceEncryptionConfigurationOutputReference.property.kmsKeyArn"></a>

```csharp
public string KmsKeyArn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceEncryptionConfigurationOutputReference.property.internalValue"></a>

```csharp
public DataAwsccOpensearchmemorySpaceEncryptionConfiguration InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceEncryptionConfiguration">DataAwsccOpensearchmemorySpaceEncryptionConfiguration</a>

---


### DataAwsccOpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference <a name="DataAwsccOpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccOpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.property.consolidationEnabled">ConsolidationEnabled</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.property.extractEveryNMessages">ExtractEveryNMessages</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.property.extractEveryNTokens">ExtractEveryNTokens</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.property.extractionPrompt">ExtractionPrompt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.property.extractionSeedRecentN">ExtractionSeedRecentN</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.property.extractionSeedTopK">ExtractionSeedTopK</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.property.idleTimeoutSeconds">IdleTimeoutSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceMemoryStrategiesConfiguration">DataAwsccOpensearchmemorySpaceMemoryStrategiesConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ConsolidationEnabled`<sup>Required</sup> <a name="ConsolidationEnabled" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.property.consolidationEnabled"></a>

```csharp
public IResolvable ConsolidationEnabled { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `ExtractEveryNMessages`<sup>Required</sup> <a name="ExtractEveryNMessages" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.property.extractEveryNMessages"></a>

```csharp
public double ExtractEveryNMessages { get; }
```

- *Type:* double

---

##### `ExtractEveryNTokens`<sup>Required</sup> <a name="ExtractEveryNTokens" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.property.extractEveryNTokens"></a>

```csharp
public double ExtractEveryNTokens { get; }
```

- *Type:* double

---

##### `ExtractionPrompt`<sup>Required</sup> <a name="ExtractionPrompt" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.property.extractionPrompt"></a>

```csharp
public string ExtractionPrompt { get; }
```

- *Type:* string

---

##### `ExtractionSeedRecentN`<sup>Required</sup> <a name="ExtractionSeedRecentN" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.property.extractionSeedRecentN"></a>

```csharp
public double ExtractionSeedRecentN { get; }
```

- *Type:* double

---

##### `ExtractionSeedTopK`<sup>Required</sup> <a name="ExtractionSeedTopK" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.property.extractionSeedTopK"></a>

```csharp
public double ExtractionSeedTopK { get; }
```

- *Type:* double

---

##### `IdleTimeoutSeconds`<sup>Required</sup> <a name="IdleTimeoutSeconds" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.property.idleTimeoutSeconds"></a>

```csharp
public double IdleTimeoutSeconds { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.property.internalValue"></a>

```csharp
public DataAwsccOpensearchmemorySpaceMemoryStrategiesConfiguration InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceMemoryStrategiesConfiguration">DataAwsccOpensearchmemorySpaceMemoryStrategiesConfiguration</a>

---


### DataAwsccOpensearchmemorySpaceMemoryStrategiesList <a name="DataAwsccOpensearchmemorySpaceMemoryStrategiesList" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceMemoryStrategiesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceMemoryStrategiesList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccOpensearchmemorySpaceMemoryStrategiesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceMemoryStrategiesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceMemoryStrategiesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceMemoryStrategiesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceMemoryStrategiesList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceMemoryStrategiesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceMemoryStrategiesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceMemoryStrategiesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceMemoryStrategiesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceMemoryStrategiesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceMemoryStrategiesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceMemoryStrategiesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceMemoryStrategiesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceMemoryStrategiesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceMemoryStrategiesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceMemoryStrategiesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceMemoryStrategiesList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceMemoryStrategiesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceMemoryStrategiesList.get"></a>

```csharp
private DataAwsccOpensearchmemorySpaceMemoryStrategiesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceMemoryStrategiesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceMemoryStrategiesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceMemoryStrategiesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceMemoryStrategiesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceMemoryStrategiesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsccOpensearchmemorySpaceMemoryStrategiesOutputReference <a name="DataAwsccOpensearchmemorySpaceMemoryStrategiesOutputReference" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceMemoryStrategiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceMemoryStrategiesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccOpensearchmemorySpaceMemoryStrategiesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceMemoryStrategiesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceMemoryStrategiesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceMemoryStrategiesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceMemoryStrategiesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceMemoryStrategiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceMemoryStrategiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceMemoryStrategiesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceMemoryStrategiesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceMemoryStrategiesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceMemoryStrategiesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceMemoryStrategiesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceMemoryStrategiesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceMemoryStrategiesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceMemoryStrategiesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceMemoryStrategiesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceMemoryStrategiesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceMemoryStrategiesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceMemoryStrategiesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceMemoryStrategiesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceMemoryStrategiesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceMemoryStrategiesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceMemoryStrategiesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceMemoryStrategiesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceMemoryStrategiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceMemoryStrategiesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceMemoryStrategiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceMemoryStrategiesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceMemoryStrategiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceMemoryStrategiesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceMemoryStrategiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceMemoryStrategiesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceMemoryStrategiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceMemoryStrategiesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceMemoryStrategiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceMemoryStrategiesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceMemoryStrategiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceMemoryStrategiesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceMemoryStrategiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceMemoryStrategiesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceMemoryStrategiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceMemoryStrategiesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceMemoryStrategiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceMemoryStrategiesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceMemoryStrategiesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceMemoryStrategiesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceMemoryStrategiesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceMemoryStrategiesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceMemoryStrategiesOutputReference.property.configuration">Configuration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference">DataAwsccOpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceMemoryStrategiesOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceMemoryStrategiesOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceMemoryStrategiesOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceMemoryStrategiesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceMemoryStrategies">DataAwsccOpensearchmemorySpaceMemoryStrategies</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceMemoryStrategiesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceMemoryStrategiesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Configuration`<sup>Required</sup> <a name="Configuration" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceMemoryStrategiesOutputReference.property.configuration"></a>

```csharp
public DataAwsccOpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference Configuration { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference">DataAwsccOpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference</a>

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceMemoryStrategiesOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceMemoryStrategiesOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceMemoryStrategiesOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceMemoryStrategiesOutputReference.property.internalValue"></a>

```csharp
public DataAwsccOpensearchmemorySpaceMemoryStrategies InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceMemoryStrategies">DataAwsccOpensearchmemorySpaceMemoryStrategies</a>

---


### DataAwsccOpensearchmemorySpaceTagsList <a name="DataAwsccOpensearchmemorySpaceTagsList" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccOpensearchmemorySpaceTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceTagsList.get"></a>

```csharp
private DataAwsccOpensearchmemorySpaceTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsccOpensearchmemorySpaceTagsOutputReference <a name="DataAwsccOpensearchmemorySpaceTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccOpensearchmemorySpaceTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceTagsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceTags">DataAwsccOpensearchmemorySpaceTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceTagsOutputReference.property.internalValue"></a>

```csharp
public DataAwsccOpensearchmemorySpaceTags InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceTags">DataAwsccOpensearchmemorySpaceTags</a>

---



