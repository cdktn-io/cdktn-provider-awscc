# `dataAwsccIoteventsAlarmModel` Submodule <a name="`dataAwsccIoteventsAlarmModel` Submodule" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccIoteventsAlarmModel <a name="DataAwsccIoteventsAlarmModel" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModel"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/data-sources/iotevents_alarm_model awscc_iotevents_alarm_model}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModel.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccioteventsalarmmodel"

dataawsccioteventsalarmmodel.NewDataAwsccIoteventsAlarmModel(scope Construct, id *string, config DataAwsccIoteventsAlarmModelConfig) DataAwsccIoteventsAlarmModel
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModel.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModel.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModel.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelConfig">DataAwsccIoteventsAlarmModelConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModel.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModel.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModel.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelConfig">DataAwsccIoteventsAlarmModelConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModel.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModel.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModel.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModel.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModel.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModel.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModel.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModel.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModel.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModel.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModel.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModel.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModel.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModel.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModel.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModel.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModel.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModel.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModel.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModel.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModel.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModel.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModel.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModel.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModel.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModel.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModel.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModel.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModel.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModel.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModel.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModel.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModel.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModel.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModel.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModel.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModel.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModel.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModel.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModel.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModel.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModel.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModel.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModel.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModel.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModel.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModel.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModel.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModel.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModel.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModel.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModel.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModel.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModel.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccIoteventsAlarmModel resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModel.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccioteventsalarmmodel"

dataawsccioteventsalarmmodel.DataAwsccIoteventsAlarmModel_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModel.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModel.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccioteventsalarmmodel"

dataawsccioteventsalarmmodel.DataAwsccIoteventsAlarmModel_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModel.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModel.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccioteventsalarmmodel"

dataawsccioteventsalarmmodel.DataAwsccIoteventsAlarmModel_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModel.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModel.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccioteventsalarmmodel"

dataawsccioteventsalarmmodel.DataAwsccIoteventsAlarmModel_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataAwsccIoteventsAlarmModel resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModel.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModel.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataAwsccIoteventsAlarmModel to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModel.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataAwsccIoteventsAlarmModel that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/data-sources/iotevents_alarm_model#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModel.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccIoteventsAlarmModel to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModel.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModel.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModel.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModel.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModel.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModel.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModel.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModel.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModel.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModel.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModel.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModel.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModel.property.alarmCapabilities">AlarmCapabilities</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmCapabilitiesOutputReference">DataAwsccIoteventsAlarmModelAlarmCapabilitiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModel.property.alarmEventActions">AlarmEventActions</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsOutputReference">DataAwsccIoteventsAlarmModelAlarmEventActionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModel.property.alarmModelDescription">AlarmModelDescription</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModel.property.alarmModelName">AlarmModelName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModel.property.alarmRule">AlarmRule</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmRuleOutputReference">DataAwsccIoteventsAlarmModelAlarmRuleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModel.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModel.property.roleArn">RoleArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModel.property.severity">Severity</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModel.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelTagsList">DataAwsccIoteventsAlarmModelTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModel.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModel.property.id">Id</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModel.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModel.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModel.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModel.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModel.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModel.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModel.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModel.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModel.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModel.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModel.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModel.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `AlarmCapabilities`<sup>Required</sup> <a name="AlarmCapabilities" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModel.property.alarmCapabilities"></a>

```go
func AlarmCapabilities() DataAwsccIoteventsAlarmModelAlarmCapabilitiesOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmCapabilitiesOutputReference">DataAwsccIoteventsAlarmModelAlarmCapabilitiesOutputReference</a>

---

##### `AlarmEventActions`<sup>Required</sup> <a name="AlarmEventActions" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModel.property.alarmEventActions"></a>

```go
func AlarmEventActions() DataAwsccIoteventsAlarmModelAlarmEventActionsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsOutputReference">DataAwsccIoteventsAlarmModelAlarmEventActionsOutputReference</a>

---

##### `AlarmModelDescription`<sup>Required</sup> <a name="AlarmModelDescription" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModel.property.alarmModelDescription"></a>

```go
func AlarmModelDescription() *string
```

- *Type:* *string

---

##### `AlarmModelName`<sup>Required</sup> <a name="AlarmModelName" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModel.property.alarmModelName"></a>

```go
func AlarmModelName() *string
```

- *Type:* *string

---

##### `AlarmRule`<sup>Required</sup> <a name="AlarmRule" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModel.property.alarmRule"></a>

```go
func AlarmRule() DataAwsccIoteventsAlarmModelAlarmRuleOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmRuleOutputReference">DataAwsccIoteventsAlarmModelAlarmRuleOutputReference</a>

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModel.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModel.property.roleArn"></a>

```go
func RoleArn() *string
```

- *Type:* *string

---

##### `Severity`<sup>Required</sup> <a name="Severity" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModel.property.severity"></a>

```go
func Severity() *f64
```

- *Type:* *f64

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModel.property.tags"></a>

```go
func Tags() DataAwsccIoteventsAlarmModelTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelTagsList">DataAwsccIoteventsAlarmModelTagsList</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModel.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModel.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModel.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModel.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccIoteventsAlarmModelAlarmCapabilities <a name="DataAwsccIoteventsAlarmModelAlarmCapabilities" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmCapabilities"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmCapabilities.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccioteventsalarmmodel"

&dataawsccioteventsalarmmodel.DataAwsccIoteventsAlarmModelAlarmCapabilities {

}
```


### DataAwsccIoteventsAlarmModelAlarmCapabilitiesAcknowledgeFlow <a name="DataAwsccIoteventsAlarmModelAlarmCapabilitiesAcknowledgeFlow" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmCapabilitiesAcknowledgeFlow"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmCapabilitiesAcknowledgeFlow.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccioteventsalarmmodel"

&dataawsccioteventsalarmmodel.DataAwsccIoteventsAlarmModelAlarmCapabilitiesAcknowledgeFlow {

}
```


### DataAwsccIoteventsAlarmModelAlarmCapabilitiesInitializationConfiguration <a name="DataAwsccIoteventsAlarmModelAlarmCapabilitiesInitializationConfiguration" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmCapabilitiesInitializationConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmCapabilitiesInitializationConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccioteventsalarmmodel"

&dataawsccioteventsalarmmodel.DataAwsccIoteventsAlarmModelAlarmCapabilitiesInitializationConfiguration {

}
```


### DataAwsccIoteventsAlarmModelAlarmEventActions <a name="DataAwsccIoteventsAlarmModelAlarmEventActions" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActions.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccioteventsalarmmodel"

&dataawsccioteventsalarmmodel.DataAwsccIoteventsAlarmModelAlarmEventActions {

}
```


### DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActions <a name="DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActions" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActions.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccioteventsalarmmodel"

&dataawsccioteventsalarmmodel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActions {

}
```


### DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDb <a name="DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDb" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDb"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDb.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccioteventsalarmmodel"

&dataawsccioteventsalarmmodel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDb {

}
```


### DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayload <a name="DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayload" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayload"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayload.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccioteventsalarmmodel"

