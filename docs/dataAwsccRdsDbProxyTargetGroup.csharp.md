# `dataAwsccRdsDbProxyTargetGroup` Submodule <a name="`dataAwsccRdsDbProxyTargetGroup` Submodule" id="@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccRdsDbProxyTargetGroup <a name="DataAwsccRdsDbProxyTargetGroup" id="@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroup"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/rds_db_proxy_target_group awscc_rds_db_proxy_target_group}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroup.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccRdsDbProxyTargetGroup(Construct Scope, string Id, DataAwsccRdsDbProxyTargetGroupConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroup.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroup.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroup.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroupConfig">DataAwsccRdsDbProxyTargetGroupConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroup.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroup.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroup.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroupConfig">DataAwsccRdsDbProxyTargetGroupConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroup.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroup.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroup.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroup.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroup.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroup.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroup.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroup.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroup.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroup.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroup.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroup.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroup.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroup.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroup.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroup.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroup.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroup.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroup.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroup.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroup.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroup.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroup.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroup.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroup.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroup.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroup.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroup.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroup.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroup.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroup.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroup.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroup.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroup.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroup.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroup.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroup.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroup.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroup.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroup.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroup.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroup.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroup.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccRdsDbProxyTargetGroup resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroup.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccRdsDbProxyTargetGroup.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroup.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroup.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccRdsDbProxyTargetGroup.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroup.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroup.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccRdsDbProxyTargetGroup.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroup.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroup.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccRdsDbProxyTargetGroup.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataAwsccRdsDbProxyTargetGroup resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroup.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroup.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccRdsDbProxyTargetGroup to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroup.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccRdsDbProxyTargetGroup that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/rds_db_proxy_target_group#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroup.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccRdsDbProxyTargetGroup to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroup.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroup.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroup.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroup.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroup.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroup.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroup.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroup.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroup.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroup.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroup.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroup.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroup.property.connectionPoolConfigurationInfo">ConnectionPoolConfigurationInfo</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference">DataAwsccRdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroup.property.dbClusterIdentifiers">DbClusterIdentifiers</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroup.property.dbInstanceIdentifiers">DbInstanceIdentifiers</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroup.property.dbProxyName">DbProxyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroup.property.targetGroupArn">TargetGroupArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroup.property.targetGroupName">TargetGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroup.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroup.property.id">Id</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroup.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroup.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroup.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroup.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroup.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroup.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroup.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroup.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroup.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroup.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroup.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroup.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `ConnectionPoolConfigurationInfo`<sup>Required</sup> <a name="ConnectionPoolConfigurationInfo" id="@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroup.property.connectionPoolConfigurationInfo"></a>

```csharp
public DataAwsccRdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference ConnectionPoolConfigurationInfo { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference">DataAwsccRdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference</a>

---

##### `DbClusterIdentifiers`<sup>Required</sup> <a name="DbClusterIdentifiers" id="@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroup.property.dbClusterIdentifiers"></a>

```csharp
public string[] DbClusterIdentifiers { get; }
```

- *Type:* string[]

---

##### `DbInstanceIdentifiers`<sup>Required</sup> <a name="DbInstanceIdentifiers" id="@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroup.property.dbInstanceIdentifiers"></a>

```csharp
public string[] DbInstanceIdentifiers { get; }
```

- *Type:* string[]

---

##### `DbProxyName`<sup>Required</sup> <a name="DbProxyName" id="@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroup.property.dbProxyName"></a>

```csharp
public string DbProxyName { get; }
```

- *Type:* string

---

##### `TargetGroupArn`<sup>Required</sup> <a name="TargetGroupArn" id="@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroup.property.targetGroupArn"></a>

```csharp
public string TargetGroupArn { get; }
```

- *Type:* string

---

##### `TargetGroupName`<sup>Required</sup> <a name="TargetGroupName" id="@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroup.property.targetGroupName"></a>

```csharp
public string TargetGroupName { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroup.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroup.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroup.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroup.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccRdsDbProxyTargetGroupConfig <a name="DataAwsccRdsDbProxyTargetGroupConfig" id="@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroupConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccRdsDbProxyTargetGroupConfig {
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroupConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroupConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroupConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroupConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroupConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroupConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroupConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroupConfig.property.id">Id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroupConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroupConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroupConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroupConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroupConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroupConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroupConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroupConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/rds_db_proxy_target_group#id DataAwsccRdsDbProxyTargetGroup#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccRdsDbProxyTargetGroupConnectionPoolConfigurationInfo <a name="DataAwsccRdsDbProxyTargetGroupConnectionPoolConfigurationInfo" id="@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroupConnectionPoolConfigurationInfo"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroupConnectionPoolConfigurationInfo.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccRdsDbProxyTargetGroupConnectionPoolConfigurationInfo {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccRdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference <a name="DataAwsccRdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference" id="@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccRdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference.property.connectionBorrowTimeout">ConnectionBorrowTimeout</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference.property.initQuery">InitQuery</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference.property.maxConnectionsPercent">MaxConnectionsPercent</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference.property.maxIdleConnectionsPercent">MaxIdleConnectionsPercent</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference.property.sessionPinningFilters">SessionPinningFilters</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroupConnectionPoolConfigurationInfo">DataAwsccRdsDbProxyTargetGroupConnectionPoolConfigurationInfo</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ConnectionBorrowTimeout`<sup>Required</sup> <a name="ConnectionBorrowTimeout" id="@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference.property.connectionBorrowTimeout"></a>

```csharp
public double ConnectionBorrowTimeout { get; }
```

- *Type:* double

---

##### `InitQuery`<sup>Required</sup> <a name="InitQuery" id="@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference.property.initQuery"></a>

```csharp
public string InitQuery { get; }
```

- *Type:* string

---

##### `MaxConnectionsPercent`<sup>Required</sup> <a name="MaxConnectionsPercent" id="@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference.property.maxConnectionsPercent"></a>

```csharp
public double MaxConnectionsPercent { get; }
```

- *Type:* double

---

##### `MaxIdleConnectionsPercent`<sup>Required</sup> <a name="MaxIdleConnectionsPercent" id="@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference.property.maxIdleConnectionsPercent"></a>

```csharp
public double MaxIdleConnectionsPercent { get; }
```

- *Type:* double

---

##### `SessionPinningFilters`<sup>Required</sup> <a name="SessionPinningFilters" id="@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference.property.sessionPinningFilters"></a>

```csharp
public string[] SessionPinningFilters { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference.property.internalValue"></a>

```csharp
public DataAwsccRdsDbProxyTargetGroupConnectionPoolConfigurationInfo InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccRdsDbProxyTargetGroup.DataAwsccRdsDbProxyTargetGroupConnectionPoolConfigurationInfo">DataAwsccRdsDbProxyTargetGroupConnectionPoolConfigurationInfo</a>

---



