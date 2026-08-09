# `dataAwsccEventsRule` Submodule <a name="`dataAwsccEventsRule` Submodule" id="@cdktn/provider-awscc.dataAwsccEventsRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccEventsRule <a name="DataAwsccEventsRule" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRule"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/events_rule awscc_events_rule}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRule.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccEventsRule(Construct Scope, string Id, DataAwsccEventsRuleConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRule.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRule.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRule.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleConfig">DataAwsccEventsRuleConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRule.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRule.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRule.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleConfig">DataAwsccEventsRuleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRule.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRule.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRule.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRule.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRule.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRule.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRule.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRule.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRule.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRule.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRule.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRule.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRule.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRule.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRule.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRule.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRule.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRule.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRule.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRule.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRule.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRule.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRule.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRule.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRule.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRule.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRule.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRule.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRule.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRule.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRule.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRule.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRule.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRule.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRule.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRule.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRule.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRule.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRule.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRule.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRule.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRule.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRule.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccEventsRule resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRule.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccEventsRule.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRule.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRule.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccEventsRule.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRule.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRule.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccEventsRule.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRule.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRule.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccEventsRule.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataAwsccEventsRule resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRule.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRule.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccEventsRule to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccEventsRule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/events_rule#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRule.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccEventsRule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRule.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRule.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRule.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRule.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRule.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRule.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRule.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRule.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRule.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRule.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRule.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRule.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRule.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRule.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRule.property.eventBusName">EventBusName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRule.property.eventPattern">EventPattern</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRule.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRule.property.roleArn">RoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRule.property.scheduleExpression">ScheduleExpression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRule.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRule.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTagsList">DataAwsccEventsRuleTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRule.property.targets">Targets</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsList">DataAwsccEventsRuleTargetsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRule.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRule.property.id">Id</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRule.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRule.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRule.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRule.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRule.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRule.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRule.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRule.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRule.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRule.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRule.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRule.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRule.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRule.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `EventBusName`<sup>Required</sup> <a name="EventBusName" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRule.property.eventBusName"></a>

```csharp
public string EventBusName { get; }
```

- *Type:* string

---

##### `EventPattern`<sup>Required</sup> <a name="EventPattern" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRule.property.eventPattern"></a>

```csharp
public string EventPattern { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRule.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRule.property.roleArn"></a>

```csharp
public string RoleArn { get; }
```

- *Type:* string

---

##### `ScheduleExpression`<sup>Required</sup> <a name="ScheduleExpression" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRule.property.scheduleExpression"></a>

```csharp
public string ScheduleExpression { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRule.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRule.property.tags"></a>

```csharp
public DataAwsccEventsRuleTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTagsList">DataAwsccEventsRuleTagsList</a>

---

##### `Targets`<sup>Required</sup> <a name="Targets" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRule.property.targets"></a>

```csharp
public DataAwsccEventsRuleTargetsList Targets { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsList">DataAwsccEventsRuleTargetsList</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRule.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRule.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRule.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRule.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccEventsRuleConfig <a name="DataAwsccEventsRuleConfig" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccEventsRuleConfig {
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleConfig.property.id">Id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/events_rule#id DataAwsccEventsRule#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccEventsRuleTags <a name="DataAwsccEventsRuleTags" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccEventsRuleTags {

};
```


### DataAwsccEventsRuleTargets <a name="DataAwsccEventsRuleTargets" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargets"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargets.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccEventsRuleTargets {

};
```


### DataAwsccEventsRuleTargetsAppSyncParameters <a name="DataAwsccEventsRuleTargetsAppSyncParameters" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsAppSyncParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsAppSyncParameters.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccEventsRuleTargetsAppSyncParameters {

};
```


### DataAwsccEventsRuleTargetsBatchParameters <a name="DataAwsccEventsRuleTargetsBatchParameters" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParameters.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccEventsRuleTargetsBatchParameters {

};
```


### DataAwsccEventsRuleTargetsBatchParametersArrayProperties <a name="DataAwsccEventsRuleTargetsBatchParametersArrayProperties" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParametersArrayProperties"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParametersArrayProperties.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccEventsRuleTargetsBatchParametersArrayProperties {

};
```


### DataAwsccEventsRuleTargetsBatchParametersRetryStrategy <a name="DataAwsccEventsRuleTargetsBatchParametersRetryStrategy" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParametersRetryStrategy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParametersRetryStrategy.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccEventsRuleTargetsBatchParametersRetryStrategy {

};
```


### DataAwsccEventsRuleTargetsDeadLetterConfig <a name="DataAwsccEventsRuleTargetsDeadLetterConfig" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsDeadLetterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsDeadLetterConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccEventsRuleTargetsDeadLetterConfig {

};
```


### DataAwsccEventsRuleTargetsEcsParameters <a name="DataAwsccEventsRuleTargetsEcsParameters" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParameters.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccEventsRuleTargetsEcsParameters {

};
```


### DataAwsccEventsRuleTargetsEcsParametersCapacityProviderStrategy <a name="DataAwsccEventsRuleTargetsEcsParametersCapacityProviderStrategy" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersCapacityProviderStrategy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersCapacityProviderStrategy.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccEventsRuleTargetsEcsParametersCapacityProviderStrategy {

};
```


### DataAwsccEventsRuleTargetsEcsParametersNetworkConfiguration <a name="DataAwsccEventsRuleTargetsEcsParametersNetworkConfiguration" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersNetworkConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersNetworkConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccEventsRuleTargetsEcsParametersNetworkConfiguration {

};
```


### DataAwsccEventsRuleTargetsEcsParametersNetworkConfigurationAwsVpcConfiguration <a name="DataAwsccEventsRuleTargetsEcsParametersNetworkConfigurationAwsVpcConfiguration" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersNetworkConfigurationAwsVpcConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersNetworkConfigurationAwsVpcConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccEventsRuleTargetsEcsParametersNetworkConfigurationAwsVpcConfiguration {

};
```


### DataAwsccEventsRuleTargetsEcsParametersPlacementConstraints <a name="DataAwsccEventsRuleTargetsEcsParametersPlacementConstraints" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementConstraints"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementConstraints.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccEventsRuleTargetsEcsParametersPlacementConstraints {

};
```


### DataAwsccEventsRuleTargetsEcsParametersPlacementStrategies <a name="DataAwsccEventsRuleTargetsEcsParametersPlacementStrategies" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementStrategies"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementStrategies.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccEventsRuleTargetsEcsParametersPlacementStrategies {

};
```


### DataAwsccEventsRuleTargetsEcsParametersTagListStruct <a name="DataAwsccEventsRuleTargetsEcsParametersTagListStruct" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersTagListStruct"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersTagListStruct.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccEventsRuleTargetsEcsParametersTagListStruct {

};
```


### DataAwsccEventsRuleTargetsHttpParameters <a name="DataAwsccEventsRuleTargetsHttpParameters" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsHttpParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsHttpParameters.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccEventsRuleTargetsHttpParameters {

};
```


### DataAwsccEventsRuleTargetsInputTransformer <a name="DataAwsccEventsRuleTargetsInputTransformer" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsInputTransformer"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsInputTransformer.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccEventsRuleTargetsInputTransformer {

};
```


### DataAwsccEventsRuleTargetsKinesisParameters <a name="DataAwsccEventsRuleTargetsKinesisParameters" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsKinesisParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsKinesisParameters.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccEventsRuleTargetsKinesisParameters {

};
```


### DataAwsccEventsRuleTargetsRedshiftDataParameters <a name="DataAwsccEventsRuleTargetsRedshiftDataParameters" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRedshiftDataParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRedshiftDataParameters.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccEventsRuleTargetsRedshiftDataParameters {

};
```


### DataAwsccEventsRuleTargetsRetryPolicy <a name="DataAwsccEventsRuleTargetsRetryPolicy" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRetryPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRetryPolicy.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccEventsRuleTargetsRetryPolicy {

};
```


### DataAwsccEventsRuleTargetsRunCommandParameters <a name="DataAwsccEventsRuleTargetsRunCommandParameters" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRunCommandParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRunCommandParameters.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccEventsRuleTargetsRunCommandParameters {

};
```


### DataAwsccEventsRuleTargetsRunCommandParametersRunCommandTargets <a name="DataAwsccEventsRuleTargetsRunCommandParametersRunCommandTargets" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRunCommandParametersRunCommandTargets"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRunCommandParametersRunCommandTargets.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccEventsRuleTargetsRunCommandParametersRunCommandTargets {

};
```


### DataAwsccEventsRuleTargetsSageMakerPipelineParameters <a name="DataAwsccEventsRuleTargetsSageMakerPipelineParameters" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSageMakerPipelineParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSageMakerPipelineParameters.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccEventsRuleTargetsSageMakerPipelineParameters {

};
```


### DataAwsccEventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStruct <a name="DataAwsccEventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStruct" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStruct"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStruct.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccEventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStruct {

};
```


### DataAwsccEventsRuleTargetsSqsParameters <a name="DataAwsccEventsRuleTargetsSqsParameters" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSqsParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSqsParameters.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccEventsRuleTargetsSqsParameters {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccEventsRuleTagsList <a name="DataAwsccEventsRuleTagsList" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccEventsRuleTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTagsList.get"></a>

```csharp
private DataAwsccEventsRuleTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsccEventsRuleTagsOutputReference <a name="DataAwsccEventsRuleTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccEventsRuleTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTagsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTags">DataAwsccEventsRuleTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTagsOutputReference.property.internalValue"></a>

