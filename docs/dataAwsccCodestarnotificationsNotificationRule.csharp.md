# `dataAwsccCodestarnotificationsNotificationRule` Submodule <a name="`dataAwsccCodestarnotificationsNotificationRule` Submodule" id="@cdktn/provider-awscc.dataAwsccCodestarnotificationsNotificationRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccCodestarnotificationsNotificationRule <a name="DataAwsccCodestarnotificationsNotificationRule" id="@cdktn/provider-awscc.dataAwsccCodestarnotificationsNotificationRule.DataAwsccCodestarnotificationsNotificationRule"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/codestarnotifications_notification_rule awscc_codestarnotifications_notification_rule}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCodestarnotificationsNotificationRule.DataAwsccCodestarnotificationsNotificationRule.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccCodestarnotificationsNotificationRule(Construct Scope, string Id, DataAwsccCodestarnotificationsNotificationRuleConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodestarnotificationsNotificationRule.DataAwsccCodestarnotificationsNotificationRule.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodestarnotificationsNotificationRule.DataAwsccCodestarnotificationsNotificationRule.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodestarnotificationsNotificationRule.DataAwsccCodestarnotificationsNotificationRule.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCodestarnotificationsNotificationRule.DataAwsccCodestarnotificationsNotificationRuleConfig">DataAwsccCodestarnotificationsNotificationRuleConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.dataAwsccCodestarnotificationsNotificationRule.DataAwsccCodestarnotificationsNotificationRule.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccCodestarnotificationsNotificationRule.DataAwsccCodestarnotificationsNotificationRule.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.dataAwsccCodestarnotificationsNotificationRule.DataAwsccCodestarnotificationsNotificationRule.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCodestarnotificationsNotificationRule.DataAwsccCodestarnotificationsNotificationRuleConfig">DataAwsccCodestarnotificationsNotificationRuleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodestarnotificationsNotificationRule.DataAwsccCodestarnotificationsNotificationRule.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodestarnotificationsNotificationRule.DataAwsccCodestarnotificationsNotificationRule.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodestarnotificationsNotificationRule.DataAwsccCodestarnotificationsNotificationRule.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodestarnotificationsNotificationRule.DataAwsccCodestarnotificationsNotificationRule.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodestarnotificationsNotificationRule.DataAwsccCodestarnotificationsNotificationRule.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodestarnotificationsNotificationRule.DataAwsccCodestarnotificationsNotificationRule.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodestarnotificationsNotificationRule.DataAwsccCodestarnotificationsNotificationRule.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodestarnotificationsNotificationRule.DataAwsccCodestarnotificationsNotificationRule.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodestarnotificationsNotificationRule.DataAwsccCodestarnotificationsNotificationRule.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodestarnotificationsNotificationRule.DataAwsccCodestarnotificationsNotificationRule.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodestarnotificationsNotificationRule.DataAwsccCodestarnotificationsNotificationRule.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodestarnotificationsNotificationRule.DataAwsccCodestarnotificationsNotificationRule.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodestarnotificationsNotificationRule.DataAwsccCodestarnotificationsNotificationRule.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodestarnotificationsNotificationRule.DataAwsccCodestarnotificationsNotificationRule.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodestarnotificationsNotificationRule.DataAwsccCodestarnotificationsNotificationRule.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodestarnotificationsNotificationRule.DataAwsccCodestarnotificationsNotificationRule.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodestarnotificationsNotificationRule.DataAwsccCodestarnotificationsNotificationRule.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodestarnotificationsNotificationRule.DataAwsccCodestarnotificationsNotificationRule.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccCodestarnotificationsNotificationRule.DataAwsccCodestarnotificationsNotificationRule.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccCodestarnotificationsNotificationRule.DataAwsccCodestarnotificationsNotificationRule.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.dataAwsccCodestarnotificationsNotificationRule.DataAwsccCodestarnotificationsNotificationRule.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccCodestarnotificationsNotificationRule.DataAwsccCodestarnotificationsNotificationRule.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.dataAwsccCodestarnotificationsNotificationRule.DataAwsccCodestarnotificationsNotificationRule.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccCodestarnotificationsNotificationRule.DataAwsccCodestarnotificationsNotificationRule.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccCodestarnotificationsNotificationRule.DataAwsccCodestarnotificationsNotificationRule.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.dataAwsccCodestarnotificationsNotificationRule.DataAwsccCodestarnotificationsNotificationRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccCodestarnotificationsNotificationRule.DataAwsccCodestarnotificationsNotificationRule.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccCodestarnotificationsNotificationRule.DataAwsccCodestarnotificationsNotificationRule.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccCodestarnotificationsNotificationRule.DataAwsccCodestarnotificationsNotificationRule.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccCodestarnotificationsNotificationRule.DataAwsccCodestarnotificationsNotificationRule.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodestarnotificationsNotificationRule.DataAwsccCodestarnotificationsNotificationRule.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodestarnotificationsNotificationRule.DataAwsccCodestarnotificationsNotificationRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCodestarnotificationsNotificationRule.DataAwsccCodestarnotificationsNotificationRule.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodestarnotificationsNotificationRule.DataAwsccCodestarnotificationsNotificationRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodestarnotificationsNotificationRule.DataAwsccCodestarnotificationsNotificationRule.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodestarnotificationsNotificationRule.DataAwsccCodestarnotificationsNotificationRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccCodestarnotificationsNotificationRule.DataAwsccCodestarnotificationsNotificationRule.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodestarnotificationsNotificationRule.DataAwsccCodestarnotificationsNotificationRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCodestarnotificationsNotificationRule.DataAwsccCodestarnotificationsNotificationRule.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodestarnotificationsNotificationRule.DataAwsccCodestarnotificationsNotificationRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCodestarnotificationsNotificationRule.DataAwsccCodestarnotificationsNotificationRule.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodestarnotificationsNotificationRule.DataAwsccCodestarnotificationsNotificationRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodestarnotificationsNotificationRule.DataAwsccCodestarnotificationsNotificationRule.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodestarnotificationsNotificationRule.DataAwsccCodestarnotificationsNotificationRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccCodestarnotificationsNotificationRule.DataAwsccCodestarnotificationsNotificationRule.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodestarnotificationsNotificationRule.DataAwsccCodestarnotificationsNotificationRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodestarnotificationsNotificationRule.DataAwsccCodestarnotificationsNotificationRule.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodestarnotificationsNotificationRule.DataAwsccCodestarnotificationsNotificationRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCodestarnotificationsNotificationRule.DataAwsccCodestarnotificationsNotificationRule.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodestarnotificationsNotificationRule.DataAwsccCodestarnotificationsNotificationRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodestarnotificationsNotificationRule.DataAwsccCodestarnotificationsNotificationRule.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodestarnotificationsNotificationRule.DataAwsccCodestarnotificationsNotificationRule.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodestarnotificationsNotificationRule.DataAwsccCodestarnotificationsNotificationRule.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodestarnotificationsNotificationRule.DataAwsccCodestarnotificationsNotificationRule.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccCodestarnotificationsNotificationRule resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccCodestarnotificationsNotificationRule.DataAwsccCodestarnotificationsNotificationRule.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccCodestarnotificationsNotificationRule.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccCodestarnotificationsNotificationRule.DataAwsccCodestarnotificationsNotificationRule.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccCodestarnotificationsNotificationRule.DataAwsccCodestarnotificationsNotificationRule.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccCodestarnotificationsNotificationRule.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccCodestarnotificationsNotificationRule.DataAwsccCodestarnotificationsNotificationRule.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccCodestarnotificationsNotificationRule.DataAwsccCodestarnotificationsNotificationRule.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccCodestarnotificationsNotificationRule.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccCodestarnotificationsNotificationRule.DataAwsccCodestarnotificationsNotificationRule.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccCodestarnotificationsNotificationRule.DataAwsccCodestarnotificationsNotificationRule.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccCodestarnotificationsNotificationRule.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataAwsccCodestarnotificationsNotificationRule resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.dataAwsccCodestarnotificationsNotificationRule.DataAwsccCodestarnotificationsNotificationRule.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.dataAwsccCodestarnotificationsNotificationRule.DataAwsccCodestarnotificationsNotificationRule.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccCodestarnotificationsNotificationRule to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.dataAwsccCodestarnotificationsNotificationRule.DataAwsccCodestarnotificationsNotificationRule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccCodestarnotificationsNotificationRule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/codestarnotifications_notification_rule#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccCodestarnotificationsNotificationRule.DataAwsccCodestarnotificationsNotificationRule.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccCodestarnotificationsNotificationRule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodestarnotificationsNotificationRule.DataAwsccCodestarnotificationsNotificationRule.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodestarnotificationsNotificationRule.DataAwsccCodestarnotificationsNotificationRule.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodestarnotificationsNotificationRule.DataAwsccCodestarnotificationsNotificationRule.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodestarnotificationsNotificationRule.DataAwsccCodestarnotificationsNotificationRule.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodestarnotificationsNotificationRule.DataAwsccCodestarnotificationsNotificationRule.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodestarnotificationsNotificationRule.DataAwsccCodestarnotificationsNotificationRule.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodestarnotificationsNotificationRule.DataAwsccCodestarnotificationsNotificationRule.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodestarnotificationsNotificationRule.DataAwsccCodestarnotificationsNotificationRule.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodestarnotificationsNotificationRule.DataAwsccCodestarnotificationsNotificationRule.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodestarnotificationsNotificationRule.DataAwsccCodestarnotificationsNotificationRule.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodestarnotificationsNotificationRule.DataAwsccCodestarnotificationsNotificationRule.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodestarnotificationsNotificationRule.DataAwsccCodestarnotificationsNotificationRule.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodestarnotificationsNotificationRule.DataAwsccCodestarnotificationsNotificationRule.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodestarnotificationsNotificationRule.DataAwsccCodestarnotificationsNotificationRule.property.createdBy">CreatedBy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodestarnotificationsNotificationRule.DataAwsccCodestarnotificationsNotificationRule.property.detailType">DetailType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodestarnotificationsNotificationRule.DataAwsccCodestarnotificationsNotificationRule.property.eventTypeId">EventTypeId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodestarnotificationsNotificationRule.DataAwsccCodestarnotificationsNotificationRule.property.eventTypeIds">EventTypeIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodestarnotificationsNotificationRule.DataAwsccCodestarnotificationsNotificationRule.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodestarnotificationsNotificationRule.DataAwsccCodestarnotificationsNotificationRule.property.resource">Resource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodestarnotificationsNotificationRule.DataAwsccCodestarnotificationsNotificationRule.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodestarnotificationsNotificationRule.DataAwsccCodestarnotificationsNotificationRule.property.tags">Tags</a></code> | <code>Io.Cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodestarnotificationsNotificationRule.DataAwsccCodestarnotificationsNotificationRule.property.targetAddress">TargetAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodestarnotificationsNotificationRule.DataAwsccCodestarnotificationsNotificationRule.property.targets">Targets</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCodestarnotificationsNotificationRule.DataAwsccCodestarnotificationsNotificationRuleTargetsList">DataAwsccCodestarnotificationsNotificationRuleTargetsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodestarnotificationsNotificationRule.DataAwsccCodestarnotificationsNotificationRule.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodestarnotificationsNotificationRule.DataAwsccCodestarnotificationsNotificationRule.property.id">Id</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccCodestarnotificationsNotificationRule.DataAwsccCodestarnotificationsNotificationRule.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccCodestarnotificationsNotificationRule.DataAwsccCodestarnotificationsNotificationRule.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccCodestarnotificationsNotificationRule.DataAwsccCodestarnotificationsNotificationRule.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccCodestarnotificationsNotificationRule.DataAwsccCodestarnotificationsNotificationRule.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccCodestarnotificationsNotificationRule.DataAwsccCodestarnotificationsNotificationRule.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccCodestarnotificationsNotificationRule.DataAwsccCodestarnotificationsNotificationRule.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccCodestarnotificationsNotificationRule.DataAwsccCodestarnotificationsNotificationRule.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccCodestarnotificationsNotificationRule.DataAwsccCodestarnotificationsNotificationRule.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccCodestarnotificationsNotificationRule.DataAwsccCodestarnotificationsNotificationRule.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccCodestarnotificationsNotificationRule.DataAwsccCodestarnotificationsNotificationRule.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccCodestarnotificationsNotificationRule.DataAwsccCodestarnotificationsNotificationRule.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccCodestarnotificationsNotificationRule.DataAwsccCodestarnotificationsNotificationRule.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.dataAwsccCodestarnotificationsNotificationRule.DataAwsccCodestarnotificationsNotificationRule.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `CreatedBy`<sup>Required</sup> <a name="CreatedBy" id="@cdktn/provider-awscc.dataAwsccCodestarnotificationsNotificationRule.DataAwsccCodestarnotificationsNotificationRule.property.createdBy"></a>

