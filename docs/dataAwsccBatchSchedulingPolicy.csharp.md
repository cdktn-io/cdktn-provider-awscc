# `dataAwsccBatchSchedulingPolicy` Submodule <a name="`dataAwsccBatchSchedulingPolicy` Submodule" id="@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccBatchSchedulingPolicy <a name="DataAwsccBatchSchedulingPolicy" id="@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/batch_scheduling_policy awscc_batch_scheduling_policy}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicy.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccBatchSchedulingPolicy(Construct Scope, string Id, DataAwsccBatchSchedulingPolicyConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicy.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicy.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicy.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicyConfig">DataAwsccBatchSchedulingPolicyConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicy.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicy.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicyConfig">DataAwsccBatchSchedulingPolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicy.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicy.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicy.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicy.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicy.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicy.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicy.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicy.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicy.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicy.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicy.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicy.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicy.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicy.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicy.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicy.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicy.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicy.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicy.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicy.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicy.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicy.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicy.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicy.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicy.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicy.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicy.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicy.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicy.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicy.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicy.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicy.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicy.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicy.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicy.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicy.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicy.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicy.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicy.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicy.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicy.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicy.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicy.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccBatchSchedulingPolicy resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicy.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccBatchSchedulingPolicy.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicy.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicy.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccBatchSchedulingPolicy.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicy.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicy.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccBatchSchedulingPolicy.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicy.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicy.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccBatchSchedulingPolicy.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataAwsccBatchSchedulingPolicy resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccBatchSchedulingPolicy to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccBatchSchedulingPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/batch_scheduling_policy#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccBatchSchedulingPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicy.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicy.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicy.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicy.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicy.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicy.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicy.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicy.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicy.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicy.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicy.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicy.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicy.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicy.property.fairsharePolicy">FairsharePolicy</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicyFairsharePolicyOutputReference">DataAwsccBatchSchedulingPolicyFairsharePolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicy.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicy.property.quotaSharePolicy">QuotaSharePolicy</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicyQuotaSharePolicyOutputReference">DataAwsccBatchSchedulingPolicyQuotaSharePolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicy.property.tags">Tags</a></code> | <code>Io.Cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicy.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicy.property.id">Id</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicy.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicy.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicy.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicy.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicy.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicy.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicy.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicy.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicy.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicy.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicy.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicy.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicy.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `FairsharePolicy`<sup>Required</sup> <a name="FairsharePolicy" id="@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicy.property.fairsharePolicy"></a>

