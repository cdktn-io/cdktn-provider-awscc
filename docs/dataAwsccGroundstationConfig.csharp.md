# `dataAwsccGroundstationConfig` Submodule <a name="`dataAwsccGroundstationConfig` Submodule" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccGroundstationConfig <a name="DataAwsccGroundstationConfig" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfig"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/groundstation_config awscc_groundstation_config}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccGroundstationConfig(Construct Scope, string Id, DataAwsccGroundstationConfigConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfig.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfig.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfig.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfig">DataAwsccGroundstationConfigConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfig.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfig.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfig.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfig">DataAwsccGroundstationConfigConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfig.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfig.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfig.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfig.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfig.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfig.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfig.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfig.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfig.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfig.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfig.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfig.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfig.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfig.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfig.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfig.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfig.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfig.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfig.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfig.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfig.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfig.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfig.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfig.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfig.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfig.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfig.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfig.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfig.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfig.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfig.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfig.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfig.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfig.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfig.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfig.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfig.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfig.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfig.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfig.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfig.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfig.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfig.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccGroundstationConfig resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfig.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccGroundstationConfig.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfig.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfig.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccGroundstationConfig.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfig.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfig.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccGroundstationConfig.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfig.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfig.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccGroundstationConfig.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataAwsccGroundstationConfig resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccGroundstationConfig to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccGroundstationConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/groundstation_config#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccGroundstationConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfig.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfig.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfig.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfig.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfig.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfig.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfig.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfig.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfig.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfig.property.configData">ConfigData</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataOutputReference">DataAwsccGroundstationConfigConfigDataOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfig.property.configId">ConfigId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfig.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfig.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigTagsList">DataAwsccGroundstationConfigTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfig.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfig.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfig.property.id">Id</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfig.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfig.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfig.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfig.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfig.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfig.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfig.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfig.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfig.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `ConfigData`<sup>Required</sup> <a name="ConfigData" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfig.property.configData"></a>

```csharp
public DataAwsccGroundstationConfigConfigDataOutputReference ConfigData { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataOutputReference">DataAwsccGroundstationConfigConfigDataOutputReference</a>

---

##### `ConfigId`<sup>Required</sup> <a name="ConfigId" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfig.property.configId"></a>

```csharp
public string ConfigId { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfig.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfig.property.tags"></a>

```csharp
public DataAwsccGroundstationConfigTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigTagsList">DataAwsccGroundstationConfigTagsList</a>

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfig.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfig.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfig.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfig.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfig.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccGroundstationConfigConfig <a name="DataAwsccGroundstationConfigConfig" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccGroundstationConfigConfig {
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfig.property.id">Id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/groundstation_config#id DataAwsccGroundstationConfig#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccGroundstationConfigConfigData <a name="DataAwsccGroundstationConfigConfigData" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigData"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigData.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccGroundstationConfigConfigData {

};
```


### DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfig <a name="DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfig" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfig {

};
```


### DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfig <a name="DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfig" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfig {

};
```


### DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigBandwidth <a name="DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigBandwidth" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigBandwidth"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigBandwidth.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigBandwidth {

};
```


### DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigCenterFrequency <a name="DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigCenterFrequency" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigCenterFrequency"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigCenterFrequency.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigCenterFrequency {

};
```


### DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfig <a name="DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfig" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfig {

};
```


### DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDecodeConfig <a name="DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDecodeConfig" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDecodeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDecodeConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDecodeConfig {

};
```


### DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDemodulationConfig <a name="DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDemodulationConfig" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDemodulationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDemodulationConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDemodulationConfig {

};
```


### DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfig <a name="DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfig" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfig {

};
```


### DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigBandwidth <a name="DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigBandwidth" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigBandwidth"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigBandwidth.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigBandwidth {

};
```


### DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigCenterFrequency <a name="DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigCenterFrequency" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigCenterFrequency"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigCenterFrequency.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigCenterFrequency {

};
```


### DataAwsccGroundstationConfigConfigDataAntennaUplinkConfig <a name="DataAwsccGroundstationConfigConfigDataAntennaUplinkConfig" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaUplinkConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaUplinkConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccGroundstationConfigConfigDataAntennaUplinkConfig {

};
```


### DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfig <a name="DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfig" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfig {

};
```


### DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigCenterFrequency <a name="DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigCenterFrequency" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigCenterFrequency"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigCenterFrequency.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigCenterFrequency {

};
```


### DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigTargetEirp <a name="DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigTargetEirp" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigTargetEirp"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigTargetEirp.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigTargetEirp {

};
```


### DataAwsccGroundstationConfigConfigDataDataflowEndpointConfig <a name="DataAwsccGroundstationConfigConfigDataDataflowEndpointConfig" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataDataflowEndpointConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataDataflowEndpointConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccGroundstationConfigConfigDataDataflowEndpointConfig {

};
```


### DataAwsccGroundstationConfigConfigDataS3RecordingConfig <a name="DataAwsccGroundstationConfigConfigDataS3RecordingConfig" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataS3RecordingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataS3RecordingConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccGroundstationConfigConfigDataS3RecordingConfig {

};
```


### DataAwsccGroundstationConfigConfigDataTelemetrySinkConfig <a name="DataAwsccGroundstationConfigConfigDataTelemetrySinkConfig" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataTelemetrySinkConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataTelemetrySinkConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccGroundstationConfigConfigDataTelemetrySinkConfig {

};
```


### DataAwsccGroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkData <a name="DataAwsccGroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkData" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkData"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkData.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccGroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkData {

};
```


### DataAwsccGroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataKinesisDataStreamData <a name="DataAwsccGroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataKinesisDataStreamData" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataKinesisDataStreamData"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataKinesisDataStreamData.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccGroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataKinesisDataStreamData {

};
```


### DataAwsccGroundstationConfigConfigDataTrackingConfig <a name="DataAwsccGroundstationConfigConfigDataTrackingConfig" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataTrackingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataTrackingConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccGroundstationConfigConfigDataTrackingConfig {

};
```