```csharp
public string CreatedBy { get; }
```

- *Type:* string

---

##### `DetailType`<sup>Required</sup> <a name="DetailType" id="@cdktn/provider-awscc.dataAwsccCodestarnotificationsNotificationRule.DataAwsccCodestarnotificationsNotificationRule.property.detailType"></a>

```csharp
public string DetailType { get; }
```

- *Type:* string

---

##### `EventTypeId`<sup>Required</sup> <a name="EventTypeId" id="@cdktn/provider-awscc.dataAwsccCodestarnotificationsNotificationRule.DataAwsccCodestarnotificationsNotificationRule.property.eventTypeId"></a>

```csharp
public string EventTypeId { get; }
```

- *Type:* string

---

##### `EventTypeIds`<sup>Required</sup> <a name="EventTypeIds" id="@cdktn/provider-awscc.dataAwsccCodestarnotificationsNotificationRule.DataAwsccCodestarnotificationsNotificationRule.property.eventTypeIds"></a>

```csharp
public string[] EventTypeIds { get; }
```

- *Type:* string[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.dataAwsccCodestarnotificationsNotificationRule.DataAwsccCodestarnotificationsNotificationRule.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Resource`<sup>Required</sup> <a name="Resource" id="@cdktn/provider-awscc.dataAwsccCodestarnotificationsNotificationRule.DataAwsccCodestarnotificationsNotificationRule.property.resource"></a>

```csharp
public string Resource { get; }
```

- *Type:* string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-awscc.dataAwsccCodestarnotificationsNotificationRule.DataAwsccCodestarnotificationsNotificationRule.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.dataAwsccCodestarnotificationsNotificationRule.DataAwsccCodestarnotificationsNotificationRule.property.tags"></a>

```csharp
public StringMap Tags { get; }
```

- *Type:* Io.Cdktn.StringMap

---

##### `TargetAddress`<sup>Required</sup> <a name="TargetAddress" id="@cdktn/provider-awscc.dataAwsccCodestarnotificationsNotificationRule.DataAwsccCodestarnotificationsNotificationRule.property.targetAddress"></a>

```csharp
public string TargetAddress { get; }
```

- *Type:* string

---

##### `Targets`<sup>Required</sup> <a name="Targets" id="@cdktn/provider-awscc.dataAwsccCodestarnotificationsNotificationRule.DataAwsccCodestarnotificationsNotificationRule.property.targets"></a>

```csharp
public DataAwsccCodestarnotificationsNotificationRuleTargetsList Targets { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCodestarnotificationsNotificationRule.DataAwsccCodestarnotificationsNotificationRuleTargetsList">DataAwsccCodestarnotificationsNotificationRuleTargetsList</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccCodestarnotificationsNotificationRule.DataAwsccCodestarnotificationsNotificationRule.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccCodestarnotificationsNotificationRule.DataAwsccCodestarnotificationsNotificationRule.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodestarnotificationsNotificationRule.DataAwsccCodestarnotificationsNotificationRule.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccCodestarnotificationsNotificationRule.DataAwsccCodestarnotificationsNotificationRule.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccCodestarnotificationsNotificationRuleConfig <a name="DataAwsccCodestarnotificationsNotificationRuleConfig" id="@cdktn/provider-awscc.dataAwsccCodestarnotificationsNotificationRule.DataAwsccCodestarnotificationsNotificationRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCodestarnotificationsNotificationRule.DataAwsccCodestarnotificationsNotificationRuleConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccCodestarnotificationsNotificationRuleConfig {
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodestarnotificationsNotificationRule.DataAwsccCodestarnotificationsNotificationRuleConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodestarnotificationsNotificationRule.DataAwsccCodestarnotificationsNotificationRuleConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodestarnotificationsNotificationRule.DataAwsccCodestarnotificationsNotificationRuleConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodestarnotificationsNotificationRule.DataAwsccCodestarnotificationsNotificationRuleConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodestarnotificationsNotificationRule.DataAwsccCodestarnotificationsNotificationRuleConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodestarnotificationsNotificationRule.DataAwsccCodestarnotificationsNotificationRuleConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodestarnotificationsNotificationRule.DataAwsccCodestarnotificationsNotificationRuleConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodestarnotificationsNotificationRule.DataAwsccCodestarnotificationsNotificationRuleConfig.property.id">Id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccCodestarnotificationsNotificationRule.DataAwsccCodestarnotificationsNotificationRuleConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccCodestarnotificationsNotificationRule.DataAwsccCodestarnotificationsNotificationRuleConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccCodestarnotificationsNotificationRule.DataAwsccCodestarnotificationsNotificationRuleConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccCodestarnotificationsNotificationRule.DataAwsccCodestarnotificationsNotificationRuleConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccCodestarnotificationsNotificationRule.DataAwsccCodestarnotificationsNotificationRuleConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccCodestarnotificationsNotificationRule.DataAwsccCodestarnotificationsNotificationRuleConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccCodestarnotificationsNotificationRule.DataAwsccCodestarnotificationsNotificationRuleConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccCodestarnotificationsNotificationRule.DataAwsccCodestarnotificationsNotificationRuleConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/codestarnotifications_notification_rule#id DataAwsccCodestarnotificationsNotificationRule#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccCodestarnotificationsNotificationRuleTargets <a name="DataAwsccCodestarnotificationsNotificationRuleTargets" id="@cdktn/provider-awscc.dataAwsccCodestarnotificationsNotificationRule.DataAwsccCodestarnotificationsNotificationRuleTargets"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCodestarnotificationsNotificationRule.DataAwsccCodestarnotificationsNotificationRuleTargets.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccCodestarnotificationsNotificationRuleTargets {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccCodestarnotificationsNotificationRuleTargetsList <a name="DataAwsccCodestarnotificationsNotificationRuleTargetsList" id="@cdktn/provider-awscc.dataAwsccCodestarnotificationsNotificationRule.DataAwsccCodestarnotificationsNotificationRuleTargetsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCodestarnotificationsNotificationRule.DataAwsccCodestarnotificationsNotificationRuleTargetsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccCodestarnotificationsNotificationRuleTargetsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodestarnotificationsNotificationRule.DataAwsccCodestarnotificationsNotificationRuleTargetsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodestarnotificationsNotificationRule.DataAwsccCodestarnotificationsNotificationRuleTargetsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodestarnotificationsNotificationRule.DataAwsccCodestarnotificationsNotificationRuleTargetsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccCodestarnotificationsNotificationRule.DataAwsccCodestarnotificationsNotificationRuleTargetsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodestarnotificationsNotificationRule.DataAwsccCodestarnotificationsNotificationRuleTargetsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.dataAwsccCodestarnotificationsNotificationRule.DataAwsccCodestarnotificationsNotificationRuleTargetsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodestarnotificationsNotificationRule.DataAwsccCodestarnotificationsNotificationRuleTargetsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodestarnotificationsNotificationRule.DataAwsccCodestarnotificationsNotificationRuleTargetsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodestarnotificationsNotificationRule.DataAwsccCodestarnotificationsNotificationRuleTargetsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodestarnotificationsNotificationRule.DataAwsccCodestarnotificationsNotificationRuleTargetsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodestarnotificationsNotificationRule.DataAwsccCodestarnotificationsNotificationRuleTargetsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccCodestarnotificationsNotificationRule.DataAwsccCodestarnotificationsNotificationRuleTargetsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccCodestarnotificationsNotificationRule.DataAwsccCodestarnotificationsNotificationRuleTargetsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccCodestarnotificationsNotificationRule.DataAwsccCodestarnotificationsNotificationRuleTargetsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccCodestarnotificationsNotificationRule.DataAwsccCodestarnotificationsNotificationRuleTargetsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccCodestarnotificationsNotificationRule.DataAwsccCodestarnotificationsNotificationRuleTargetsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccCodestarnotificationsNotificationRule.DataAwsccCodestarnotificationsNotificationRuleTargetsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccCodestarnotificationsNotificationRule.DataAwsccCodestarnotificationsNotificationRuleTargetsList.get"></a>

```csharp
private DataAwsccCodestarnotificationsNotificationRuleTargetsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.dataAwsccCodestarnotificationsNotificationRule.DataAwsccCodestarnotificationsNotificationRuleTargetsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodestarnotificationsNotificationRule.DataAwsccCodestarnotificationsNotificationRuleTargetsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodestarnotificationsNotificationRule.DataAwsccCodestarnotificationsNotificationRuleTargetsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccCodestarnotificationsNotificationRule.DataAwsccCodestarnotificationsNotificationRuleTargetsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccCodestarnotificationsNotificationRule.DataAwsccCodestarnotificationsNotificationRuleTargetsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsccCodestarnotificationsNotificationRuleTargetsOutputReference <a name="DataAwsccCodestarnotificationsNotificationRuleTargetsOutputReference" id="@cdktn/provider-awscc.dataAwsccCodestarnotificationsNotificationRule.DataAwsccCodestarnotificationsNotificationRuleTargetsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCodestarnotificationsNotificationRule.DataAwsccCodestarnotificationsNotificationRuleTargetsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccCodestarnotificationsNotificationRuleTargetsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodestarnotificationsNotificationRule.DataAwsccCodestarnotificationsNotificationRuleTargetsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodestarnotificationsNotificationRule.DataAwsccCodestarnotificationsNotificationRuleTargetsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodestarnotificationsNotificationRule.DataAwsccCodestarnotificationsNotificationRuleTargetsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodestarnotificationsNotificationRule.DataAwsccCodestarnotificationsNotificationRuleTargetsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccCodestarnotificationsNotificationRule.DataAwsccCodestarnotificationsNotificationRuleTargetsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodestarnotificationsNotificationRule.DataAwsccCodestarnotificationsNotificationRuleTargetsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.dataAwsccCodestarnotificationsNotificationRule.DataAwsccCodestarnotificationsNotificationRuleTargetsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccCodestarnotificationsNotificationRule.DataAwsccCodestarnotificationsNotificationRuleTargetsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodestarnotificationsNotificationRule.DataAwsccCodestarnotificationsNotificationRuleTargetsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodestarnotificationsNotificationRule.DataAwsccCodestarnotificationsNotificationRuleTargetsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodestarnotificationsNotificationRule.DataAwsccCodestarnotificationsNotificationRuleTargetsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodestarnotificationsNotificationRule.DataAwsccCodestarnotificationsNotificationRuleTargetsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodestarnotificationsNotificationRule.DataAwsccCodestarnotificationsNotificationRuleTargetsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodestarnotificationsNotificationRule.DataAwsccCodestarnotificationsNotificationRuleTargetsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodestarnotificationsNotificationRule.DataAwsccCodestarnotificationsNotificationRuleTargetsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodestarnotificationsNotificationRule.DataAwsccCodestarnotificationsNotificationRuleTargetsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodestarnotificationsNotificationRule.DataAwsccCodestarnotificationsNotificationRuleTargetsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodestarnotificationsNotificationRule.DataAwsccCodestarnotificationsNotificationRuleTargetsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodestarnotificationsNotificationRule.DataAwsccCodestarnotificationsNotificationRuleTargetsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodestarnotificationsNotificationRule.DataAwsccCodestarnotificationsNotificationRuleTargetsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodestarnotificationsNotificationRule.DataAwsccCodestarnotificationsNotificationRuleTargetsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccCodestarnotificationsNotificationRule.DataAwsccCodestarnotificationsNotificationRuleTargetsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodestarnotificationsNotificationRule.DataAwsccCodestarnotificationsNotificationRuleTargetsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodestarnotificationsNotificationRule.DataAwsccCodestarnotificationsNotificationRuleTargetsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCodestarnotificationsNotificationRule.DataAwsccCodestarnotificationsNotificationRuleTargetsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodestarnotificationsNotificationRule.DataAwsccCodestarnotificationsNotificationRuleTargetsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodestarnotificationsNotificationRule.DataAwsccCodestarnotificationsNotificationRuleTargetsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodestarnotificationsNotificationRule.DataAwsccCodestarnotificationsNotificationRuleTargetsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccCodestarnotificationsNotificationRule.DataAwsccCodestarnotificationsNotificationRuleTargetsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodestarnotificationsNotificationRule.DataAwsccCodestarnotificationsNotificationRuleTargetsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCodestarnotificationsNotificationRule.DataAwsccCodestarnotificationsNotificationRuleTargetsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodestarnotificationsNotificationRule.DataAwsccCodestarnotificationsNotificationRuleTargetsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCodestarnotificationsNotificationRule.DataAwsccCodestarnotificationsNotificationRuleTargetsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodestarnotificationsNotificationRule.DataAwsccCodestarnotificationsNotificationRuleTargetsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodestarnotificationsNotificationRule.DataAwsccCodestarnotificationsNotificationRuleTargetsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodestarnotificationsNotificationRule.DataAwsccCodestarnotificationsNotificationRuleTargetsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccCodestarnotificationsNotificationRule.DataAwsccCodestarnotificationsNotificationRuleTargetsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodestarnotificationsNotificationRule.DataAwsccCodestarnotificationsNotificationRuleTargetsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodestarnotificationsNotificationRule.DataAwsccCodestarnotificationsNotificationRuleTargetsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodestarnotificationsNotificationRule.DataAwsccCodestarnotificationsNotificationRuleTargetsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCodestarnotificationsNotificationRule.DataAwsccCodestarnotificationsNotificationRuleTargetsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccCodestarnotificationsNotificationRule.DataAwsccCodestarnotificationsNotificationRuleTargetsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccCodestarnotificationsNotificationRule.DataAwsccCodestarnotificationsNotificationRuleTargetsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccCodestarnotificationsNotificationRule.DataAwsccCodestarnotificationsNotificationRuleTargetsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccCodestarnotificationsNotificationRule.DataAwsccCodestarnotificationsNotificationRuleTargetsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodestarnotificationsNotificationRule.DataAwsccCodestarnotificationsNotificationRuleTargetsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodestarnotificationsNotificationRule.DataAwsccCodestarnotificationsNotificationRuleTargetsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodestarnotificationsNotificationRule.DataAwsccCodestarnotificationsNotificationRuleTargetsOutputReference.property.targetAddress">TargetAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodestarnotificationsNotificationRule.DataAwsccCodestarnotificationsNotificationRuleTargetsOutputReference.property.targetType">TargetType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodestarnotificationsNotificationRule.DataAwsccCodestarnotificationsNotificationRuleTargetsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCodestarnotificationsNotificationRule.DataAwsccCodestarnotificationsNotificationRuleTargets">DataAwsccCodestarnotificationsNotificationRuleTargets</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccCodestarnotificationsNotificationRule.DataAwsccCodestarnotificationsNotificationRuleTargetsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccCodestarnotificationsNotificationRule.DataAwsccCodestarnotificationsNotificationRuleTargetsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `TargetAddress`<sup>Required</sup> <a name="TargetAddress" id="@cdktn/provider-awscc.dataAwsccCodestarnotificationsNotificationRule.DataAwsccCodestarnotificationsNotificationRuleTargetsOutputReference.property.targetAddress"></a>

```csharp
public string TargetAddress { get; }
```

- *Type:* string

---

##### `TargetType`<sup>Required</sup> <a name="TargetType" id="@cdktn/provider-awscc.dataAwsccCodestarnotificationsNotificationRule.DataAwsccCodestarnotificationsNotificationRuleTargetsOutputReference.property.targetType"></a>

```csharp
public string TargetType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccCodestarnotificationsNotificationRule.DataAwsccCodestarnotificationsNotificationRuleTargetsOutputReference.property.internalValue"></a>

```csharp
public DataAwsccCodestarnotificationsNotificationRuleTargets InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCodestarnotificationsNotificationRule.DataAwsccCodestarnotificationsNotificationRuleTargets">DataAwsccCodestarnotificationsNotificationRuleTargets</a>

---