&dataawsccioteventsalarmmodel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayload {

}
```


### DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2 <a name="DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccioteventsalarmmodel"

&dataawsccioteventsalarmmodel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2 {

}
```


### DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2Payload <a name="DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2Payload" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2Payload"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2Payload.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccioteventsalarmmodel"

&dataawsccioteventsalarmmodel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2Payload {

}
```


### DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsFirehose <a name="DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsFirehose" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsFirehose"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsFirehose.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccioteventsalarmmodel"

&dataawsccioteventsalarmmodel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsFirehose {

}
```


### DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayload <a name="DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayload" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayload"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayload.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccioteventsalarmmodel"

&dataawsccioteventsalarmmodel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayload {

}
```


### DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotEvents <a name="DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotEvents" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotEvents"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotEvents.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccioteventsalarmmodel"

&dataawsccioteventsalarmmodel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotEvents {

}
```


### DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayload <a name="DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayload" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayload"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayload.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccioteventsalarmmodel"

&dataawsccioteventsalarmmodel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayload {

}
```


### DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWise <a name="DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWise" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWise"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWise.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccioteventsalarmmodel"

&dataawsccioteventsalarmmodel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWise {

}
```


### DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValue <a name="DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValue" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValue"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValue.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccioteventsalarmmodel"

&dataawsccioteventsalarmmodel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValue {

}
```


### DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestamp <a name="DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestamp" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestamp"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestamp.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccioteventsalarmmodel"

&dataawsccioteventsalarmmodel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestamp {

}
```


### DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValue <a name="DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValue" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValue"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValue.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccioteventsalarmmodel"

&dataawsccioteventsalarmmodel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValue {

}
```


### DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublish <a name="DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublish" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublish"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublish.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccioteventsalarmmodel"

&dataawsccioteventsalarmmodel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublish {

}
```


### DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayload <a name="DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayload" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayload"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayload.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccioteventsalarmmodel"

&dataawsccioteventsalarmmodel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayload {

}
```


### DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsLambda <a name="DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsLambda" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsLambda"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsLambda.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccioteventsalarmmodel"

&dataawsccioteventsalarmmodel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsLambda {

}
```


### DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayload <a name="DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayload" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayload"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayload.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccioteventsalarmmodel"

&dataawsccioteventsalarmmodel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayload {

}
```


### DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsSns <a name="DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsSns" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsSns"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsSns.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccioteventsalarmmodel"

&dataawsccioteventsalarmmodel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsSns {

}
```


### DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayload <a name="DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayload" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayload"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayload.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccioteventsalarmmodel"

&dataawsccioteventsalarmmodel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayload {

}
```


### DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsSqs <a name="DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsSqs" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsSqs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsSqs.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccioteventsalarmmodel"

&dataawsccioteventsalarmmodel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsSqs {

}
```


### DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayload <a name="DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayload" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayload"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayload.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccioteventsalarmmodel"

&dataawsccioteventsalarmmodel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayload {

}
```


### DataAwsccIoteventsAlarmModelAlarmRule <a name="DataAwsccIoteventsAlarmModelAlarmRule" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmRule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmRule.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccioteventsalarmmodel"

&dataawsccioteventsalarmmodel.DataAwsccIoteventsAlarmModelAlarmRule {

}
```


### DataAwsccIoteventsAlarmModelAlarmRuleSimpleRule <a name="DataAwsccIoteventsAlarmModelAlarmRuleSimpleRule" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmRuleSimpleRule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmRuleSimpleRule.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccioteventsalarmmodel"

&dataawsccioteventsalarmmodel.DataAwsccIoteventsAlarmModelAlarmRuleSimpleRule {

}
```


### DataAwsccIoteventsAlarmModelConfig <a name="DataAwsccIoteventsAlarmModelConfig" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccioteventsalarmmodel"

&dataawsccioteventsalarmmodel.DataAwsccIoteventsAlarmModelConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	Id: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelConfig.property.id">Id</a></code> | <code>*string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/data-sources/iotevents_alarm_model#id DataAwsccIoteventsAlarmModel#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccIoteventsAlarmModelTags <a name="DataAwsccIoteventsAlarmModelTags" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccioteventsalarmmodel"

&dataawsccioteventsalarmmodel.DataAwsccIoteventsAlarmModelTags {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccIoteventsAlarmModelAlarmCapabilitiesAcknowledgeFlowOutputReference <a name="DataAwsccIoteventsAlarmModelAlarmCapabilitiesAcknowledgeFlowOutputReference" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmCapabilitiesAcknowledgeFlowOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmCapabilitiesAcknowledgeFlowOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccioteventsalarmmodel"

dataawsccioteventsalarmmodel.NewDataAwsccIoteventsAlarmModelAlarmCapabilitiesAcknowledgeFlowOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccIoteventsAlarmModelAlarmCapabilitiesAcknowledgeFlowOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmCapabilitiesAcknowledgeFlowOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmCapabilitiesAcknowledgeFlowOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmCapabilitiesAcknowledgeFlowOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmCapabilitiesAcknowledgeFlowOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmCapabilitiesAcknowledgeFlowOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmCapabilitiesAcknowledgeFlowOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmCapabilitiesAcknowledgeFlowOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmCapabilitiesAcknowledgeFlowOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmCapabilitiesAcknowledgeFlowOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmCapabilitiesAcknowledgeFlowOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmCapabilitiesAcknowledgeFlowOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmCapabilitiesAcknowledgeFlowOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmCapabilitiesAcknowledgeFlowOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmCapabilitiesAcknowledgeFlowOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmCapabilitiesAcknowledgeFlowOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmCapabilitiesAcknowledgeFlowOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmCapabilitiesAcknowledgeFlowOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmCapabilitiesAcknowledgeFlowOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmCapabilitiesAcknowledgeFlowOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmCapabilitiesAcknowledgeFlowOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmCapabilitiesAcknowledgeFlowOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmCapabilitiesAcknowledgeFlowOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmCapabilitiesAcknowledgeFlowOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmCapabilitiesAcknowledgeFlowOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmCapabilitiesAcknowledgeFlowOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmCapabilitiesAcknowledgeFlowOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmCapabilitiesAcknowledgeFlowOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmCapabilitiesAcknowledgeFlowOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmCapabilitiesAcknowledgeFlowOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmCapabilitiesAcknowledgeFlowOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmCapabilitiesAcknowledgeFlowOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmCapabilitiesAcknowledgeFlowOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmCapabilitiesAcknowledgeFlowOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmCapabilitiesAcknowledgeFlowOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmCapabilitiesAcknowledgeFlowOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmCapabilitiesAcknowledgeFlowOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmCapabilitiesAcknowledgeFlowOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmCapabilitiesAcknowledgeFlowOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmCapabilitiesAcknowledgeFlowOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmCapabilitiesAcknowledgeFlowOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmCapabilitiesAcknowledgeFlowOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmCapabilitiesAcknowledgeFlowOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmCapabilitiesAcknowledgeFlowOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmCapabilitiesAcknowledgeFlowOutputReference.property.enabled">Enabled</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmCapabilitiesAcknowledgeFlowOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmCapabilitiesAcknowledgeFlow">DataAwsccIoteventsAlarmModelAlarmCapabilitiesAcknowledgeFlow</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmCapabilitiesAcknowledgeFlowOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmCapabilitiesAcknowledgeFlowOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmCapabilitiesAcknowledgeFlowOutputReference.property.enabled"></a>

```go
func Enabled() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmCapabilitiesAcknowledgeFlowOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccIoteventsAlarmModelAlarmCapabilitiesAcknowledgeFlow
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmCapabilitiesAcknowledgeFlow">DataAwsccIoteventsAlarmModelAlarmCapabilitiesAcknowledgeFlow</a>