### DataAwsccGroundstationConfigConfigDataUplinkEchoConfig <a name="DataAwsccGroundstationConfigConfigDataUplinkEchoConfig" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataUplinkEchoConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataUplinkEchoConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccGroundstationConfigConfigDataUplinkEchoConfig {

};
```


### DataAwsccGroundstationConfigTags <a name="DataAwsccGroundstationConfigTags" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccGroundstationConfigTags {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigOutputReference <a name="DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigOutputReference.property.spectrumConfig">SpectrumConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigOutputReference">DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfig">DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `SpectrumConfig`<sup>Required</sup> <a name="SpectrumConfig" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigOutputReference.property.spectrumConfig"></a>

```csharp
public DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigOutputReference SpectrumConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigOutputReference">DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigOutputReference.property.internalValue"></a>

```csharp
public DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfig">DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfig</a>

---


### DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigBandwidthOutputReference <a name="DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigBandwidthOutputReference" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigBandwidthOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigBandwidthOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigBandwidthOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigBandwidthOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigBandwidthOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigBandwidthOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigBandwidthOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigBandwidthOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigBandwidthOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigBandwidthOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigBandwidthOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigBandwidthOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigBandwidthOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigBandwidthOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigBandwidthOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigBandwidthOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigBandwidthOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigBandwidthOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigBandwidthOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigBandwidthOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigBandwidthOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigBandwidthOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigBandwidthOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigBandwidthOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigBandwidthOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigBandwidthOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigBandwidthOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigBandwidthOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigBandwidthOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigBandwidthOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigBandwidthOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigBandwidthOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigBandwidthOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigBandwidthOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigBandwidthOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigBandwidthOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigBandwidthOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigBandwidthOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigBandwidthOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigBandwidthOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigBandwidthOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigBandwidthOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigBandwidthOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigBandwidthOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigBandwidthOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigBandwidthOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigBandwidthOutputReference.property.units">Units</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigBandwidthOutputReference.property.value">Value</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigBandwidthOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigBandwidth">DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigBandwidth</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigBandwidthOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigBandwidthOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Units`<sup>Required</sup> <a name="Units" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigBandwidthOutputReference.property.units"></a>

