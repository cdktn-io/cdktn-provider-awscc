# `dataAwsccBatchJobQueue` Submodule <a name="`dataAwsccBatchJobQueue` Submodule" id="@cdktn/provider-awscc.dataAwsccBatchJobQueue"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccBatchJobQueue <a name="DataAwsccBatchJobQueue" id="@cdktn/provider-awscc.dataAwsccBatchJobQueue.DataAwsccBatchJobQueue"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/batch_job_queue awscc_batch_job_queue}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBatchJobQueue.DataAwsccBatchJobQueue.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccBatchJobQueue(Construct Scope, string Id, DataAwsccBatchJobQueueConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchJobQueue.DataAwsccBatchJobQueue.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchJobQueue.DataAwsccBatchJobQueue.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchJobQueue.DataAwsccBatchJobQueue.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBatchJobQueue.DataAwsccBatchJobQueueConfig">DataAwsccBatchJobQueueConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.dataAwsccBatchJobQueue.DataAwsccBatchJobQueue.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccBatchJobQueue.DataAwsccBatchJobQueue.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.dataAwsccBatchJobQueue.DataAwsccBatchJobQueue.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBatchJobQueue.DataAwsccBatchJobQueueConfig">DataAwsccBatchJobQueueConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchJobQueue.DataAwsccBatchJobQueue.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchJobQueue.DataAwsccBatchJobQueue.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchJobQueue.DataAwsccBatchJobQueue.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchJobQueue.DataAwsccBatchJobQueue.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchJobQueue.DataAwsccBatchJobQueue.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchJobQueue.DataAwsccBatchJobQueue.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchJobQueue.DataAwsccBatchJobQueue.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchJobQueue.DataAwsccBatchJobQueue.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchJobQueue.DataAwsccBatchJobQueue.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchJobQueue.DataAwsccBatchJobQueue.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchJobQueue.DataAwsccBatchJobQueue.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchJobQueue.DataAwsccBatchJobQueue.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchJobQueue.DataAwsccBatchJobQueue.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchJobQueue.DataAwsccBatchJobQueue.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchJobQueue.DataAwsccBatchJobQueue.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchJobQueue.DataAwsccBatchJobQueue.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchJobQueue.DataAwsccBatchJobQueue.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchJobQueue.DataAwsccBatchJobQueue.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccBatchJobQueue.DataAwsccBatchJobQueue.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccBatchJobQueue.DataAwsccBatchJobQueue.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.dataAwsccBatchJobQueue.DataAwsccBatchJobQueue.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccBatchJobQueue.DataAwsccBatchJobQueue.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.dataAwsccBatchJobQueue.DataAwsccBatchJobQueue.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccBatchJobQueue.DataAwsccBatchJobQueue.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccBatchJobQueue.DataAwsccBatchJobQueue.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.dataAwsccBatchJobQueue.DataAwsccBatchJobQueue.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccBatchJobQueue.DataAwsccBatchJobQueue.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccBatchJobQueue.DataAwsccBatchJobQueue.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccBatchJobQueue.DataAwsccBatchJobQueue.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccBatchJobQueue.DataAwsccBatchJobQueue.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBatchJobQueue.DataAwsccBatchJobQueue.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBatchJobQueue.DataAwsccBatchJobQueue.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBatchJobQueue.DataAwsccBatchJobQueue.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBatchJobQueue.DataAwsccBatchJobQueue.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBatchJobQueue.DataAwsccBatchJobQueue.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBatchJobQueue.DataAwsccBatchJobQueue.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccBatchJobQueue.DataAwsccBatchJobQueue.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBatchJobQueue.DataAwsccBatchJobQueue.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBatchJobQueue.DataAwsccBatchJobQueue.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBatchJobQueue.DataAwsccBatchJobQueue.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBatchJobQueue.DataAwsccBatchJobQueue.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBatchJobQueue.DataAwsccBatchJobQueue.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBatchJobQueue.DataAwsccBatchJobQueue.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBatchJobQueue.DataAwsccBatchJobQueue.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccBatchJobQueue.DataAwsccBatchJobQueue.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBatchJobQueue.DataAwsccBatchJobQueue.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBatchJobQueue.DataAwsccBatchJobQueue.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBatchJobQueue.DataAwsccBatchJobQueue.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBatchJobQueue.DataAwsccBatchJobQueue.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBatchJobQueue.DataAwsccBatchJobQueue.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchJobQueue.DataAwsccBatchJobQueue.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchJobQueue.DataAwsccBatchJobQueue.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchJobQueue.DataAwsccBatchJobQueue.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchJobQueue.DataAwsccBatchJobQueue.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccBatchJobQueue resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccBatchJobQueue.DataAwsccBatchJobQueue.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccBatchJobQueue.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccBatchJobQueue.DataAwsccBatchJobQueue.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccBatchJobQueue.DataAwsccBatchJobQueue.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccBatchJobQueue.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccBatchJobQueue.DataAwsccBatchJobQueue.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccBatchJobQueue.DataAwsccBatchJobQueue.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccBatchJobQueue.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccBatchJobQueue.DataAwsccBatchJobQueue.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccBatchJobQueue.DataAwsccBatchJobQueue.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccBatchJobQueue.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataAwsccBatchJobQueue resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.dataAwsccBatchJobQueue.DataAwsccBatchJobQueue.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.dataAwsccBatchJobQueue.DataAwsccBatchJobQueue.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccBatchJobQueue to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.dataAwsccBatchJobQueue.DataAwsccBatchJobQueue.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccBatchJobQueue that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/batch_job_queue#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccBatchJobQueue.DataAwsccBatchJobQueue.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccBatchJobQueue to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchJobQueue.DataAwsccBatchJobQueue.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchJobQueue.DataAwsccBatchJobQueue.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchJobQueue.DataAwsccBatchJobQueue.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchJobQueue.DataAwsccBatchJobQueue.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchJobQueue.DataAwsccBatchJobQueue.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchJobQueue.DataAwsccBatchJobQueue.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchJobQueue.DataAwsccBatchJobQueue.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchJobQueue.DataAwsccBatchJobQueue.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchJobQueue.DataAwsccBatchJobQueue.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchJobQueue.DataAwsccBatchJobQueue.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchJobQueue.DataAwsccBatchJobQueue.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchJobQueue.DataAwsccBatchJobQueue.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchJobQueue.DataAwsccBatchJobQueue.property.computeEnvironmentOrder">ComputeEnvironmentOrder</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBatchJobQueue.DataAwsccBatchJobQueueComputeEnvironmentOrderList">DataAwsccBatchJobQueueComputeEnvironmentOrderList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchJobQueue.DataAwsccBatchJobQueue.property.jobQueueArn">JobQueueArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchJobQueue.DataAwsccBatchJobQueue.property.jobQueueName">JobQueueName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchJobQueue.DataAwsccBatchJobQueue.property.jobQueueType">JobQueueType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchJobQueue.DataAwsccBatchJobQueue.property.jobStateTimeLimitActions">JobStateTimeLimitActions</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBatchJobQueue.DataAwsccBatchJobQueueJobStateTimeLimitActionsList">DataAwsccBatchJobQueueJobStateTimeLimitActionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchJobQueue.DataAwsccBatchJobQueue.property.priority">Priority</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchJobQueue.DataAwsccBatchJobQueue.property.schedulingPolicyArn">SchedulingPolicyArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchJobQueue.DataAwsccBatchJobQueue.property.serviceEnvironmentOrder">ServiceEnvironmentOrder</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBatchJobQueue.DataAwsccBatchJobQueueServiceEnvironmentOrderList">DataAwsccBatchJobQueueServiceEnvironmentOrderList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchJobQueue.DataAwsccBatchJobQueue.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchJobQueue.DataAwsccBatchJobQueue.property.tags">Tags</a></code> | <code>Io.Cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchJobQueue.DataAwsccBatchJobQueue.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchJobQueue.DataAwsccBatchJobQueue.property.id">Id</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccBatchJobQueue.DataAwsccBatchJobQueue.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccBatchJobQueue.DataAwsccBatchJobQueue.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccBatchJobQueue.DataAwsccBatchJobQueue.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccBatchJobQueue.DataAwsccBatchJobQueue.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccBatchJobQueue.DataAwsccBatchJobQueue.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccBatchJobQueue.DataAwsccBatchJobQueue.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccBatchJobQueue.DataAwsccBatchJobQueue.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccBatchJobQueue.DataAwsccBatchJobQueue.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccBatchJobQueue.DataAwsccBatchJobQueue.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccBatchJobQueue.DataAwsccBatchJobQueue.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccBatchJobQueue.DataAwsccBatchJobQueue.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccBatchJobQueue.DataAwsccBatchJobQueue.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `ComputeEnvironmentOrder`<sup>Required</sup> <a name="ComputeEnvironmentOrder" id="@cdktn/provider-awscc.dataAwsccBatchJobQueue.DataAwsccBatchJobQueue.property.computeEnvironmentOrder"></a>