---


### DataAwsccIoteventsAlarmModelAlarmCapabilitiesInitializationConfigurationOutputReference <a name="DataAwsccIoteventsAlarmModelAlarmCapabilitiesInitializationConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmCapabilitiesInitializationConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmCapabilitiesInitializationConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccioteventsalarmmodel"

dataawsccioteventsalarmmodel.NewDataAwsccIoteventsAlarmModelAlarmCapabilitiesInitializationConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccIoteventsAlarmModelAlarmCapabilitiesInitializationConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmCapabilitiesInitializationConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmCapabilitiesInitializationConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmCapabilitiesInitializationConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmCapabilitiesInitializationConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmCapabilitiesInitializationConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmCapabilitiesInitializationConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmCapabilitiesInitializationConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmCapabilitiesInitializationConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmCapabilitiesInitializationConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmCapabilitiesInitializationConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmCapabilitiesInitializationConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmCapabilitiesInitializationConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmCapabilitiesInitializationConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmCapabilitiesInitializationConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmCapabilitiesInitializationConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmCapabilitiesInitializationConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmCapabilitiesInitializationConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmCapabilitiesInitializationConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmCapabilitiesInitializationConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmCapabilitiesInitializationConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmCapabilitiesInitializationConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmCapabilitiesInitializationConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmCapabilitiesInitializationConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmCapabilitiesInitializationConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmCapabilitiesInitializationConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmCapabilitiesInitializationConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmCapabilitiesInitializationConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmCapabilitiesInitializationConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmCapabilitiesInitializationConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmCapabilitiesInitializationConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmCapabilitiesInitializationConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmCapabilitiesInitializationConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmCapabilitiesInitializationConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmCapabilitiesInitializationConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmCapabilitiesInitializationConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmCapabilitiesInitializationConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmCapabilitiesInitializationConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmCapabilitiesInitializationConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmCapabilitiesInitializationConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmCapabilitiesInitializationConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmCapabilitiesInitializationConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmCapabilitiesInitializationConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmCapabilitiesInitializationConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmCapabilitiesInitializationConfigurationOutputReference.property.disabledOnInitialization">DisabledOnInitialization</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmCapabilitiesInitializationConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmCapabilitiesInitializationConfiguration">DataAwsccIoteventsAlarmModelAlarmCapabilitiesInitializationConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmCapabilitiesInitializationConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmCapabilitiesInitializationConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DisabledOnInitialization`<sup>Required</sup> <a name="DisabledOnInitialization" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmCapabilitiesInitializationConfigurationOutputReference.property.disabledOnInitialization"></a>

```go
func DisabledOnInitialization() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmCapabilitiesInitializationConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccIoteventsAlarmModelAlarmCapabilitiesInitializationConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmCapabilitiesInitializationConfiguration">DataAwsccIoteventsAlarmModelAlarmCapabilitiesInitializationConfiguration</a>

---


### DataAwsccIoteventsAlarmModelAlarmCapabilitiesOutputReference <a name="DataAwsccIoteventsAlarmModelAlarmCapabilitiesOutputReference" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmCapabilitiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmCapabilitiesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccioteventsalarmmodel"

dataawsccioteventsalarmmodel.NewDataAwsccIoteventsAlarmModelAlarmCapabilitiesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccIoteventsAlarmModelAlarmCapabilitiesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmCapabilitiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmCapabilitiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmCapabilitiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmCapabilitiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmCapabilitiesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmCapabilitiesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmCapabilitiesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmCapabilitiesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmCapabilitiesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmCapabilitiesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmCapabilitiesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmCapabilitiesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmCapabilitiesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmCapabilitiesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmCapabilitiesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmCapabilitiesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmCapabilitiesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmCapabilitiesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmCapabilitiesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmCapabilitiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmCapabilitiesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmCapabilitiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmCapabilitiesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmCapabilitiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmCapabilitiesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmCapabilitiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmCapabilitiesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmCapabilitiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmCapabilitiesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmCapabilitiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmCapabilitiesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmCapabilitiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmCapabilitiesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmCapabilitiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmCapabilitiesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmCapabilitiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmCapabilitiesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmCapabilitiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmCapabilitiesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmCapabilitiesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmCapabilitiesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmCapabilitiesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmCapabilitiesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmCapabilitiesOutputReference.property.acknowledgeFlow">AcknowledgeFlow</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmCapabilitiesAcknowledgeFlowOutputReference">DataAwsccIoteventsAlarmModelAlarmCapabilitiesAcknowledgeFlowOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmCapabilitiesOutputReference.property.initializationConfiguration">InitializationConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmCapabilitiesInitializationConfigurationOutputReference">DataAwsccIoteventsAlarmModelAlarmCapabilitiesInitializationConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmCapabilitiesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmCapabilities">DataAwsccIoteventsAlarmModelAlarmCapabilities</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmCapabilitiesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmCapabilitiesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AcknowledgeFlow`<sup>Required</sup> <a name="AcknowledgeFlow" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmCapabilitiesOutputReference.property.acknowledgeFlow"></a>

```go
func AcknowledgeFlow() DataAwsccIoteventsAlarmModelAlarmCapabilitiesAcknowledgeFlowOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmCapabilitiesAcknowledgeFlowOutputReference">DataAwsccIoteventsAlarmModelAlarmCapabilitiesAcknowledgeFlowOutputReference</a>

---

##### `InitializationConfiguration`<sup>Required</sup> <a name="InitializationConfiguration" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmCapabilitiesOutputReference.property.initializationConfiguration"></a>

```go
func InitializationConfiguration() DataAwsccIoteventsAlarmModelAlarmCapabilitiesInitializationConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmCapabilitiesInitializationConfigurationOutputReference">DataAwsccIoteventsAlarmModelAlarmCapabilitiesInitializationConfigurationOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmCapabilitiesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccIoteventsAlarmModelAlarmCapabilities
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmCapabilities">DataAwsccIoteventsAlarmModelAlarmCapabilities</a>

---


### DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference <a name="DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccioteventsalarmmodel"

dataawsccioteventsalarmmodel.NewDataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.property.hashKeyField">HashKeyField</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.property.hashKeyType">HashKeyType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.property.hashKeyValue">HashKeyValue</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.property.operation">Operation</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.property.payload">Payload</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayloadOutputReference">DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayloadOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.property.payloadField">PayloadField</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.property.rangeKeyField">RangeKeyField</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.property.rangeKeyType">RangeKeyType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.property.rangeKeyValue">RangeKeyValue</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.property.tableName">TableName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDb">DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDb</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `HashKeyField`<sup>Required</sup> <a name="HashKeyField" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.property.hashKeyField"></a>