```csharp
public string Units { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigBandwidthOutputReference.property.value"></a>

```csharp
public double Value { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigBandwidthOutputReference.property.internalValue"></a>

```csharp
public DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigBandwidth InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigBandwidth">DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigBandwidth</a>

---


### DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigCenterFrequencyOutputReference <a name="DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigCenterFrequencyOutputReference" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigCenterFrequencyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigCenterFrequencyOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigCenterFrequencyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigCenterFrequencyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigCenterFrequencyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigCenterFrequencyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigCenterFrequencyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigCenterFrequencyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigCenterFrequencyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigCenterFrequencyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigCenterFrequencyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigCenterFrequencyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigCenterFrequencyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigCenterFrequencyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigCenterFrequencyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigCenterFrequencyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigCenterFrequencyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigCenterFrequencyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigCenterFrequencyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigCenterFrequencyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigCenterFrequencyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigCenterFrequencyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigCenterFrequencyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigCenterFrequencyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigCenterFrequencyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigCenterFrequencyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigCenterFrequencyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigCenterFrequencyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigCenterFrequencyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigCenterFrequencyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigCenterFrequencyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigCenterFrequencyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigCenterFrequencyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigCenterFrequencyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigCenterFrequencyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigCenterFrequencyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigCenterFrequencyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigCenterFrequencyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigCenterFrequencyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigCenterFrequencyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigCenterFrequencyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigCenterFrequencyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigCenterFrequencyOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigCenterFrequencyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigCenterFrequencyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigCenterFrequencyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigCenterFrequencyOutputReference.property.units">Units</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigCenterFrequencyOutputReference.property.value">Value</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigCenterFrequencyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigCenterFrequency">DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigCenterFrequency</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigCenterFrequencyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigCenterFrequencyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Units`<sup>Required</sup> <a name="Units" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigCenterFrequencyOutputReference.property.units"></a>

```csharp
public string Units { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigCenterFrequencyOutputReference.property.value"></a>

```csharp
public double Value { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigCenterFrequencyOutputReference.property.internalValue"></a>

```csharp
public DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigCenterFrequency InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigCenterFrequency">DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigCenterFrequency</a>

---


### DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigOutputReference <a name="DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigOutputReference.property.bandwidth">Bandwidth</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigBandwidthOutputReference">DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigBandwidthOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigOutputReference.property.centerFrequency">CenterFrequency</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigCenterFrequencyOutputReference">DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigCenterFrequencyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigOutputReference.property.polarization">Polarization</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfig">DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Bandwidth`<sup>Required</sup> <a name="Bandwidth" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigOutputReference.property.bandwidth"></a>

```csharp
public DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigBandwidthOutputReference Bandwidth { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigBandwidthOutputReference">DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigBandwidthOutputReference</a>

---

##### `CenterFrequency`<sup>Required</sup> <a name="CenterFrequency" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigOutputReference.property.centerFrequency"></a>

```csharp
public DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigCenterFrequencyOutputReference CenterFrequency { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigCenterFrequencyOutputReference">DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigCenterFrequencyOutputReference</a>

---

##### `Polarization`<sup>Required</sup> <a name="Polarization" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigOutputReference.property.polarization"></a>

```csharp
public string Polarization { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigOutputReference.property.internalValue"></a>

```csharp
public DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfig">DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfig</a>

---


### DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDecodeConfigOutputReference <a name="DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDecodeConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDecodeConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDecodeConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDecodeConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDecodeConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDecodeConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDecodeConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDecodeConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDecodeConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDecodeConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDecodeConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDecodeConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDecodeConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDecodeConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDecodeConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDecodeConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDecodeConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDecodeConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDecodeConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDecodeConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDecodeConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDecodeConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDecodeConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDecodeConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDecodeConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDecodeConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDecodeConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDecodeConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDecodeConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDecodeConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDecodeConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDecodeConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDecodeConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDecodeConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDecodeConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDecodeConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDecodeConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDecodeConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDecodeConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDecodeConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDecodeConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDecodeConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDecodeConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDecodeConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDecodeConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDecodeConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDecodeConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDecodeConfigOutputReference.property.unvalidatedJson">UnvalidatedJson</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDecodeConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDecodeConfig">DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDecodeConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDecodeConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDecodeConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `UnvalidatedJson`<sup>Required</sup> <a name="UnvalidatedJson" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDecodeConfigOutputReference.property.unvalidatedJson"></a>

```csharp
public string UnvalidatedJson { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDecodeConfigOutputReference.property.internalValue"></a>

```csharp
public DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDecodeConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDecodeConfig">DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDecodeConfig</a>

---


### DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDemodulationConfigOutputReference <a name="DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDemodulationConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDemodulationConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDemodulationConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDemodulationConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDemodulationConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDemodulationConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDemodulationConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDemodulationConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDemodulationConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDemodulationConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDemodulationConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDemodulationConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDemodulationConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDemodulationConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDemodulationConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDemodulationConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDemodulationConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDemodulationConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDemodulationConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDemodulationConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDemodulationConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDemodulationConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDemodulationConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDemodulationConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDemodulationConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDemodulationConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDemodulationConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDemodulationConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDemodulationConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDemodulationConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDemodulationConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDemodulationConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDemodulationConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDemodulationConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDemodulationConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDemodulationConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDemodulationConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDemodulationConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDemodulationConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDemodulationConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDemodulationConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDemodulationConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDemodulationConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDemodulationConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDemodulationConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDemodulationConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDemodulationConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDemodulationConfigOutputReference.property.unvalidatedJson">UnvalidatedJson</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDemodulationConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDemodulationConfig">DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDemodulationConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDemodulationConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDemodulationConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `UnvalidatedJson`<sup>Required</sup> <a name="UnvalidatedJson" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDemodulationConfigOutputReference.property.unvalidatedJson"></a>

```csharp
public string UnvalidatedJson { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDemodulationConfigOutputReference.property.internalValue"></a>

```csharp
public DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDemodulationConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDemodulationConfig">DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDemodulationConfig</a>

---


### DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigOutputReference <a name="DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigOutputReference.property.decodeConfig">DecodeConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDecodeConfigOutputReference">DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDecodeConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigOutputReference.property.demodulationConfig">DemodulationConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDemodulationConfigOutputReference">DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDemodulationConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigOutputReference.property.spectrumConfig">SpectrumConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigOutputReference">DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfig">DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DecodeConfig`<sup>Required</sup> <a name="DecodeConfig" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigOutputReference.property.decodeConfig"></a>

```csharp
public DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDecodeConfigOutputReference DecodeConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDecodeConfigOutputReference">DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDecodeConfigOutputReference</a>

---

##### `DemodulationConfig`<sup>Required</sup> <a name="DemodulationConfig" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigOutputReference.property.demodulationConfig"></a>

```csharp
public DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDemodulationConfigOutputReference DemodulationConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDemodulationConfigOutputReference">DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDemodulationConfigOutputReference</a>

---

##### `SpectrumConfig`<sup>Required</sup> <a name="SpectrumConfig" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigOutputReference.property.spectrumConfig"></a>

```csharp
public DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigOutputReference SpectrumConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigOutputReference">DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigOutputReference.property.internalValue"></a>

```csharp
public DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfig">DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfig</a>

---


### DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigBandwidthOutputReference <a name="DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigBandwidthOutputReference" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigBandwidthOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigBandwidthOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigBandwidthOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigBandwidthOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigBandwidthOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigBandwidthOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigBandwidthOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigBandwidthOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigBandwidthOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigBandwidthOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigBandwidthOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigBandwidthOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigBandwidthOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigBandwidthOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigBandwidthOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigBandwidthOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigBandwidthOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigBandwidthOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigBandwidthOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigBandwidthOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigBandwidthOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigBandwidthOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigBandwidthOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigBandwidthOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigBandwidthOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigBandwidthOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigBandwidthOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigBandwidthOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigBandwidthOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigBandwidthOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigBandwidthOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigBandwidthOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigBandwidthOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigBandwidthOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigBandwidthOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigBandwidthOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigBandwidthOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigBandwidthOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigBandwidthOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigBandwidthOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigBandwidthOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigBandwidthOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigBandwidthOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigBandwidthOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigBandwidthOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigBandwidthOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigBandwidthOutputReference.property.units">Units</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigBandwidthOutputReference.property.value">Value</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigBandwidthOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigBandwidth">DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigBandwidth</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigBandwidthOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigBandwidthOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Units`<sup>Required</sup> <a name="Units" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigBandwidthOutputReference.property.units"></a>

```csharp
public string Units { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigBandwidthOutputReference.property.value"></a>

```csharp
public double Value { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigBandwidthOutputReference.property.internalValue"></a>

```csharp
public DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigBandwidth InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigBandwidth">DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigBandwidth</a>

---


### DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigCenterFrequencyOutputReference <a name="DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigCenterFrequencyOutputReference" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigCenterFrequencyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigCenterFrequencyOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigCenterFrequencyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigCenterFrequencyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigCenterFrequencyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigCenterFrequencyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigCenterFrequencyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigCenterFrequencyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigCenterFrequencyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigCenterFrequencyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigCenterFrequencyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigCenterFrequencyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigCenterFrequencyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigCenterFrequencyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigCenterFrequencyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigCenterFrequencyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigCenterFrequencyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigCenterFrequencyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigCenterFrequencyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigCenterFrequencyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigCenterFrequencyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigCenterFrequencyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigCenterFrequencyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigCenterFrequencyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigCenterFrequencyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigCenterFrequencyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigCenterFrequencyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigCenterFrequencyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigCenterFrequencyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigCenterFrequencyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigCenterFrequencyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigCenterFrequencyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigCenterFrequencyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigCenterFrequencyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigCenterFrequencyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigCenterFrequencyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigCenterFrequencyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigCenterFrequencyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigCenterFrequencyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigCenterFrequencyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigCenterFrequencyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigCenterFrequencyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigCenterFrequencyOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigCenterFrequencyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigCenterFrequencyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigCenterFrequencyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigCenterFrequencyOutputReference.property.units">Units</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigCenterFrequencyOutputReference.property.value">Value</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigCenterFrequencyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigCenterFrequency">DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigCenterFrequency</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigCenterFrequencyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigCenterFrequencyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Units`<sup>Required</sup> <a name="Units" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigCenterFrequencyOutputReference.property.units"></a>

```csharp
public string Units { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigCenterFrequencyOutputReference.property.value"></a>

```csharp
public double Value { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigCenterFrequencyOutputReference.property.internalValue"></a>

```csharp
public DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigCenterFrequency InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigCenterFrequency">DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigCenterFrequency</a>

---


### DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigOutputReference <a name="DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigOutputReference.property.bandwidth">Bandwidth</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigBandwidthOutputReference">DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigBandwidthOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigOutputReference.property.centerFrequency">CenterFrequency</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigCenterFrequencyOutputReference">DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigCenterFrequencyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigOutputReference.property.polarization">Polarization</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfig">DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Bandwidth`<sup>Required</sup> <a name="Bandwidth" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigOutputReference.property.bandwidth"></a>

```csharp
public DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigBandwidthOutputReference Bandwidth { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigBandwidthOutputReference">DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigBandwidthOutputReference</a>

---

##### `CenterFrequency`<sup>Required</sup> <a name="CenterFrequency" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigOutputReference.property.centerFrequency"></a>

```csharp
public DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigCenterFrequencyOutputReference CenterFrequency { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigCenterFrequencyOutputReference">DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigCenterFrequencyOutputReference</a>

---

##### `Polarization`<sup>Required</sup> <a name="Polarization" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigOutputReference.property.polarization"></a>

```csharp
public string Polarization { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigOutputReference.property.internalValue"></a>

```csharp
public DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfig">DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfig</a>

---


### DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigOutputReference <a name="DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigOutputReference.property.spectrumConfig">SpectrumConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigOutputReference">DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigOutputReference.property.targetEirp">TargetEirp</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigTargetEirpOutputReference">DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigTargetEirpOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigOutputReference.property.transmitDisabled">TransmitDisabled</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaUplinkConfig">DataAwsccGroundstationConfigConfigDataAntennaUplinkConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `SpectrumConfig`<sup>Required</sup> <a name="SpectrumConfig" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigOutputReference.property.spectrumConfig"></a>

```csharp
public DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigOutputReference SpectrumConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigOutputReference">DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigOutputReference</a>

---

##### `TargetEirp`<sup>Required</sup> <a name="TargetEirp" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigOutputReference.property.targetEirp"></a>

```csharp
public DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigTargetEirpOutputReference TargetEirp { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigTargetEirpOutputReference">DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigTargetEirpOutputReference</a>

---

##### `TransmitDisabled`<sup>Required</sup> <a name="TransmitDisabled" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigOutputReference.property.transmitDisabled"></a>

```csharp
public IResolvable TransmitDisabled { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigOutputReference.property.internalValue"></a>

```csharp
public DataAwsccGroundstationConfigConfigDataAntennaUplinkConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaUplinkConfig">DataAwsccGroundstationConfigConfigDataAntennaUplinkConfig</a>

---


### DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigCenterFrequencyOutputReference <a name="DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigCenterFrequencyOutputReference" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigCenterFrequencyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigCenterFrequencyOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigCenterFrequencyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigCenterFrequencyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigCenterFrequencyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigCenterFrequencyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigCenterFrequencyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigCenterFrequencyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigCenterFrequencyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigCenterFrequencyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigCenterFrequencyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigCenterFrequencyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigCenterFrequencyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigCenterFrequencyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigCenterFrequencyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigCenterFrequencyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigCenterFrequencyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigCenterFrequencyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigCenterFrequencyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigCenterFrequencyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigCenterFrequencyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigCenterFrequencyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigCenterFrequencyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigCenterFrequencyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigCenterFrequencyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigCenterFrequencyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigCenterFrequencyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigCenterFrequencyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigCenterFrequencyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigCenterFrequencyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigCenterFrequencyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigCenterFrequencyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigCenterFrequencyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigCenterFrequencyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigCenterFrequencyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigCenterFrequencyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigCenterFrequencyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigCenterFrequencyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigCenterFrequencyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigCenterFrequencyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigCenterFrequencyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigCenterFrequencyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigCenterFrequencyOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigCenterFrequencyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigCenterFrequencyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigCenterFrequencyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigCenterFrequencyOutputReference.property.units">Units</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigCenterFrequencyOutputReference.property.value">Value</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigCenterFrequencyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigCenterFrequency">DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigCenterFrequency</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigCenterFrequencyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigCenterFrequencyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Units`<sup>Required</sup> <a name="Units" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigCenterFrequencyOutputReference.property.units"></a>

```csharp
public string Units { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigCenterFrequencyOutputReference.property.value"></a>

```csharp
public double Value { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigCenterFrequencyOutputReference.property.internalValue"></a>

```csharp
public DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigCenterFrequency InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigCenterFrequency">DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigCenterFrequency</a>

---


### DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigOutputReference <a name="DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigOutputReference.property.centerFrequency">CenterFrequency</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigCenterFrequencyOutputReference">DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigCenterFrequencyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigOutputReference.property.polarization">Polarization</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfig">DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CenterFrequency`<sup>Required</sup> <a name="CenterFrequency" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigOutputReference.property.centerFrequency"></a>

```csharp
public DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigCenterFrequencyOutputReference CenterFrequency { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigCenterFrequencyOutputReference">DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigCenterFrequencyOutputReference</a>

---

##### `Polarization`<sup>Required</sup> <a name="Polarization" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigOutputReference.property.polarization"></a>

```csharp
public string Polarization { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigOutputReference.property.internalValue"></a>

```csharp
public DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfig">DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfig</a>

---


### DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigTargetEirpOutputReference <a name="DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigTargetEirpOutputReference" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigTargetEirpOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigTargetEirpOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigTargetEirpOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigTargetEirpOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigTargetEirpOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigTargetEirpOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigTargetEirpOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigTargetEirpOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigTargetEirpOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigTargetEirpOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigTargetEirpOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigTargetEirpOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigTargetEirpOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigTargetEirpOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigTargetEirpOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigTargetEirpOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigTargetEirpOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigTargetEirpOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigTargetEirpOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigTargetEirpOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigTargetEirpOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigTargetEirpOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigTargetEirpOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigTargetEirpOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigTargetEirpOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigTargetEirpOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigTargetEirpOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigTargetEirpOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigTargetEirpOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigTargetEirpOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigTargetEirpOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigTargetEirpOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigTargetEirpOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigTargetEirpOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigTargetEirpOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigTargetEirpOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigTargetEirpOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigTargetEirpOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigTargetEirpOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigTargetEirpOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigTargetEirpOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigTargetEirpOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigTargetEirpOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigTargetEirpOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigTargetEirpOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigTargetEirpOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigTargetEirpOutputReference.property.units">Units</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigTargetEirpOutputReference.property.value">Value</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigTargetEirpOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigTargetEirp">DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigTargetEirp</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigTargetEirpOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigTargetEirpOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Units`<sup>Required</sup> <a name="Units" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigTargetEirpOutputReference.property.units"></a>

```csharp
public string Units { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigTargetEirpOutputReference.property.value"></a>

```csharp
public double Value { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigTargetEirpOutputReference.property.internalValue"></a>

```csharp
public DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigTargetEirp InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigTargetEirp">DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigTargetEirp</a>

---


### DataAwsccGroundstationConfigConfigDataDataflowEndpointConfigOutputReference <a name="DataAwsccGroundstationConfigConfigDataDataflowEndpointConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataDataflowEndpointConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataDataflowEndpointConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccGroundstationConfigConfigDataDataflowEndpointConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataDataflowEndpointConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataDataflowEndpointConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataDataflowEndpointConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataDataflowEndpointConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataDataflowEndpointConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataDataflowEndpointConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataDataflowEndpointConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataDataflowEndpointConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataDataflowEndpointConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataDataflowEndpointConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataDataflowEndpointConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataDataflowEndpointConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataDataflowEndpointConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataDataflowEndpointConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataDataflowEndpointConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataDataflowEndpointConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataDataflowEndpointConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataDataflowEndpointConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataDataflowEndpointConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataDataflowEndpointConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataDataflowEndpointConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataDataflowEndpointConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataDataflowEndpointConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataDataflowEndpointConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataDataflowEndpointConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataDataflowEndpointConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataDataflowEndpointConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataDataflowEndpointConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataDataflowEndpointConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataDataflowEndpointConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataDataflowEndpointConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataDataflowEndpointConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataDataflowEndpointConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataDataflowEndpointConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataDataflowEndpointConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataDataflowEndpointConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataDataflowEndpointConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataDataflowEndpointConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataDataflowEndpointConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataDataflowEndpointConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataDataflowEndpointConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataDataflowEndpointConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataDataflowEndpointConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataDataflowEndpointConfigOutputReference.property.dataflowEndpointName">DataflowEndpointName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataDataflowEndpointConfigOutputReference.property.dataflowEndpointRegion">DataflowEndpointRegion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataDataflowEndpointConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataDataflowEndpointConfig">DataAwsccGroundstationConfigConfigDataDataflowEndpointConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataDataflowEndpointConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataDataflowEndpointConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DataflowEndpointName`<sup>Required</sup> <a name="DataflowEndpointName" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataDataflowEndpointConfigOutputReference.property.dataflowEndpointName"></a>

```csharp
public string DataflowEndpointName { get; }
```

- *Type:* string

---

##### `DataflowEndpointRegion`<sup>Required</sup> <a name="DataflowEndpointRegion" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataDataflowEndpointConfigOutputReference.property.dataflowEndpointRegion"></a>

```csharp
public string DataflowEndpointRegion { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataDataflowEndpointConfigOutputReference.property.internalValue"></a>

```csharp
public DataAwsccGroundstationConfigConfigDataDataflowEndpointConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataDataflowEndpointConfig">DataAwsccGroundstationConfigConfigDataDataflowEndpointConfig</a>

---


### DataAwsccGroundstationConfigConfigDataOutputReference <a name="DataAwsccGroundstationConfigConfigDataOutputReference" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccGroundstationConfigConfigDataOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataOutputReference.property.antennaDownlinkConfig">AntennaDownlinkConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigOutputReference">DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataOutputReference.property.antennaDownlinkDemodDecodeConfig">AntennaDownlinkDemodDecodeConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigOutputReference">DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataOutputReference.property.antennaUplinkConfig">AntennaUplinkConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigOutputReference">DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataOutputReference.property.dataflowEndpointConfig">DataflowEndpointConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataDataflowEndpointConfigOutputReference">DataAwsccGroundstationConfigConfigDataDataflowEndpointConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataOutputReference.property.s3RecordingConfig">S3RecordingConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataS3RecordingConfigOutputReference">DataAwsccGroundstationConfigConfigDataS3RecordingConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataOutputReference.property.telemetrySinkConfig">TelemetrySinkConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataTelemetrySinkConfigOutputReference">DataAwsccGroundstationConfigConfigDataTelemetrySinkConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataOutputReference.property.trackingConfig">TrackingConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataTrackingConfigOutputReference">DataAwsccGroundstationConfigConfigDataTrackingConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataOutputReference.property.uplinkEchoConfig">UplinkEchoConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataUplinkEchoConfigOutputReference">DataAwsccGroundstationConfigConfigDataUplinkEchoConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigData">DataAwsccGroundstationConfigConfigData</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AntennaDownlinkConfig`<sup>Required</sup> <a name="AntennaDownlinkConfig" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataOutputReference.property.antennaDownlinkConfig"></a>

```csharp
public DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigOutputReference AntennaDownlinkConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigOutputReference">DataAwsccGroundstationConfigConfigDataAntennaDownlinkConfigOutputReference</a>

---

##### `AntennaDownlinkDemodDecodeConfig`<sup>Required</sup> <a name="AntennaDownlinkDemodDecodeConfig" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataOutputReference.property.antennaDownlinkDemodDecodeConfig"></a>

```csharp
public DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigOutputReference AntennaDownlinkDemodDecodeConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigOutputReference">DataAwsccGroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigOutputReference</a>

---

##### `AntennaUplinkConfig`<sup>Required</sup> <a name="AntennaUplinkConfig" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataOutputReference.property.antennaUplinkConfig"></a>

```csharp
public DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigOutputReference AntennaUplinkConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigOutputReference">DataAwsccGroundstationConfigConfigDataAntennaUplinkConfigOutputReference</a>

---

##### `DataflowEndpointConfig`<sup>Required</sup> <a name="DataflowEndpointConfig" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataOutputReference.property.dataflowEndpointConfig"></a>

```csharp
public DataAwsccGroundstationConfigConfigDataDataflowEndpointConfigOutputReference DataflowEndpointConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataDataflowEndpointConfigOutputReference">DataAwsccGroundstationConfigConfigDataDataflowEndpointConfigOutputReference</a>

---

##### `S3RecordingConfig`<sup>Required</sup> <a name="S3RecordingConfig" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataOutputReference.property.s3RecordingConfig"></a>

```csharp
public DataAwsccGroundstationConfigConfigDataS3RecordingConfigOutputReference S3RecordingConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataS3RecordingConfigOutputReference">DataAwsccGroundstationConfigConfigDataS3RecordingConfigOutputReference</a>

---

##### `TelemetrySinkConfig`<sup>Required</sup> <a name="TelemetrySinkConfig" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataOutputReference.property.telemetrySinkConfig"></a>

```csharp
public DataAwsccGroundstationConfigConfigDataTelemetrySinkConfigOutputReference TelemetrySinkConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataTelemetrySinkConfigOutputReference">DataAwsccGroundstationConfigConfigDataTelemetrySinkConfigOutputReference</a>

---

##### `TrackingConfig`<sup>Required</sup> <a name="TrackingConfig" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataOutputReference.property.trackingConfig"></a>

```csharp
public DataAwsccGroundstationConfigConfigDataTrackingConfigOutputReference TrackingConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataTrackingConfigOutputReference">DataAwsccGroundstationConfigConfigDataTrackingConfigOutputReference</a>

---

##### `UplinkEchoConfig`<sup>Required</sup> <a name="UplinkEchoConfig" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataOutputReference.property.uplinkEchoConfig"></a>

```csharp
public DataAwsccGroundstationConfigConfigDataUplinkEchoConfigOutputReference UplinkEchoConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataUplinkEchoConfigOutputReference">DataAwsccGroundstationConfigConfigDataUplinkEchoConfigOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataOutputReference.property.internalValue"></a>

```csharp
public DataAwsccGroundstationConfigConfigData InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigData">DataAwsccGroundstationConfigConfigData</a>

---


### DataAwsccGroundstationConfigConfigDataS3RecordingConfigOutputReference <a name="DataAwsccGroundstationConfigConfigDataS3RecordingConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataS3RecordingConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataS3RecordingConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccGroundstationConfigConfigDataS3RecordingConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataS3RecordingConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataS3RecordingConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataS3RecordingConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataS3RecordingConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataS3RecordingConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataS3RecordingConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataS3RecordingConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataS3RecordingConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataS3RecordingConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataS3RecordingConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataS3RecordingConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataS3RecordingConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataS3RecordingConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataS3RecordingConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataS3RecordingConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataS3RecordingConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataS3RecordingConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataS3RecordingConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataS3RecordingConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataS3RecordingConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataS3RecordingConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataS3RecordingConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataS3RecordingConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataS3RecordingConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataS3RecordingConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataS3RecordingConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataS3RecordingConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataS3RecordingConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataS3RecordingConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataS3RecordingConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataS3RecordingConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataS3RecordingConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataS3RecordingConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataS3RecordingConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataS3RecordingConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataS3RecordingConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataS3RecordingConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataS3RecordingConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataS3RecordingConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataS3RecordingConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataS3RecordingConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataS3RecordingConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataS3RecordingConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataS3RecordingConfigOutputReference.property.bucketArn">BucketArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataS3RecordingConfigOutputReference.property.prefix">Prefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataS3RecordingConfigOutputReference.property.roleArn">RoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataS3RecordingConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataS3RecordingConfig">DataAwsccGroundstationConfigConfigDataS3RecordingConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataS3RecordingConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataS3RecordingConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BucketArn`<sup>Required</sup> <a name="BucketArn" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataS3RecordingConfigOutputReference.property.bucketArn"></a>

```csharp
public string BucketArn { get; }
```

- *Type:* string

---

##### `Prefix`<sup>Required</sup> <a name="Prefix" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataS3RecordingConfigOutputReference.property.prefix"></a>

```csharp
public string Prefix { get; }
```

- *Type:* string

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataS3RecordingConfigOutputReference.property.roleArn"></a>

```csharp
public string RoleArn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataS3RecordingConfigOutputReference.property.internalValue"></a>

```csharp
public DataAwsccGroundstationConfigConfigDataS3RecordingConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataS3RecordingConfig">DataAwsccGroundstationConfigConfigDataS3RecordingConfig</a>

---


### DataAwsccGroundstationConfigConfigDataTelemetrySinkConfigOutputReference <a name="DataAwsccGroundstationConfigConfigDataTelemetrySinkConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataTelemetrySinkConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataTelemetrySinkConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccGroundstationConfigConfigDataTelemetrySinkConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataTelemetrySinkConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataTelemetrySinkConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataTelemetrySinkConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataTelemetrySinkConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataTelemetrySinkConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataTelemetrySinkConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataTelemetrySinkConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataTelemetrySinkConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataTelemetrySinkConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataTelemetrySinkConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataTelemetrySinkConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataTelemetrySinkConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataTelemetrySinkConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataTelemetrySinkConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataTelemetrySinkConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataTelemetrySinkConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataTelemetrySinkConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataTelemetrySinkConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataTelemetrySinkConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataTelemetrySinkConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataTelemetrySinkConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataTelemetrySinkConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataTelemetrySinkConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataTelemetrySinkConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataTelemetrySinkConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataTelemetrySinkConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataTelemetrySinkConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataTelemetrySinkConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataTelemetrySinkConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataTelemetrySinkConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataTelemetrySinkConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataTelemetrySinkConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataTelemetrySinkConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataTelemetrySinkConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataTelemetrySinkConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataTelemetrySinkConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataTelemetrySinkConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataTelemetrySinkConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataTelemetrySinkConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataTelemetrySinkConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataTelemetrySinkConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataTelemetrySinkConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataTelemetrySinkConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataTelemetrySinkConfigOutputReference.property.telemetrySinkData">TelemetrySinkData</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataOutputReference">DataAwsccGroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataTelemetrySinkConfigOutputReference.property.telemetrySinkType">TelemetrySinkType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataTelemetrySinkConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataTelemetrySinkConfig">DataAwsccGroundstationConfigConfigDataTelemetrySinkConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataTelemetrySinkConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataTelemetrySinkConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `TelemetrySinkData`<sup>Required</sup> <a name="TelemetrySinkData" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataTelemetrySinkConfigOutputReference.property.telemetrySinkData"></a>

```csharp
public DataAwsccGroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataOutputReference TelemetrySinkData { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataOutputReference">DataAwsccGroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataOutputReference</a>

---

##### `TelemetrySinkType`<sup>Required</sup> <a name="TelemetrySinkType" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataTelemetrySinkConfigOutputReference.property.telemetrySinkType"></a>

```csharp
public string TelemetrySinkType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataTelemetrySinkConfigOutputReference.property.internalValue"></a>

```csharp
public DataAwsccGroundstationConfigConfigDataTelemetrySinkConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataTelemetrySinkConfig">DataAwsccGroundstationConfigConfigDataTelemetrySinkConfig</a>

---


### DataAwsccGroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataKinesisDataStreamDataOutputReference <a name="DataAwsccGroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataKinesisDataStreamDataOutputReference" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataKinesisDataStreamDataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataKinesisDataStreamDataOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccGroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataKinesisDataStreamDataOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataKinesisDataStreamDataOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataKinesisDataStreamDataOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataKinesisDataStreamDataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataKinesisDataStreamDataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataKinesisDataStreamDataOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataKinesisDataStreamDataOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataKinesisDataStreamDataOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataKinesisDataStreamDataOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataKinesisDataStreamDataOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataKinesisDataStreamDataOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataKinesisDataStreamDataOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataKinesisDataStreamDataOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataKinesisDataStreamDataOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataKinesisDataStreamDataOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataKinesisDataStreamDataOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataKinesisDataStreamDataOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataKinesisDataStreamDataOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataKinesisDataStreamDataOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataKinesisDataStreamDataOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataKinesisDataStreamDataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataKinesisDataStreamDataOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataKinesisDataStreamDataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataKinesisDataStreamDataOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataKinesisDataStreamDataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataKinesisDataStreamDataOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataKinesisDataStreamDataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataKinesisDataStreamDataOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataKinesisDataStreamDataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataKinesisDataStreamDataOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataKinesisDataStreamDataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataKinesisDataStreamDataOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataKinesisDataStreamDataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataKinesisDataStreamDataOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataKinesisDataStreamDataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataKinesisDataStreamDataOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataKinesisDataStreamDataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataKinesisDataStreamDataOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataKinesisDataStreamDataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataKinesisDataStreamDataOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataKinesisDataStreamDataOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataKinesisDataStreamDataOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataKinesisDataStreamDataOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataKinesisDataStreamDataOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataKinesisDataStreamDataOutputReference.property.kinesisDataStreamArn">KinesisDataStreamArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataKinesisDataStreamDataOutputReference.property.kinesisRoleArn">KinesisRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataKinesisDataStreamDataOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataKinesisDataStreamData">DataAwsccGroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataKinesisDataStreamData</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataKinesisDataStreamDataOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataKinesisDataStreamDataOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KinesisDataStreamArn`<sup>Required</sup> <a name="KinesisDataStreamArn" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataKinesisDataStreamDataOutputReference.property.kinesisDataStreamArn"></a>

```csharp
public string KinesisDataStreamArn { get; }
```

- *Type:* string

---

##### `KinesisRoleArn`<sup>Required</sup> <a name="KinesisRoleArn" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataKinesisDataStreamDataOutputReference.property.kinesisRoleArn"></a>

```csharp
public string KinesisRoleArn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataKinesisDataStreamDataOutputReference.property.internalValue"></a>

```csharp
public DataAwsccGroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataKinesisDataStreamData InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataKinesisDataStreamData">DataAwsccGroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataKinesisDataStreamData</a>

---


### DataAwsccGroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataOutputReference <a name="DataAwsccGroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataOutputReference" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccGroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataOutputReference.property.kinesisDataStreamData">KinesisDataStreamData</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataKinesisDataStreamDataOutputReference">DataAwsccGroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataKinesisDataStreamDataOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkData">DataAwsccGroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkData</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KinesisDataStreamData`<sup>Required</sup> <a name="KinesisDataStreamData" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataOutputReference.property.kinesisDataStreamData"></a>

```csharp
public DataAwsccGroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataKinesisDataStreamDataOutputReference KinesisDataStreamData { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataKinesisDataStreamDataOutputReference">DataAwsccGroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataKinesisDataStreamDataOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataOutputReference.property.internalValue"></a>

```csharp
public DataAwsccGroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkData InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkData">DataAwsccGroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkData</a>

---


### DataAwsccGroundstationConfigConfigDataTrackingConfigOutputReference <a name="DataAwsccGroundstationConfigConfigDataTrackingConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataTrackingConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataTrackingConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccGroundstationConfigConfigDataTrackingConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataTrackingConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataTrackingConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataTrackingConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataTrackingConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataTrackingConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataTrackingConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataTrackingConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataTrackingConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataTrackingConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataTrackingConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataTrackingConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataTrackingConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataTrackingConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataTrackingConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataTrackingConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataTrackingConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataTrackingConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataTrackingConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataTrackingConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataTrackingConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataTrackingConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataTrackingConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataTrackingConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataTrackingConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataTrackingConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataTrackingConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataTrackingConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataTrackingConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataTrackingConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataTrackingConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataTrackingConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataTrackingConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataTrackingConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataTrackingConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataTrackingConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataTrackingConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataTrackingConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataTrackingConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataTrackingConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataTrackingConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataTrackingConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataTrackingConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataTrackingConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataTrackingConfigOutputReference.property.autotrack">Autotrack</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataTrackingConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataTrackingConfig">DataAwsccGroundstationConfigConfigDataTrackingConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataTrackingConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataTrackingConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Autotrack`<sup>Required</sup> <a name="Autotrack" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataTrackingConfigOutputReference.property.autotrack"></a>

```csharp
public string Autotrack { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataTrackingConfigOutputReference.property.internalValue"></a>

```csharp
public DataAwsccGroundstationConfigConfigDataTrackingConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataTrackingConfig">DataAwsccGroundstationConfigConfigDataTrackingConfig</a>

---


### DataAwsccGroundstationConfigConfigDataUplinkEchoConfigOutputReference <a name="DataAwsccGroundstationConfigConfigDataUplinkEchoConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataUplinkEchoConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataUplinkEchoConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccGroundstationConfigConfigDataUplinkEchoConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataUplinkEchoConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataUplinkEchoConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataUplinkEchoConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataUplinkEchoConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataUplinkEchoConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataUplinkEchoConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataUplinkEchoConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataUplinkEchoConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataUplinkEchoConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataUplinkEchoConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataUplinkEchoConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataUplinkEchoConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataUplinkEchoConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataUplinkEchoConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataUplinkEchoConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataUplinkEchoConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataUplinkEchoConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataUplinkEchoConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataUplinkEchoConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataUplinkEchoConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataUplinkEchoConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataUplinkEchoConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataUplinkEchoConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataUplinkEchoConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataUplinkEchoConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataUplinkEchoConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataUplinkEchoConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataUplinkEchoConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataUplinkEchoConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataUplinkEchoConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataUplinkEchoConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataUplinkEchoConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataUplinkEchoConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataUplinkEchoConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataUplinkEchoConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataUplinkEchoConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataUplinkEchoConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataUplinkEchoConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataUplinkEchoConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataUplinkEchoConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataUplinkEchoConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataUplinkEchoConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataUplinkEchoConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataUplinkEchoConfigOutputReference.property.antennaUplinkConfigArn">AntennaUplinkConfigArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataUplinkEchoConfigOutputReference.property.enabled">Enabled</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataUplinkEchoConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataUplinkEchoConfig">DataAwsccGroundstationConfigConfigDataUplinkEchoConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataUplinkEchoConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataUplinkEchoConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AntennaUplinkConfigArn`<sup>Required</sup> <a name="AntennaUplinkConfigArn" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataUplinkEchoConfigOutputReference.property.antennaUplinkConfigArn"></a>

```csharp
public string AntennaUplinkConfigArn { get; }
```

- *Type:* string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataUplinkEchoConfigOutputReference.property.enabled"></a>

```csharp
public IResolvable Enabled { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataUplinkEchoConfigOutputReference.property.internalValue"></a>

```csharp
public DataAwsccGroundstationConfigConfigDataUplinkEchoConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigConfigDataUplinkEchoConfig">DataAwsccGroundstationConfigConfigDataUplinkEchoConfig</a>

---


### DataAwsccGroundstationConfigTagsList <a name="DataAwsccGroundstationConfigTagsList" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccGroundstationConfigTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigTagsList.get"></a>

```csharp
private DataAwsccGroundstationConfigTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsccGroundstationConfigTagsOutputReference <a name="DataAwsccGroundstationConfigTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccGroundstationConfigTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigTagsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigTags">DataAwsccGroundstationConfigTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigTagsOutputReference.property.internalValue"></a>

```csharp
public DataAwsccGroundstationConfigTags InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGroundstationConfig.DataAwsccGroundstationConfigTags">DataAwsccGroundstationConfigTags</a>

---



