# `dataAwsccDeadlineQueue` Submodule <a name="`dataAwsccDeadlineQueue` Submodule" id="@cdktn/provider-awscc.dataAwsccDeadlineQueue"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccDeadlineQueue <a name="DataAwsccDeadlineQueue" id="@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueue"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/deadline_queue awscc_deadline_queue}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueue.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccDeadlineQueue(Construct Scope, string Id, DataAwsccDeadlineQueueConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueue.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueue.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueue.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueConfig">DataAwsccDeadlineQueueConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueue.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueue.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueue.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueConfig">DataAwsccDeadlineQueueConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueue.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueue.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueue.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueue.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueue.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueue.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueue.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueue.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueue.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueue.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueue.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueue.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueue.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueue.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueue.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueue.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueue.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueue.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueue.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueue.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueue.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueue.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueue.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueue.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueue.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueue.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueue.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueue.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueue.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueue.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueue.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueue.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueue.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueue.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueue.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueue.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueue.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueue.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueue.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueue.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueue.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueue.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueue.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueue.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueue.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueue.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueue.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueue.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueue.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueue.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueue.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueue.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueue.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueue.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccDeadlineQueue resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueue.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccDeadlineQueue.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueue.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueue.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccDeadlineQueue.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueue.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueue.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccDeadlineQueue.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueue.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueue.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccDeadlineQueue.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataAwsccDeadlineQueue resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueue.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueue.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccDeadlineQueue to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueue.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccDeadlineQueue that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/deadline_queue#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueue.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccDeadlineQueue to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueue.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueue.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueue.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueue.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueue.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueue.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueue.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueue.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueue.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueue.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueue.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueue.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueue.property.allowedStorageProfileIds">AllowedStorageProfileIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueue.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueue.property.defaultBudgetAction">DefaultBudgetAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueue.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueue.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueue.property.farmId">FarmId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueue.property.jobAttachmentSettings">JobAttachmentSettings</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueJobAttachmentSettingsOutputReference">DataAwsccDeadlineQueueJobAttachmentSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueue.property.jobRunAsUser">JobRunAsUser</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueJobRunAsUserOutputReference">DataAwsccDeadlineQueueJobRunAsUserOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueue.property.queueId">QueueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueue.property.requiredFileSystemLocationNames">RequiredFileSystemLocationNames</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueue.property.roleArn">RoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueue.property.schedulingConfiguration">SchedulingConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueSchedulingConfigurationOutputReference">DataAwsccDeadlineQueueSchedulingConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueue.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueTagsList">DataAwsccDeadlineQueueTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueue.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueue.property.id">Id</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueue.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueue.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueue.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueue.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueue.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueue.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueue.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueue.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueue.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueue.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueue.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueue.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `AllowedStorageProfileIds`<sup>Required</sup> <a name="AllowedStorageProfileIds" id="@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueue.property.allowedStorageProfileIds"></a>

```csharp
public string[] AllowedStorageProfileIds { get; }
```

- *Type:* string[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueue.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `DefaultBudgetAction`<sup>Required</sup> <a name="DefaultBudgetAction" id="@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueue.property.defaultBudgetAction"></a>

```csharp
public string DefaultBudgetAction { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueue.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueue.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `FarmId`<sup>Required</sup> <a name="FarmId" id="@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueue.property.farmId"></a>

```csharp
public string FarmId { get; }
```

- *Type:* string

---

##### `JobAttachmentSettings`<sup>Required</sup> <a name="JobAttachmentSettings" id="@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueue.property.jobAttachmentSettings"></a>

```csharp
public DataAwsccDeadlineQueueJobAttachmentSettingsOutputReference JobAttachmentSettings { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueJobAttachmentSettingsOutputReference">DataAwsccDeadlineQueueJobAttachmentSettingsOutputReference</a>

---

##### `JobRunAsUser`<sup>Required</sup> <a name="JobRunAsUser" id="@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueue.property.jobRunAsUser"></a>

```csharp
public DataAwsccDeadlineQueueJobRunAsUserOutputReference JobRunAsUser { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueJobRunAsUserOutputReference">DataAwsccDeadlineQueueJobRunAsUserOutputReference</a>

---

##### `QueueId`<sup>Required</sup> <a name="QueueId" id="@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueue.property.queueId"></a>

```csharp
public string QueueId { get; }
```

- *Type:* string

---

##### `RequiredFileSystemLocationNames`<sup>Required</sup> <a name="RequiredFileSystemLocationNames" id="@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueue.property.requiredFileSystemLocationNames"></a>

```csharp
public string[] RequiredFileSystemLocationNames { get; }
```

- *Type:* string[]

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueue.property.roleArn"></a>

```csharp
public string RoleArn { get; }
```

- *Type:* string

---

##### `SchedulingConfiguration`<sup>Required</sup> <a name="SchedulingConfiguration" id="@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueue.property.schedulingConfiguration"></a>

```csharp
public DataAwsccDeadlineQueueSchedulingConfigurationOutputReference SchedulingConfiguration { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueSchedulingConfigurationOutputReference">DataAwsccDeadlineQueueSchedulingConfigurationOutputReference</a>

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueue.property.tags"></a>

```csharp
public DataAwsccDeadlineQueueTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueTagsList">DataAwsccDeadlineQueueTagsList</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueue.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueue.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueue.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueue.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccDeadlineQueueConfig <a name="DataAwsccDeadlineQueueConfig" id="@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccDeadlineQueueConfig {
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueConfig.property.id">Id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/deadline_queue#id DataAwsccDeadlineQueue#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccDeadlineQueueJobAttachmentSettings <a name="DataAwsccDeadlineQueueJobAttachmentSettings" id="@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueJobAttachmentSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueJobAttachmentSettings.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccDeadlineQueueJobAttachmentSettings {

};
```


### DataAwsccDeadlineQueueJobRunAsUser <a name="DataAwsccDeadlineQueueJobRunAsUser" id="@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueJobRunAsUser"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueJobRunAsUser.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccDeadlineQueueJobRunAsUser {

};
```


### DataAwsccDeadlineQueueJobRunAsUserPosix <a name="DataAwsccDeadlineQueueJobRunAsUserPosix" id="@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueJobRunAsUserPosix"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueJobRunAsUserPosix.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccDeadlineQueueJobRunAsUserPosix {

};
```


### DataAwsccDeadlineQueueJobRunAsUserWindows <a name="DataAwsccDeadlineQueueJobRunAsUserWindows" id="@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueJobRunAsUserWindows"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueJobRunAsUserWindows.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccDeadlineQueueJobRunAsUserWindows {

};
```


### DataAwsccDeadlineQueueSchedulingConfiguration <a name="DataAwsccDeadlineQueueSchedulingConfiguration" id="@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueSchedulingConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueSchedulingConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccDeadlineQueueSchedulingConfiguration {

};
```


### DataAwsccDeadlineQueueSchedulingConfigurationPriorityBalanced <a name="DataAwsccDeadlineQueueSchedulingConfigurationPriorityBalanced" id="@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueSchedulingConfigurationPriorityBalanced"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueSchedulingConfigurationPriorityBalanced.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccDeadlineQueueSchedulingConfigurationPriorityBalanced {

};
```


### DataAwsccDeadlineQueueSchedulingConfigurationWeightedBalanced <a name="DataAwsccDeadlineQueueSchedulingConfigurationWeightedBalanced" id="@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueSchedulingConfigurationWeightedBalanced"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueSchedulingConfigurationWeightedBalanced.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccDeadlineQueueSchedulingConfigurationWeightedBalanced {

};
```