```go
func HashKeyField() *string
```

- *Type:* *string

---

##### `HashKeyType`<sup>Required</sup> <a name="HashKeyType" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.property.hashKeyType"></a>

```go
func HashKeyType() *string
```

- *Type:* *string

---

##### `HashKeyValue`<sup>Required</sup> <a name="HashKeyValue" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.property.hashKeyValue"></a>

```go
func HashKeyValue() *string
```

- *Type:* *string

---

##### `Operation`<sup>Required</sup> <a name="Operation" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.property.operation"></a>

```go
func Operation() *string
```

- *Type:* *string

---

##### `Payload`<sup>Required</sup> <a name="Payload" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.property.payload"></a>

```go
func Payload() DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayloadOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayloadOutputReference">DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayloadOutputReference</a>

---

##### `PayloadField`<sup>Required</sup> <a name="PayloadField" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.property.payloadField"></a>

```go
func PayloadField() *string
```

- *Type:* *string

---

##### `RangeKeyField`<sup>Required</sup> <a name="RangeKeyField" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.property.rangeKeyField"></a>

```go
func RangeKeyField() *string
```

- *Type:* *string

---

##### `RangeKeyType`<sup>Required</sup> <a name="RangeKeyType" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.property.rangeKeyType"></a>

```go
func RangeKeyType() *string
```

- *Type:* *string

---

##### `RangeKeyValue`<sup>Required</sup> <a name="RangeKeyValue" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.property.rangeKeyValue"></a>

```go
func RangeKeyValue() *string
```

- *Type:* *string

---

##### `TableName`<sup>Required</sup> <a name="TableName" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.property.tableName"></a>

```go
func TableName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDb
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDb">DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDb</a>

---


### DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayloadOutputReference <a name="DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayloadOutputReference" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayloadOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayloadOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccioteventsalarmmodel"

dataawsccioteventsalarmmodel.NewDataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayloadOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayloadOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayloadOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayloadOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayloadOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayloadOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayloadOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayloadOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayloadOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayloadOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayloadOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayloadOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayloadOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayloadOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayloadOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayloadOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayloadOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayloadOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayloadOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayloadOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayloadOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayloadOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayloadOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayloadOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayloadOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayloadOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayloadOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayloadOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayloadOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayloadOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayloadOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayloadOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayloadOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayloadOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayloadOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayloadOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayloadOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayloadOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayloadOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayloadOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayloadOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayloadOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayloadOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayloadOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayloadOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayloadOutputReference.property.contentExpression">ContentExpression</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayloadOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayloadOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayload">DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayload</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayloadOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayloadOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ContentExpression`<sup>Required</sup> <a name="ContentExpression" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayloadOutputReference.property.contentExpression"></a>

```go
func ContentExpression() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayloadOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayloadOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayload
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayload">DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayload</a>

---


### DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2OutputReference <a name="DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2OutputReference" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2OutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccioteventsalarmmodel"

dataawsccioteventsalarmmodel.NewDataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2OutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2OutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2OutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2OutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2OutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2OutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2OutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2OutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2OutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2OutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2OutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2OutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2OutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2OutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2OutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2OutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2OutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2OutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2OutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2OutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2OutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2OutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2OutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2OutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2OutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2OutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2OutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2OutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2OutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2OutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2OutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2OutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2OutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2OutputReference.property.payload">Payload</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2PayloadOutputReference">DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2PayloadOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2OutputReference.property.tableName">TableName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2OutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2">DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2OutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2OutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Payload`<sup>Required</sup> <a name="Payload" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2OutputReference.property.payload"></a>

```go
func Payload() DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2PayloadOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2PayloadOutputReference">DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2PayloadOutputReference</a>

---

##### `TableName`<sup>Required</sup> <a name="TableName" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2OutputReference.property.tableName"></a>

```go
func TableName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2OutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2">DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2</a>

---


### DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2PayloadOutputReference <a name="DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2PayloadOutputReference" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2PayloadOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2PayloadOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccioteventsalarmmodel"

dataawsccioteventsalarmmodel.NewDataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2PayloadOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2PayloadOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2PayloadOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2PayloadOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2PayloadOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2PayloadOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2PayloadOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2PayloadOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2PayloadOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2PayloadOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2PayloadOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2PayloadOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2PayloadOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2PayloadOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2PayloadOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2PayloadOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2PayloadOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2PayloadOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2PayloadOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2PayloadOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2PayloadOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2PayloadOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2PayloadOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2PayloadOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2PayloadOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2PayloadOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2PayloadOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2PayloadOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2PayloadOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2PayloadOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2PayloadOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2PayloadOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2PayloadOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2PayloadOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2PayloadOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2PayloadOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2PayloadOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2PayloadOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2PayloadOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2PayloadOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2PayloadOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2PayloadOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2PayloadOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2PayloadOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2PayloadOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2PayloadOutputReference.property.contentExpression">ContentExpression</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2PayloadOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2PayloadOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2Payload">DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2Payload</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2PayloadOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2PayloadOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ContentExpression`<sup>Required</sup> <a name="ContentExpression" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2PayloadOutputReference.property.contentExpression"></a>

```go
func ContentExpression() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2PayloadOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2PayloadOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2Payload
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2Payload">DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2Payload</a>

---


### DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsFirehoseOutputReference <a name="DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsFirehoseOutputReference" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsFirehoseOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsFirehoseOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccioteventsalarmmodel"

dataawsccioteventsalarmmodel.NewDataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsFirehoseOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsFirehoseOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsFirehoseOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsFirehoseOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsFirehoseOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsFirehoseOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsFirehoseOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsFirehoseOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsFirehoseOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsFirehoseOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsFirehoseOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsFirehoseOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsFirehoseOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsFirehoseOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsFirehoseOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsFirehoseOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsFirehoseOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsFirehoseOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsFirehoseOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsFirehoseOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsFirehoseOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsFirehoseOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsFirehoseOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsFirehoseOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsFirehoseOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsFirehoseOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsFirehoseOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsFirehoseOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsFirehoseOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsFirehoseOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsFirehoseOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsFirehoseOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsFirehoseOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsFirehoseOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsFirehoseOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsFirehoseOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsFirehoseOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsFirehoseOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsFirehoseOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsFirehoseOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsFirehoseOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsFirehoseOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsFirehoseOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsFirehoseOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsFirehoseOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsFirehoseOutputReference.property.deliveryStreamName">DeliveryStreamName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsFirehoseOutputReference.property.payload">Payload</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayloadOutputReference">DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayloadOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsFirehoseOutputReference.property.separator">Separator</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsFirehoseOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsFirehose">DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsFirehose</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsFirehoseOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsFirehoseOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DeliveryStreamName`<sup>Required</sup> <a name="DeliveryStreamName" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsFirehoseOutputReference.property.deliveryStreamName"></a>