```csharp
public DataAwsccBatchJobQueueComputeEnvironmentOrderList ComputeEnvironmentOrder { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBatchJobQueue.DataAwsccBatchJobQueueComputeEnvironmentOrderList">DataAwsccBatchJobQueueComputeEnvironmentOrderList</a>

---

##### `JobQueueArn`<sup>Required</sup> <a name="JobQueueArn" id="@cdktn/provider-awscc.dataAwsccBatchJobQueue.DataAwsccBatchJobQueue.property.jobQueueArn"></a>

```csharp
public string JobQueueArn { get; }
```

- *Type:* string

---

##### `JobQueueName`<sup>Required</sup> <a name="JobQueueName" id="@cdktn/provider-awscc.dataAwsccBatchJobQueue.DataAwsccBatchJobQueue.property.jobQueueName"></a>

```csharp
public string JobQueueName { get; }
```

- *Type:* string

---

##### `JobQueueType`<sup>Required</sup> <a name="JobQueueType" id="@cdktn/provider-awscc.dataAwsccBatchJobQueue.DataAwsccBatchJobQueue.property.jobQueueType"></a>

```csharp
public string JobQueueType { get; }
```

- *Type:* string

---

##### `JobStateTimeLimitActions`<sup>Required</sup> <a name="JobStateTimeLimitActions" id="@cdktn/provider-awscc.dataAwsccBatchJobQueue.DataAwsccBatchJobQueue.property.jobStateTimeLimitActions"></a>

```csharp
public DataAwsccBatchJobQueueJobStateTimeLimitActionsList JobStateTimeLimitActions { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBatchJobQueue.DataAwsccBatchJobQueueJobStateTimeLimitActionsList">DataAwsccBatchJobQueueJobStateTimeLimitActionsList</a>

---

##### `Priority`<sup>Required</sup> <a name="Priority" id="@cdktn/provider-awscc.dataAwsccBatchJobQueue.DataAwsccBatchJobQueue.property.priority"></a>

```csharp
public double Priority { get; }
```

- *Type:* double

---

##### `SchedulingPolicyArn`<sup>Required</sup> <a name="SchedulingPolicyArn" id="@cdktn/provider-awscc.dataAwsccBatchJobQueue.DataAwsccBatchJobQueue.property.schedulingPolicyArn"></a>

```csharp
public string SchedulingPolicyArn { get; }
```

- *Type:* string

---

##### `ServiceEnvironmentOrder`<sup>Required</sup> <a name="ServiceEnvironmentOrder" id="@cdktn/provider-awscc.dataAwsccBatchJobQueue.DataAwsccBatchJobQueue.property.serviceEnvironmentOrder"></a>

```csharp
public DataAwsccBatchJobQueueServiceEnvironmentOrderList ServiceEnvironmentOrder { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBatchJobQueue.DataAwsccBatchJobQueueServiceEnvironmentOrderList">DataAwsccBatchJobQueueServiceEnvironmentOrderList</a>

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktn/provider-awscc.dataAwsccBatchJobQueue.DataAwsccBatchJobQueue.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.dataAwsccBatchJobQueue.DataAwsccBatchJobQueue.property.tags"></a>

```csharp
public StringMap Tags { get; }
```

- *Type:* Io.Cdktn.StringMap

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccBatchJobQueue.DataAwsccBatchJobQueue.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccBatchJobQueue.DataAwsccBatchJobQueue.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchJobQueue.DataAwsccBatchJobQueue.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccBatchJobQueue.DataAwsccBatchJobQueue.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccBatchJobQueueComputeEnvironmentOrder <a name="DataAwsccBatchJobQueueComputeEnvironmentOrder" id="@cdktn/provider-awscc.dataAwsccBatchJobQueue.DataAwsccBatchJobQueueComputeEnvironmentOrder"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBatchJobQueue.DataAwsccBatchJobQueueComputeEnvironmentOrder.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccBatchJobQueueComputeEnvironmentOrder {

};
```


### DataAwsccBatchJobQueueConfig <a name="DataAwsccBatchJobQueueConfig" id="@cdktn/provider-awscc.dataAwsccBatchJobQueue.DataAwsccBatchJobQueueConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBatchJobQueue.DataAwsccBatchJobQueueConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccBatchJobQueueConfig {
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchJobQueue.DataAwsccBatchJobQueueConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchJobQueue.DataAwsccBatchJobQueueConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchJobQueue.DataAwsccBatchJobQueueConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchJobQueue.DataAwsccBatchJobQueueConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchJobQueue.DataAwsccBatchJobQueueConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchJobQueue.DataAwsccBatchJobQueueConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchJobQueue.DataAwsccBatchJobQueueConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchJobQueue.DataAwsccBatchJobQueueConfig.property.id">Id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccBatchJobQueue.DataAwsccBatchJobQueueConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccBatchJobQueue.DataAwsccBatchJobQueueConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccBatchJobQueue.DataAwsccBatchJobQueueConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccBatchJobQueue.DataAwsccBatchJobQueueConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccBatchJobQueue.DataAwsccBatchJobQueueConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccBatchJobQueue.DataAwsccBatchJobQueueConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccBatchJobQueue.DataAwsccBatchJobQueueConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccBatchJobQueue.DataAwsccBatchJobQueueConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/batch_job_queue#id DataAwsccBatchJobQueue#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccBatchJobQueueJobStateTimeLimitActions <a name="DataAwsccBatchJobQueueJobStateTimeLimitActions" id="@cdktn/provider-awscc.dataAwsccBatchJobQueue.DataAwsccBatchJobQueueJobStateTimeLimitActions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBatchJobQueue.DataAwsccBatchJobQueueJobStateTimeLimitActions.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccBatchJobQueueJobStateTimeLimitActions {

};
```


### DataAwsccBatchJobQueueServiceEnvironmentOrder <a name="DataAwsccBatchJobQueueServiceEnvironmentOrder" id="@cdktn/provider-awscc.dataAwsccBatchJobQueue.DataAwsccBatchJobQueueServiceEnvironmentOrder"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBatchJobQueue.DataAwsccBatchJobQueueServiceEnvironmentOrder.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccBatchJobQueueServiceEnvironmentOrder {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccBatchJobQueueComputeEnvironmentOrderList <a name="DataAwsccBatchJobQueueComputeEnvironmentOrderList" id="@cdktn/provider-awscc.dataAwsccBatchJobQueue.DataAwsccBatchJobQueueComputeEnvironmentOrderList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBatchJobQueue.DataAwsccBatchJobQueueComputeEnvironmentOrderList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccBatchJobQueueComputeEnvironmentOrderList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchJobQueue.DataAwsccBatchJobQueueComputeEnvironmentOrderList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchJobQueue.DataAwsccBatchJobQueueComputeEnvironmentOrderList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchJobQueue.DataAwsccBatchJobQueueComputeEnvironmentOrderList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccBatchJobQueue.DataAwsccBatchJobQueueComputeEnvironmentOrderList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBatchJobQueue.DataAwsccBatchJobQueueComputeEnvironmentOrderList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.dataAwsccBatchJobQueue.DataAwsccBatchJobQueueComputeEnvironmentOrderList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchJobQueue.DataAwsccBatchJobQueueComputeEnvironmentOrderList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchJobQueue.DataAwsccBatchJobQueueComputeEnvironmentOrderList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchJobQueue.DataAwsccBatchJobQueueComputeEnvironmentOrderList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchJobQueue.DataAwsccBatchJobQueueComputeEnvironmentOrderList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchJobQueue.DataAwsccBatchJobQueueComputeEnvironmentOrderList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccBatchJobQueue.DataAwsccBatchJobQueueComputeEnvironmentOrderList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccBatchJobQueue.DataAwsccBatchJobQueueComputeEnvironmentOrderList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccBatchJobQueue.DataAwsccBatchJobQueueComputeEnvironmentOrderList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccBatchJobQueue.DataAwsccBatchJobQueueComputeEnvironmentOrderList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccBatchJobQueue.DataAwsccBatchJobQueueComputeEnvironmentOrderList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccBatchJobQueue.DataAwsccBatchJobQueueComputeEnvironmentOrderList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccBatchJobQueue.DataAwsccBatchJobQueueComputeEnvironmentOrderList.get"></a>

```csharp
private DataAwsccBatchJobQueueComputeEnvironmentOrderOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.dataAwsccBatchJobQueue.DataAwsccBatchJobQueueComputeEnvironmentOrderList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchJobQueue.DataAwsccBatchJobQueueComputeEnvironmentOrderList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchJobQueue.DataAwsccBatchJobQueueComputeEnvironmentOrderList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccBatchJobQueue.DataAwsccBatchJobQueueComputeEnvironmentOrderList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccBatchJobQueue.DataAwsccBatchJobQueueComputeEnvironmentOrderList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsccBatchJobQueueComputeEnvironmentOrderOutputReference <a name="DataAwsccBatchJobQueueComputeEnvironmentOrderOutputReference" id="@cdktn/provider-awscc.dataAwsccBatchJobQueue.DataAwsccBatchJobQueueComputeEnvironmentOrderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBatchJobQueue.DataAwsccBatchJobQueueComputeEnvironmentOrderOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccBatchJobQueueComputeEnvironmentOrderOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchJobQueue.DataAwsccBatchJobQueueComputeEnvironmentOrderOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchJobQueue.DataAwsccBatchJobQueueComputeEnvironmentOrderOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchJobQueue.DataAwsccBatchJobQueueComputeEnvironmentOrderOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchJobQueue.DataAwsccBatchJobQueueComputeEnvironmentOrderOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccBatchJobQueue.DataAwsccBatchJobQueueComputeEnvironmentOrderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBatchJobQueue.DataAwsccBatchJobQueueComputeEnvironmentOrderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.dataAwsccBatchJobQueue.DataAwsccBatchJobQueueComputeEnvironmentOrderOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccBatchJobQueue.DataAwsccBatchJobQueueComputeEnvironmentOrderOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchJobQueue.DataAwsccBatchJobQueueComputeEnvironmentOrderOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchJobQueue.DataAwsccBatchJobQueueComputeEnvironmentOrderOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchJobQueue.DataAwsccBatchJobQueueComputeEnvironmentOrderOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchJobQueue.DataAwsccBatchJobQueueComputeEnvironmentOrderOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchJobQueue.DataAwsccBatchJobQueueComputeEnvironmentOrderOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchJobQueue.DataAwsccBatchJobQueueComputeEnvironmentOrderOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchJobQueue.DataAwsccBatchJobQueueComputeEnvironmentOrderOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchJobQueue.DataAwsccBatchJobQueueComputeEnvironmentOrderOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchJobQueue.DataAwsccBatchJobQueueComputeEnvironmentOrderOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchJobQueue.DataAwsccBatchJobQueueComputeEnvironmentOrderOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchJobQueue.DataAwsccBatchJobQueueComputeEnvironmentOrderOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchJobQueue.DataAwsccBatchJobQueueComputeEnvironmentOrderOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchJobQueue.DataAwsccBatchJobQueueComputeEnvironmentOrderOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccBatchJobQueue.DataAwsccBatchJobQueueComputeEnvironmentOrderOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBatchJobQueue.DataAwsccBatchJobQueueComputeEnvironmentOrderOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBatchJobQueue.DataAwsccBatchJobQueueComputeEnvironmentOrderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBatchJobQueue.DataAwsccBatchJobQueueComputeEnvironmentOrderOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBatchJobQueue.DataAwsccBatchJobQueueComputeEnvironmentOrderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBatchJobQueue.DataAwsccBatchJobQueueComputeEnvironmentOrderOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBatchJobQueue.DataAwsccBatchJobQueueComputeEnvironmentOrderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccBatchJobQueue.DataAwsccBatchJobQueueComputeEnvironmentOrderOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBatchJobQueue.DataAwsccBatchJobQueueComputeEnvironmentOrderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBatchJobQueue.DataAwsccBatchJobQueueComputeEnvironmentOrderOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBatchJobQueue.DataAwsccBatchJobQueueComputeEnvironmentOrderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBatchJobQueue.DataAwsccBatchJobQueueComputeEnvironmentOrderOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBatchJobQueue.DataAwsccBatchJobQueueComputeEnvironmentOrderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBatchJobQueue.DataAwsccBatchJobQueueComputeEnvironmentOrderOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBatchJobQueue.DataAwsccBatchJobQueueComputeEnvironmentOrderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccBatchJobQueue.DataAwsccBatchJobQueueComputeEnvironmentOrderOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBatchJobQueue.DataAwsccBatchJobQueueComputeEnvironmentOrderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBatchJobQueue.DataAwsccBatchJobQueueComputeEnvironmentOrderOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBatchJobQueue.DataAwsccBatchJobQueueComputeEnvironmentOrderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBatchJobQueue.DataAwsccBatchJobQueueComputeEnvironmentOrderOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccBatchJobQueue.DataAwsccBatchJobQueueComputeEnvironmentOrderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccBatchJobQueue.DataAwsccBatchJobQueueComputeEnvironmentOrderOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccBatchJobQueue.DataAwsccBatchJobQueueComputeEnvironmentOrderOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccBatchJobQueue.DataAwsccBatchJobQueueComputeEnvironmentOrderOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchJobQueue.DataAwsccBatchJobQueueComputeEnvironmentOrderOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchJobQueue.DataAwsccBatchJobQueueComputeEnvironmentOrderOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchJobQueue.DataAwsccBatchJobQueueComputeEnvironmentOrderOutputReference.property.computeEnvironment">ComputeEnvironment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchJobQueue.DataAwsccBatchJobQueueComputeEnvironmentOrderOutputReference.property.order">Order</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchJobQueue.DataAwsccBatchJobQueueComputeEnvironmentOrderOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBatchJobQueue.DataAwsccBatchJobQueueComputeEnvironmentOrder">DataAwsccBatchJobQueueComputeEnvironmentOrder</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccBatchJobQueue.DataAwsccBatchJobQueueComputeEnvironmentOrderOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccBatchJobQueue.DataAwsccBatchJobQueueComputeEnvironmentOrderOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ComputeEnvironment`<sup>Required</sup> <a name="ComputeEnvironment" id="@cdktn/provider-awscc.dataAwsccBatchJobQueue.DataAwsccBatchJobQueueComputeEnvironmentOrderOutputReference.property.computeEnvironment"></a>

```csharp
public string ComputeEnvironment { get; }
```

- *Type:* string

---

##### `Order`<sup>Required</sup> <a name="Order" id="@cdktn/provider-awscc.dataAwsccBatchJobQueue.DataAwsccBatchJobQueueComputeEnvironmentOrderOutputReference.property.order"></a>

```csharp
public double Order { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccBatchJobQueue.DataAwsccBatchJobQueueComputeEnvironmentOrderOutputReference.property.internalValue"></a>

```csharp
public DataAwsccBatchJobQueueComputeEnvironmentOrder InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBatchJobQueue.DataAwsccBatchJobQueueComputeEnvironmentOrder">DataAwsccBatchJobQueueComputeEnvironmentOrder</a>

---


### DataAwsccBatchJobQueueJobStateTimeLimitActionsList <a name="DataAwsccBatchJobQueueJobStateTimeLimitActionsList" id="@cdktn/provider-awscc.dataAwsccBatchJobQueue.DataAwsccBatchJobQueueJobStateTimeLimitActionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBatchJobQueue.DataAwsccBatchJobQueueJobStateTimeLimitActionsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccBatchJobQueueJobStateTimeLimitActionsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchJobQueue.DataAwsccBatchJobQueueJobStateTimeLimitActionsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchJobQueue.DataAwsccBatchJobQueueJobStateTimeLimitActionsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchJobQueue.DataAwsccBatchJobQueueJobStateTimeLimitActionsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccBatchJobQueue.DataAwsccBatchJobQueueJobStateTimeLimitActionsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBatchJobQueue.DataAwsccBatchJobQueueJobStateTimeLimitActionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.dataAwsccBatchJobQueue.DataAwsccBatchJobQueueJobStateTimeLimitActionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchJobQueue.DataAwsccBatchJobQueueJobStateTimeLimitActionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchJobQueue.DataAwsccBatchJobQueueJobStateTimeLimitActionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchJobQueue.DataAwsccBatchJobQueueJobStateTimeLimitActionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchJobQueue.DataAwsccBatchJobQueueJobStateTimeLimitActionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchJobQueue.DataAwsccBatchJobQueueJobStateTimeLimitActionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccBatchJobQueue.DataAwsccBatchJobQueueJobStateTimeLimitActionsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccBatchJobQueue.DataAwsccBatchJobQueueJobStateTimeLimitActionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccBatchJobQueue.DataAwsccBatchJobQueueJobStateTimeLimitActionsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccBatchJobQueue.DataAwsccBatchJobQueueJobStateTimeLimitActionsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccBatchJobQueue.DataAwsccBatchJobQueueJobStateTimeLimitActionsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccBatchJobQueue.DataAwsccBatchJobQueueJobStateTimeLimitActionsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccBatchJobQueue.DataAwsccBatchJobQueueJobStateTimeLimitActionsList.get"></a>

```csharp
private DataAwsccBatchJobQueueJobStateTimeLimitActionsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.dataAwsccBatchJobQueue.DataAwsccBatchJobQueueJobStateTimeLimitActionsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchJobQueue.DataAwsccBatchJobQueueJobStateTimeLimitActionsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchJobQueue.DataAwsccBatchJobQueueJobStateTimeLimitActionsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccBatchJobQueue.DataAwsccBatchJobQueueJobStateTimeLimitActionsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccBatchJobQueue.DataAwsccBatchJobQueueJobStateTimeLimitActionsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsccBatchJobQueueJobStateTimeLimitActionsOutputReference <a name="DataAwsccBatchJobQueueJobStateTimeLimitActionsOutputReference" id="@cdktn/provider-awscc.dataAwsccBatchJobQueue.DataAwsccBatchJobQueueJobStateTimeLimitActionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBatchJobQueue.DataAwsccBatchJobQueueJobStateTimeLimitActionsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccBatchJobQueueJobStateTimeLimitActionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchJobQueue.DataAwsccBatchJobQueueJobStateTimeLimitActionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchJobQueue.DataAwsccBatchJobQueueJobStateTimeLimitActionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchJobQueue.DataAwsccBatchJobQueueJobStateTimeLimitActionsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchJobQueue.DataAwsccBatchJobQueueJobStateTimeLimitActionsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccBatchJobQueue.DataAwsccBatchJobQueueJobStateTimeLimitActionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBatchJobQueue.DataAwsccBatchJobQueueJobStateTimeLimitActionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.dataAwsccBatchJobQueue.DataAwsccBatchJobQueueJobStateTimeLimitActionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccBatchJobQueue.DataAwsccBatchJobQueueJobStateTimeLimitActionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchJobQueue.DataAwsccBatchJobQueueJobStateTimeLimitActionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchJobQueue.DataAwsccBatchJobQueueJobStateTimeLimitActionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchJobQueue.DataAwsccBatchJobQueueJobStateTimeLimitActionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchJobQueue.DataAwsccBatchJobQueueJobStateTimeLimitActionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchJobQueue.DataAwsccBatchJobQueueJobStateTimeLimitActionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchJobQueue.DataAwsccBatchJobQueueJobStateTimeLimitActionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchJobQueue.DataAwsccBatchJobQueueJobStateTimeLimitActionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchJobQueue.DataAwsccBatchJobQueueJobStateTimeLimitActionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchJobQueue.DataAwsccBatchJobQueueJobStateTimeLimitActionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchJobQueue.DataAwsccBatchJobQueueJobStateTimeLimitActionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchJobQueue.DataAwsccBatchJobQueueJobStateTimeLimitActionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchJobQueue.DataAwsccBatchJobQueueJobStateTimeLimitActionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchJobQueue.DataAwsccBatchJobQueueJobStateTimeLimitActionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccBatchJobQueue.DataAwsccBatchJobQueueJobStateTimeLimitActionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBatchJobQueue.DataAwsccBatchJobQueueJobStateTimeLimitActionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBatchJobQueue.DataAwsccBatchJobQueueJobStateTimeLimitActionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBatchJobQueue.DataAwsccBatchJobQueueJobStateTimeLimitActionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBatchJobQueue.DataAwsccBatchJobQueueJobStateTimeLimitActionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBatchJobQueue.DataAwsccBatchJobQueueJobStateTimeLimitActionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBatchJobQueue.DataAwsccBatchJobQueueJobStateTimeLimitActionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccBatchJobQueue.DataAwsccBatchJobQueueJobStateTimeLimitActionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBatchJobQueue.DataAwsccBatchJobQueueJobStateTimeLimitActionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBatchJobQueue.DataAwsccBatchJobQueueJobStateTimeLimitActionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBatchJobQueue.DataAwsccBatchJobQueueJobStateTimeLimitActionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBatchJobQueue.DataAwsccBatchJobQueueJobStateTimeLimitActionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBatchJobQueue.DataAwsccBatchJobQueueJobStateTimeLimitActionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBatchJobQueue.DataAwsccBatchJobQueueJobStateTimeLimitActionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBatchJobQueue.DataAwsccBatchJobQueueJobStateTimeLimitActionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccBatchJobQueue.DataAwsccBatchJobQueueJobStateTimeLimitActionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBatchJobQueue.DataAwsccBatchJobQueueJobStateTimeLimitActionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBatchJobQueue.DataAwsccBatchJobQueueJobStateTimeLimitActionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBatchJobQueue.DataAwsccBatchJobQueueJobStateTimeLimitActionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBatchJobQueue.DataAwsccBatchJobQueueJobStateTimeLimitActionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccBatchJobQueue.DataAwsccBatchJobQueueJobStateTimeLimitActionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccBatchJobQueue.DataAwsccBatchJobQueueJobStateTimeLimitActionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccBatchJobQueue.DataAwsccBatchJobQueueJobStateTimeLimitActionsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccBatchJobQueue.DataAwsccBatchJobQueueJobStateTimeLimitActionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchJobQueue.DataAwsccBatchJobQueueJobStateTimeLimitActionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchJobQueue.DataAwsccBatchJobQueueJobStateTimeLimitActionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchJobQueue.DataAwsccBatchJobQueueJobStateTimeLimitActionsOutputReference.property.action">Action</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchJobQueue.DataAwsccBatchJobQueueJobStateTimeLimitActionsOutputReference.property.maxTimeSeconds">MaxTimeSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchJobQueue.DataAwsccBatchJobQueueJobStateTimeLimitActionsOutputReference.property.reason">Reason</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchJobQueue.DataAwsccBatchJobQueueJobStateTimeLimitActionsOutputReference.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchJobQueue.DataAwsccBatchJobQueueJobStateTimeLimitActionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBatchJobQueue.DataAwsccBatchJobQueueJobStateTimeLimitActions">DataAwsccBatchJobQueueJobStateTimeLimitActions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccBatchJobQueue.DataAwsccBatchJobQueueJobStateTimeLimitActionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccBatchJobQueue.DataAwsccBatchJobQueueJobStateTimeLimitActionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Action`<sup>Required</sup> <a name="Action" id="@cdktn/provider-awscc.dataAwsccBatchJobQueue.DataAwsccBatchJobQueueJobStateTimeLimitActionsOutputReference.property.action"></a>

```csharp
public string Action { get; }
```

- *Type:* string

---

##### `MaxTimeSeconds`<sup>Required</sup> <a name="MaxTimeSeconds" id="@cdktn/provider-awscc.dataAwsccBatchJobQueue.DataAwsccBatchJobQueueJobStateTimeLimitActionsOutputReference.property.maxTimeSeconds"></a>

```csharp
public double MaxTimeSeconds { get; }
```

- *Type:* double

---

##### `Reason`<sup>Required</sup> <a name="Reason" id="@cdktn/provider-awscc.dataAwsccBatchJobQueue.DataAwsccBatchJobQueueJobStateTimeLimitActionsOutputReference.property.reason"></a>

```csharp
public string Reason { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktn/provider-awscc.dataAwsccBatchJobQueue.DataAwsccBatchJobQueueJobStateTimeLimitActionsOutputReference.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccBatchJobQueue.DataAwsccBatchJobQueueJobStateTimeLimitActionsOutputReference.property.internalValue"></a>

```csharp
public DataAwsccBatchJobQueueJobStateTimeLimitActions InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBatchJobQueue.DataAwsccBatchJobQueueJobStateTimeLimitActions">DataAwsccBatchJobQueueJobStateTimeLimitActions</a>

---


### DataAwsccBatchJobQueueServiceEnvironmentOrderList <a name="DataAwsccBatchJobQueueServiceEnvironmentOrderList" id="@cdktn/provider-awscc.dataAwsccBatchJobQueue.DataAwsccBatchJobQueueServiceEnvironmentOrderList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBatchJobQueue.DataAwsccBatchJobQueueServiceEnvironmentOrderList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccBatchJobQueueServiceEnvironmentOrderList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchJobQueue.DataAwsccBatchJobQueueServiceEnvironmentOrderList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchJobQueue.DataAwsccBatchJobQueueServiceEnvironmentOrderList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchJobQueue.DataAwsccBatchJobQueueServiceEnvironmentOrderList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccBatchJobQueue.DataAwsccBatchJobQueueServiceEnvironmentOrderList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBatchJobQueue.DataAwsccBatchJobQueueServiceEnvironmentOrderList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.dataAwsccBatchJobQueue.DataAwsccBatchJobQueueServiceEnvironmentOrderList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchJobQueue.DataAwsccBatchJobQueueServiceEnvironmentOrderList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchJobQueue.DataAwsccBatchJobQueueServiceEnvironmentOrderList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchJobQueue.DataAwsccBatchJobQueueServiceEnvironmentOrderList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchJobQueue.DataAwsccBatchJobQueueServiceEnvironmentOrderList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchJobQueue.DataAwsccBatchJobQueueServiceEnvironmentOrderList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccBatchJobQueue.DataAwsccBatchJobQueueServiceEnvironmentOrderList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccBatchJobQueue.DataAwsccBatchJobQueueServiceEnvironmentOrderList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccBatchJobQueue.DataAwsccBatchJobQueueServiceEnvironmentOrderList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccBatchJobQueue.DataAwsccBatchJobQueueServiceEnvironmentOrderList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccBatchJobQueue.DataAwsccBatchJobQueueServiceEnvironmentOrderList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccBatchJobQueue.DataAwsccBatchJobQueueServiceEnvironmentOrderList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccBatchJobQueue.DataAwsccBatchJobQueueServiceEnvironmentOrderList.get"></a>

```csharp
private DataAwsccBatchJobQueueServiceEnvironmentOrderOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.dataAwsccBatchJobQueue.DataAwsccBatchJobQueueServiceEnvironmentOrderList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchJobQueue.DataAwsccBatchJobQueueServiceEnvironmentOrderList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchJobQueue.DataAwsccBatchJobQueueServiceEnvironmentOrderList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccBatchJobQueue.DataAwsccBatchJobQueueServiceEnvironmentOrderList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccBatchJobQueue.DataAwsccBatchJobQueueServiceEnvironmentOrderList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsccBatchJobQueueServiceEnvironmentOrderOutputReference <a name="DataAwsccBatchJobQueueServiceEnvironmentOrderOutputReference" id="@cdktn/provider-awscc.dataAwsccBatchJobQueue.DataAwsccBatchJobQueueServiceEnvironmentOrderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBatchJobQueue.DataAwsccBatchJobQueueServiceEnvironmentOrderOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccBatchJobQueueServiceEnvironmentOrderOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchJobQueue.DataAwsccBatchJobQueueServiceEnvironmentOrderOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchJobQueue.DataAwsccBatchJobQueueServiceEnvironmentOrderOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchJobQueue.DataAwsccBatchJobQueueServiceEnvironmentOrderOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchJobQueue.DataAwsccBatchJobQueueServiceEnvironmentOrderOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccBatchJobQueue.DataAwsccBatchJobQueueServiceEnvironmentOrderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBatchJobQueue.DataAwsccBatchJobQueueServiceEnvironmentOrderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.dataAwsccBatchJobQueue.DataAwsccBatchJobQueueServiceEnvironmentOrderOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccBatchJobQueue.DataAwsccBatchJobQueueServiceEnvironmentOrderOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchJobQueue.DataAwsccBatchJobQueueServiceEnvironmentOrderOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchJobQueue.DataAwsccBatchJobQueueServiceEnvironmentOrderOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchJobQueue.DataAwsccBatchJobQueueServiceEnvironmentOrderOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchJobQueue.DataAwsccBatchJobQueueServiceEnvironmentOrderOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchJobQueue.DataAwsccBatchJobQueueServiceEnvironmentOrderOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchJobQueue.DataAwsccBatchJobQueueServiceEnvironmentOrderOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchJobQueue.DataAwsccBatchJobQueueServiceEnvironmentOrderOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchJobQueue.DataAwsccBatchJobQueueServiceEnvironmentOrderOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchJobQueue.DataAwsccBatchJobQueueServiceEnvironmentOrderOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchJobQueue.DataAwsccBatchJobQueueServiceEnvironmentOrderOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchJobQueue.DataAwsccBatchJobQueueServiceEnvironmentOrderOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchJobQueue.DataAwsccBatchJobQueueServiceEnvironmentOrderOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchJobQueue.DataAwsccBatchJobQueueServiceEnvironmentOrderOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccBatchJobQueue.DataAwsccBatchJobQueueServiceEnvironmentOrderOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBatchJobQueue.DataAwsccBatchJobQueueServiceEnvironmentOrderOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBatchJobQueue.DataAwsccBatchJobQueueServiceEnvironmentOrderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBatchJobQueue.DataAwsccBatchJobQueueServiceEnvironmentOrderOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBatchJobQueue.DataAwsccBatchJobQueueServiceEnvironmentOrderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBatchJobQueue.DataAwsccBatchJobQueueServiceEnvironmentOrderOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBatchJobQueue.DataAwsccBatchJobQueueServiceEnvironmentOrderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccBatchJobQueue.DataAwsccBatchJobQueueServiceEnvironmentOrderOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBatchJobQueue.DataAwsccBatchJobQueueServiceEnvironmentOrderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBatchJobQueue.DataAwsccBatchJobQueueServiceEnvironmentOrderOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBatchJobQueue.DataAwsccBatchJobQueueServiceEnvironmentOrderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBatchJobQueue.DataAwsccBatchJobQueueServiceEnvironmentOrderOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBatchJobQueue.DataAwsccBatchJobQueueServiceEnvironmentOrderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBatchJobQueue.DataAwsccBatchJobQueueServiceEnvironmentOrderOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBatchJobQueue.DataAwsccBatchJobQueueServiceEnvironmentOrderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccBatchJobQueue.DataAwsccBatchJobQueueServiceEnvironmentOrderOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBatchJobQueue.DataAwsccBatchJobQueueServiceEnvironmentOrderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBatchJobQueue.DataAwsccBatchJobQueueServiceEnvironmentOrderOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBatchJobQueue.DataAwsccBatchJobQueueServiceEnvironmentOrderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBatchJobQueue.DataAwsccBatchJobQueueServiceEnvironmentOrderOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccBatchJobQueue.DataAwsccBatchJobQueueServiceEnvironmentOrderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccBatchJobQueue.DataAwsccBatchJobQueueServiceEnvironmentOrderOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccBatchJobQueue.DataAwsccBatchJobQueueServiceEnvironmentOrderOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccBatchJobQueue.DataAwsccBatchJobQueueServiceEnvironmentOrderOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchJobQueue.DataAwsccBatchJobQueueServiceEnvironmentOrderOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchJobQueue.DataAwsccBatchJobQueueServiceEnvironmentOrderOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchJobQueue.DataAwsccBatchJobQueueServiceEnvironmentOrderOutputReference.property.order">Order</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchJobQueue.DataAwsccBatchJobQueueServiceEnvironmentOrderOutputReference.property.serviceEnvironment">ServiceEnvironment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBatchJobQueue.DataAwsccBatchJobQueueServiceEnvironmentOrderOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBatchJobQueue.DataAwsccBatchJobQueueServiceEnvironmentOrder">DataAwsccBatchJobQueueServiceEnvironmentOrder</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccBatchJobQueue.DataAwsccBatchJobQueueServiceEnvironmentOrderOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccBatchJobQueue.DataAwsccBatchJobQueueServiceEnvironmentOrderOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Order`<sup>Required</sup> <a name="Order" id="@cdktn/provider-awscc.dataAwsccBatchJobQueue.DataAwsccBatchJobQueueServiceEnvironmentOrderOutputReference.property.order"></a>

```csharp
public double Order { get; }
```

- *Type:* double

---

##### `ServiceEnvironment`<sup>Required</sup> <a name="ServiceEnvironment" id="@cdktn/provider-awscc.dataAwsccBatchJobQueue.DataAwsccBatchJobQueueServiceEnvironmentOrderOutputReference.property.serviceEnvironment"></a>

```csharp
public string ServiceEnvironment { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccBatchJobQueue.DataAwsccBatchJobQueueServiceEnvironmentOrderOutputReference.property.internalValue"></a>

```csharp
public DataAwsccBatchJobQueueServiceEnvironmentOrder InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBatchJobQueue.DataAwsccBatchJobQueueServiceEnvironmentOrder">DataAwsccBatchJobQueueServiceEnvironmentOrder</a>

---