### DataAwsccDeadlineQueueSchedulingConfigurationWeightedBalancedMaxPriorityOverride <a name="DataAwsccDeadlineQueueSchedulingConfigurationWeightedBalancedMaxPriorityOverride" id="@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueSchedulingConfigurationWeightedBalancedMaxPriorityOverride"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueSchedulingConfigurationWeightedBalancedMaxPriorityOverride.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccDeadlineQueueSchedulingConfigurationWeightedBalancedMaxPriorityOverride {

};
```


### DataAwsccDeadlineQueueSchedulingConfigurationWeightedBalancedMinPriorityOverride <a name="DataAwsccDeadlineQueueSchedulingConfigurationWeightedBalancedMinPriorityOverride" id="@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueSchedulingConfigurationWeightedBalancedMinPriorityOverride"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueSchedulingConfigurationWeightedBalancedMinPriorityOverride.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccDeadlineQueueSchedulingConfigurationWeightedBalancedMinPriorityOverride {

};
```


### DataAwsccDeadlineQueueTags <a name="DataAwsccDeadlineQueueTags" id="@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccDeadlineQueueTags {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccDeadlineQueueJobAttachmentSettingsOutputReference <a name="DataAwsccDeadlineQueueJobAttachmentSettingsOutputReference" id="@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueJobAttachmentSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueJobAttachmentSettingsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccDeadlineQueueJobAttachmentSettingsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueJobAttachmentSettingsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueJobAttachmentSettingsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueJobAttachmentSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueJobAttachmentSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueJobAttachmentSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueJobAttachmentSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueJobAttachmentSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueJobAttachmentSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueJobAttachmentSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueJobAttachmentSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueJobAttachmentSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueJobAttachmentSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueJobAttachmentSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueJobAttachmentSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueJobAttachmentSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueJobAttachmentSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueJobAttachmentSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueJobAttachmentSettingsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueJobAttachmentSettingsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueJobAttachmentSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueJobAttachmentSettingsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueJobAttachmentSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueJobAttachmentSettingsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueJobAttachmentSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueJobAttachmentSettingsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueJobAttachmentSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueJobAttachmentSettingsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueJobAttachmentSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueJobAttachmentSettingsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueJobAttachmentSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueJobAttachmentSettingsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueJobAttachmentSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueJobAttachmentSettingsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueJobAttachmentSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueJobAttachmentSettingsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueJobAttachmentSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueJobAttachmentSettingsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueJobAttachmentSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueJobAttachmentSettingsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueJobAttachmentSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueJobAttachmentSettingsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueJobAttachmentSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueJobAttachmentSettingsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueJobAttachmentSettingsOutputReference.property.rootPrefix">RootPrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueJobAttachmentSettingsOutputReference.property.s3BucketName">S3BucketName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueJobAttachmentSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueJobAttachmentSettings">DataAwsccDeadlineQueueJobAttachmentSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueJobAttachmentSettingsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueJobAttachmentSettingsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `RootPrefix`<sup>Required</sup> <a name="RootPrefix" id="@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueJobAttachmentSettingsOutputReference.property.rootPrefix"></a>

```csharp
public string RootPrefix { get; }
```

- *Type:* string

---

##### `S3BucketName`<sup>Required</sup> <a name="S3BucketName" id="@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueJobAttachmentSettingsOutputReference.property.s3BucketName"></a>

```csharp
public string S3BucketName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueJobAttachmentSettingsOutputReference.property.internalValue"></a>

```csharp
public DataAwsccDeadlineQueueJobAttachmentSettings InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueJobAttachmentSettings">DataAwsccDeadlineQueueJobAttachmentSettings</a>