```go
func DeliveryStreamName() *string
```

- *Type:* *string

---

##### `Payload`<sup>Required</sup> <a name="Payload" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsFirehoseOutputReference.property.payload"></a>

```go
func Payload() DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayloadOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayloadOutputReference">DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayloadOutputReference</a>

---

##### `Separator`<sup>Required</sup> <a name="Separator" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsFirehoseOutputReference.property.separator"></a>

```go
func Separator() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsFirehoseOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsFirehose
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsFirehose">DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsFirehose</a>

---


### DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayloadOutputReference <a name="DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayloadOutputReference" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayloadOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayloadOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccioteventsalarmmodel"

dataawsccioteventsalarmmodel.NewDataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayloadOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayloadOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayloadOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayloadOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayloadOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayloadOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayloadOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayloadOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayloadOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayloadOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayloadOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayloadOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayloadOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayloadOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayloadOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayloadOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayloadOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayloadOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayloadOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayloadOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayloadOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayloadOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayloadOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayloadOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayloadOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayloadOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayloadOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayloadOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayloadOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayloadOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayloadOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayloadOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayloadOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayloadOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayloadOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayloadOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayloadOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayloadOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayloadOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayloadOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayloadOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayloadOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayloadOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayloadOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayloadOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayloadOutputReference.property.contentExpression">ContentExpression</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayloadOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayloadOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayload">DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayload</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayloadOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayloadOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ContentExpression`<sup>Required</sup> <a name="ContentExpression" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayloadOutputReference.property.contentExpression"></a>

```go
func ContentExpression() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayloadOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayloadOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayload
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayload">DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsFirehosePayload</a>

---


### DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsOutputReference <a name="DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsOutputReference" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccioteventsalarmmodel"

dataawsccioteventsalarmmodel.NewDataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsOutputReference.property.inputName">InputName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsOutputReference.property.payload">Payload</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayloadOutputReference">DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayloadOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotEvents">DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotEvents</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InputName`<sup>Required</sup> <a name="InputName" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsOutputReference.property.inputName"></a>

```go
func InputName() *string
```

- *Type:* *string

---

##### `Payload`<sup>Required</sup> <a name="Payload" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsOutputReference.property.payload"></a>

```go
func Payload() DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayloadOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayloadOutputReference">DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayloadOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotEvents
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotEvents">DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotEvents</a>

---


### DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayloadOutputReference <a name="DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayloadOutputReference" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayloadOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayloadOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccioteventsalarmmodel"

dataawsccioteventsalarmmodel.NewDataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayloadOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayloadOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayloadOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayloadOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayloadOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayloadOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayloadOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayloadOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayloadOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayloadOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayloadOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayloadOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayloadOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayloadOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayloadOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayloadOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayloadOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayloadOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayloadOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayloadOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayloadOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayloadOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayloadOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayloadOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayloadOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayloadOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayloadOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayloadOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayloadOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayloadOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayloadOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayloadOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayloadOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayloadOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayloadOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayloadOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayloadOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayloadOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayloadOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayloadOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayloadOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayloadOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayloadOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayloadOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayloadOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayloadOutputReference.property.contentExpression">ContentExpression</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayloadOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayloadOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayload">DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayload</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayloadOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayloadOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ContentExpression`<sup>Required</sup> <a name="ContentExpression" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayloadOutputReference.property.contentExpression"></a>

```go
func ContentExpression() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayloadOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayloadOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayload
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayload">DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsPayload</a>

---


### DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWiseOutputReference <a name="DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWiseOutputReference" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWiseOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWiseOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccioteventsalarmmodel"

dataawsccioteventsalarmmodel.NewDataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWiseOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWiseOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWiseOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWiseOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWiseOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWiseOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWiseOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWiseOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWiseOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWiseOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWiseOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWiseOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWiseOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWiseOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWiseOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWiseOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWiseOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWiseOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWiseOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWiseOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWiseOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWiseOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWiseOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWiseOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWiseOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWiseOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWiseOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWiseOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWiseOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWiseOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWiseOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWiseOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWiseOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWiseOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWiseOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWiseOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWiseOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWiseOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWiseOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWiseOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWiseOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWiseOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWiseOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWiseOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWiseOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWiseOutputReference.property.assetId">AssetId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWiseOutputReference.property.entryId">EntryId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWiseOutputReference.property.propertyAlias">PropertyAlias</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWiseOutputReference.property.propertyId">PropertyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWiseOutputReference.property.propertyValue">PropertyValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueOutputReference">DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWiseOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWise">DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWise</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWiseOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWiseOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AssetId`<sup>Required</sup> <a name="AssetId" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWiseOutputReference.property.assetId"></a>

```go
func AssetId() *string
```

- *Type:* *string

---

##### `EntryId`<sup>Required</sup> <a name="EntryId" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWiseOutputReference.property.entryId"></a>

```go
func EntryId() *string
```

- *Type:* *string

---

##### `PropertyAlias`<sup>Required</sup> <a name="PropertyAlias" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWiseOutputReference.property.propertyAlias"></a>

```go
func PropertyAlias() *string
```

- *Type:* *string

---

##### `PropertyId`<sup>Required</sup> <a name="PropertyId" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWiseOutputReference.property.propertyId"></a>

```go
func PropertyId() *string
```

- *Type:* *string

---

##### `PropertyValue`<sup>Required</sup> <a name="PropertyValue" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWiseOutputReference.property.propertyValue"></a>

```go
func PropertyValue() DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueOutputReference">DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWiseOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWise
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWise">DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWise</a>

---


### DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueOutputReference <a name="DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueOutputReference" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccioteventsalarmmodel"

dataawsccioteventsalarmmodel.NewDataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueOutputReference.property.quality">Quality</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueOutputReference.property.timestamp">Timestamp</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestampOutputReference">DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestampOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueOutputReference.property.value">Value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValueOutputReference">DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValueOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValue">DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValue</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Quality`<sup>Required</sup> <a name="Quality" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueOutputReference.property.quality"></a>

```go
func Quality() *string
```

- *Type:* *string

---

##### `Timestamp`<sup>Required</sup> <a name="Timestamp" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueOutputReference.property.timestamp"></a>

```go
func Timestamp() DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestampOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestampOutputReference">DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestampOutputReference</a>

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueOutputReference.property.value"></a>

```go
func Value() DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValueOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValueOutputReference">DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValueOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValue
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValue">DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValue</a>

---


### DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestampOutputReference <a name="DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestampOutputReference" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestampOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestampOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccioteventsalarmmodel"