```csharp
public DataAwsccEventsRuleTags InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTags">DataAwsccEventsRuleTags</a>

---


### DataAwsccEventsRuleTargetsAppSyncParametersOutputReference <a name="DataAwsccEventsRuleTargetsAppSyncParametersOutputReference" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsAppSyncParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsAppSyncParametersOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccEventsRuleTargetsAppSyncParametersOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsAppSyncParametersOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsAppSyncParametersOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsAppSyncParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsAppSyncParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsAppSyncParametersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsAppSyncParametersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsAppSyncParametersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsAppSyncParametersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsAppSyncParametersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsAppSyncParametersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsAppSyncParametersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsAppSyncParametersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsAppSyncParametersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsAppSyncParametersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsAppSyncParametersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsAppSyncParametersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsAppSyncParametersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsAppSyncParametersOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsAppSyncParametersOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsAppSyncParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsAppSyncParametersOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsAppSyncParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsAppSyncParametersOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsAppSyncParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsAppSyncParametersOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsAppSyncParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsAppSyncParametersOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsAppSyncParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsAppSyncParametersOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsAppSyncParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsAppSyncParametersOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsAppSyncParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsAppSyncParametersOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsAppSyncParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsAppSyncParametersOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsAppSyncParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsAppSyncParametersOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsAppSyncParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsAppSyncParametersOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsAppSyncParametersOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsAppSyncParametersOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsAppSyncParametersOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsAppSyncParametersOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsAppSyncParametersOutputReference.property.graphQlOperation">GraphQlOperation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsAppSyncParametersOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsAppSyncParameters">DataAwsccEventsRuleTargetsAppSyncParameters</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsAppSyncParametersOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsAppSyncParametersOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `GraphQlOperation`<sup>Required</sup> <a name="GraphQlOperation" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsAppSyncParametersOutputReference.property.graphQlOperation"></a>

```csharp
public string GraphQlOperation { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsAppSyncParametersOutputReference.property.internalValue"></a>

```csharp
public DataAwsccEventsRuleTargetsAppSyncParameters InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsAppSyncParameters">DataAwsccEventsRuleTargetsAppSyncParameters</a>

---


### DataAwsccEventsRuleTargetsBatchParametersArrayPropertiesOutputReference <a name="DataAwsccEventsRuleTargetsBatchParametersArrayPropertiesOutputReference" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParametersArrayPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParametersArrayPropertiesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccEventsRuleTargetsBatchParametersArrayPropertiesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParametersArrayPropertiesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParametersArrayPropertiesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParametersArrayPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParametersArrayPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParametersArrayPropertiesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParametersArrayPropertiesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParametersArrayPropertiesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParametersArrayPropertiesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParametersArrayPropertiesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParametersArrayPropertiesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParametersArrayPropertiesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParametersArrayPropertiesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParametersArrayPropertiesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParametersArrayPropertiesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParametersArrayPropertiesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParametersArrayPropertiesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParametersArrayPropertiesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParametersArrayPropertiesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParametersArrayPropertiesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParametersArrayPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParametersArrayPropertiesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParametersArrayPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParametersArrayPropertiesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParametersArrayPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParametersArrayPropertiesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParametersArrayPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParametersArrayPropertiesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParametersArrayPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParametersArrayPropertiesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParametersArrayPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParametersArrayPropertiesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParametersArrayPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParametersArrayPropertiesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParametersArrayPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParametersArrayPropertiesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParametersArrayPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParametersArrayPropertiesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParametersArrayPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParametersArrayPropertiesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParametersArrayPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParametersArrayPropertiesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParametersArrayPropertiesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParametersArrayPropertiesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParametersArrayPropertiesOutputReference.property.size">Size</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParametersArrayPropertiesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParametersArrayProperties">DataAwsccEventsRuleTargetsBatchParametersArrayProperties</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParametersArrayPropertiesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParametersArrayPropertiesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Size`<sup>Required</sup> <a name="Size" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParametersArrayPropertiesOutputReference.property.size"></a>

```csharp
public double Size { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParametersArrayPropertiesOutputReference.property.internalValue"></a>

```csharp
public DataAwsccEventsRuleTargetsBatchParametersArrayProperties InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParametersArrayProperties">DataAwsccEventsRuleTargetsBatchParametersArrayProperties</a>

---


### DataAwsccEventsRuleTargetsBatchParametersOutputReference <a name="DataAwsccEventsRuleTargetsBatchParametersOutputReference" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParametersOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccEventsRuleTargetsBatchParametersOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParametersOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParametersOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParametersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParametersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParametersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParametersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParametersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParametersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParametersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParametersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParametersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParametersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParametersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParametersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParametersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParametersOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParametersOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParametersOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParametersOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParametersOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParametersOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParametersOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParametersOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParametersOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParametersOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParametersOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParametersOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParametersOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParametersOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParametersOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParametersOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParametersOutputReference.property.arrayProperties">ArrayProperties</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParametersArrayPropertiesOutputReference">DataAwsccEventsRuleTargetsBatchParametersArrayPropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParametersOutputReference.property.jobDefinition">JobDefinition</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParametersOutputReference.property.jobName">JobName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParametersOutputReference.property.retryStrategy">RetryStrategy</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParametersRetryStrategyOutputReference">DataAwsccEventsRuleTargetsBatchParametersRetryStrategyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParametersOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParameters">DataAwsccEventsRuleTargetsBatchParameters</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParametersOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParametersOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ArrayProperties`<sup>Required</sup> <a name="ArrayProperties" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParametersOutputReference.property.arrayProperties"></a>

```csharp
public DataAwsccEventsRuleTargetsBatchParametersArrayPropertiesOutputReference ArrayProperties { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParametersArrayPropertiesOutputReference">DataAwsccEventsRuleTargetsBatchParametersArrayPropertiesOutputReference</a>

---

##### `JobDefinition`<sup>Required</sup> <a name="JobDefinition" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParametersOutputReference.property.jobDefinition"></a>

```csharp
public string JobDefinition { get; }
```

- *Type:* string

---

##### `JobName`<sup>Required</sup> <a name="JobName" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParametersOutputReference.property.jobName"></a>

```csharp
public string JobName { get; }
```

- *Type:* string

---

##### `RetryStrategy`<sup>Required</sup> <a name="RetryStrategy" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParametersOutputReference.property.retryStrategy"></a>

```csharp
public DataAwsccEventsRuleTargetsBatchParametersRetryStrategyOutputReference RetryStrategy { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParametersRetryStrategyOutputReference">DataAwsccEventsRuleTargetsBatchParametersRetryStrategyOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParametersOutputReference.property.internalValue"></a>

```csharp
public DataAwsccEventsRuleTargetsBatchParameters InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParameters">DataAwsccEventsRuleTargetsBatchParameters</a>

---


### DataAwsccEventsRuleTargetsBatchParametersRetryStrategyOutputReference <a name="DataAwsccEventsRuleTargetsBatchParametersRetryStrategyOutputReference" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParametersRetryStrategyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParametersRetryStrategyOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccEventsRuleTargetsBatchParametersRetryStrategyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParametersRetryStrategyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParametersRetryStrategyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParametersRetryStrategyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParametersRetryStrategyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParametersRetryStrategyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParametersRetryStrategyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParametersRetryStrategyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParametersRetryStrategyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParametersRetryStrategyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParametersRetryStrategyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParametersRetryStrategyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParametersRetryStrategyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParametersRetryStrategyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParametersRetryStrategyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParametersRetryStrategyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParametersRetryStrategyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParametersRetryStrategyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParametersRetryStrategyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParametersRetryStrategyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParametersRetryStrategyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParametersRetryStrategyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParametersRetryStrategyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParametersRetryStrategyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParametersRetryStrategyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParametersRetryStrategyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParametersRetryStrategyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParametersRetryStrategyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParametersRetryStrategyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParametersRetryStrategyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParametersRetryStrategyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParametersRetryStrategyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParametersRetryStrategyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParametersRetryStrategyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParametersRetryStrategyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParametersRetryStrategyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParametersRetryStrategyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParametersRetryStrategyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParametersRetryStrategyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParametersRetryStrategyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParametersRetryStrategyOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParametersRetryStrategyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParametersRetryStrategyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParametersRetryStrategyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParametersRetryStrategyOutputReference.property.attempts">Attempts</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParametersRetryStrategyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParametersRetryStrategy">DataAwsccEventsRuleTargetsBatchParametersRetryStrategy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParametersRetryStrategyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParametersRetryStrategyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Attempts`<sup>Required</sup> <a name="Attempts" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParametersRetryStrategyOutputReference.property.attempts"></a>

```csharp
public double Attempts { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParametersRetryStrategyOutputReference.property.internalValue"></a>

```csharp
public DataAwsccEventsRuleTargetsBatchParametersRetryStrategy InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParametersRetryStrategy">DataAwsccEventsRuleTargetsBatchParametersRetryStrategy</a>

---


### DataAwsccEventsRuleTargetsDeadLetterConfigOutputReference <a name="DataAwsccEventsRuleTargetsDeadLetterConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsDeadLetterConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsDeadLetterConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccEventsRuleTargetsDeadLetterConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsDeadLetterConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsDeadLetterConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsDeadLetterConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsDeadLetterConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsDeadLetterConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsDeadLetterConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsDeadLetterConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsDeadLetterConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsDeadLetterConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsDeadLetterConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsDeadLetterConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsDeadLetterConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsDeadLetterConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsDeadLetterConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsDeadLetterConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsDeadLetterConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsDeadLetterConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsDeadLetterConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsDeadLetterConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsDeadLetterConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsDeadLetterConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsDeadLetterConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsDeadLetterConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsDeadLetterConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsDeadLetterConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsDeadLetterConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsDeadLetterConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsDeadLetterConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsDeadLetterConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsDeadLetterConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsDeadLetterConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsDeadLetterConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsDeadLetterConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsDeadLetterConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsDeadLetterConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsDeadLetterConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsDeadLetterConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsDeadLetterConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsDeadLetterConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsDeadLetterConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsDeadLetterConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsDeadLetterConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsDeadLetterConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsDeadLetterConfigOutputReference.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsDeadLetterConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsDeadLetterConfig">DataAwsccEventsRuleTargetsDeadLetterConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsDeadLetterConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsDeadLetterConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsDeadLetterConfigOutputReference.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsDeadLetterConfigOutputReference.property.internalValue"></a>

```csharp
public DataAwsccEventsRuleTargetsDeadLetterConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsDeadLetterConfig">DataAwsccEventsRuleTargetsDeadLetterConfig</a>

---


### DataAwsccEventsRuleTargetsEcsParametersCapacityProviderStrategyList <a name="DataAwsccEventsRuleTargetsEcsParametersCapacityProviderStrategyList" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersCapacityProviderStrategyList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersCapacityProviderStrategyList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccEventsRuleTargetsEcsParametersCapacityProviderStrategyList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersCapacityProviderStrategyList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersCapacityProviderStrategyList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersCapacityProviderStrategyList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersCapacityProviderStrategyList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersCapacityProviderStrategyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersCapacityProviderStrategyList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersCapacityProviderStrategyList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersCapacityProviderStrategyList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersCapacityProviderStrategyList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersCapacityProviderStrategyList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersCapacityProviderStrategyList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersCapacityProviderStrategyList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersCapacityProviderStrategyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersCapacityProviderStrategyList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersCapacityProviderStrategyList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersCapacityProviderStrategyList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersCapacityProviderStrategyList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersCapacityProviderStrategyList.get"></a>

```csharp
private DataAwsccEventsRuleTargetsEcsParametersCapacityProviderStrategyOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersCapacityProviderStrategyList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersCapacityProviderStrategyList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersCapacityProviderStrategyList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersCapacityProviderStrategyList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersCapacityProviderStrategyList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsccEventsRuleTargetsEcsParametersCapacityProviderStrategyOutputReference <a name="DataAwsccEventsRuleTargetsEcsParametersCapacityProviderStrategyOutputReference" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersCapacityProviderStrategyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersCapacityProviderStrategyOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccEventsRuleTargetsEcsParametersCapacityProviderStrategyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersCapacityProviderStrategyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersCapacityProviderStrategyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersCapacityProviderStrategyOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersCapacityProviderStrategyOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersCapacityProviderStrategyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersCapacityProviderStrategyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersCapacityProviderStrategyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersCapacityProviderStrategyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersCapacityProviderStrategyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersCapacityProviderStrategyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersCapacityProviderStrategyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersCapacityProviderStrategyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersCapacityProviderStrategyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersCapacityProviderStrategyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersCapacityProviderStrategyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersCapacityProviderStrategyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersCapacityProviderStrategyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersCapacityProviderStrategyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersCapacityProviderStrategyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersCapacityProviderStrategyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersCapacityProviderStrategyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersCapacityProviderStrategyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersCapacityProviderStrategyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersCapacityProviderStrategyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersCapacityProviderStrategyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersCapacityProviderStrategyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersCapacityProviderStrategyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersCapacityProviderStrategyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersCapacityProviderStrategyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersCapacityProviderStrategyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersCapacityProviderStrategyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersCapacityProviderStrategyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersCapacityProviderStrategyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersCapacityProviderStrategyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersCapacityProviderStrategyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersCapacityProviderStrategyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersCapacityProviderStrategyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersCapacityProviderStrategyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersCapacityProviderStrategyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersCapacityProviderStrategyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersCapacityProviderStrategyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersCapacityProviderStrategyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersCapacityProviderStrategyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersCapacityProviderStrategyOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersCapacityProviderStrategyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersCapacityProviderStrategyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersCapacityProviderStrategyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersCapacityProviderStrategyOutputReference.property.base">Base</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersCapacityProviderStrategyOutputReference.property.capacityProvider">CapacityProvider</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersCapacityProviderStrategyOutputReference.property.weight">Weight</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersCapacityProviderStrategyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersCapacityProviderStrategy">DataAwsccEventsRuleTargetsEcsParametersCapacityProviderStrategy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersCapacityProviderStrategyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersCapacityProviderStrategyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Base`<sup>Required</sup> <a name="Base" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersCapacityProviderStrategyOutputReference.property.base"></a>

```csharp
public double Base { get; }
```

- *Type:* double

---

##### `CapacityProvider`<sup>Required</sup> <a name="CapacityProvider" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersCapacityProviderStrategyOutputReference.property.capacityProvider"></a>

```csharp
public string CapacityProvider { get; }
```

- *Type:* string

---

##### `Weight`<sup>Required</sup> <a name="Weight" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersCapacityProviderStrategyOutputReference.property.weight"></a>

```csharp
public double Weight { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersCapacityProviderStrategyOutputReference.property.internalValue"></a>

```csharp
public DataAwsccEventsRuleTargetsEcsParametersCapacityProviderStrategy InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersCapacityProviderStrategy">DataAwsccEventsRuleTargetsEcsParametersCapacityProviderStrategy</a>

---


### DataAwsccEventsRuleTargetsEcsParametersNetworkConfigurationAwsVpcConfigurationOutputReference <a name="DataAwsccEventsRuleTargetsEcsParametersNetworkConfigurationAwsVpcConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersNetworkConfigurationAwsVpcConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersNetworkConfigurationAwsVpcConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccEventsRuleTargetsEcsParametersNetworkConfigurationAwsVpcConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersNetworkConfigurationAwsVpcConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersNetworkConfigurationAwsVpcConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersNetworkConfigurationAwsVpcConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersNetworkConfigurationAwsVpcConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersNetworkConfigurationAwsVpcConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersNetworkConfigurationAwsVpcConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersNetworkConfigurationAwsVpcConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersNetworkConfigurationAwsVpcConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersNetworkConfigurationAwsVpcConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersNetworkConfigurationAwsVpcConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersNetworkConfigurationAwsVpcConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersNetworkConfigurationAwsVpcConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersNetworkConfigurationAwsVpcConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersNetworkConfigurationAwsVpcConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersNetworkConfigurationAwsVpcConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersNetworkConfigurationAwsVpcConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersNetworkConfigurationAwsVpcConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersNetworkConfigurationAwsVpcConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersNetworkConfigurationAwsVpcConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersNetworkConfigurationAwsVpcConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersNetworkConfigurationAwsVpcConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersNetworkConfigurationAwsVpcConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersNetworkConfigurationAwsVpcConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersNetworkConfigurationAwsVpcConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersNetworkConfigurationAwsVpcConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersNetworkConfigurationAwsVpcConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersNetworkConfigurationAwsVpcConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersNetworkConfigurationAwsVpcConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersNetworkConfigurationAwsVpcConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersNetworkConfigurationAwsVpcConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersNetworkConfigurationAwsVpcConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersNetworkConfigurationAwsVpcConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersNetworkConfigurationAwsVpcConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersNetworkConfigurationAwsVpcConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersNetworkConfigurationAwsVpcConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersNetworkConfigurationAwsVpcConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersNetworkConfigurationAwsVpcConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersNetworkConfigurationAwsVpcConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersNetworkConfigurationAwsVpcConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersNetworkConfigurationAwsVpcConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersNetworkConfigurationAwsVpcConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersNetworkConfigurationAwsVpcConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersNetworkConfigurationAwsVpcConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersNetworkConfigurationAwsVpcConfigurationOutputReference.property.assignPublicIp">AssignPublicIp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersNetworkConfigurationAwsVpcConfigurationOutputReference.property.securityGroups">SecurityGroups</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersNetworkConfigurationAwsVpcConfigurationOutputReference.property.subnets">Subnets</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersNetworkConfigurationAwsVpcConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersNetworkConfigurationAwsVpcConfiguration">DataAwsccEventsRuleTargetsEcsParametersNetworkConfigurationAwsVpcConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersNetworkConfigurationAwsVpcConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersNetworkConfigurationAwsVpcConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AssignPublicIp`<sup>Required</sup> <a name="AssignPublicIp" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersNetworkConfigurationAwsVpcConfigurationOutputReference.property.assignPublicIp"></a>

```csharp
public string AssignPublicIp { get; }
```

- *Type:* string

---

##### `SecurityGroups`<sup>Required</sup> <a name="SecurityGroups" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersNetworkConfigurationAwsVpcConfigurationOutputReference.property.securityGroups"></a>

```csharp
public string[] SecurityGroups { get; }
```

- *Type:* string[]

---

##### `Subnets`<sup>Required</sup> <a name="Subnets" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersNetworkConfigurationAwsVpcConfigurationOutputReference.property.subnets"></a>

```csharp
public string[] Subnets { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersNetworkConfigurationAwsVpcConfigurationOutputReference.property.internalValue"></a>

```csharp
public DataAwsccEventsRuleTargetsEcsParametersNetworkConfigurationAwsVpcConfiguration InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersNetworkConfigurationAwsVpcConfiguration">DataAwsccEventsRuleTargetsEcsParametersNetworkConfigurationAwsVpcConfiguration</a>

---


### DataAwsccEventsRuleTargetsEcsParametersNetworkConfigurationOutputReference <a name="DataAwsccEventsRuleTargetsEcsParametersNetworkConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersNetworkConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersNetworkConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccEventsRuleTargetsEcsParametersNetworkConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersNetworkConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersNetworkConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersNetworkConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersNetworkConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersNetworkConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersNetworkConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersNetworkConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersNetworkConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersNetworkConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersNetworkConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersNetworkConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersNetworkConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersNetworkConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersNetworkConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersNetworkConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersNetworkConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersNetworkConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersNetworkConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersNetworkConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersNetworkConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersNetworkConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersNetworkConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersNetworkConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersNetworkConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersNetworkConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersNetworkConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersNetworkConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersNetworkConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersNetworkConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersNetworkConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersNetworkConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersNetworkConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersNetworkConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersNetworkConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersNetworkConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersNetworkConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersNetworkConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersNetworkConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersNetworkConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersNetworkConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersNetworkConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersNetworkConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersNetworkConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersNetworkConfigurationOutputReference.property.awsVpcConfiguration">AwsVpcConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersNetworkConfigurationAwsVpcConfigurationOutputReference">DataAwsccEventsRuleTargetsEcsParametersNetworkConfigurationAwsVpcConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersNetworkConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersNetworkConfiguration">DataAwsccEventsRuleTargetsEcsParametersNetworkConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersNetworkConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersNetworkConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AwsVpcConfiguration`<sup>Required</sup> <a name="AwsVpcConfiguration" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersNetworkConfigurationOutputReference.property.awsVpcConfiguration"></a>

```csharp
public DataAwsccEventsRuleTargetsEcsParametersNetworkConfigurationAwsVpcConfigurationOutputReference AwsVpcConfiguration { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersNetworkConfigurationAwsVpcConfigurationOutputReference">DataAwsccEventsRuleTargetsEcsParametersNetworkConfigurationAwsVpcConfigurationOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersNetworkConfigurationOutputReference.property.internalValue"></a>

```csharp
public DataAwsccEventsRuleTargetsEcsParametersNetworkConfiguration InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersNetworkConfiguration">DataAwsccEventsRuleTargetsEcsParametersNetworkConfiguration</a>

---


### DataAwsccEventsRuleTargetsEcsParametersOutputReference <a name="DataAwsccEventsRuleTargetsEcsParametersOutputReference" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccEventsRuleTargetsEcsParametersOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersOutputReference.property.capacityProviderStrategy">CapacityProviderStrategy</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersCapacityProviderStrategyList">DataAwsccEventsRuleTargetsEcsParametersCapacityProviderStrategyList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersOutputReference.property.enableEcsManagedTags">EnableEcsManagedTags</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersOutputReference.property.enableExecuteCommand">EnableExecuteCommand</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersOutputReference.property.group">Group</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersOutputReference.property.launchType">LaunchType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersOutputReference.property.networkConfiguration">NetworkConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersNetworkConfigurationOutputReference">DataAwsccEventsRuleTargetsEcsParametersNetworkConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersOutputReference.property.placementConstraints">PlacementConstraints</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementConstraintsList">DataAwsccEventsRuleTargetsEcsParametersPlacementConstraintsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersOutputReference.property.placementStrategies">PlacementStrategies</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementStrategiesList">DataAwsccEventsRuleTargetsEcsParametersPlacementStrategiesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersOutputReference.property.platformVersion">PlatformVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersOutputReference.property.propagateTags">PropagateTags</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersOutputReference.property.referenceId">ReferenceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersOutputReference.property.tagList">TagList</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersTagListStructList">DataAwsccEventsRuleTargetsEcsParametersTagListStructList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersOutputReference.property.taskCount">TaskCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersOutputReference.property.taskDefinitionArn">TaskDefinitionArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParameters">DataAwsccEventsRuleTargetsEcsParameters</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CapacityProviderStrategy`<sup>Required</sup> <a name="CapacityProviderStrategy" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersOutputReference.property.capacityProviderStrategy"></a>

```csharp
public DataAwsccEventsRuleTargetsEcsParametersCapacityProviderStrategyList CapacityProviderStrategy { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersCapacityProviderStrategyList">DataAwsccEventsRuleTargetsEcsParametersCapacityProviderStrategyList</a>

---

##### `EnableEcsManagedTags`<sup>Required</sup> <a name="EnableEcsManagedTags" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersOutputReference.property.enableEcsManagedTags"></a>

```csharp
public IResolvable EnableEcsManagedTags { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `EnableExecuteCommand`<sup>Required</sup> <a name="EnableExecuteCommand" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersOutputReference.property.enableExecuteCommand"></a>

```csharp
public IResolvable EnableExecuteCommand { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `Group`<sup>Required</sup> <a name="Group" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersOutputReference.property.group"></a>

```csharp
public string Group { get; }
```

- *Type:* string

---

##### `LaunchType`<sup>Required</sup> <a name="LaunchType" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersOutputReference.property.launchType"></a>

```csharp
public string LaunchType { get; }
```

- *Type:* string

---

##### `NetworkConfiguration`<sup>Required</sup> <a name="NetworkConfiguration" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersOutputReference.property.networkConfiguration"></a>

```csharp
public DataAwsccEventsRuleTargetsEcsParametersNetworkConfigurationOutputReference NetworkConfiguration { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersNetworkConfigurationOutputReference">DataAwsccEventsRuleTargetsEcsParametersNetworkConfigurationOutputReference</a>

---

##### `PlacementConstraints`<sup>Required</sup> <a name="PlacementConstraints" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersOutputReference.property.placementConstraints"></a>

```csharp
public DataAwsccEventsRuleTargetsEcsParametersPlacementConstraintsList PlacementConstraints { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementConstraintsList">DataAwsccEventsRuleTargetsEcsParametersPlacementConstraintsList</a>

---

##### `PlacementStrategies`<sup>Required</sup> <a name="PlacementStrategies" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersOutputReference.property.placementStrategies"></a>

```csharp
public DataAwsccEventsRuleTargetsEcsParametersPlacementStrategiesList PlacementStrategies { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementStrategiesList">DataAwsccEventsRuleTargetsEcsParametersPlacementStrategiesList</a>

---

##### `PlatformVersion`<sup>Required</sup> <a name="PlatformVersion" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersOutputReference.property.platformVersion"></a>

```csharp
public string PlatformVersion { get; }
```

- *Type:* string

---

##### `PropagateTags`<sup>Required</sup> <a name="PropagateTags" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersOutputReference.property.propagateTags"></a>

```csharp
public string PropagateTags { get; }
```

- *Type:* string

---

##### `ReferenceId`<sup>Required</sup> <a name="ReferenceId" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersOutputReference.property.referenceId"></a>

```csharp
public string ReferenceId { get; }
```

- *Type:* string

---

##### `TagList`<sup>Required</sup> <a name="TagList" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersOutputReference.property.tagList"></a>

```csharp
public DataAwsccEventsRuleTargetsEcsParametersTagListStructList TagList { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersTagListStructList">DataAwsccEventsRuleTargetsEcsParametersTagListStructList</a>

---

##### `TaskCount`<sup>Required</sup> <a name="TaskCount" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersOutputReference.property.taskCount"></a>

```csharp
public double TaskCount { get; }
```

- *Type:* double

---

##### `TaskDefinitionArn`<sup>Required</sup> <a name="TaskDefinitionArn" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersOutputReference.property.taskDefinitionArn"></a>

```csharp
public string TaskDefinitionArn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersOutputReference.property.internalValue"></a>

```csharp
public DataAwsccEventsRuleTargetsEcsParameters InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParameters">DataAwsccEventsRuleTargetsEcsParameters</a>

---


### DataAwsccEventsRuleTargetsEcsParametersPlacementConstraintsList <a name="DataAwsccEventsRuleTargetsEcsParametersPlacementConstraintsList" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementConstraintsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementConstraintsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccEventsRuleTargetsEcsParametersPlacementConstraintsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementConstraintsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementConstraintsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementConstraintsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementConstraintsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementConstraintsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementConstraintsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementConstraintsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementConstraintsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementConstraintsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementConstraintsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementConstraintsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementConstraintsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementConstraintsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementConstraintsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementConstraintsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementConstraintsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementConstraintsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementConstraintsList.get"></a>

```csharp
private DataAwsccEventsRuleTargetsEcsParametersPlacementConstraintsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementConstraintsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementConstraintsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementConstraintsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementConstraintsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementConstraintsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsccEventsRuleTargetsEcsParametersPlacementConstraintsOutputReference <a name="DataAwsccEventsRuleTargetsEcsParametersPlacementConstraintsOutputReference" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementConstraintsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementConstraintsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccEventsRuleTargetsEcsParametersPlacementConstraintsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementConstraintsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementConstraintsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementConstraintsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementConstraintsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementConstraintsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementConstraintsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementConstraintsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementConstraintsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementConstraintsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementConstraintsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementConstraintsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementConstraintsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementConstraintsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementConstraintsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementConstraintsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementConstraintsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementConstraintsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementConstraintsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementConstraintsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementConstraintsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementConstraintsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementConstraintsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementConstraintsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementConstraintsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementConstraintsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementConstraintsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementConstraintsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementConstraintsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementConstraintsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementConstraintsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementConstraintsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementConstraintsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementConstraintsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementConstraintsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementConstraintsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementConstraintsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementConstraintsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementConstraintsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementConstraintsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementConstraintsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementConstraintsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementConstraintsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementConstraintsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementConstraintsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementConstraintsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementConstraintsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementConstraintsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementConstraintsOutputReference.property.expression">Expression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementConstraintsOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementConstraintsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementConstraints">DataAwsccEventsRuleTargetsEcsParametersPlacementConstraints</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementConstraintsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementConstraintsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementConstraintsOutputReference.property.expression"></a>

```csharp
public string Expression { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementConstraintsOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementConstraintsOutputReference.property.internalValue"></a>

```csharp
public DataAwsccEventsRuleTargetsEcsParametersPlacementConstraints InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementConstraints">DataAwsccEventsRuleTargetsEcsParametersPlacementConstraints</a>

---


### DataAwsccEventsRuleTargetsEcsParametersPlacementStrategiesList <a name="DataAwsccEventsRuleTargetsEcsParametersPlacementStrategiesList" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementStrategiesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementStrategiesList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccEventsRuleTargetsEcsParametersPlacementStrategiesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementStrategiesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementStrategiesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementStrategiesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementStrategiesList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementStrategiesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementStrategiesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementStrategiesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementStrategiesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementStrategiesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementStrategiesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementStrategiesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementStrategiesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementStrategiesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementStrategiesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementStrategiesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementStrategiesList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementStrategiesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementStrategiesList.get"></a>

```csharp
private DataAwsccEventsRuleTargetsEcsParametersPlacementStrategiesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementStrategiesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementStrategiesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementStrategiesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementStrategiesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementStrategiesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsccEventsRuleTargetsEcsParametersPlacementStrategiesOutputReference <a name="DataAwsccEventsRuleTargetsEcsParametersPlacementStrategiesOutputReference" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementStrategiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementStrategiesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccEventsRuleTargetsEcsParametersPlacementStrategiesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementStrategiesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementStrategiesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementStrategiesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementStrategiesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementStrategiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementStrategiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementStrategiesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementStrategiesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementStrategiesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementStrategiesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementStrategiesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementStrategiesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementStrategiesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementStrategiesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementStrategiesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementStrategiesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementStrategiesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementStrategiesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementStrategiesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementStrategiesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementStrategiesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementStrategiesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementStrategiesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementStrategiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementStrategiesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementStrategiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementStrategiesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementStrategiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementStrategiesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementStrategiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementStrategiesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementStrategiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementStrategiesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementStrategiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementStrategiesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementStrategiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementStrategiesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementStrategiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementStrategiesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementStrategiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementStrategiesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementStrategiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementStrategiesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementStrategiesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementStrategiesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementStrategiesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementStrategiesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementStrategiesOutputReference.property.field">Field</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementStrategiesOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementStrategiesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementStrategies">DataAwsccEventsRuleTargetsEcsParametersPlacementStrategies</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementStrategiesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementStrategiesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Field`<sup>Required</sup> <a name="Field" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementStrategiesOutputReference.property.field"></a>

```csharp
public string Field { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementStrategiesOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementStrategiesOutputReference.property.internalValue"></a>

```csharp
public DataAwsccEventsRuleTargetsEcsParametersPlacementStrategies InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementStrategies">DataAwsccEventsRuleTargetsEcsParametersPlacementStrategies</a>

---


### DataAwsccEventsRuleTargetsEcsParametersTagListStructList <a name="DataAwsccEventsRuleTargetsEcsParametersTagListStructList" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersTagListStructList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersTagListStructList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccEventsRuleTargetsEcsParametersTagListStructList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersTagListStructList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersTagListStructList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersTagListStructList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersTagListStructList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersTagListStructList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersTagListStructList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersTagListStructList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersTagListStructList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersTagListStructList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersTagListStructList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersTagListStructList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersTagListStructList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersTagListStructList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersTagListStructList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersTagListStructList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersTagListStructList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersTagListStructList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersTagListStructList.get"></a>

```csharp
private DataAwsccEventsRuleTargetsEcsParametersTagListStructOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersTagListStructList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersTagListStructList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersTagListStructList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersTagListStructList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersTagListStructList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsccEventsRuleTargetsEcsParametersTagListStructOutputReference <a name="DataAwsccEventsRuleTargetsEcsParametersTagListStructOutputReference" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersTagListStructOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersTagListStructOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccEventsRuleTargetsEcsParametersTagListStructOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersTagListStructOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersTagListStructOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersTagListStructOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersTagListStructOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersTagListStructOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersTagListStructOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersTagListStructOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersTagListStructOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersTagListStructOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersTagListStructOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersTagListStructOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersTagListStructOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersTagListStructOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersTagListStructOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersTagListStructOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersTagListStructOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersTagListStructOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersTagListStructOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersTagListStructOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersTagListStructOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersTagListStructOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersTagListStructOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersTagListStructOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersTagListStructOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersTagListStructOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersTagListStructOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersTagListStructOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersTagListStructOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersTagListStructOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersTagListStructOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersTagListStructOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersTagListStructOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersTagListStructOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersTagListStructOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersTagListStructOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersTagListStructOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersTagListStructOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersTagListStructOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersTagListStructOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersTagListStructOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersTagListStructOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersTagListStructOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersTagListStructOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersTagListStructOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersTagListStructOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersTagListStructOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersTagListStructOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersTagListStructOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersTagListStructOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersTagListStructOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersTagListStruct">DataAwsccEventsRuleTargetsEcsParametersTagListStruct</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersTagListStructOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersTagListStructOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersTagListStructOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersTagListStructOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersTagListStructOutputReference.property.internalValue"></a>

```csharp
public DataAwsccEventsRuleTargetsEcsParametersTagListStruct InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersTagListStruct">DataAwsccEventsRuleTargetsEcsParametersTagListStruct</a>

---


### DataAwsccEventsRuleTargetsHttpParametersOutputReference <a name="DataAwsccEventsRuleTargetsHttpParametersOutputReference" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsHttpParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsHttpParametersOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccEventsRuleTargetsHttpParametersOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsHttpParametersOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsHttpParametersOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsHttpParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsHttpParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsHttpParametersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsHttpParametersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsHttpParametersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsHttpParametersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsHttpParametersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsHttpParametersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsHttpParametersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsHttpParametersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsHttpParametersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsHttpParametersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsHttpParametersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsHttpParametersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsHttpParametersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsHttpParametersOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsHttpParametersOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsHttpParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsHttpParametersOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsHttpParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsHttpParametersOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsHttpParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsHttpParametersOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsHttpParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsHttpParametersOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsHttpParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsHttpParametersOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsHttpParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsHttpParametersOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsHttpParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsHttpParametersOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsHttpParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsHttpParametersOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsHttpParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsHttpParametersOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsHttpParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsHttpParametersOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsHttpParametersOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsHttpParametersOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsHttpParametersOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsHttpParametersOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsHttpParametersOutputReference.property.headerParameters">HeaderParameters</a></code> | <code>Io.Cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsHttpParametersOutputReference.property.pathParameterValues">PathParameterValues</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsHttpParametersOutputReference.property.queryStringParameters">QueryStringParameters</a></code> | <code>Io.Cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsHttpParametersOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsHttpParameters">DataAwsccEventsRuleTargetsHttpParameters</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsHttpParametersOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsHttpParametersOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `HeaderParameters`<sup>Required</sup> <a name="HeaderParameters" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsHttpParametersOutputReference.property.headerParameters"></a>

```csharp
public StringMap HeaderParameters { get; }
```

- *Type:* Io.Cdktn.StringMap

---

##### `PathParameterValues`<sup>Required</sup> <a name="PathParameterValues" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsHttpParametersOutputReference.property.pathParameterValues"></a>

```csharp
public string[] PathParameterValues { get; }
```

- *Type:* string[]

---

##### `QueryStringParameters`<sup>Required</sup> <a name="QueryStringParameters" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsHttpParametersOutputReference.property.queryStringParameters"></a>

```csharp
public StringMap QueryStringParameters { get; }
```

- *Type:* Io.Cdktn.StringMap

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsHttpParametersOutputReference.property.internalValue"></a>

```csharp
public DataAwsccEventsRuleTargetsHttpParameters InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsHttpParameters">DataAwsccEventsRuleTargetsHttpParameters</a>

---


### DataAwsccEventsRuleTargetsInputTransformerOutputReference <a name="DataAwsccEventsRuleTargetsInputTransformerOutputReference" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsInputTransformerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsInputTransformerOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccEventsRuleTargetsInputTransformerOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsInputTransformerOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsInputTransformerOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsInputTransformerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsInputTransformerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsInputTransformerOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsInputTransformerOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsInputTransformerOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsInputTransformerOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsInputTransformerOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsInputTransformerOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsInputTransformerOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsInputTransformerOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsInputTransformerOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsInputTransformerOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsInputTransformerOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsInputTransformerOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsInputTransformerOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsInputTransformerOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsInputTransformerOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsInputTransformerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsInputTransformerOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsInputTransformerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsInputTransformerOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsInputTransformerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsInputTransformerOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsInputTransformerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsInputTransformerOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsInputTransformerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsInputTransformerOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsInputTransformerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsInputTransformerOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsInputTransformerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsInputTransformerOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsInputTransformerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsInputTransformerOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsInputTransformerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsInputTransformerOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsInputTransformerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsInputTransformerOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsInputTransformerOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsInputTransformerOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsInputTransformerOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsInputTransformerOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsInputTransformerOutputReference.property.inputPathsMap">InputPathsMap</a></code> | <code>Io.Cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsInputTransformerOutputReference.property.inputTemplate">InputTemplate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsInputTransformerOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsInputTransformer">DataAwsccEventsRuleTargetsInputTransformer</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsInputTransformerOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsInputTransformerOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InputPathsMap`<sup>Required</sup> <a name="InputPathsMap" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsInputTransformerOutputReference.property.inputPathsMap"></a>

```csharp
public StringMap InputPathsMap { get; }
```

- *Type:* Io.Cdktn.StringMap

---

##### `InputTemplate`<sup>Required</sup> <a name="InputTemplate" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsInputTransformerOutputReference.property.inputTemplate"></a>

```csharp
public string InputTemplate { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsInputTransformerOutputReference.property.internalValue"></a>

```csharp
public DataAwsccEventsRuleTargetsInputTransformer InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsInputTransformer">DataAwsccEventsRuleTargetsInputTransformer</a>

---


### DataAwsccEventsRuleTargetsKinesisParametersOutputReference <a name="DataAwsccEventsRuleTargetsKinesisParametersOutputReference" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsKinesisParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsKinesisParametersOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccEventsRuleTargetsKinesisParametersOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsKinesisParametersOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsKinesisParametersOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsKinesisParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsKinesisParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsKinesisParametersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsKinesisParametersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsKinesisParametersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsKinesisParametersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsKinesisParametersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsKinesisParametersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsKinesisParametersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsKinesisParametersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsKinesisParametersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsKinesisParametersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsKinesisParametersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsKinesisParametersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsKinesisParametersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsKinesisParametersOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsKinesisParametersOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsKinesisParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsKinesisParametersOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsKinesisParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsKinesisParametersOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsKinesisParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsKinesisParametersOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsKinesisParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsKinesisParametersOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsKinesisParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsKinesisParametersOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsKinesisParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsKinesisParametersOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsKinesisParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsKinesisParametersOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsKinesisParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsKinesisParametersOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsKinesisParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsKinesisParametersOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsKinesisParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsKinesisParametersOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsKinesisParametersOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsKinesisParametersOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsKinesisParametersOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsKinesisParametersOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsKinesisParametersOutputReference.property.partitionKeyPath">PartitionKeyPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsKinesisParametersOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsKinesisParameters">DataAwsccEventsRuleTargetsKinesisParameters</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsKinesisParametersOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsKinesisParametersOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PartitionKeyPath`<sup>Required</sup> <a name="PartitionKeyPath" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsKinesisParametersOutputReference.property.partitionKeyPath"></a>

```csharp
public string PartitionKeyPath { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsKinesisParametersOutputReference.property.internalValue"></a>

```csharp
public DataAwsccEventsRuleTargetsKinesisParameters InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsKinesisParameters">DataAwsccEventsRuleTargetsKinesisParameters</a>

---


### DataAwsccEventsRuleTargetsList <a name="DataAwsccEventsRuleTargetsList" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccEventsRuleTargetsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsList.get"></a>

```csharp
private DataAwsccEventsRuleTargetsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsccEventsRuleTargetsOutputReference <a name="DataAwsccEventsRuleTargetsOutputReference" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccEventsRuleTargetsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsOutputReference.property.appSyncParameters">AppSyncParameters</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsAppSyncParametersOutputReference">DataAwsccEventsRuleTargetsAppSyncParametersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsOutputReference.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsOutputReference.property.batchParameters">BatchParameters</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParametersOutputReference">DataAwsccEventsRuleTargetsBatchParametersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsOutputReference.property.deadLetterConfig">DeadLetterConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsDeadLetterConfigOutputReference">DataAwsccEventsRuleTargetsDeadLetterConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsOutputReference.property.ecsParameters">EcsParameters</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersOutputReference">DataAwsccEventsRuleTargetsEcsParametersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsOutputReference.property.httpParameters">HttpParameters</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsHttpParametersOutputReference">DataAwsccEventsRuleTargetsHttpParametersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsOutputReference.property.input">Input</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsOutputReference.property.inputPath">InputPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsOutputReference.property.inputTransformer">InputTransformer</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsInputTransformerOutputReference">DataAwsccEventsRuleTargetsInputTransformerOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsOutputReference.property.kinesisParameters">KinesisParameters</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsKinesisParametersOutputReference">DataAwsccEventsRuleTargetsKinesisParametersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsOutputReference.property.redshiftDataParameters">RedshiftDataParameters</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRedshiftDataParametersOutputReference">DataAwsccEventsRuleTargetsRedshiftDataParametersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsOutputReference.property.retryPolicy">RetryPolicy</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRetryPolicyOutputReference">DataAwsccEventsRuleTargetsRetryPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsOutputReference.property.roleArn">RoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsOutputReference.property.runCommandParameters">RunCommandParameters</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRunCommandParametersOutputReference">DataAwsccEventsRuleTargetsRunCommandParametersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsOutputReference.property.sageMakerPipelineParameters">SageMakerPipelineParameters</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSageMakerPipelineParametersOutputReference">DataAwsccEventsRuleTargetsSageMakerPipelineParametersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsOutputReference.property.sqsParameters">SqsParameters</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSqsParametersOutputReference">DataAwsccEventsRuleTargetsSqsParametersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargets">DataAwsccEventsRuleTargets</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AppSyncParameters`<sup>Required</sup> <a name="AppSyncParameters" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsOutputReference.property.appSyncParameters"></a>

```csharp
public DataAwsccEventsRuleTargetsAppSyncParametersOutputReference AppSyncParameters { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsAppSyncParametersOutputReference">DataAwsccEventsRuleTargetsAppSyncParametersOutputReference</a>

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsOutputReference.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `BatchParameters`<sup>Required</sup> <a name="BatchParameters" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsOutputReference.property.batchParameters"></a>

```csharp
public DataAwsccEventsRuleTargetsBatchParametersOutputReference BatchParameters { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParametersOutputReference">DataAwsccEventsRuleTargetsBatchParametersOutputReference</a>

---

##### `DeadLetterConfig`<sup>Required</sup> <a name="DeadLetterConfig" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsOutputReference.property.deadLetterConfig"></a>

```csharp
public DataAwsccEventsRuleTargetsDeadLetterConfigOutputReference DeadLetterConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsDeadLetterConfigOutputReference">DataAwsccEventsRuleTargetsDeadLetterConfigOutputReference</a>

---

##### `EcsParameters`<sup>Required</sup> <a name="EcsParameters" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsOutputReference.property.ecsParameters"></a>

```csharp
public DataAwsccEventsRuleTargetsEcsParametersOutputReference EcsParameters { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersOutputReference">DataAwsccEventsRuleTargetsEcsParametersOutputReference</a>

---

##### `HttpParameters`<sup>Required</sup> <a name="HttpParameters" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsOutputReference.property.httpParameters"></a>

```csharp
public DataAwsccEventsRuleTargetsHttpParametersOutputReference HttpParameters { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsHttpParametersOutputReference">DataAwsccEventsRuleTargetsHttpParametersOutputReference</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Input`<sup>Required</sup> <a name="Input" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsOutputReference.property.input"></a>

```csharp
public string Input { get; }
```

- *Type:* string

---

##### `InputPath`<sup>Required</sup> <a name="InputPath" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsOutputReference.property.inputPath"></a>

```csharp
public string InputPath { get; }
```

- *Type:* string

---

##### `InputTransformer`<sup>Required</sup> <a name="InputTransformer" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsOutputReference.property.inputTransformer"></a>

```csharp
public DataAwsccEventsRuleTargetsInputTransformerOutputReference InputTransformer { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsInputTransformerOutputReference">DataAwsccEventsRuleTargetsInputTransformerOutputReference</a>

---

##### `KinesisParameters`<sup>Required</sup> <a name="KinesisParameters" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsOutputReference.property.kinesisParameters"></a>

```csharp
public DataAwsccEventsRuleTargetsKinesisParametersOutputReference KinesisParameters { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsKinesisParametersOutputReference">DataAwsccEventsRuleTargetsKinesisParametersOutputReference</a>

---

##### `RedshiftDataParameters`<sup>Required</sup> <a name="RedshiftDataParameters" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsOutputReference.property.redshiftDataParameters"></a>

```csharp
public DataAwsccEventsRuleTargetsRedshiftDataParametersOutputReference RedshiftDataParameters { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRedshiftDataParametersOutputReference">DataAwsccEventsRuleTargetsRedshiftDataParametersOutputReference</a>

---

##### `RetryPolicy`<sup>Required</sup> <a name="RetryPolicy" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsOutputReference.property.retryPolicy"></a>

```csharp
public DataAwsccEventsRuleTargetsRetryPolicyOutputReference RetryPolicy { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRetryPolicyOutputReference">DataAwsccEventsRuleTargetsRetryPolicyOutputReference</a>

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsOutputReference.property.roleArn"></a>

```csharp
public string RoleArn { get; }
```

- *Type:* string

---

##### `RunCommandParameters`<sup>Required</sup> <a name="RunCommandParameters" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsOutputReference.property.runCommandParameters"></a>

```csharp
public DataAwsccEventsRuleTargetsRunCommandParametersOutputReference RunCommandParameters { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRunCommandParametersOutputReference">DataAwsccEventsRuleTargetsRunCommandParametersOutputReference</a>

---

##### `SageMakerPipelineParameters`<sup>Required</sup> <a name="SageMakerPipelineParameters" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsOutputReference.property.sageMakerPipelineParameters"></a>

```csharp
public DataAwsccEventsRuleTargetsSageMakerPipelineParametersOutputReference SageMakerPipelineParameters { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSageMakerPipelineParametersOutputReference">DataAwsccEventsRuleTargetsSageMakerPipelineParametersOutputReference</a>

---

##### `SqsParameters`<sup>Required</sup> <a name="SqsParameters" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsOutputReference.property.sqsParameters"></a>

```csharp
public DataAwsccEventsRuleTargetsSqsParametersOutputReference SqsParameters { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSqsParametersOutputReference">DataAwsccEventsRuleTargetsSqsParametersOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsOutputReference.property.internalValue"></a>

```csharp
public DataAwsccEventsRuleTargets InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargets">DataAwsccEventsRuleTargets</a>

---


### DataAwsccEventsRuleTargetsRedshiftDataParametersOutputReference <a name="DataAwsccEventsRuleTargetsRedshiftDataParametersOutputReference" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRedshiftDataParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRedshiftDataParametersOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccEventsRuleTargetsRedshiftDataParametersOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRedshiftDataParametersOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRedshiftDataParametersOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRedshiftDataParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRedshiftDataParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRedshiftDataParametersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRedshiftDataParametersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRedshiftDataParametersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRedshiftDataParametersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRedshiftDataParametersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRedshiftDataParametersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRedshiftDataParametersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRedshiftDataParametersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRedshiftDataParametersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRedshiftDataParametersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRedshiftDataParametersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRedshiftDataParametersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRedshiftDataParametersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRedshiftDataParametersOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRedshiftDataParametersOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRedshiftDataParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRedshiftDataParametersOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRedshiftDataParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRedshiftDataParametersOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRedshiftDataParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRedshiftDataParametersOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRedshiftDataParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRedshiftDataParametersOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRedshiftDataParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRedshiftDataParametersOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRedshiftDataParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRedshiftDataParametersOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRedshiftDataParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRedshiftDataParametersOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRedshiftDataParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRedshiftDataParametersOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRedshiftDataParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRedshiftDataParametersOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRedshiftDataParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRedshiftDataParametersOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRedshiftDataParametersOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRedshiftDataParametersOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRedshiftDataParametersOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRedshiftDataParametersOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRedshiftDataParametersOutputReference.property.database">Database</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRedshiftDataParametersOutputReference.property.dbUser">DbUser</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRedshiftDataParametersOutputReference.property.secretManagerArn">SecretManagerArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRedshiftDataParametersOutputReference.property.sql">Sql</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRedshiftDataParametersOutputReference.property.sqls">Sqls</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRedshiftDataParametersOutputReference.property.statementName">StatementName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRedshiftDataParametersOutputReference.property.withEvent">WithEvent</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRedshiftDataParametersOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRedshiftDataParameters">DataAwsccEventsRuleTargetsRedshiftDataParameters</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRedshiftDataParametersOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRedshiftDataParametersOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Database`<sup>Required</sup> <a name="Database" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRedshiftDataParametersOutputReference.property.database"></a>

```csharp
public string Database { get; }
```

- *Type:* string

---

##### `DbUser`<sup>Required</sup> <a name="DbUser" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRedshiftDataParametersOutputReference.property.dbUser"></a>

```csharp
public string DbUser { get; }
```

- *Type:* string

---

##### `SecretManagerArn`<sup>Required</sup> <a name="SecretManagerArn" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRedshiftDataParametersOutputReference.property.secretManagerArn"></a>

```csharp
public string SecretManagerArn { get; }
```

- *Type:* string

---

##### `Sql`<sup>Required</sup> <a name="Sql" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRedshiftDataParametersOutputReference.property.sql"></a>

```csharp
public string Sql { get; }
```

- *Type:* string

---

##### `Sqls`<sup>Required</sup> <a name="Sqls" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRedshiftDataParametersOutputReference.property.sqls"></a>

```csharp
public string[] Sqls { get; }
```

- *Type:* string[]

---

##### `StatementName`<sup>Required</sup> <a name="StatementName" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRedshiftDataParametersOutputReference.property.statementName"></a>

```csharp
public string StatementName { get; }
```

- *Type:* string

---

##### `WithEvent`<sup>Required</sup> <a name="WithEvent" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRedshiftDataParametersOutputReference.property.withEvent"></a>

```csharp
public IResolvable WithEvent { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRedshiftDataParametersOutputReference.property.internalValue"></a>

```csharp
public DataAwsccEventsRuleTargetsRedshiftDataParameters InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRedshiftDataParameters">DataAwsccEventsRuleTargetsRedshiftDataParameters</a>

---


### DataAwsccEventsRuleTargetsRetryPolicyOutputReference <a name="DataAwsccEventsRuleTargetsRetryPolicyOutputReference" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRetryPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRetryPolicyOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccEventsRuleTargetsRetryPolicyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRetryPolicyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRetryPolicyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRetryPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRetryPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRetryPolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRetryPolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRetryPolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRetryPolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRetryPolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRetryPolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRetryPolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRetryPolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRetryPolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRetryPolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRetryPolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRetryPolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRetryPolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRetryPolicyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRetryPolicyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRetryPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRetryPolicyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRetryPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRetryPolicyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRetryPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRetryPolicyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRetryPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRetryPolicyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRetryPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRetryPolicyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRetryPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRetryPolicyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRetryPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRetryPolicyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRetryPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRetryPolicyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRetryPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRetryPolicyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRetryPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRetryPolicyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRetryPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRetryPolicyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRetryPolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRetryPolicyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRetryPolicyOutputReference.property.maximumEventAgeInSeconds">MaximumEventAgeInSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRetryPolicyOutputReference.property.maximumRetryAttempts">MaximumRetryAttempts</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRetryPolicyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRetryPolicy">DataAwsccEventsRuleTargetsRetryPolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRetryPolicyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRetryPolicyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MaximumEventAgeInSeconds`<sup>Required</sup> <a name="MaximumEventAgeInSeconds" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRetryPolicyOutputReference.property.maximumEventAgeInSeconds"></a>

```csharp
public double MaximumEventAgeInSeconds { get; }
```

- *Type:* double

---

##### `MaximumRetryAttempts`<sup>Required</sup> <a name="MaximumRetryAttempts" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRetryPolicyOutputReference.property.maximumRetryAttempts"></a>

```csharp
public double MaximumRetryAttempts { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRetryPolicyOutputReference.property.internalValue"></a>

```csharp
public DataAwsccEventsRuleTargetsRetryPolicy InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRetryPolicy">DataAwsccEventsRuleTargetsRetryPolicy</a>

---


### DataAwsccEventsRuleTargetsRunCommandParametersOutputReference <a name="DataAwsccEventsRuleTargetsRunCommandParametersOutputReference" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRunCommandParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRunCommandParametersOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccEventsRuleTargetsRunCommandParametersOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRunCommandParametersOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRunCommandParametersOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRunCommandParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRunCommandParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRunCommandParametersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRunCommandParametersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRunCommandParametersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRunCommandParametersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRunCommandParametersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRunCommandParametersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRunCommandParametersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRunCommandParametersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRunCommandParametersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRunCommandParametersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRunCommandParametersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRunCommandParametersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRunCommandParametersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRunCommandParametersOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRunCommandParametersOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRunCommandParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRunCommandParametersOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRunCommandParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRunCommandParametersOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRunCommandParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRunCommandParametersOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRunCommandParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRunCommandParametersOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRunCommandParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRunCommandParametersOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRunCommandParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRunCommandParametersOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRunCommandParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRunCommandParametersOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRunCommandParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRunCommandParametersOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRunCommandParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRunCommandParametersOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRunCommandParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRunCommandParametersOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRunCommandParametersOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRunCommandParametersOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRunCommandParametersOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRunCommandParametersOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRunCommandParametersOutputReference.property.runCommandTargets">RunCommandTargets</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRunCommandParametersRunCommandTargetsList">DataAwsccEventsRuleTargetsRunCommandParametersRunCommandTargetsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRunCommandParametersOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRunCommandParameters">DataAwsccEventsRuleTargetsRunCommandParameters</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRunCommandParametersOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRunCommandParametersOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `RunCommandTargets`<sup>Required</sup> <a name="RunCommandTargets" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRunCommandParametersOutputReference.property.runCommandTargets"></a>

```csharp
public DataAwsccEventsRuleTargetsRunCommandParametersRunCommandTargetsList RunCommandTargets { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRunCommandParametersRunCommandTargetsList">DataAwsccEventsRuleTargetsRunCommandParametersRunCommandTargetsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRunCommandParametersOutputReference.property.internalValue"></a>

```csharp
public DataAwsccEventsRuleTargetsRunCommandParameters InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRunCommandParameters">DataAwsccEventsRuleTargetsRunCommandParameters</a>

---


### DataAwsccEventsRuleTargetsRunCommandParametersRunCommandTargetsList <a name="DataAwsccEventsRuleTargetsRunCommandParametersRunCommandTargetsList" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRunCommandParametersRunCommandTargetsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRunCommandParametersRunCommandTargetsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccEventsRuleTargetsRunCommandParametersRunCommandTargetsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRunCommandParametersRunCommandTargetsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRunCommandParametersRunCommandTargetsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRunCommandParametersRunCommandTargetsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRunCommandParametersRunCommandTargetsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRunCommandParametersRunCommandTargetsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRunCommandParametersRunCommandTargetsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRunCommandParametersRunCommandTargetsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRunCommandParametersRunCommandTargetsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRunCommandParametersRunCommandTargetsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRunCommandParametersRunCommandTargetsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRunCommandParametersRunCommandTargetsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRunCommandParametersRunCommandTargetsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRunCommandParametersRunCommandTargetsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRunCommandParametersRunCommandTargetsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRunCommandParametersRunCommandTargetsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRunCommandParametersRunCommandTargetsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRunCommandParametersRunCommandTargetsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRunCommandParametersRunCommandTargetsList.get"></a>

```csharp
private DataAwsccEventsRuleTargetsRunCommandParametersRunCommandTargetsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRunCommandParametersRunCommandTargetsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRunCommandParametersRunCommandTargetsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRunCommandParametersRunCommandTargetsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRunCommandParametersRunCommandTargetsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRunCommandParametersRunCommandTargetsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsccEventsRuleTargetsRunCommandParametersRunCommandTargetsOutputReference <a name="DataAwsccEventsRuleTargetsRunCommandParametersRunCommandTargetsOutputReference" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRunCommandParametersRunCommandTargetsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRunCommandParametersRunCommandTargetsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccEventsRuleTargetsRunCommandParametersRunCommandTargetsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRunCommandParametersRunCommandTargetsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRunCommandParametersRunCommandTargetsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRunCommandParametersRunCommandTargetsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRunCommandParametersRunCommandTargetsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRunCommandParametersRunCommandTargetsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRunCommandParametersRunCommandTargetsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRunCommandParametersRunCommandTargetsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRunCommandParametersRunCommandTargetsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRunCommandParametersRunCommandTargetsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRunCommandParametersRunCommandTargetsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRunCommandParametersRunCommandTargetsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRunCommandParametersRunCommandTargetsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRunCommandParametersRunCommandTargetsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRunCommandParametersRunCommandTargetsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRunCommandParametersRunCommandTargetsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRunCommandParametersRunCommandTargetsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRunCommandParametersRunCommandTargetsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRunCommandParametersRunCommandTargetsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRunCommandParametersRunCommandTargetsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRunCommandParametersRunCommandTargetsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRunCommandParametersRunCommandTargetsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRunCommandParametersRunCommandTargetsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRunCommandParametersRunCommandTargetsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRunCommandParametersRunCommandTargetsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRunCommandParametersRunCommandTargetsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRunCommandParametersRunCommandTargetsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRunCommandParametersRunCommandTargetsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRunCommandParametersRunCommandTargetsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRunCommandParametersRunCommandTargetsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRunCommandParametersRunCommandTargetsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRunCommandParametersRunCommandTargetsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRunCommandParametersRunCommandTargetsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRunCommandParametersRunCommandTargetsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRunCommandParametersRunCommandTargetsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRunCommandParametersRunCommandTargetsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRunCommandParametersRunCommandTargetsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRunCommandParametersRunCommandTargetsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRunCommandParametersRunCommandTargetsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRunCommandParametersRunCommandTargetsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRunCommandParametersRunCommandTargetsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRunCommandParametersRunCommandTargetsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRunCommandParametersRunCommandTargetsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRunCommandParametersRunCommandTargetsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRunCommandParametersRunCommandTargetsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRunCommandParametersRunCommandTargetsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRunCommandParametersRunCommandTargetsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRunCommandParametersRunCommandTargetsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRunCommandParametersRunCommandTargetsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRunCommandParametersRunCommandTargetsOutputReference.property.values">Values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRunCommandParametersRunCommandTargetsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRunCommandParametersRunCommandTargets">DataAwsccEventsRuleTargetsRunCommandParametersRunCommandTargets</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRunCommandParametersRunCommandTargetsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRunCommandParametersRunCommandTargetsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRunCommandParametersRunCommandTargetsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRunCommandParametersRunCommandTargetsOutputReference.property.values"></a>

```csharp
public string[] Values { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRunCommandParametersRunCommandTargetsOutputReference.property.internalValue"></a>

```csharp
public DataAwsccEventsRuleTargetsRunCommandParametersRunCommandTargets InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRunCommandParametersRunCommandTargets">DataAwsccEventsRuleTargetsRunCommandParametersRunCommandTargets</a>

---


### DataAwsccEventsRuleTargetsSageMakerPipelineParametersOutputReference <a name="DataAwsccEventsRuleTargetsSageMakerPipelineParametersOutputReference" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSageMakerPipelineParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSageMakerPipelineParametersOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccEventsRuleTargetsSageMakerPipelineParametersOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSageMakerPipelineParametersOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSageMakerPipelineParametersOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSageMakerPipelineParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSageMakerPipelineParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSageMakerPipelineParametersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSageMakerPipelineParametersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSageMakerPipelineParametersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSageMakerPipelineParametersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSageMakerPipelineParametersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSageMakerPipelineParametersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSageMakerPipelineParametersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSageMakerPipelineParametersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSageMakerPipelineParametersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSageMakerPipelineParametersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSageMakerPipelineParametersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSageMakerPipelineParametersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSageMakerPipelineParametersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSageMakerPipelineParametersOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSageMakerPipelineParametersOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSageMakerPipelineParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSageMakerPipelineParametersOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSageMakerPipelineParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSageMakerPipelineParametersOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSageMakerPipelineParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSageMakerPipelineParametersOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSageMakerPipelineParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSageMakerPipelineParametersOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSageMakerPipelineParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSageMakerPipelineParametersOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSageMakerPipelineParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSageMakerPipelineParametersOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSageMakerPipelineParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSageMakerPipelineParametersOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSageMakerPipelineParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSageMakerPipelineParametersOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSageMakerPipelineParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSageMakerPipelineParametersOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSageMakerPipelineParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSageMakerPipelineParametersOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSageMakerPipelineParametersOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSageMakerPipelineParametersOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSageMakerPipelineParametersOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSageMakerPipelineParametersOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSageMakerPipelineParametersOutputReference.property.pipelineParameterList">PipelineParameterList</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStructList">DataAwsccEventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStructList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSageMakerPipelineParametersOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSageMakerPipelineParameters">DataAwsccEventsRuleTargetsSageMakerPipelineParameters</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSageMakerPipelineParametersOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSageMakerPipelineParametersOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PipelineParameterList`<sup>Required</sup> <a name="PipelineParameterList" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSageMakerPipelineParametersOutputReference.property.pipelineParameterList"></a>

```csharp
public DataAwsccEventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStructList PipelineParameterList { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStructList">DataAwsccEventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStructList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSageMakerPipelineParametersOutputReference.property.internalValue"></a>

```csharp
public DataAwsccEventsRuleTargetsSageMakerPipelineParameters InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSageMakerPipelineParameters">DataAwsccEventsRuleTargetsSageMakerPipelineParameters</a>

---


### DataAwsccEventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStructList <a name="DataAwsccEventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStructList" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStructList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStructList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccEventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStructList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStructList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStructList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStructList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStructList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStructList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStructList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStructList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStructList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStructList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStructList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStructList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStructList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStructList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStructList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStructList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStructList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStructList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStructList.get"></a>

```csharp
private DataAwsccEventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStructOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStructList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStructList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStructList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStructList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStructList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsccEventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStructOutputReference <a name="DataAwsccEventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStructOutputReference" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStructOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStructOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccEventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStructOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStructOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStructOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStructOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStructOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStructOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStructOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStructOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStructOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStructOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStructOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStructOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStructOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStructOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStructOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStructOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStructOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStructOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStructOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStructOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStructOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStructOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStructOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStructOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStructOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStructOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStructOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStructOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStructOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStructOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStructOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStructOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStructOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStructOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStructOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStructOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStructOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStructOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStructOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStructOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStructOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStructOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStructOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStructOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStructOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStructOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStructOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStructOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStructOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStructOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStructOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStruct">DataAwsccEventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStruct</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStructOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStructOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStructOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStructOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStructOutputReference.property.internalValue"></a>

```csharp
public DataAwsccEventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStruct InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStruct">DataAwsccEventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStruct</a>

---


### DataAwsccEventsRuleTargetsSqsParametersOutputReference <a name="DataAwsccEventsRuleTargetsSqsParametersOutputReference" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSqsParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSqsParametersOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccEventsRuleTargetsSqsParametersOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSqsParametersOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSqsParametersOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSqsParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSqsParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSqsParametersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSqsParametersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSqsParametersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSqsParametersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSqsParametersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSqsParametersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSqsParametersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSqsParametersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSqsParametersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSqsParametersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSqsParametersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSqsParametersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSqsParametersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSqsParametersOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSqsParametersOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSqsParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSqsParametersOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSqsParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSqsParametersOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSqsParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSqsParametersOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSqsParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSqsParametersOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSqsParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSqsParametersOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSqsParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSqsParametersOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSqsParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSqsParametersOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSqsParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSqsParametersOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSqsParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSqsParametersOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSqsParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSqsParametersOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSqsParametersOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSqsParametersOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSqsParametersOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSqsParametersOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSqsParametersOutputReference.property.messageGroupId">MessageGroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSqsParametersOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSqsParameters">DataAwsccEventsRuleTargetsSqsParameters</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSqsParametersOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSqsParametersOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MessageGroupId`<sup>Required</sup> <a name="MessageGroupId" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSqsParametersOutputReference.property.messageGroupId"></a>

```csharp
public string MessageGroupId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSqsParametersOutputReference.property.internalValue"></a>

```csharp
public DataAwsccEventsRuleTargetsSqsParameters InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSqsParameters">DataAwsccEventsRuleTargetsSqsParameters</a>

---