---


### DataAwsccDeadlineQueueJobRunAsUserOutputReference <a name="DataAwsccDeadlineQueueJobRunAsUserOutputReference" id="@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueJobRunAsUserOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueJobRunAsUserOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccDeadlineQueueJobRunAsUserOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueJobRunAsUserOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueJobRunAsUserOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueJobRunAsUserOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueJobRunAsUserOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueJobRunAsUserOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueJobRunAsUserOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueJobRunAsUserOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueJobRunAsUserOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueJobRunAsUserOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueJobRunAsUserOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueJobRunAsUserOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueJobRunAsUserOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueJobRunAsUserOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueJobRunAsUserOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueJobRunAsUserOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueJobRunAsUserOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueJobRunAsUserOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueJobRunAsUserOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueJobRunAsUserOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueJobRunAsUserOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueJobRunAsUserOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueJobRunAsUserOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueJobRunAsUserOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueJobRunAsUserOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueJobRunAsUserOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueJobRunAsUserOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueJobRunAsUserOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueJobRunAsUserOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueJobRunAsUserOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueJobRunAsUserOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueJobRunAsUserOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueJobRunAsUserOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueJobRunAsUserOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueJobRunAsUserOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueJobRunAsUserOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueJobRunAsUserOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueJobRunAsUserOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueJobRunAsUserOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueJobRunAsUserOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueJobRunAsUserOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueJobRunAsUserOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueJobRunAsUserOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueJobRunAsUserOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueJobRunAsUserOutputReference.property.posix">Posix</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueJobRunAsUserPosixOutputReference">DataAwsccDeadlineQueueJobRunAsUserPosixOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueJobRunAsUserOutputReference.property.runAs">RunAs</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueJobRunAsUserOutputReference.property.windows">Windows</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueJobRunAsUserWindowsOutputReference">DataAwsccDeadlineQueueJobRunAsUserWindowsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueJobRunAsUserOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueJobRunAsUser">DataAwsccDeadlineQueueJobRunAsUser</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueJobRunAsUserOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueJobRunAsUserOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Posix`<sup>Required</sup> <a name="Posix" id="@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueJobRunAsUserOutputReference.property.posix"></a>