dataawsccioteventsalarmmodel.NewDataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestampOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestampOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestampOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestampOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestampOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestampOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestampOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestampOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestampOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestampOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestampOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestampOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestampOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestampOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestampOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestampOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestampOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestampOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestampOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestampOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestampOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestampOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestampOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestampOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestampOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestampOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestampOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestampOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestampOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestampOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestampOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestampOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestampOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestampOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestampOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestampOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestampOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestampOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestampOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestampOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestampOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestampOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestampOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestampOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestampOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestampOutputReference.property.offsetInNanos">OffsetInNanos</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestampOutputReference.property.timeInSeconds">TimeInSeconds</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestampOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestamp">DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestamp</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestampOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestampOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `OffsetInNanos`<sup>Required</sup> <a name="OffsetInNanos" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestampOutputReference.property.offsetInNanos"></a>

```go
func OffsetInNanos() *string
```

- *Type:* *string

---

##### `TimeInSeconds`<sup>Required</sup> <a name="TimeInSeconds" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestampOutputReference.property.timeInSeconds"></a>

```go
func TimeInSeconds() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestampOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestamp
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestamp">DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueTimestamp</a>

---


### DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValueOutputReference <a name="DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValueOutputReference" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValueOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValueOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccioteventsalarmmodel"

dataawsccioteventsalarmmodel.NewDataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValueOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValueOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValueOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValueOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValueOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValueOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValueOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValueOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValueOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValueOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValueOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValueOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValueOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValueOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValueOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValueOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValueOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValueOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValueOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValueOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValueOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValueOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValueOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValueOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValueOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValueOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValueOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValueOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValueOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValueOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValueOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValueOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValueOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValueOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValueOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValueOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValueOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValueOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValueOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValueOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValueOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValueOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValueOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValueOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValueOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValueOutputReference.property.booleanValue">BooleanValue</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValueOutputReference.property.doubleValue">DoubleValue</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValueOutputReference.property.integerValue">IntegerValue</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValueOutputReference.property.stringValue">StringValue</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValueOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValue">DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValue</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValueOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValueOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BooleanValue`<sup>Required</sup> <a name="BooleanValue" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValueOutputReference.property.booleanValue"></a>

```go
func BooleanValue() *string
```

- *Type:* *string

---

##### `DoubleValue`<sup>Required</sup> <a name="DoubleValue" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValueOutputReference.property.doubleValue"></a>

```go
func DoubleValue() *string
```

- *Type:* *string

---

##### `IntegerValue`<sup>Required</sup> <a name="IntegerValue" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValueOutputReference.property.integerValue"></a>

```go
func IntegerValue() *string
```

- *Type:* *string

---

##### `StringValue`<sup>Required</sup> <a name="StringValue" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValueOutputReference.property.stringValue"></a>

```go
func StringValue() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValueOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValue
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValue">DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWisePropertyValueValue</a>

---


### DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishOutputReference <a name="DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishOutputReference" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccioteventsalarmmodel"

dataawsccioteventsalarmmodel.NewDataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishOutputReference.property.mqttTopic">MqttTopic</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishOutputReference.property.payload">Payload</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayloadOutputReference">DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayloadOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublish">DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublish</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MqttTopic`<sup>Required</sup> <a name="MqttTopic" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishOutputReference.property.mqttTopic"></a>

```go
func MqttTopic() *string
```

- *Type:* *string

---

##### `Payload`<sup>Required</sup> <a name="Payload" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishOutputReference.property.payload"></a>

```go
func Payload() DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayloadOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayloadOutputReference">DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayloadOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublish
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublish">DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublish</a>

---


### DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayloadOutputReference <a name="DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayloadOutputReference" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayloadOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayloadOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccioteventsalarmmodel"

dataawsccioteventsalarmmodel.NewDataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayloadOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayloadOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayloadOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayloadOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayloadOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayloadOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayloadOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayloadOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayloadOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayloadOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayloadOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayloadOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayloadOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayloadOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayloadOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayloadOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayloadOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayloadOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayloadOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayloadOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayloadOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayloadOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayloadOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayloadOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayloadOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayloadOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayloadOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayloadOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayloadOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayloadOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayloadOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayloadOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayloadOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayloadOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayloadOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayloadOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayloadOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayloadOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayloadOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayloadOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayloadOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayloadOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayloadOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayloadOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayloadOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayloadOutputReference.property.contentExpression">ContentExpression</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayloadOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayloadOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayload">DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayload</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayloadOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayloadOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ContentExpression`<sup>Required</sup> <a name="ContentExpression" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayloadOutputReference.property.contentExpression"></a>

```go
func ContentExpression() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayloadOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayloadOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayload
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayload">DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayload</a>

---


### DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaOutputReference <a name="DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaOutputReference" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccioteventsalarmmodel"

dataawsccioteventsalarmmodel.NewDataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaOutputReference.property.functionArn">FunctionArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaOutputReference.property.payload">Payload</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayloadOutputReference">DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayloadOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsLambda">DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsLambda</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FunctionArn`<sup>Required</sup> <a name="FunctionArn" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaOutputReference.property.functionArn"></a>

```go
func FunctionArn() *string
```

- *Type:* *string

---

##### `Payload`<sup>Required</sup> <a name="Payload" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaOutputReference.property.payload"></a>

```go
func Payload() DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayloadOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayloadOutputReference">DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayloadOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsLambda
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsLambda">DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsLambda</a>

---


### DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayloadOutputReference <a name="DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayloadOutputReference" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayloadOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayloadOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccioteventsalarmmodel"

dataawsccioteventsalarmmodel.NewDataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayloadOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayloadOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayloadOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayloadOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayloadOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayloadOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayloadOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayloadOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayloadOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayloadOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayloadOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayloadOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayloadOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayloadOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayloadOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayloadOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayloadOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayloadOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayloadOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayloadOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayloadOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayloadOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayloadOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayloadOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayloadOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayloadOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayloadOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayloadOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayloadOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayloadOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayloadOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayloadOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayloadOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayloadOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayloadOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayloadOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayloadOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayloadOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayloadOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayloadOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayloadOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayloadOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayloadOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayloadOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayloadOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayloadOutputReference.property.contentExpression">ContentExpression</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayloadOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayloadOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayload">DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayload</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayloadOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayloadOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ContentExpression`<sup>Required</sup> <a name="ContentExpression" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayloadOutputReference.property.contentExpression"></a>

```go
func ContentExpression() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayloadOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayloadOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayload
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayload">DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaPayload</a>

---


### DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsList <a name="DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsList" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccioteventsalarmmodel"

dataawsccioteventsalarmmodel.NewDataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsList.get"></a>

```go
func Get(index *f64) DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference <a name="DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccioteventsalarmmodel"