```csharp
public DataAwsccBatchSchedulingPolicyFairsharePolicyOutputReference FairsharePolicy { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicyFairsharePolicyOutputReference">DataAwsccBatchSchedulingPolicyFairsharePolicyOutputReference</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicy.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `QuotaSharePolicy`<sup>Required</sup> <a name="QuotaSharePolicy" id="@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicy.property.quotaSharePolicy"></a>

```csharp
public DataAwsccBatchSchedulingPolicyQuotaSharePolicyOutputReference QuotaSharePolicy { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicyQuotaSharePolicyOutputReference">DataAwsccBatchSchedulingPolicyQuotaSharePolicyOutputReference</a>

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicy.property.tags"></a>

```csharp
public StringMap Tags { get; }
```

- *Type:* Io.Cdktn.StringMap

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicy.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicy.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicy.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicy.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccBatchSchedulingPolicyConfig <a name="DataAwsccBatchSchedulingPolicyConfig" id="@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicyConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccBatchSchedulingPolicyConfig {
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicyConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicyConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicyConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicyConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicyConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicyConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicyConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicyConfig.property.id">Id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicyConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicyConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicyConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicyConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicyConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicyConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicyConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicyConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/batch_scheduling_policy#id DataAwsccBatchSchedulingPolicy#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccBatchSchedulingPolicyFairsharePolicy <a name="DataAwsccBatchSchedulingPolicyFairsharePolicy" id="@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicyFairsharePolicy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicyFairsharePolicy.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccBatchSchedulingPolicyFairsharePolicy {

};
```


### DataAwsccBatchSchedulingPolicyFairsharePolicyShareDistribution <a name="DataAwsccBatchSchedulingPolicyFairsharePolicyShareDistribution" id="@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicyFairsharePolicyShareDistribution"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicyFairsharePolicyShareDistribution.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccBatchSchedulingPolicyFairsharePolicyShareDistribution {

};
```


### DataAwsccBatchSchedulingPolicyQuotaSharePolicy <a name="DataAwsccBatchSchedulingPolicyQuotaSharePolicy" id="@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicyQuotaSharePolicy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicyQuotaSharePolicy.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccBatchSchedulingPolicyQuotaSharePolicy {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccBatchSchedulingPolicyFairsharePolicyOutputReference <a name="DataAwsccBatchSchedulingPolicyFairsharePolicyOutputReference" id="@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicyFairsharePolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicyFairsharePolicyOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccBatchSchedulingPolicyFairsharePolicyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicyFairsharePolicyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicyFairsharePolicyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicyFairsharePolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicyFairsharePolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicyFairsharePolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicyFairsharePolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicyFairsharePolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicyFairsharePolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicyFairsharePolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicyFairsharePolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicyFairsharePolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicyFairsharePolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicyFairsharePolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicyFairsharePolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicyFairsharePolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicyFairsharePolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicyFairsharePolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicyFairsharePolicyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicyFairsharePolicyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicyFairsharePolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicyFairsharePolicyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicyFairsharePolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicyFairsharePolicyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicyFairsharePolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicyFairsharePolicyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicyFairsharePolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicyFairsharePolicyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicyFairsharePolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicyFairsharePolicyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicyFairsharePolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicyFairsharePolicyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicyFairsharePolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicyFairsharePolicyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicyFairsharePolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicyFairsharePolicyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicyFairsharePolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicyFairsharePolicyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicyFairsharePolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicyFairsharePolicyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicyFairsharePolicyOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicyFairsharePolicyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicyFairsharePolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicyFairsharePolicyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicyFairsharePolicyOutputReference.property.computeReservation">ComputeReservation</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicyFairsharePolicyOutputReference.property.shareDecaySeconds">ShareDecaySeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicyFairsharePolicyOutputReference.property.shareDistribution">ShareDistribution</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicyFairsharePolicyShareDistributionList">DataAwsccBatchSchedulingPolicyFairsharePolicyShareDistributionList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicyFairsharePolicyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicyFairsharePolicy">DataAwsccBatchSchedulingPolicyFairsharePolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicyFairsharePolicyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicyFairsharePolicyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ComputeReservation`<sup>Required</sup> <a name="ComputeReservation" id="@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicyFairsharePolicyOutputReference.property.computeReservation"></a>

```csharp
public double ComputeReservation { get; }
```

- *Type:* double

---

##### `ShareDecaySeconds`<sup>Required</sup> <a name="ShareDecaySeconds" id="@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicyFairsharePolicyOutputReference.property.shareDecaySeconds"></a>

```csharp
public double ShareDecaySeconds { get; }
```

- *Type:* double

---

##### `ShareDistribution`<sup>Required</sup> <a name="ShareDistribution" id="@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicyFairsharePolicyOutputReference.property.shareDistribution"></a>

```csharp
public DataAwsccBatchSchedulingPolicyFairsharePolicyShareDistributionList ShareDistribution { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicyFairsharePolicyShareDistributionList">DataAwsccBatchSchedulingPolicyFairsharePolicyShareDistributionList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicyFairsharePolicyOutputReference.property.internalValue"></a>

```csharp
public DataAwsccBatchSchedulingPolicyFairsharePolicy InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicyFairsharePolicy">DataAwsccBatchSchedulingPolicyFairsharePolicy</a>

---


### DataAwsccBatchSchedulingPolicyFairsharePolicyShareDistributionList <a name="DataAwsccBatchSchedulingPolicyFairsharePolicyShareDistributionList" id="@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicyFairsharePolicyShareDistributionList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicyFairsharePolicyShareDistributionList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccBatchSchedulingPolicyFairsharePolicyShareDistributionList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicyFairsharePolicyShareDistributionList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicyFairsharePolicyShareDistributionList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicyFairsharePolicyShareDistributionList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicyFairsharePolicyShareDistributionList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicyFairsharePolicyShareDistributionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicyFairsharePolicyShareDistributionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicyFairsharePolicyShareDistributionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicyFairsharePolicyShareDistributionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicyFairsharePolicyShareDistributionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicyFairsharePolicyShareDistributionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicyFairsharePolicyShareDistributionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicyFairsharePolicyShareDistributionList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicyFairsharePolicyShareDistributionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicyFairsharePolicyShareDistributionList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicyFairsharePolicyShareDistributionList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicyFairsharePolicyShareDistributionList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicyFairsharePolicyShareDistributionList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicyFairsharePolicyShareDistributionList.get"></a>

```csharp
private DataAwsccBatchSchedulingPolicyFairsharePolicyShareDistributionOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicyFairsharePolicyShareDistributionList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicyFairsharePolicyShareDistributionList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicyFairsharePolicyShareDistributionList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicyFairsharePolicyShareDistributionList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicyFairsharePolicyShareDistributionList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsccBatchSchedulingPolicyFairsharePolicyShareDistributionOutputReference <a name="DataAwsccBatchSchedulingPolicyFairsharePolicyShareDistributionOutputReference" id="@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicyFairsharePolicyShareDistributionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicyFairsharePolicyShareDistributionOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccBatchSchedulingPolicyFairsharePolicyShareDistributionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicyFairsharePolicyShareDistributionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicyFairsharePolicyShareDistributionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicyFairsharePolicyShareDistributionOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicyFairsharePolicyShareDistributionOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicyFairsharePolicyShareDistributionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicyFairsharePolicyShareDistributionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicyFairsharePolicyShareDistributionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicyFairsharePolicyShareDistributionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicyFairsharePolicyShareDistributionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicyFairsharePolicyShareDistributionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicyFairsharePolicyShareDistributionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicyFairsharePolicyShareDistributionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicyFairsharePolicyShareDistributionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicyFairsharePolicyShareDistributionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicyFairsharePolicyShareDistributionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicyFairsharePolicyShareDistributionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicyFairsharePolicyShareDistributionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicyFairsharePolicyShareDistributionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicyFairsharePolicyShareDistributionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicyFairsharePolicyShareDistributionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicyFairsharePolicyShareDistributionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicyFairsharePolicyShareDistributionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicyFairsharePolicyShareDistributionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicyFairsharePolicyShareDistributionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicyFairsharePolicyShareDistributionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicyFairsharePolicyShareDistributionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicyFairsharePolicyShareDistributionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicyFairsharePolicyShareDistributionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicyFairsharePolicyShareDistributionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicyFairsharePolicyShareDistributionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicyFairsharePolicyShareDistributionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicyFairsharePolicyShareDistributionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicyFairsharePolicyShareDistributionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicyFairsharePolicyShareDistributionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicyFairsharePolicyShareDistributionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicyFairsharePolicyShareDistributionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicyFairsharePolicyShareDistributionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicyFairsharePolicyShareDistributionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicyFairsharePolicyShareDistributionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicyFairsharePolicyShareDistributionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicyFairsharePolicyShareDistributionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicyFairsharePolicyShareDistributionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicyFairsharePolicyShareDistributionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicyFairsharePolicyShareDistributionOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicyFairsharePolicyShareDistributionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicyFairsharePolicyShareDistributionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicyFairsharePolicyShareDistributionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicyFairsharePolicyShareDistributionOutputReference.property.shareIdentifier">ShareIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicyFairsharePolicyShareDistributionOutputReference.property.weightFactor">WeightFactor</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicyFairsharePolicyShareDistributionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicyFairsharePolicyShareDistribution">DataAwsccBatchSchedulingPolicyFairsharePolicyShareDistribution</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicyFairsharePolicyShareDistributionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicyFairsharePolicyShareDistributionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ShareIdentifier`<sup>Required</sup> <a name="ShareIdentifier" id="@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicyFairsharePolicyShareDistributionOutputReference.property.shareIdentifier"></a>

```csharp
public string ShareIdentifier { get; }
```

- *Type:* string

---

##### `WeightFactor`<sup>Required</sup> <a name="WeightFactor" id="@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicyFairsharePolicyShareDistributionOutputReference.property.weightFactor"></a>

```csharp
public double WeightFactor { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicyFairsharePolicyShareDistributionOutputReference.property.internalValue"></a>

```csharp
public DataAwsccBatchSchedulingPolicyFairsharePolicyShareDistribution InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicyFairsharePolicyShareDistribution">DataAwsccBatchSchedulingPolicyFairsharePolicyShareDistribution</a>

---


### DataAwsccBatchSchedulingPolicyQuotaSharePolicyOutputReference <a name="DataAwsccBatchSchedulingPolicyQuotaSharePolicyOutputReference" id="@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicyQuotaSharePolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicyQuotaSharePolicyOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccBatchSchedulingPolicyQuotaSharePolicyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicyQuotaSharePolicyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicyQuotaSharePolicyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicyQuotaSharePolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicyQuotaSharePolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicyQuotaSharePolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicyQuotaSharePolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicyQuotaSharePolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicyQuotaSharePolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicyQuotaSharePolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicyQuotaSharePolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicyQuotaSharePolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicyQuotaSharePolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicyQuotaSharePolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicyQuotaSharePolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicyQuotaSharePolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicyQuotaSharePolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicyQuotaSharePolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicyQuotaSharePolicyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicyQuotaSharePolicyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicyQuotaSharePolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicyQuotaSharePolicyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicyQuotaSharePolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicyQuotaSharePolicyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicyQuotaSharePolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicyQuotaSharePolicyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicyQuotaSharePolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicyQuotaSharePolicyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicyQuotaSharePolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicyQuotaSharePolicyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicyQuotaSharePolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicyQuotaSharePolicyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicyQuotaSharePolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicyQuotaSharePolicyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicyQuotaSharePolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicyQuotaSharePolicyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicyQuotaSharePolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicyQuotaSharePolicyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicyQuotaSharePolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicyQuotaSharePolicyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicyQuotaSharePolicyOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicyQuotaSharePolicyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicyQuotaSharePolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicyQuotaSharePolicyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicyQuotaSharePolicyOutputReference.property.idleResourceAssignmentStrategy">IdleResourceAssignmentStrategy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicyQuotaSharePolicyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicyQuotaSharePolicy">DataAwsccBatchSchedulingPolicyQuotaSharePolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicyQuotaSharePolicyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicyQuotaSharePolicyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IdleResourceAssignmentStrategy`<sup>Required</sup> <a name="IdleResourceAssignmentStrategy" id="@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicyQuotaSharePolicyOutputReference.property.idleResourceAssignmentStrategy"></a>

```csharp
public string IdleResourceAssignmentStrategy { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicyQuotaSharePolicyOutputReference.property.internalValue"></a>

```csharp
public DataAwsccBatchSchedulingPolicyQuotaSharePolicy InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBatchSchedulingPolicy.DataAwsccBatchSchedulingPolicyQuotaSharePolicy">DataAwsccBatchSchedulingPolicyQuotaSharePolicy</a>

---