```csharp
public DataAwsccDeadlineQueueJobRunAsUserPosixOutputReference Posix { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueJobRunAsUserPosixOutputReference">DataAwsccDeadlineQueueJobRunAsUserPosixOutputReference</a>

---

##### `RunAs`<sup>Required</sup> <a name="RunAs" id="@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueJobRunAsUserOutputReference.property.runAs"></a>

```csharp
public string RunAs { get; }
```

- *Type:* string

---

##### `Windows`<sup>Required</sup> <a name="Windows" id="@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueJobRunAsUserOutputReference.property.windows"></a>

```csharp
public DataAwsccDeadlineQueueJobRunAsUserWindowsOutputReference Windows { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueJobRunAsUserWindowsOutputReference">DataAwsccDeadlineQueueJobRunAsUserWindowsOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueJobRunAsUserOutputReference.property.internalValue"></a>

```csharp
public DataAwsccDeadlineQueueJobRunAsUser InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueJobRunAsUser">DataAwsccDeadlineQueueJobRunAsUser</a>

---


### DataAwsccDeadlineQueueJobRunAsUserPosixOutputReference <a name="DataAwsccDeadlineQueueJobRunAsUserPosixOutputReference" id="@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueJobRunAsUserPosixOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueJobRunAsUserPosixOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccDeadlineQueueJobRunAsUserPosixOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueJobRunAsUserPosixOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueJobRunAsUserPosixOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueJobRunAsUserPosixOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueJobRunAsUserPosixOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueJobRunAsUserPosixOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueJobRunAsUserPosixOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueJobRunAsUserPosixOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueJobRunAsUserPosixOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueJobRunAsUserPosixOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueJobRunAsUserPosixOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueJobRunAsUserPosixOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueJobRunAsUserPosixOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueJobRunAsUserPosixOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueJobRunAsUserPosixOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueJobRunAsUserPosixOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueJobRunAsUserPosixOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueJobRunAsUserPosixOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueJobRunAsUserPosixOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueJobRunAsUserPosixOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueJobRunAsUserPosixOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueJobRunAsUserPosixOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueJobRunAsUserPosixOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueJobRunAsUserPosixOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueJobRunAsUserPosixOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueJobRunAsUserPosixOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueJobRunAsUserPosixOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueJobRunAsUserPosixOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueJobRunAsUserPosixOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueJobRunAsUserPosixOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueJobRunAsUserPosixOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueJobRunAsUserPosixOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueJobRunAsUserPosixOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueJobRunAsUserPosixOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueJobRunAsUserPosixOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueJobRunAsUserPosixOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueJobRunAsUserPosixOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueJobRunAsUserPosixOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueJobRunAsUserPosixOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueJobRunAsUserPosixOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueJobRunAsUserPosixOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueJobRunAsUserPosixOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueJobRunAsUserPosixOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueJobRunAsUserPosixOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueJobRunAsUserPosixOutputReference.property.group">Group</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueJobRunAsUserPosixOutputReference.property.user">User</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueJobRunAsUserPosixOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueJobRunAsUserPosix">DataAwsccDeadlineQueueJobRunAsUserPosix</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueJobRunAsUserPosixOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueJobRunAsUserPosixOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Group`<sup>Required</sup> <a name="Group" id="@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueJobRunAsUserPosixOutputReference.property.group"></a>

```csharp
public string Group { get; }
```

- *Type:* string

---

##### `User`<sup>Required</sup> <a name="User" id="@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueJobRunAsUserPosixOutputReference.property.user"></a>

```csharp
public string User { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueJobRunAsUserPosixOutputReference.property.internalValue"></a>

```csharp
public DataAwsccDeadlineQueueJobRunAsUserPosix InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueJobRunAsUserPosix">DataAwsccDeadlineQueueJobRunAsUserPosix</a>

---


### DataAwsccDeadlineQueueJobRunAsUserWindowsOutputReference <a name="DataAwsccDeadlineQueueJobRunAsUserWindowsOutputReference" id="@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueJobRunAsUserWindowsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueJobRunAsUserWindowsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccDeadlineQueueJobRunAsUserWindowsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueJobRunAsUserWindowsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueJobRunAsUserWindowsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueJobRunAsUserWindowsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueJobRunAsUserWindowsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueJobRunAsUserWindowsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueJobRunAsUserWindowsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueJobRunAsUserWindowsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueJobRunAsUserWindowsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueJobRunAsUserWindowsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueJobRunAsUserWindowsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueJobRunAsUserWindowsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueJobRunAsUserWindowsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueJobRunAsUserWindowsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueJobRunAsUserWindowsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueJobRunAsUserWindowsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueJobRunAsUserWindowsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueJobRunAsUserWindowsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueJobRunAsUserWindowsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueJobRunAsUserWindowsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueJobRunAsUserWindowsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueJobRunAsUserWindowsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueJobRunAsUserWindowsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueJobRunAsUserWindowsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueJobRunAsUserWindowsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueJobRunAsUserWindowsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueJobRunAsUserWindowsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueJobRunAsUserWindowsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueJobRunAsUserWindowsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueJobRunAsUserWindowsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueJobRunAsUserWindowsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueJobRunAsUserWindowsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueJobRunAsUserWindowsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueJobRunAsUserWindowsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueJobRunAsUserWindowsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueJobRunAsUserWindowsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueJobRunAsUserWindowsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueJobRunAsUserWindowsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueJobRunAsUserWindowsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueJobRunAsUserWindowsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueJobRunAsUserWindowsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueJobRunAsUserWindowsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueJobRunAsUserWindowsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueJobRunAsUserWindowsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueJobRunAsUserWindowsOutputReference.property.passwordArn">PasswordArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueJobRunAsUserWindowsOutputReference.property.user">User</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueJobRunAsUserWindowsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueJobRunAsUserWindows">DataAwsccDeadlineQueueJobRunAsUserWindows</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueJobRunAsUserWindowsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueJobRunAsUserWindowsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PasswordArn`<sup>Required</sup> <a name="PasswordArn" id="@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueJobRunAsUserWindowsOutputReference.property.passwordArn"></a>

```csharp
public string PasswordArn { get; }
```

- *Type:* string

---

##### `User`<sup>Required</sup> <a name="User" id="@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueJobRunAsUserWindowsOutputReference.property.user"></a>

```csharp
public string User { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueJobRunAsUserWindowsOutputReference.property.internalValue"></a>

```csharp
public DataAwsccDeadlineQueueJobRunAsUserWindows InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueJobRunAsUserWindows">DataAwsccDeadlineQueueJobRunAsUserWindows</a>

---


### DataAwsccDeadlineQueueSchedulingConfigurationOutputReference <a name="DataAwsccDeadlineQueueSchedulingConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueSchedulingConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueSchedulingConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccDeadlineQueueSchedulingConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueSchedulingConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueSchedulingConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueSchedulingConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueSchedulingConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueSchedulingConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueSchedulingConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueSchedulingConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueSchedulingConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueSchedulingConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueSchedulingConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueSchedulingConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueSchedulingConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueSchedulingConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueSchedulingConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueSchedulingConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueSchedulingConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueSchedulingConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueSchedulingConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueSchedulingConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueSchedulingConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueSchedulingConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueSchedulingConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueSchedulingConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueSchedulingConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueSchedulingConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueSchedulingConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueSchedulingConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueSchedulingConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueSchedulingConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueSchedulingConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueSchedulingConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueSchedulingConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueSchedulingConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueSchedulingConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueSchedulingConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueSchedulingConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueSchedulingConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueSchedulingConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueSchedulingConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueSchedulingConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueSchedulingConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueSchedulingConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueSchedulingConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueSchedulingConfigurationOutputReference.property.priorityBalanced">PriorityBalanced</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueSchedulingConfigurationPriorityBalancedOutputReference">DataAwsccDeadlineQueueSchedulingConfigurationPriorityBalancedOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueSchedulingConfigurationOutputReference.property.priorityFifo">PriorityFifo</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueSchedulingConfigurationOutputReference.property.weightedBalanced">WeightedBalanced</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueSchedulingConfigurationWeightedBalancedOutputReference">DataAwsccDeadlineQueueSchedulingConfigurationWeightedBalancedOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueSchedulingConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueSchedulingConfiguration">DataAwsccDeadlineQueueSchedulingConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueSchedulingConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueSchedulingConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PriorityBalanced`<sup>Required</sup> <a name="PriorityBalanced" id="@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueSchedulingConfigurationOutputReference.property.priorityBalanced"></a>

```csharp
public DataAwsccDeadlineQueueSchedulingConfigurationPriorityBalancedOutputReference PriorityBalanced { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueSchedulingConfigurationPriorityBalancedOutputReference">DataAwsccDeadlineQueueSchedulingConfigurationPriorityBalancedOutputReference</a>

---

##### `PriorityFifo`<sup>Required</sup> <a name="PriorityFifo" id="@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueSchedulingConfigurationOutputReference.property.priorityFifo"></a>

```csharp
public string PriorityFifo { get; }
```

- *Type:* string

---

##### `WeightedBalanced`<sup>Required</sup> <a name="WeightedBalanced" id="@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueSchedulingConfigurationOutputReference.property.weightedBalanced"></a>

```csharp
public DataAwsccDeadlineQueueSchedulingConfigurationWeightedBalancedOutputReference WeightedBalanced { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueSchedulingConfigurationWeightedBalancedOutputReference">DataAwsccDeadlineQueueSchedulingConfigurationWeightedBalancedOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueSchedulingConfigurationOutputReference.property.internalValue"></a>

```csharp
public DataAwsccDeadlineQueueSchedulingConfiguration InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueSchedulingConfiguration">DataAwsccDeadlineQueueSchedulingConfiguration</a>

---


### DataAwsccDeadlineQueueSchedulingConfigurationPriorityBalancedOutputReference <a name="DataAwsccDeadlineQueueSchedulingConfigurationPriorityBalancedOutputReference" id="@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueSchedulingConfigurationPriorityBalancedOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueSchedulingConfigurationPriorityBalancedOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccDeadlineQueueSchedulingConfigurationPriorityBalancedOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueSchedulingConfigurationPriorityBalancedOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueSchedulingConfigurationPriorityBalancedOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueSchedulingConfigurationPriorityBalancedOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueSchedulingConfigurationPriorityBalancedOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueSchedulingConfigurationPriorityBalancedOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueSchedulingConfigurationPriorityBalancedOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueSchedulingConfigurationPriorityBalancedOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueSchedulingConfigurationPriorityBalancedOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueSchedulingConfigurationPriorityBalancedOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueSchedulingConfigurationPriorityBalancedOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueSchedulingConfigurationPriorityBalancedOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueSchedulingConfigurationPriorityBalancedOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueSchedulingConfigurationPriorityBalancedOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueSchedulingConfigurationPriorityBalancedOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueSchedulingConfigurationPriorityBalancedOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueSchedulingConfigurationPriorityBalancedOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueSchedulingConfigurationPriorityBalancedOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueSchedulingConfigurationPriorityBalancedOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueSchedulingConfigurationPriorityBalancedOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueSchedulingConfigurationPriorityBalancedOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueSchedulingConfigurationPriorityBalancedOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueSchedulingConfigurationPriorityBalancedOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueSchedulingConfigurationPriorityBalancedOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueSchedulingConfigurationPriorityBalancedOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueSchedulingConfigurationPriorityBalancedOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueSchedulingConfigurationPriorityBalancedOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueSchedulingConfigurationPriorityBalancedOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueSchedulingConfigurationPriorityBalancedOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueSchedulingConfigurationPriorityBalancedOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueSchedulingConfigurationPriorityBalancedOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueSchedulingConfigurationPriorityBalancedOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueSchedulingConfigurationPriorityBalancedOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueSchedulingConfigurationPriorityBalancedOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueSchedulingConfigurationPriorityBalancedOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueSchedulingConfigurationPriorityBalancedOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueSchedulingConfigurationPriorityBalancedOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueSchedulingConfigurationPriorityBalancedOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueSchedulingConfigurationPriorityBalancedOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueSchedulingConfigurationPriorityBalancedOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueSchedulingConfigurationPriorityBalancedOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueSchedulingConfigurationPriorityBalancedOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueSchedulingConfigurationPriorityBalancedOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueSchedulingConfigurationPriorityBalancedOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueSchedulingConfigurationPriorityBalancedOutputReference.property.renderingTaskBuffer">RenderingTaskBuffer</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueSchedulingConfigurationPriorityBalancedOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueSchedulingConfigurationPriorityBalanced">DataAwsccDeadlineQueueSchedulingConfigurationPriorityBalanced</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueSchedulingConfigurationPriorityBalancedOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueSchedulingConfigurationPriorityBalancedOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `RenderingTaskBuffer`<sup>Required</sup> <a name="RenderingTaskBuffer" id="@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueSchedulingConfigurationPriorityBalancedOutputReference.property.renderingTaskBuffer"></a>

```csharp
public double RenderingTaskBuffer { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueSchedulingConfigurationPriorityBalancedOutputReference.property.internalValue"></a>

```csharp
public DataAwsccDeadlineQueueSchedulingConfigurationPriorityBalanced InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueSchedulingConfigurationPriorityBalanced">DataAwsccDeadlineQueueSchedulingConfigurationPriorityBalanced</a>

---


### DataAwsccDeadlineQueueSchedulingConfigurationWeightedBalancedMaxPriorityOverrideOutputReference <a name="DataAwsccDeadlineQueueSchedulingConfigurationWeightedBalancedMaxPriorityOverrideOutputReference" id="@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueSchedulingConfigurationWeightedBalancedMaxPriorityOverrideOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueSchedulingConfigurationWeightedBalancedMaxPriorityOverrideOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccDeadlineQueueSchedulingConfigurationWeightedBalancedMaxPriorityOverrideOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueSchedulingConfigurationWeightedBalancedMaxPriorityOverrideOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueSchedulingConfigurationWeightedBalancedMaxPriorityOverrideOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueSchedulingConfigurationWeightedBalancedMaxPriorityOverrideOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueSchedulingConfigurationWeightedBalancedMaxPriorityOverrideOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueSchedulingConfigurationWeightedBalancedMaxPriorityOverrideOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueSchedulingConfigurationWeightedBalancedMaxPriorityOverrideOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueSchedulingConfigurationWeightedBalancedMaxPriorityOverrideOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueSchedulingConfigurationWeightedBalancedMaxPriorityOverrideOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueSchedulingConfigurationWeightedBalancedMaxPriorityOverrideOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueSchedulingConfigurationWeightedBalancedMaxPriorityOverrideOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueSchedulingConfigurationWeightedBalancedMaxPriorityOverrideOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueSchedulingConfigurationWeightedBalancedMaxPriorityOverrideOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueSchedulingConfigurationWeightedBalancedMaxPriorityOverrideOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueSchedulingConfigurationWeightedBalancedMaxPriorityOverrideOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueSchedulingConfigurationWeightedBalancedMaxPriorityOverrideOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueSchedulingConfigurationWeightedBalancedMaxPriorityOverrideOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueSchedulingConfigurationWeightedBalancedMaxPriorityOverrideOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueSchedulingConfigurationWeightedBalancedMaxPriorityOverrideOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueSchedulingConfigurationWeightedBalancedMaxPriorityOverrideOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueSchedulingConfigurationWeightedBalancedMaxPriorityOverrideOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueSchedulingConfigurationWeightedBalancedMaxPriorityOverrideOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueSchedulingConfigurationWeightedBalancedMaxPriorityOverrideOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueSchedulingConfigurationWeightedBalancedMaxPriorityOverrideOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueSchedulingConfigurationWeightedBalancedMaxPriorityOverrideOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueSchedulingConfigurationWeightedBalancedMaxPriorityOverrideOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueSchedulingConfigurationWeightedBalancedMaxPriorityOverrideOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueSchedulingConfigurationWeightedBalancedMaxPriorityOverrideOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueSchedulingConfigurationWeightedBalancedMaxPriorityOverrideOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueSchedulingConfigurationWeightedBalancedMaxPriorityOverrideOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueSchedulingConfigurationWeightedBalancedMaxPriorityOverrideOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueSchedulingConfigurationWeightedBalancedMaxPriorityOverrideOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueSchedulingConfigurationWeightedBalancedMaxPriorityOverrideOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueSchedulingConfigurationWeightedBalancedMaxPriorityOverrideOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueSchedulingConfigurationWeightedBalancedMaxPriorityOverrideOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueSchedulingConfigurationWeightedBalancedMaxPriorityOverrideOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueSchedulingConfigurationWeightedBalancedMaxPriorityOverrideOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueSchedulingConfigurationWeightedBalancedMaxPriorityOverrideOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueSchedulingConfigurationWeightedBalancedMaxPriorityOverrideOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueSchedulingConfigurationWeightedBalancedMaxPriorityOverrideOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueSchedulingConfigurationWeightedBalancedMaxPriorityOverrideOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueSchedulingConfigurationWeightedBalancedMaxPriorityOverrideOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueSchedulingConfigurationWeightedBalancedMaxPriorityOverrideOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueSchedulingConfigurationWeightedBalancedMaxPriorityOverrideOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueSchedulingConfigurationWeightedBalancedMaxPriorityOverrideOutputReference.property.alwaysScheduleFirst">AlwaysScheduleFirst</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueSchedulingConfigurationWeightedBalancedMaxPriorityOverrideOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueSchedulingConfigurationWeightedBalancedMaxPriorityOverride">DataAwsccDeadlineQueueSchedulingConfigurationWeightedBalancedMaxPriorityOverride</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueSchedulingConfigurationWeightedBalancedMaxPriorityOverrideOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueSchedulingConfigurationWeightedBalancedMaxPriorityOverrideOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AlwaysScheduleFirst`<sup>Required</sup> <a name="AlwaysScheduleFirst" id="@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueSchedulingConfigurationWeightedBalancedMaxPriorityOverrideOutputReference.property.alwaysScheduleFirst"></a>

```csharp
public string AlwaysScheduleFirst { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueSchedulingConfigurationWeightedBalancedMaxPriorityOverrideOutputReference.property.internalValue"></a>

```csharp
public DataAwsccDeadlineQueueSchedulingConfigurationWeightedBalancedMaxPriorityOverride InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueSchedulingConfigurationWeightedBalancedMaxPriorityOverride">DataAwsccDeadlineQueueSchedulingConfigurationWeightedBalancedMaxPriorityOverride</a>

---


### DataAwsccDeadlineQueueSchedulingConfigurationWeightedBalancedMinPriorityOverrideOutputReference <a name="DataAwsccDeadlineQueueSchedulingConfigurationWeightedBalancedMinPriorityOverrideOutputReference" id="@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueSchedulingConfigurationWeightedBalancedMinPriorityOverrideOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueSchedulingConfigurationWeightedBalancedMinPriorityOverrideOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccDeadlineQueueSchedulingConfigurationWeightedBalancedMinPriorityOverrideOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueSchedulingConfigurationWeightedBalancedMinPriorityOverrideOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueSchedulingConfigurationWeightedBalancedMinPriorityOverrideOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueSchedulingConfigurationWeightedBalancedMinPriorityOverrideOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueSchedulingConfigurationWeightedBalancedMinPriorityOverrideOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueSchedulingConfigurationWeightedBalancedMinPriorityOverrideOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueSchedulingConfigurationWeightedBalancedMinPriorityOverrideOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueSchedulingConfigurationWeightedBalancedMinPriorityOverrideOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueSchedulingConfigurationWeightedBalancedMinPriorityOverrideOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueSchedulingConfigurationWeightedBalancedMinPriorityOverrideOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueSchedulingConfigurationWeightedBalancedMinPriorityOverrideOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueSchedulingConfigurationWeightedBalancedMinPriorityOverrideOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueSchedulingConfigurationWeightedBalancedMinPriorityOverrideOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueSchedulingConfigurationWeightedBalancedMinPriorityOverrideOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueSchedulingConfigurationWeightedBalancedMinPriorityOverrideOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueSchedulingConfigurationWeightedBalancedMinPriorityOverrideOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueSchedulingConfigurationWeightedBalancedMinPriorityOverrideOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueSchedulingConfigurationWeightedBalancedMinPriorityOverrideOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueSchedulingConfigurationWeightedBalancedMinPriorityOverrideOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueSchedulingConfigurationWeightedBalancedMinPriorityOverrideOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueSchedulingConfigurationWeightedBalancedMinPriorityOverrideOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueSchedulingConfigurationWeightedBalancedMinPriorityOverrideOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueSchedulingConfigurationWeightedBalancedMinPriorityOverrideOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueSchedulingConfigurationWeightedBalancedMinPriorityOverrideOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueSchedulingConfigurationWeightedBalancedMinPriorityOverrideOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueSchedulingConfigurationWeightedBalancedMinPriorityOverrideOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueSchedulingConfigurationWeightedBalancedMinPriorityOverrideOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueSchedulingConfigurationWeightedBalancedMinPriorityOverrideOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueSchedulingConfigurationWeightedBalancedMinPriorityOverrideOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueSchedulingConfigurationWeightedBalancedMinPriorityOverrideOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueSchedulingConfigurationWeightedBalancedMinPriorityOverrideOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueSchedulingConfigurationWeightedBalancedMinPriorityOverrideOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueSchedulingConfigurationWeightedBalancedMinPriorityOverrideOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueSchedulingConfigurationWeightedBalancedMinPriorityOverrideOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueSchedulingConfigurationWeightedBalancedMinPriorityOverrideOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueSchedulingConfigurationWeightedBalancedMinPriorityOverrideOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueSchedulingConfigurationWeightedBalancedMinPriorityOverrideOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueSchedulingConfigurationWeightedBalancedMinPriorityOverrideOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueSchedulingConfigurationWeightedBalancedMinPriorityOverrideOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueSchedulingConfigurationWeightedBalancedMinPriorityOverrideOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueSchedulingConfigurationWeightedBalancedMinPriorityOverrideOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueSchedulingConfigurationWeightedBalancedMinPriorityOverrideOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueSchedulingConfigurationWeightedBalancedMinPriorityOverrideOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueSchedulingConfigurationWeightedBalancedMinPriorityOverrideOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueSchedulingConfigurationWeightedBalancedMinPriorityOverrideOutputReference.property.alwaysScheduleLast">AlwaysScheduleLast</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueSchedulingConfigurationWeightedBalancedMinPriorityOverrideOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueSchedulingConfigurationWeightedBalancedMinPriorityOverride">DataAwsccDeadlineQueueSchedulingConfigurationWeightedBalancedMinPriorityOverride</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueSchedulingConfigurationWeightedBalancedMinPriorityOverrideOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueSchedulingConfigurationWeightedBalancedMinPriorityOverrideOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AlwaysScheduleLast`<sup>Required</sup> <a name="AlwaysScheduleLast" id="@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueSchedulingConfigurationWeightedBalancedMinPriorityOverrideOutputReference.property.alwaysScheduleLast"></a>

```csharp
public string AlwaysScheduleLast { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueSchedulingConfigurationWeightedBalancedMinPriorityOverrideOutputReference.property.internalValue"></a>

```csharp
public DataAwsccDeadlineQueueSchedulingConfigurationWeightedBalancedMinPriorityOverride InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueSchedulingConfigurationWeightedBalancedMinPriorityOverride">DataAwsccDeadlineQueueSchedulingConfigurationWeightedBalancedMinPriorityOverride</a>

---


### DataAwsccDeadlineQueueSchedulingConfigurationWeightedBalancedOutputReference <a name="DataAwsccDeadlineQueueSchedulingConfigurationWeightedBalancedOutputReference" id="@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueSchedulingConfigurationWeightedBalancedOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueSchedulingConfigurationWeightedBalancedOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccDeadlineQueueSchedulingConfigurationWeightedBalancedOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueSchedulingConfigurationWeightedBalancedOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueSchedulingConfigurationWeightedBalancedOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueSchedulingConfigurationWeightedBalancedOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueSchedulingConfigurationWeightedBalancedOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueSchedulingConfigurationWeightedBalancedOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueSchedulingConfigurationWeightedBalancedOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueSchedulingConfigurationWeightedBalancedOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueSchedulingConfigurationWeightedBalancedOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueSchedulingConfigurationWeightedBalancedOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueSchedulingConfigurationWeightedBalancedOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueSchedulingConfigurationWeightedBalancedOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueSchedulingConfigurationWeightedBalancedOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueSchedulingConfigurationWeightedBalancedOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueSchedulingConfigurationWeightedBalancedOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueSchedulingConfigurationWeightedBalancedOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueSchedulingConfigurationWeightedBalancedOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueSchedulingConfigurationWeightedBalancedOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueSchedulingConfigurationWeightedBalancedOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueSchedulingConfigurationWeightedBalancedOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueSchedulingConfigurationWeightedBalancedOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueSchedulingConfigurationWeightedBalancedOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueSchedulingConfigurationWeightedBalancedOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueSchedulingConfigurationWeightedBalancedOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueSchedulingConfigurationWeightedBalancedOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueSchedulingConfigurationWeightedBalancedOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueSchedulingConfigurationWeightedBalancedOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueSchedulingConfigurationWeightedBalancedOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueSchedulingConfigurationWeightedBalancedOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueSchedulingConfigurationWeightedBalancedOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueSchedulingConfigurationWeightedBalancedOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueSchedulingConfigurationWeightedBalancedOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueSchedulingConfigurationWeightedBalancedOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueSchedulingConfigurationWeightedBalancedOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueSchedulingConfigurationWeightedBalancedOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueSchedulingConfigurationWeightedBalancedOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueSchedulingConfigurationWeightedBalancedOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueSchedulingConfigurationWeightedBalancedOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueSchedulingConfigurationWeightedBalancedOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueSchedulingConfigurationWeightedBalancedOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueSchedulingConfigurationWeightedBalancedOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueSchedulingConfigurationWeightedBalancedOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueSchedulingConfigurationWeightedBalancedOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueSchedulingConfigurationWeightedBalancedOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueSchedulingConfigurationWeightedBalancedOutputReference.property.errorWeight">ErrorWeight</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueSchedulingConfigurationWeightedBalancedOutputReference.property.maxPriorityOverride">MaxPriorityOverride</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueSchedulingConfigurationWeightedBalancedMaxPriorityOverrideOutputReference">DataAwsccDeadlineQueueSchedulingConfigurationWeightedBalancedMaxPriorityOverrideOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueSchedulingConfigurationWeightedBalancedOutputReference.property.minPriorityOverride">MinPriorityOverride</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueSchedulingConfigurationWeightedBalancedMinPriorityOverrideOutputReference">DataAwsccDeadlineQueueSchedulingConfigurationWeightedBalancedMinPriorityOverrideOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueSchedulingConfigurationWeightedBalancedOutputReference.property.priorityWeight">PriorityWeight</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueSchedulingConfigurationWeightedBalancedOutputReference.property.renderingTaskBuffer">RenderingTaskBuffer</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueSchedulingConfigurationWeightedBalancedOutputReference.property.renderingTaskWeight">RenderingTaskWeight</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueSchedulingConfigurationWeightedBalancedOutputReference.property.submissionTimeWeight">SubmissionTimeWeight</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueSchedulingConfigurationWeightedBalancedOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueSchedulingConfigurationWeightedBalanced">DataAwsccDeadlineQueueSchedulingConfigurationWeightedBalanced</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueSchedulingConfigurationWeightedBalancedOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueSchedulingConfigurationWeightedBalancedOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ErrorWeight`<sup>Required</sup> <a name="ErrorWeight" id="@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueSchedulingConfigurationWeightedBalancedOutputReference.property.errorWeight"></a>

```csharp
public double ErrorWeight { get; }
```

- *Type:* double

---

##### `MaxPriorityOverride`<sup>Required</sup> <a name="MaxPriorityOverride" id="@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueSchedulingConfigurationWeightedBalancedOutputReference.property.maxPriorityOverride"></a>

```csharp
public DataAwsccDeadlineQueueSchedulingConfigurationWeightedBalancedMaxPriorityOverrideOutputReference MaxPriorityOverride { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueSchedulingConfigurationWeightedBalancedMaxPriorityOverrideOutputReference">DataAwsccDeadlineQueueSchedulingConfigurationWeightedBalancedMaxPriorityOverrideOutputReference</a>

---

##### `MinPriorityOverride`<sup>Required</sup> <a name="MinPriorityOverride" id="@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueSchedulingConfigurationWeightedBalancedOutputReference.property.minPriorityOverride"></a>

```csharp
public DataAwsccDeadlineQueueSchedulingConfigurationWeightedBalancedMinPriorityOverrideOutputReference MinPriorityOverride { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueSchedulingConfigurationWeightedBalancedMinPriorityOverrideOutputReference">DataAwsccDeadlineQueueSchedulingConfigurationWeightedBalancedMinPriorityOverrideOutputReference</a>

---

##### `PriorityWeight`<sup>Required</sup> <a name="PriorityWeight" id="@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueSchedulingConfigurationWeightedBalancedOutputReference.property.priorityWeight"></a>

```csharp
public double PriorityWeight { get; }
```

- *Type:* double

---

##### `RenderingTaskBuffer`<sup>Required</sup> <a name="RenderingTaskBuffer" id="@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueSchedulingConfigurationWeightedBalancedOutputReference.property.renderingTaskBuffer"></a>

```csharp
public double RenderingTaskBuffer { get; }
```

- *Type:* double

---

##### `RenderingTaskWeight`<sup>Required</sup> <a name="RenderingTaskWeight" id="@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueSchedulingConfigurationWeightedBalancedOutputReference.property.renderingTaskWeight"></a>

```csharp
public double RenderingTaskWeight { get; }
```

- *Type:* double

---

##### `SubmissionTimeWeight`<sup>Required</sup> <a name="SubmissionTimeWeight" id="@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueSchedulingConfigurationWeightedBalancedOutputReference.property.submissionTimeWeight"></a>

```csharp
public double SubmissionTimeWeight { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueSchedulingConfigurationWeightedBalancedOutputReference.property.internalValue"></a>

```csharp
public DataAwsccDeadlineQueueSchedulingConfigurationWeightedBalanced InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueSchedulingConfigurationWeightedBalanced">DataAwsccDeadlineQueueSchedulingConfigurationWeightedBalanced</a>

---


### DataAwsccDeadlineQueueTagsList <a name="DataAwsccDeadlineQueueTagsList" id="@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccDeadlineQueueTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueTagsList.get"></a>

```csharp
private DataAwsccDeadlineQueueTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsccDeadlineQueueTagsOutputReference <a name="DataAwsccDeadlineQueueTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccDeadlineQueueTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueTagsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueTags">DataAwsccDeadlineQueueTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueTagsOutputReference.property.internalValue"></a>

```csharp
public DataAwsccDeadlineQueueTags InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDeadlineQueue.DataAwsccDeadlineQueueTags">DataAwsccDeadlineQueueTags</a>

---