dataawsccioteventsalarmmodel.NewDataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.property.dynamoDb">DynamoDb</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference">DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.property.dynamoDBv2">DynamoDBv2</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2OutputReference">DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2OutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.property.firehose">Firehose</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsFirehoseOutputReference">DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsFirehoseOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.property.iotEvents">IotEvents</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsOutputReference">DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.property.iotSiteWise">IotSiteWise</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWiseOutputReference">DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWiseOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.property.iotTopicPublish">IotTopicPublish</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishOutputReference">DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.property.lambda">Lambda</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaOutputReference">DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.property.sns">Sns</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsSnsOutputReference">DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsSnsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.property.sqs">Sqs</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsSqsOutputReference">DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsSqsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActions">DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DynamoDb`<sup>Required</sup> <a name="DynamoDb" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.property.dynamoDb"></a>

```go
func DynamoDb() DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference">DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDbOutputReference</a>

---

##### `DynamoDBv2`<sup>Required</sup> <a name="DynamoDBv2" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.property.dynamoDBv2"></a>

```go
func DynamoDBv2() DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2OutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2OutputReference">DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsDynamoDBv2OutputReference</a>

---

##### `Firehose`<sup>Required</sup> <a name="Firehose" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.property.firehose"></a>

```go
func Firehose() DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsFirehoseOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsFirehoseOutputReference">DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsFirehoseOutputReference</a>

---

##### `IotEvents`<sup>Required</sup> <a name="IotEvents" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.property.iotEvents"></a>

```go
func IotEvents() DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsOutputReference">DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotEventsOutputReference</a>

---

##### `IotSiteWise`<sup>Required</sup> <a name="IotSiteWise" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.property.iotSiteWise"></a>

```go
func IotSiteWise() DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWiseOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWiseOutputReference">DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotSiteWiseOutputReference</a>

---

##### `IotTopicPublish`<sup>Required</sup> <a name="IotTopicPublish" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.property.iotTopicPublish"></a>

```go
func IotTopicPublish() DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishOutputReference">DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishOutputReference</a>

---

##### `Lambda`<sup>Required</sup> <a name="Lambda" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.property.lambda"></a>

```go
func Lambda() DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaOutputReference">DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsLambdaOutputReference</a>

---

##### `Sns`<sup>Required</sup> <a name="Sns" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.property.sns"></a>

```go
func Sns() DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsSnsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsSnsOutputReference">DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsSnsOutputReference</a>

---

##### `Sqs`<sup>Required</sup> <a name="Sqs" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.property.sqs"></a>

```go
func Sqs() DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsSqsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsSqsOutputReference">DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsSqsOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActions
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActions">DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActions</a>

---


### DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsSnsOutputReference <a name="DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsSnsOutputReference" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsSnsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsSnsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccioteventsalarmmodel"

dataawsccioteventsalarmmodel.NewDataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsSnsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsSnsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsSnsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsSnsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsSnsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsSnsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsSnsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsSnsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsSnsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsSnsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsSnsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsSnsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsSnsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsSnsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsSnsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsSnsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsSnsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsSnsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsSnsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsSnsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsSnsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsSnsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsSnsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsSnsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsSnsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsSnsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsSnsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsSnsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsSnsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsSnsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsSnsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsSnsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsSnsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsSnsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsSnsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsSnsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsSnsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsSnsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsSnsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsSnsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsSnsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsSnsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsSnsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsSnsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsSnsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsSnsOutputReference.property.payload">Payload</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayloadOutputReference">DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayloadOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsSnsOutputReference.property.targetArn">TargetArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsSnsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsSns">DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsSns</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsSnsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsSnsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Payload`<sup>Required</sup> <a name="Payload" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsSnsOutputReference.property.payload"></a>

```go
func Payload() DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayloadOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayloadOutputReference">DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayloadOutputReference</a>

---

##### `TargetArn`<sup>Required</sup> <a name="TargetArn" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsSnsOutputReference.property.targetArn"></a>

```go
func TargetArn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsSnsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsSns
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsSns">DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsSns</a>

---


### DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayloadOutputReference <a name="DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayloadOutputReference" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayloadOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayloadOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccioteventsalarmmodel"

dataawsccioteventsalarmmodel.NewDataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayloadOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayloadOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayloadOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayloadOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayloadOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayloadOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayloadOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayloadOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayloadOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayloadOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayloadOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayloadOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayloadOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayloadOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayloadOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayloadOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayloadOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayloadOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayloadOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayloadOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayloadOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayloadOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayloadOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayloadOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayloadOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayloadOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayloadOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayloadOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayloadOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayloadOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayloadOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayloadOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayloadOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayloadOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayloadOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayloadOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayloadOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayloadOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayloadOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayloadOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayloadOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayloadOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayloadOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayloadOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayloadOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayloadOutputReference.property.contentExpression">ContentExpression</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayloadOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayloadOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayload">DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayload</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayloadOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayloadOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ContentExpression`<sup>Required</sup> <a name="ContentExpression" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayloadOutputReference.property.contentExpression"></a>

```go
func ContentExpression() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayloadOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayloadOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayload
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayload">DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsSnsPayload</a>

---


### DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsSqsOutputReference <a name="DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsSqsOutputReference" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsSqsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsSqsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccioteventsalarmmodel"

dataawsccioteventsalarmmodel.NewDataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsSqsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsSqsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsSqsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsSqsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsSqsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsSqsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsSqsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsSqsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsSqsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsSqsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsSqsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsSqsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsSqsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsSqsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsSqsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsSqsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsSqsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsSqsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsSqsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsSqsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsSqsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsSqsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsSqsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsSqsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsSqsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsSqsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsSqsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsSqsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsSqsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsSqsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsSqsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsSqsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsSqsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsSqsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsSqsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsSqsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsSqsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsSqsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsSqsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsSqsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsSqsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsSqsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsSqsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsSqsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsSqsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsSqsOutputReference.property.payload">Payload</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayloadOutputReference">DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayloadOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsSqsOutputReference.property.queueUrl">QueueUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsSqsOutputReference.property.useBase64">UseBase64</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsSqsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsSqs">DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsSqs</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsSqsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsSqsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Payload`<sup>Required</sup> <a name="Payload" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsSqsOutputReference.property.payload"></a>

```go
func Payload() DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayloadOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayloadOutputReference">DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayloadOutputReference</a>

---

##### `QueueUrl`<sup>Required</sup> <a name="QueueUrl" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsSqsOutputReference.property.queueUrl"></a>

```go
func QueueUrl() *string
```

- *Type:* *string

---

##### `UseBase64`<sup>Required</sup> <a name="UseBase64" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsSqsOutputReference.property.useBase64"></a>

```go
func UseBase64() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsSqsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsSqs
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsSqs">DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsSqs</a>

---


### DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayloadOutputReference <a name="DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayloadOutputReference" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayloadOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayloadOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccioteventsalarmmodel"

