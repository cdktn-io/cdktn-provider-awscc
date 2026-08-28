# `dataAwsccGuarddutyCustomDetectionRuleAssociation` Submodule <a name="`dataAwsccGuarddutyCustomDetectionRuleAssociation` Submodule" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccGuarddutyCustomDetectionRuleAssociation <a name="DataAwsccGuarddutyCustomDetectionRuleAssociation" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociation"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/guardduty_custom_detection_rule_association awscc_guardduty_custom_detection_rule_association}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociation.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccGuarddutyCustomDetectionRuleAssociation(Construct Scope, string Id, DataAwsccGuarddutyCustomDetectionRuleAssociationConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociation.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociation.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociation.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociationConfig">DataAwsccGuarddutyCustomDetectionRuleAssociationConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociation.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociation.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociation.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociationConfig">DataAwsccGuarddutyCustomDetectionRuleAssociationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociation.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociation.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociation.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociation.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociation.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociation.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociation.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociation.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociation.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociation.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociation.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociation.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociation.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociation.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociation.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociation.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociation.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociation.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociation.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociation.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociation.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociation.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociation.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociation.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociation.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociation.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociation.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociation.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociation.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociation.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociation.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociation.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociation.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociation.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociation.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociation.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociation.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociation.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociation.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociation.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociation.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociation.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociation.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccGuarddutyCustomDetectionRuleAssociation resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociation.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccGuarddutyCustomDetectionRuleAssociation.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociation.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociation.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccGuarddutyCustomDetectionRuleAssociation.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociation.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociation.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccGuarddutyCustomDetectionRuleAssociation.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociation.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociation.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccGuarddutyCustomDetectionRuleAssociation.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataAwsccGuarddutyCustomDetectionRuleAssociation resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociation.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociation.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccGuarddutyCustomDetectionRuleAssociation to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccGuarddutyCustomDetectionRuleAssociation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/guardduty_custom_detection_rule_association#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociation.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccGuarddutyCustomDetectionRuleAssociation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociation.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociation.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociation.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociation.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociation.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociation.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociation.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociation.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociation.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociation.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociation.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociation.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociation.property.accountId">AccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociation.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociation.property.associationId">AssociationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociation.property.createdAt">CreatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociation.property.mode">Mode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociation.property.ruleId">RuleId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociation.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociationTagsList">DataAwsccGuarddutyCustomDetectionRuleAssociationTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociation.property.updatedAt">UpdatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociation.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociation.property.id">Id</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociation.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociation.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociation.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociation.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociation.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociation.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociation.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociation.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociation.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociation.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociation.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociation.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociation.property.accountId"></a>

```csharp
public string AccountId { get; }
```

- *Type:* string

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociation.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `AssociationId`<sup>Required</sup> <a name="AssociationId" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociation.property.associationId"></a>

```csharp
public string AssociationId { get; }
```

- *Type:* string

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociation.property.createdAt"></a>

```csharp
public string CreatedAt { get; }
```

- *Type:* string

---

##### `Mode`<sup>Required</sup> <a name="Mode" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociation.property.mode"></a>

```csharp
public string Mode { get; }
```

- *Type:* string

---

##### `RuleId`<sup>Required</sup> <a name="RuleId" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociation.property.ruleId"></a>

```csharp
public string RuleId { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociation.property.tags"></a>

```csharp
public DataAwsccGuarddutyCustomDetectionRuleAssociationTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociationTagsList">DataAwsccGuarddutyCustomDetectionRuleAssociationTagsList</a>

---

##### `UpdatedAt`<sup>Required</sup> <a name="UpdatedAt" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociation.property.updatedAt"></a>

```csharp
public string UpdatedAt { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociation.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociation.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociation.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociation.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccGuarddutyCustomDetectionRuleAssociationConfig <a name="DataAwsccGuarddutyCustomDetectionRuleAssociationConfig" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociationConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccGuarddutyCustomDetectionRuleAssociationConfig {
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociationConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociationConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociationConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociationConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociationConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociationConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociationConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociationConfig.property.id">Id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociationConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociationConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociationConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociationConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociationConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociationConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociationConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociationConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/guardduty_custom_detection_rule_association#id DataAwsccGuarddutyCustomDetectionRuleAssociation#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccGuarddutyCustomDetectionRuleAssociationTags <a name="DataAwsccGuarddutyCustomDetectionRuleAssociationTags" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociationTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociationTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccGuarddutyCustomDetectionRuleAssociationTags {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccGuarddutyCustomDetectionRuleAssociationTagsList <a name="DataAwsccGuarddutyCustomDetectionRuleAssociationTagsList" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociationTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociationTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccGuarddutyCustomDetectionRuleAssociationTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociationTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociationTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociationTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociationTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociationTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociationTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociationTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociationTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociationTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociationTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociationTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociationTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociationTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociationTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociationTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociationTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociationTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociationTagsList.get"></a>

```csharp
private DataAwsccGuarddutyCustomDetectionRuleAssociationTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociationTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociationTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociationTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociationTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociationTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsccGuarddutyCustomDetectionRuleAssociationTagsOutputReference <a name="DataAwsccGuarddutyCustomDetectionRuleAssociationTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociationTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociationTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccGuarddutyCustomDetectionRuleAssociationTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociationTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociationTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociationTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociationTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociationTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociationTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociationTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociationTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociationTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociationTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociationTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociationTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociationTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociationTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociationTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociationTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociationTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociationTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociationTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociationTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociationTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociationTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociationTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociationTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociationTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociationTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociationTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociationTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociationTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociationTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociationTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociationTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociationTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociationTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociationTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociationTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociationTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociationTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociationTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociationTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociationTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociationTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociationTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociationTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociationTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociationTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociationTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociationTagsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociationTags">DataAwsccGuarddutyCustomDetectionRuleAssociationTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociationTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociationTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociationTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociationTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociationTagsOutputReference.property.internalValue"></a>

```csharp
public DataAwsccGuarddutyCustomDetectionRuleAssociationTags InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociationTags">DataAwsccGuarddutyCustomDetectionRuleAssociationTags</a>

---