dataawsccioteventsalarmmodel.NewDataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayloadOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayloadOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayloadOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayloadOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayloadOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayloadOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayloadOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayloadOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayloadOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayloadOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayloadOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayloadOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayloadOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayloadOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayloadOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayloadOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayloadOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayloadOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayloadOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayloadOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayloadOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayloadOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayloadOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayloadOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayloadOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayloadOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayloadOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayloadOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayloadOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayloadOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayloadOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayloadOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayloadOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayloadOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayloadOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayloadOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayloadOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayloadOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayloadOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayloadOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayloadOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayloadOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayloadOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayloadOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayloadOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayloadOutputReference.property.contentExpression">ContentExpression</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayloadOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayloadOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayload">DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayload</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayloadOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayloadOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ContentExpression`<sup>Required</sup> <a name="ContentExpression" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayloadOutputReference.property.contentExpression"></a>

```go
func ContentExpression() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayloadOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayloadOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayload
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayload">DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsSqsPayload</a>

---


### DataAwsccIoteventsAlarmModelAlarmEventActionsOutputReference <a name="DataAwsccIoteventsAlarmModelAlarmEventActionsOutputReference" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccioteventsalarmmodel"

dataawsccioteventsalarmmodel.NewDataAwsccIoteventsAlarmModelAlarmEventActionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccIoteventsAlarmModelAlarmEventActionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsOutputReference.property.alarmActions">AlarmActions</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsList">DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActions">DataAwsccIoteventsAlarmModelAlarmEventActions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AlarmActions`<sup>Required</sup> <a name="AlarmActions" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsOutputReference.property.alarmActions"></a>

```go
func AlarmActions() DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsList">DataAwsccIoteventsAlarmModelAlarmEventActionsAlarmActionsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActionsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccIoteventsAlarmModelAlarmEventActions
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmEventActions">DataAwsccIoteventsAlarmModelAlarmEventActions</a>

---


### DataAwsccIoteventsAlarmModelAlarmRuleOutputReference <a name="DataAwsccIoteventsAlarmModelAlarmRuleOutputReference" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmRuleOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccioteventsalarmmodel"

dataawsccioteventsalarmmodel.NewDataAwsccIoteventsAlarmModelAlarmRuleOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccIoteventsAlarmModelAlarmRuleOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmRuleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmRuleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmRuleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmRuleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmRuleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmRuleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmRuleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmRuleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmRuleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmRuleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmRuleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmRuleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmRuleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmRuleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmRuleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmRuleOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmRuleOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmRuleOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmRuleOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmRuleOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmRuleOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmRuleOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmRuleOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmRuleOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmRuleOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmRuleOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmRuleOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmRuleOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmRuleOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmRuleOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmRuleOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmRuleOutputReference.property.simpleRule">SimpleRule</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmRuleSimpleRuleOutputReference">DataAwsccIoteventsAlarmModelAlarmRuleSimpleRuleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmRuleOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmRule">DataAwsccIoteventsAlarmModelAlarmRule</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmRuleOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmRuleOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `SimpleRule`<sup>Required</sup> <a name="SimpleRule" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmRuleOutputReference.property.simpleRule"></a>

```go
func SimpleRule() DataAwsccIoteventsAlarmModelAlarmRuleSimpleRuleOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmRuleSimpleRuleOutputReference">DataAwsccIoteventsAlarmModelAlarmRuleSimpleRuleOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmRuleOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccIoteventsAlarmModelAlarmRule
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmRule">DataAwsccIoteventsAlarmModelAlarmRule</a>

---


### DataAwsccIoteventsAlarmModelAlarmRuleSimpleRuleOutputReference <a name="DataAwsccIoteventsAlarmModelAlarmRuleSimpleRuleOutputReference" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmRuleSimpleRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmRuleSimpleRuleOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccioteventsalarmmodel"

dataawsccioteventsalarmmodel.NewDataAwsccIoteventsAlarmModelAlarmRuleSimpleRuleOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccIoteventsAlarmModelAlarmRuleSimpleRuleOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmRuleSimpleRuleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmRuleSimpleRuleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmRuleSimpleRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmRuleSimpleRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmRuleSimpleRuleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmRuleSimpleRuleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmRuleSimpleRuleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmRuleSimpleRuleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmRuleSimpleRuleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmRuleSimpleRuleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmRuleSimpleRuleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmRuleSimpleRuleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmRuleSimpleRuleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmRuleSimpleRuleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmRuleSimpleRuleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmRuleSimpleRuleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmRuleSimpleRuleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmRuleSimpleRuleOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmRuleSimpleRuleOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmRuleSimpleRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmRuleSimpleRuleOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmRuleSimpleRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmRuleSimpleRuleOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmRuleSimpleRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmRuleSimpleRuleOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmRuleSimpleRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmRuleSimpleRuleOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmRuleSimpleRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmRuleSimpleRuleOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmRuleSimpleRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmRuleSimpleRuleOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmRuleSimpleRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmRuleSimpleRuleOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmRuleSimpleRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmRuleSimpleRuleOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmRuleSimpleRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmRuleSimpleRuleOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmRuleSimpleRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmRuleSimpleRuleOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmRuleSimpleRuleOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmRuleSimpleRuleOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmRuleSimpleRuleOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmRuleSimpleRuleOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmRuleSimpleRuleOutputReference.property.comparisonOperator">ComparisonOperator</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmRuleSimpleRuleOutputReference.property.inputProperty">InputProperty</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmRuleSimpleRuleOutputReference.property.threshold">Threshold</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmRuleSimpleRuleOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmRuleSimpleRule">DataAwsccIoteventsAlarmModelAlarmRuleSimpleRule</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmRuleSimpleRuleOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmRuleSimpleRuleOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ComparisonOperator`<sup>Required</sup> <a name="ComparisonOperator" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmRuleSimpleRuleOutputReference.property.comparisonOperator"></a>

```go
func ComparisonOperator() *string
```

- *Type:* *string

---

##### `InputProperty`<sup>Required</sup> <a name="InputProperty" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmRuleSimpleRuleOutputReference.property.inputProperty"></a>

```go
func InputProperty() *string
```

- *Type:* *string

---

##### `Threshold`<sup>Required</sup> <a name="Threshold" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmRuleSimpleRuleOutputReference.property.threshold"></a>

```go
func Threshold() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmRuleSimpleRuleOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccIoteventsAlarmModelAlarmRuleSimpleRule
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelAlarmRuleSimpleRule">DataAwsccIoteventsAlarmModelAlarmRuleSimpleRule</a>

---


### DataAwsccIoteventsAlarmModelTagsList <a name="DataAwsccIoteventsAlarmModelTagsList" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccioteventsalarmmodel"

dataawsccioteventsalarmmodel.NewDataAwsccIoteventsAlarmModelTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccIoteventsAlarmModelTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelTagsList.get"></a>

```go
func Get(index *f64) DataAwsccIoteventsAlarmModelTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccIoteventsAlarmModelTagsOutputReference <a name="DataAwsccIoteventsAlarmModelTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccioteventsalarmmodel"

dataawsccioteventsalarmmodel.NewDataAwsccIoteventsAlarmModelTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccIoteventsAlarmModelTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelTagsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelTags">DataAwsccIoteventsAlarmModelTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccIoteventsAlarmModelTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIoteventsAlarmModel.DataAwsccIoteventsAlarmModelTags">DataAwsccIoteventsAlarmModelTags</a>

---



